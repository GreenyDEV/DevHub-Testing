# DevHub
DevHub is a proxy hub, mostly meant to be a fast one stop shop for a high speed proxy, using [Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet) and much more!

_Live Website: https://devhub.dariandev.com/_

# How does it work?
Using [Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet), you can proxy sites through a [Bare Server](https://github.com/tomphttp/bare-server-node). Most of DevHub is frontend, the only part of backend is the TOMPHTTP Bare Server.

# Dependencies
These are the dependencies you will need, This includes **[Node.js](https://nodejs.org/), [NPM](https://www.npmjs.com/), And [Git](https://git-scm.com/).**

_This installation is based on Ubuntu 20.04, Please look at other ways for you to install these if you are on another platform of linux._
```sh
# Basic update
sudo apt update

# Installing NodeJS 20.x
# Type "Node -v" before installing this, Having multiple installations can lead to problems.
# https://github.com/nodesource/distributions#debinstall
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

# Installing NPM
sudo apt install npm

# Installing GIT
sudo apt install git-all
```

# DevHub Installation
First, We need to create a folder. The location doesn't matter, This is just the default location.
Next, Just install the main files.
```sh
curl -Lo DevHub.zip https://github.com/justDarian/DevHub/releases/latest/download/DevHub.zip
tar -xzvf DevHub.zip
```

You can also install using git, which is suggested
```sh
git clone https://github.com/justDarian/DevHub.git
```

Now you've setup DevHub!
Run ```node.js index.js``` or ```npm start``` to start DevHub. You may modify the port in ``index.js`` 

# Support
You may get support by joining our [discord](https://dariandev.com/discord)!

# Credits
[Darian](https://github.com/justDarian)

[Zack](https://github.com/komouri)

[Russell2259](https://github.com/Russell2259) 

[Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet)

# License

DevHub® Copyright © 2023

[GNU Public License](https://github.com/justDarian/DevHub/blob/main/LICENSE.md)