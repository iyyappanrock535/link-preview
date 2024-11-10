const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs')

// app.get('/', function(request, response) {
//   console.log('Home page visited!');
 
// });


const pathToIndex = path.join(__dirname, "build/index.html")
app.get("/", (req, res) => {
  const raw = fs.readFileSync(pathToIndex, 'utf-8'); // Read file as string
  const pageTitle = "Homepage - Welcome to my page";
  const updated = raw.replace(/\$OG_TITLE/g, pageTitle);
  res.send(updated);
});
     app.use(express.static(path.join(__dirname, "build")));
     app.get("*", (req, res) =>
       res.sendFile(path.join(__dirname, "build/index.html"))
     );

app.listen(port, () => console.log(`Listening on port ${port}`));