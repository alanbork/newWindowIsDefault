chrome.runtime.onMessage.addListener((message) => { // This function listens for messages from the content scripts.
  if (message && message.url) {  // Check if the received message has a URL property.
    try {  // Try to open the URL in a new window using the chrome API.
        chrome.windows.create({ url: message.url, focused: true, type: "normal" });
        console.log("New window created for URL:", message.url);
    } catch (error) {
      console.error("Error creating window:", error);
    }
  }
});