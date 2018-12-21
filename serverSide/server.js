var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var csv = require('csv');
var obj = csv();
let csvToJson = require('convert-csv-to-json');

var fs=require('fs');
var cors = require('cors');

function Employee(eno, ename, sal)
{       
    this.Name = eno;
    this.Designation = ename;
    this.Salary = sal;
};

var Employees = [];

obj.from.path('../serverSide/data.csv').to.array(function (data) {
    for (var index = 0; index <  data.length; index++) {
        Employees.push(new Employee(data[index][0], data[index][1], data[index][2] ));
    }
    console.log(Employees);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())



app.post('/addemp', function(request, response){
    var fields = ['Name', 'Designation', 'Salary'];
    console.log(request.body);

var appendThis =  "\n"+request.body.Name+","+request.body.Designation+","+request.body.Salary

console.log(csv);
    fs.appendFile('data.csv', appendThis, function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
        response.send("Added Successfully");
    });
    console.log(request.body);
});





const emp_Path= 'emp.csv'
const dept_Path= 'dept.csv'
const pos_Path= 'pos.csv'
const EPD_Path= 'e_pd.csv'
const PD_Path= 'pd.csv'
const S_PD_Path= 's_pd.csv'

empJson = {};
deptJson = {};
posJson = {};
EPDJson = {};
PDJson = {};
SPDJson = {};

function getJson(path) {
let outjson = csvToJson.fieldDelimiter(',').getJsonFromCsv(path);
// console.log(outjson)
return outjson
}

empJson = getJson(emp_Path)
deptJson = getJson(dept_Path)
posJson = getJson(pos_Path)
EPDJson = getJson(EPD_Path)
PDJson = getJson(PD_Path)
SPDJson = getJson(S_PD_Path)


var data=[{
          values:[],
          dept :[]
            }];


  var dataV = {};
  var dataD = {};
  //here:
for (var i = 0 ; i < EPDJson.length  ; i++) {

  for(var j =  0 ; j < SPDJson.length ; j++) {
      if(EPDJson[i].DP_ID === SPDJson[j].dept_pos_id) {          
        dataV = {};
        var emp = EPDJson[i].E_ID
        dataV.eid = emp;
       var  ht= empJson[i].height
        dataV.height = ht
        var dp = SPDJson[j].dept_pos_id

   for(  k = 0 ; k < empJson.length ; k++) {

      if(empJson[i].id == emp) {
        
        for (var l = 0 ; l < PDJson.length ; l++) {
            
          if(PDJson[l].dept_pos_id == dp) {
            var d = PDJson[l].dept_id
            dataV.did = d;
            var sal = SPDJson[l].salary
            dataV.salary = sal

            for(var m = 0 ; m < deptJson.length ; m++)
            {
              if(d === deptJson[m].d_id) {
                var d_name = deptJson[m].dept_name
                dataV.dName = d_name

              }
            }
           
           }
          }
        }

      }
    }

  }
  
  data[0].values.push(dataV);
}  



for( var i= 0 ; i < deptJson.length ; i++)
{
  dataD = {};
  dataD.dept_id = deptJson[i].d_id
  dataD.dept_name = deptJson[i].dept_name
  data[0].dept.push(dataD)
  console.log(data[0].dept[i])

}

app.get("/", function(req, res, next) {
    res.send(data);
  });
  


var port = 5001;
app.listen(port, () =>
    console.log("Server started on port  "+port)
);
