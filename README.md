#startApp: The JavaScript Starter Application

> This is a framework to start a organized JS application.

The main tools of this framework are:

* [bower](http://twitter.github.com/bower) - the package management tool
* [grunt](http://gruntjs.com) - the build tool
* [express](http://expressjs.com) - web application framework for node
* [socket.io](http://socket.io) - aims to make realtime apps

## Getting started
startApp is installed and managed via npm, the Node.js package manager.
startApp components is installed and managed via Bower, the package manager for the web.


```shell
npm install -g grunt-cli bower
mkdir "project name"
cd "project name"
git clone https://github.com/gsnunes/startappjs.git .
npm install
bower install
grunt
```

After you can access http://localhost:9001