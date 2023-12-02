const http = require("http");
const himakar = require("fs");
const argv = require("minimist")(process.argv.slice(2));
const port = argv.port || 3000;

let runanya;
let ananya;
let bhavana;
let shivani;
let varshini;

himakar.readFile('home.html', (err, child) => 
{
    if (err) 
    {
      throw err;
    }
    runanya = child;
});

himakar.readFile('project.html', (err, birth1) => 
{
    if (err) 
    {
      throw err;
    }
    ananya = birth1;
});

himakar.readFile('index.css', (err, birth2) => 
{
  if (err) 
  {
    throw err;
  }
  shivani = birth2;
});

himakar.readFile('indexx.js', (err, birth3) => 
{
  if (err) 
  {
    throw err;
  }
  varshini = birth3;
});

himakar.readFile('registration.html', (err, son) => {
    if (err) {
        throw err;
    }
    bhavana = son;
});

const server = http.createServer((req, goals) => 
{
    let aim = req.url;
    let ct = "text/html";
    
    if (aim.endsWith(".css")) 
    {
      ct = "text/css";
    } 
    else if (aim.endsWith(".js")) 
    {
      ct = "application/javascript";
    }

  goals.writeHead(200, {"Content-Type": ct});

  switch (aim) 
  {
      case "/project":
          goals.write(ananya);
          break;
      case "/registration":
          goals.write(bhavana);
          break;
      case "/index.css":
        goals.write(shivani);
        break;
      case "/indexx.js":
        goals.write(varshini);
        break;
      default:
          goals.write(runanya);
          break;
  }
  goals.end();
});

server.listen(port, () => 
{
    console.log(`Server is running on port http://localhost:${port}`);
});