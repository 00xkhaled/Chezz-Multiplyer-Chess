`` What is the beginning of eternity, the end of time and space, the beginning of every end and the end of every race?  ``

# Chezz Chess

### Chezz chess 是一款使用 Socket.IO 开发的多人 5 分钟国际象棋游戏

## 如何运行？

#### 环境要求

* Mongo DB
* Node JS

#### 运行应用程序

使用以下命令运行 Mongo db：

```
$> mongod
```

或者根据您的操作系统运行 `sudo mongod` =)


下载 node 软件包和依赖项：
```
$> npm install
```

运行服务器：
```
$> node .
```

现在，游戏应该在 `http://localhost:3000` 上运行

## Chezz Chess 项目由两部分组成：

* 客户端 (Client)
    * Socket.io（Socket.IO 实现了基于事件的实时双向通信）
    * HTML5, CSS3, java script, jquery 以及用于添加图标的 bootstrap 和 font awesome

* 服务器 (Server)
    * Handlebars.js 用于渲染 HTML 模板
    * Node JS Web 服务器
    * Mongo DB 作为数据库
    * Express JS 作为 Web 框架
    * Passport JS 用于身份验证
    * Socket.io


## 本项目的功能特点：

* 多人游戏，两名玩家通过 socket.io 使用套接字连接
* 使用 passport.js 进行用户注册和登录的身份验证
* REST APIs `/api`


# 功能流程：

1. 玩家发送创建游戏的请求
2. 服务器生成并创建新游戏，将 token 发送给用户，由用户发送给另一名玩家
3. 另一名玩家通过访问用户发送的 URL (token) 加入游戏
4. 当第二名玩家加入游戏时，服务器将两名玩家的套接字连接到同一个 socket.io 房间，连接完成后游戏开始
5. 游戏结束时，两名玩家断开连接并被重定向回首页或游戏页


### 特别感谢：

<a href="https://github.com/jhlywa/chess.js"> Chess.js </a> 和 <a href="http://chessboardjs.com">Chessboard.js </a> 库。

以及优秀的 David Washington 及其实时国际象棋基础搭建

<a href="https://github.com/dwcares/RealTimeWeb-HOL">

## RESTFUL API

## 用户 (User)

* 发送 GET 请求至

`` /api/user/:name ``

示例：

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


## 作者：
* Khaled Daoudieh
* Dima shahin
