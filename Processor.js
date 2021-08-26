class Processor{
     static Process(data){
          var stringForm = data.split("\n");
          var rows = [];

          stringForm.forEach(row =>{
               var arr = row.split(";");

               rows.push(arr);
          });

          return rows;
     }

}

module.exports = Processor;