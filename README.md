# M19-PWA-Text-Editor



# User Story
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

GIVEN a text editor web application

## Table of Contents 

- [Usage](#usage)
- [Deployment](#deployed-website)
- [Finished Product](#finished-product)
- [Credits](#credits)
- [License](#license)


## Usage
Run `npm i` to install packages needed as seen in package.json
run npm run start:dev  in the command line
Open the Text-Editor  API
 enter the command to invoke the application. 
Open the application in your editor. You should see a client server folder structure. Then run `npm run start` from the root directory
The application should start up the backend and serve the client. Run the text editor application from your terminal to see JavaScript files that have been bundled using webpack
Run my webpack plugins to see the  generated HTML file, service worker, and a manifest file
When you use next-gen JavaScript in my application, you will find that the text editor still functions in the browser without errors.

 Open the text editor to find that IndexedDB has immediately created a database storage
When you enter content and subsequently click off of the DOM window, you will find that the content in the text editor has been saved with IndexedDB
WHEN you reopen the text editor after closing it, you will find that the content in the text editor has been retrieved from the IndexedDB.
To download the web application, click on the Install button to download the web application as an icon on your desktop
When you load the web application, then you  should have a registered service worker using workbox
When register a service worker, you should have the static assets pre cached upon loading along with subsequent pages and static assets
When the application is deployed to Heroku, then  it should have proper build scripts for a webpack application
## Deployed website

To demonstrate the site's functionality, here are the links of the walk through videos: 

[Link to deployed project]()|


## Credits

 Angelica Ibarra




## License
MIT License

Copyright (c) 2022  Angelica Ibarra
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
