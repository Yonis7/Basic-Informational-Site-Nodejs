const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	// set header content type
  // Lets browser know what type of data it is being sent back and set cookies
  //Type of content
	res.setHeader('Content-Type', 'text/html');
  //What is being written to the browser
	// res.write('hello world');
  //Ends response and sends it to browser
	// res.end();
  
  

  let path = './';
  switch(req.url) {
    case '/': 
      path += 'index.html';
      break;
    case '/about': 
      path += 'about.html';
      break;
    case '/contact-me':
      path += 'contact-me.html'
      break;
    default:
      path += '404.html'
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.write(data);
      res.end();
    }
  });
  
});

server.listen(3000, 'localhost', () => {
	console.log('listening for request on port 3000');
});