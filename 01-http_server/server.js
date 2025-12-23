const http = require("http");

const server = http.createServer((req , res ) => {
    if(req.url === "/"){
        res.setHeader("Content-Type" , "text/html");
        res.write( "<h1>welcom ! node js  </h1>");
        res.end();
    }

     if(req.url === "/source"){
        res.write("dfbjsb jsbfjlsbf  ");
        res.end();
    }
});


// web server 


const PORT = 3000 ;
server.listen(PORT , () => {
    console.log(' Listining on PORT ${PORT}');
});
