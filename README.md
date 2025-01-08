# newWindowIsDefault
Chrome (v3) extension to make links default to a new window instead of a new tab

This minimalistic extension makes chrome (mostly) tabless by default; to open a link with a tab now requires holding down ctrl.

There already exist a few extensions on the chrome store that attempt something similar, but with much added complexity to cover all edge cases, making them a pain inspect manually before installing. Given the constant dribble of news about malicious extensions I'm not installing anything I can't read first and understand. The code for this extension is less than 20 lines before comments were added, and is extremely straightforward. I suggest you inspect it before installing it!

# Installation 
This is distributed as an unpacked extension to ensure it is easy to see all the code before installing it. To install an unpacked extension go to chrome://extensions/ and click the "load unpacked" button (you may need to enable developer mode). The extension files need to be in a folder by themselves; 

# Some Limitations: a tradeoff for simplicity

* Double-clicked HTML files from your desktop are still opened as tabs. 

* The extension applies to each new page you open after installing it; pages already open will behave as before.

I'm happy to take any suggested "simple" fixes for these as long as the total code remains less than a page long.

