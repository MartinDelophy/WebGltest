//创建一个http服务器
var url  = require("url"),
    fs=require("fs"),
    path = require("path")

const entryFile = "index.html";

var app = require('http').createServer(
    function (request, response) {

        var pathname=__dirname + url.parse(request.url).pathname;
        if (path.extname(pathname) == "") {
            pathname += "/";
        }
        if (pathname.charAt(pathname.length-1) == "/") {
            pathname += entryFile;
        }

        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/html
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(pathname,function (err,data) {
            response.end(data);
        });

    }
)
// 把http封装成io对象
  var io =require('socket.io')(app) 
 
 
const PORT = 5000
var clientCount = 0
 
app.listen(PORT)
 
io.on('connection',function(socket){
    // 给每个用户取名字
    clientCount++
    socket.nickname = 'user' + clientCount
    
    // io.emit代表广播，socket.emit代表私发
    io.emit('enter',socket.nickname + '  comes in')
 
    socket.on('message',function(str){

        io.emit('message', socket.nickname + ' says: ' )
    })

    fs.watchFile('./dist/main.js',function(curr,prev){
           if(Date.parse(curr.mtime)!=Date.parse(prev.mtime)){
            io.emit('message', socket.nickname + ' says: ')
        }
        })
 
 
    // 客户端断开，自带事件
    socket.on('disconnect',function(){
        io.emit('leave',socket.nickname + ' left')
    })
})