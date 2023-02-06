const http = require('http');
//1.Create a server object
http.createServer((req , res) => {
    //1.1Get:http//localhost:5000

    if (req.url === '/'){
        res.writeHead(200,{'Content-type': 'text-html'});
        res.write('Welcome to home page')
        return res.end()
    }
     else if(req.url == '/about'){ 
        //Get:http//localhost:5000/about}
        res.writeHead(200,{'Content-type': 'text-html'})
        res.write('Welcome to About page')
        return res.end()
     }
     else {
        //Get:http://localhost:5000/xxx
        res.writeHead(404, {'Content-type': 'text/html'})
        res.write('NOT FOND 404')
        return res.end()
     }
}).listen(5000)
//2.Run server