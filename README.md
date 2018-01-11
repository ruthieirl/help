# Help!
  <!-- Dependency Status -->
  <a href="https://david-dm.org/ruthieirl/help">
    <img src="https://david-dm.org/ruthieirl/help.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/ruthieirl/help#info=devDependencies">
    <img src="https://david-dm.org/ruthieirl/help/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/ruthieirl/help">
    <img src="https://travis-ci.org/ruthieirl/help.svg" alt="Build Status" />
  </a>
  <!-- License -->
  <a href="http://wjr3.mit-license.org">
    <img src="http://img.shields.io/:license-mit-blue.svg" alt="License" />
  </a>

**Live Demo**:

## Summary
A web based application that provides quick and easy access to Autobody and Repair Shops, Towing Companies, and Emergency resources in your area. Help! is built with love, paitience, and the MERN stack ( MongoDB, Express, React, Node.js).

### Testimonials

> [**“What can I say about Help! that hasn’t already been said about the wheel, penicillin, or the iPhone…. this is one of the greatest inventions of all time. ”**](https://www.snipergangapparel.com/)<br>
> — Larry Ellison

> [**“You know life ain't tied with a bow but it's still a gift though”**](https://www.snipergangapparel.com/)<br>
> — Kodak Black

> [**“I'm using it for a year now and many projects, it's an awesome boilerplate and the project is well maintained!”**](https://www.snipergangapparel.com/)<br>
> — Kevin Granger

Table of Contents
-------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Obtaining API Keys](#obtaining-api-keys)
- [Project Structure](#project-structure)
- [Support](#support)
- [Contributing](#contributing)
- [License](#license)


Prerequisites
-------------

- [MongoDB](https://www.mongodb.org/downloads)
- [Node.js 6.0+](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/ruthieirl/help.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node app.js
```
Technologies
-------

- HTML5
- CSS3
    - Bootstrap
    - Bootswatch
    - FontAwesome
- Javascript
- jQuery
- Moment.js
- AJAX
- Database
    - Firebase
- APIs
    - GoogleMaps API
    - OpenWeatherMap API

Obtaining API Keys
-------

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" width="200">

- Visit <a href="https://cloud.google.com/console/project" target="_blank">Google Cloud Console</a>
- Click on the **Create Project** button
- Enter *Project Name*, then click on **Create** button
- Then click on *APIs & auth* in the sidebar and select *API* tab
- Click on **Google+ API** under *Social APIs*, then click **Enable API**
- Next, under *APIs & auth* in the sidebar click on *Credentials* tab
- Click on **Create new Client ID** button
- Select *Web Application* and click on **Configure Consent Screen**
- Fill out the required fields then click on **Save**
- In the *Create Client ID* modal dialog:
 - **Application Type**: Web Application
 - **Authorized Javascript origins**: http://localhost:3000
 - **Authorized redirect URI**: http://localhost:3000/auth/google/callback
- Click on **Create Client ID** button
- Copy and paste *Client ID* and *Client secret* keys into `.env`

**Note:** When you ready to deploy to production don't forget to
add your new url to *Authorized Javascript origins* and *Authorized redirect URI*,
e.g. `http://my-awesome-app.herokuapp.com` and
`http://my-awesome-app.herokuapp.com/auth/google/callback` respectively.
The same goes for other providers.


Project Structure
-------
```
|-- assets/
|  |-- css/
|     |-- digital-7.ttf                 // Imported Font 
|     |-- style.css                     // Local CSS Styles
|  |-- images/                             
|  |-- js/                             
|     |-- app.js                    // Configures the connection to the database / Methods for Adding / Removing Trains
|     |-- weather.js                // Methods for getting and setting the weather from Open Weather API
| 
| -- index.html                     // Main HTML page with structure
```

Support
-------

Please [open an issue](https://github.com/ruthieirl/help/issues/new) for support.

Contributing
-------

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/ruthieirl/help/compare/).

License
-------

The MIT License (MIT)

Copyright (c) 2017-2018 Ruthie Campiz & William J. Rainaud

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  
