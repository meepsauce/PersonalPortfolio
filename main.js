const fs = require('fs')
const {markdownParser} = require("./markdown.js")
const {metaParser} = require("./meta.js")

const STATICDIR = "./"
const SOURCEDIR = "./source"

var metadata = []

const LOGLEVEL = {
  INFO: "INFO",
  WARNING: "WARNING",
  ERROR: "ERROR"
}

function print(msg, level=LOGLEVEL.INFO) {
  console.log(`${level} - ${msg}`)
}

function setup() {
  print("Setting Up Enviroment....")
  if(!fs.existsSync(STATICDIR)) {
    fs.mkdirSync(STATICDIR);
  }
  if(!fs.existsSync(SOURCEDIR)) {
    fs.mkdirSync(SOURCEDIR)
  }
}

function server() {
  const express = require('express')
  const app = express()
  const port = 3000;
  app.use(express.static(STATICDIR));

  app.get("/api/projects", (req, res) => {
    res.send(JSON.stringify(metadata))
  });

  app.get("/", (req, res) => {
    res.redirect("/index")
  })
  
  app.listen(port, () => {
    console.log(`Server listening on port  ${port}`)
  })
}

var sourceFiles = [];
sourceFiles = fs.readdirSync(SOURCEDIR);

sourceFiles.forEach((filename) => {
  print(`Parsing and Processing: ${filename}`);
  const buffer = fs.readFileSync(`${SOURCEDIR}/${filename}`).toString();
  filename = filename.split(".")[0];
  const meta = metaParser(buffer);
  meta["path"] = filename + ".html";
  metadata.push(meta);
  
  let html = markdownParser(buffer.split("%")[1]);
  fs.writeFileSync(`${STATICDIR}/${filename}.html`, html);
});

print("Finished!");
server();