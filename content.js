// this code is applied to every NEWLY opened page after the extension is enabled.

function handleClick(event) { // Define a function to handle click events. This function will be called whenever a click event occurs within the document.
  let target = event.target;   // Get the element that was clicked.

   // The click may have occurred on a child element within an <a> tag, so
  // we need to traverse up the DOM tree until we find the actual <a> tag,
  // or we reach a point where we can't go any higher.
  while (target && target.tagName !== 'A') { target = target.parentElement;  }

  if (target && target.tagName === 'A' && target.href) {   // Check if the element that was clicked (or one of its parents) is an <a> tag, that also has a valid href attribute.
    // Now, we check if this <a> tag should open in a new window:
    // 1. If the <a> tag has an attribute "target='_blank'", it means
    //    that it was intending to be opened in a new tab, so we should
    //    make it open in a new window, unless ctrl is held down
    if (target.target === '_blank' && !event.ctrlKey) {
      event.preventDefault();    //Prevent default link behavior so we can open it in a new window.
      chrome.runtime.sendMessage({ url: target.href }); // Send a message to the background.js script with the URL of the link.
    } // "else" proceed as normal
  }
} // ENDOF handler

//// attach event listener to each newly loaded page (NOTE: this means that when installed or "toggled on" the extension won't apply to already open pages).

// Check if the document's body element already exists.
if (document.body) {
  // If the body exists, we can add a click listener directly to it. This listener
  // will handle the logic to open new links in a new window. By attaching to the body,
  // we are more likely to capture the click before other scripts on the page handle them.
  document.body.addEventListener('click', handleClick, true);
} else { // If the body does not exist yet, the content script is running very early in the page load. In that case we wait for the
    // "DOMContentLoaded" event, which will happen after the full HTML document is loaded.
    document.addEventListener('DOMContentLoaded', () => {
        // Add a click listener to the document's body.
        document.body.addEventListener('click', handleClick, true);
    });
}