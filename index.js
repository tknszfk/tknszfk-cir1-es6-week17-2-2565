const http = require('http')

//http://localhost:5000
const server = http.createServer((req, res) => {
    //http hader
    //res.setHader('Content-type','text/html');
    //res.statuscode = 200;
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write('<h1>Hello World</h1>')
    return res.end();
})

server.listen(5000, () => {
    console.log('Sever runnig at http://localhost:5000')
});
