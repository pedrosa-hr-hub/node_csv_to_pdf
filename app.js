const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");


var read = new Reader();
var writer = new Writer();

async function main(){

     var data = await read.Read("./Pasta1.csv");
     var dataProcess = Processor.Process(data);

     var users = new Table(dataProcess);

     var html = await HtmlParser.Parse(users);
     
     writer.Write(Date.now() + ".html", html);
     PDFWriter.WritePDF(Date.now() + ".pdf", html);
}

main();