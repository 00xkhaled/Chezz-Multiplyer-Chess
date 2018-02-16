### My favourite quote :

`` What is the beginning of eternity, the end of time and space, the beginning of every end and the end of every race?  ``

# Chezz Chess

### Chezz chess is a multiplayer 5 minutes  chess game made using Socket.IO

## How to run it ?

#### Requirements

* Mongo DB
* Node JS

#### Run the application

Run Mongo db using :

```
$> mongod
```

or `sudo mongod` depending on your OS =)


Download the node packages and dependecies :
```
$> npm install
```

Run the server:
```
$> node .
```

By this the game should be running on `http://localhost:3000`

## Chezz Chess Project is made out of two parts:

* Client  
    * Socket.io(Socket.IO enables real-time bidirectional event-based communication)
    * HTML5, CSS3, java script , jquery and the awesome bootstrap and font awesome to add the icons


* Server :
    * Handlebars.js for rendering HTML templates
    * Node JS web server
    * Mongo DB as database
    * Express JS as web framework
    * Passport JS for authentication
    * Socket.io


## Features of this Project :

* Multiplayer game that consists of two players connect trough sockets using socket.io
* Used passport.js for User authentication to signup and login
* REST APIs `/api`


# Functionality :

1. A player send a request to create a game
2. the server genrate and creates the new game send the token to the user to use it and send it to the other player
3. other players join the game by accessing the URL (token) that was send by the user
4. when the second player joines the game, server connects the two players sockets to the same socket.io room and the game starts once they have connected
5. when the game ends both players are disconnected and redirected to the home or paly page


### Special thanks to :

 <a href="https://github.com/jhlywa/chess.js"> Chess.js </a> and  <a href="http://chessboardjs.com">Chessboard.js </a>  libraries.

 as well as the aweomse David Washington and hi real time chess basic setup

 <a href="https://github.com/dwcares/RealTimeWeb-HOL">

## RESTFUL API

## User

* Send a GET request to

`` /api/user/:name ``

Example:

``
/api/user/khaled
``

```
{
    "id": "123",
    "name": "khaled",
    "email": "khaled.dawodieh@gmail.com",
    "lastConnection": "now :p "
}
```



## Authors:
* Khaled Daoudieh
* Dima shahin
