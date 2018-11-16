var proj4_data;

$(document).ready(function () {
	
	 var cart = new shopping_cart("jadrn043");	
	   
	 proj4_data = new Array();

	$.ajax({
		url:"http://jadran.sdsu.edu/perl/jadrn043/get_product.cgi", 
		success: function(response){			
		storeData(response);		
		display_chocolate();
			},
		error: function(response) {
               		alert("Can't able to fetch data from database please refresh page."); 
                }
	});
  var tempString;

	function display_chocolate(){
	//alert("Going in!");
        tempString = "";
        //alert(proj4_data.length);
        var flag = 1 ;
        for(var a=0; a < 9; a++) {
        
                 flag = Math.floor((Math.random() * (proj4_data.length-1)));//floor function Referance - stackoverflow
              
                tempString += "<div class=\"picture2\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[flag][0]+".jpg\" alt=\""+proj4_data[flag][2]+"\""+
                " width=\"200px\"  /></div>"; 
            
        }
        var handle = document.getElementById('x');
        handle.innerHTML = tempString;

	}



    	function storeData(response) {
    		var tempArray = explodeArray(response,';');
    	       for(var i=0; i < tempArray.length; i++) {
            		innerArray = explodeArray(tempArray[i],'|');
            		proj4_data[i] = innerArray;
            	}	
    	}

    	function explodeArray(item,delimiter) {
    		tempArray=new Array(1);
    		var Count=0;
    		var tempString=new String(item);
    		while (tempString.indexOf(delimiter)>0) {
    			tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
    			tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
    			Count=Count+1
    		}
    		tempArray[Count]=tempString;
    		return tempArray;
    	}


   });