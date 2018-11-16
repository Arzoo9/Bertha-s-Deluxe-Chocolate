var proj4_data;
$(document).ready(function () {


	proj4_data = new Array();
    var cart = new shopping_cart("jadrn043");
$.ajax({
		url:"http://jadran.sdsu.edu/perl/jadrn043/get_product.cgi", 
		success: function(response){			
		storeData(response);
		display_milk_chocolate();
    		},
		error: function(response) {
               		alert("Can't able to fetch data from database please refresh page.");
                }
	});

	function storeData(response) {
		var tmpArray = explodeArray(response,';');
	       for(var i=0; i < tmpArray.length; i++) {
        		innerArray = explodeArray(tmpArray[i],'|');
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

   function display_milk_chocolate() {

        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {

            if(proj4_data[i][1] == "Milk chocolate") {

                tmpString += "<table class=\"Items_Display\" cellpadding=\"5%\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ proj4_data[i][2] + "</td></tr>";

                tmpString += " <tr><td colspan=\"2\"><center><img src=\"/~jadrn000/PROJ4_IMAGES/"+ proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+ " width=\"70%\"  /></center></td></tr>";

                tmpString += "<tr><td colspan=\"2\">"+ proj4_data[i][3] +"</td></tr> ";

                tmpString += "<tr><td>$"+ proj4_data[i][6] +"</td><td class=\"button\"><input type='button' value='Add To Cart' name='" + proj4_data[i][0] +"' /><span>Added to Cart</span></td></tr></table>";
              
                }
            }
        var handle = document.getElementById('Items');
        handle.innerHTML = tmpString;
        }

	$('#Milk_Chocolate').on('click', function() {

        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {

            if(proj4_data[i][1] == "Milk chocolate") {

                tmpString += "<table class=\"Items_Display\" cellpadding=\"5%\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ proj4_data[i][2] + "</td></tr>";

                tmpString += " <tr><td colspan=\"2\"><center><img src=\"/~jadrn000/PROJ4_IMAGES/"+ proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+ " width=\"70%\"  /></center></td></tr>";

                tmpString += "<tr><td colspan=\"2\">"+ proj4_data[i][3] +"</td></tr> ";

                tmpString += "<tr><td>$"+ proj4_data[i][6] +"</td><td class=\"button\"><input type='button' value='Add To Cart' name='" + proj4_data[i][0] +"' /><span>Added to Cart</span></td></tr></table>";
              
                }
            }
        var handle = document.getElementById('Items');
        handle.innerHTML = tmpString;
        })
    

	$('#Dark_Chocolate').on('click', function() {

        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {

            if(proj4_data[i][1] == "Dark chocolate") {

            	tmpString += "<table class=\"Items_Display\" cellpadding=\"5%\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ proj4_data[i][2] + "</td></tr>";

            	tmpString += " <tr><td colspan=\"2\"><center><img src=\"/~jadrn000/PROJ4_IMAGES/"+ proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+ " width=\"70%\"  /></center></td></tr>";

				tmpString += "<tr><td colspan=\"2\">"+ proj4_data[i][3] +"</td></tr> ";

				tmpString += "<tr><td>$"+ proj4_data[i][6] +"</td><td class=\"button\"><input type='button' value='Add To Cart' name='" + proj4_data[i][0] +"' /><span>Added to Cart</span></td></tr></table>";
              
                }
            }
        var handle = document.getElementById('Items');
        handle.innerHTML = tmpString;
        })


    $('#Nuts_and_Chews').on('click', function() {

        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {

            if(proj4_data[i][1] == "Nuts and chews") {

                tmpString += "<table class=\"Items_Display\" cellpadding=\"5%\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ proj4_data[i][2] + "</td></tr>";

                tmpString += " <tr><td colspan=\"2\"><center><img src=\"/~jadrn000/PROJ4_IMAGES/"+ proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+ " width=\"70%\"  /></center></td></tr>";

                tmpString += "<tr><td colspan=\"2\">"+ proj4_data[i][3] +"</td></tr> ";

                tmpString += "<tr><td>$"+ proj4_data[i][6] +"</td><td class=\"button\"><input type='button' value='Add To Cart' name='" + proj4_data[i][0] +"' /><span>Added to Cart</span></td></tr></table>";
              
                }
            }
        var handle = document.getElementById('Items');
        handle.innerHTML = tmpString;
        })

    $('#Brittles_and_Toffies').on('click', function() {

        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {

            if(proj4_data[i][1] == "Brittles and toffies") {

                tmpString += "<table class=\"Items_Display\" cellpadding=\"5%\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ proj4_data[i][2] + "</td></tr>";

                tmpString += " <tr><td colspan=\"2\"><center><img src=\"/~jadrn000/PROJ4_IMAGES/"+ proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+ " width=\"70%\"  /></center></td></tr>";

                tmpString += "<tr><td colspan=\"2\">"+ proj4_data[i][3] +"</td></tr> ";

                tmpString += "<tr><td>$"+ proj4_data[i][6] +"</td><td class=\"button\"><input type='button' value='Add To Cart' name='" + proj4_data[i][0] +"' /><span>Added to Cart</span></td></tr></table>";
              
                }
            }
        var handle = document.getElementById('Items');
        handle.innerHTML = tmpString;
        })

    $('#Truffles').on('click', function() {

        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {

            if(proj4_data[i][1] == "Truffles") {

                tmpString += "<table class=\"Items_Display\" cellpadding=\"5%\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ proj4_data[i][2] + "</td></tr>";

                tmpString += " <tr><td colspan=\"2\"><center><img src=\"/~jadrn000/PROJ4_IMAGES/"+ proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+ " width=\"70%\"  /></center></td></tr>";

                tmpString += "<tr><td colspan=\"2\">"+ proj4_data[i][3] +"</td></tr> ";

                tmpString += "<tr><td>$"+ proj4_data[i][6] +"</td><td class=\"button\"><input type='button' value='Add To Cart' name='" + proj4_data[i][0] +"' /><span>Added to Cart</span></td></tr></table>";
              
                }
            }
        var handle = document.getElementById('Items');
        handle.innerHTML = tmpString;
        })

    $('#Gifts').on('click', function() {

        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {

            if(proj4_data[i][1] == "Gifts") {

                tmpString += "<table class=\"Items_Display\" cellpadding=\"5%\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ proj4_data[i][2] + "</td></tr>";

                tmpString += " <tr><td colspan=\"2\"><center><img src=\"/~jadrn000/PROJ4_IMAGES/"+ proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+ " width=\"70%\"  /></center></td></tr>";

                tmpString += "<tr><td colspan=\"2\">"+ proj4_data[i][3] +"</td></tr> ";

                tmpString += "<tr><td>$"+ proj4_data[i][6] +"</td><td class=\"button\"><input type='button' value='Add To Cart' name='" + proj4_data[i][0] +"' /><span>Added to Cart</span></td></tr></table>";
              
                }
            }
        var handle = document.getElementById('Items');
        handle.innerHTML = tmpString;
        })

    $('#Holiday_Assortments').on('click', function() {

        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {

            if(proj4_data[i][1] == "Holiday assortments") {

                tmpString += "<table class=\"Items_Display\" cellpadding=\"5%\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ proj4_data[i][2] + "</td></tr>";

                tmpString += " <tr><td colspan=\"2\"><center><img src=\"/~jadrn000/PROJ4_IMAGES/"+ proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+ " width=\"70%\"  /></center></td></tr>";

                tmpString += "<tr><td colspan=\"2\">"+ proj4_data[i][3] +"</td></tr> ";

                tmpString += "<tr><td>$"+ proj4_data[i][6] +"</td><td class=\"button\"><input type='button' value='Add To Cart' name='" + proj4_data[i][0] +"' /><span>Added to cart</span></td></tr></table>";
              
                }
            }
        var handle = document.getElementById('Items');
        handle.innerHTML = tmpString;
        })
	
    $('#Items').on('click',$('input[type="button"]'), function(e) {
        if($(e.target).val() != 'Add To Cart'){return;} 
        var sku = $(e.target).attr("name");
         cart.add(sku,1);
         $(e.target).next().fadeIn(50).fadeOut(700);
       

    });

});