var nodesort = require('node-sort-algorithms');
//const data='height.csv'
const csvFilePath='height.csv'
const csv=require('csvtojson')

var displaymode = "No"; //"Yes";  // "Yes" for more details of algorithm progress 

//var arrin11 = [1,2,4,5,6,7,9,10,14];

csv()
	 .fromFile(csvFilePath)
	 .then((jsonObj)=>{
		 console.log(jsonObj);
	 var arrin11 = [];
		 for(i=0 ; i< jsonObj.length ; i++)
		 {
		 arrin11[i]=jsonObj[i].height
		 console.log(arrin11[i]);
		 }
		 buckets(arrin11);

		
	 })



function buckets(arrin11){

	//var arr = []
	var arr1 = []
	var arr2 = []
	var arr3 = []
	var count = 5;
	 var i=0;


	 var arr = []

			for(i = 0 ; i < arrin11.length; i ++)
			{
				if(150 <= arrin11[i] && arrin11[i] <= 154){
				 arr1.push(arrin11[i]);
				}
				else if(155 <= arrin11[i] && arrin11[i] <= 159){
					arr2.push(arrin11[i]);
				}
				else if(160 <= arrin11[i] && arrin11[i] <= 164){
					arr3.push(arrin11[i]);
				}
				

			}
			
			console.log("Array 1");
			for (i = 0 ; i < arr1.length ; i++){
				console.log(arr1[i]);
			}

			console.log("Array 2");
			for (i = 0 ; i < arr2.length ; i++){
				console.log(arr2[i]);
			}

			console.log("Array 3");
			for (i = 0 ; i < arr3.length ; i++){
				console.log(arr3[i]);
			}

			var arr_len= [arr1.length, arr2.length, arr3.length];
			console.log("lengths");
			console.log(arr_len);

		}


     
