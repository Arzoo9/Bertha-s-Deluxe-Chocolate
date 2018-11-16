var proj4_data;

$(document).ready(function () {
	// alert("working");
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

	function display_chocolate(){
		//alert("Inside Display");
		var cartArray = cart.getCartArray();     
		var tempString = "";
		var Sum = 0;
		// alert(cartArray.length);
		// alert(proj4_data.length);
		 if(cartArray.length > 0){
		 	 for (var i=0; i<cartArray.length; i++) {
		 for (var j = 0; j < proj4_data.length; j++) {
				if (proj4_data[j][0] == cartArray[i][0]) {
					
						Sum += proj4_data[j][6]*cartArray[i][1];

						tempString += "<table class=\"Items_Display\"><tr><td class=\"Chocolate_Name\" colspan=\"2\">"+ proj4_data[j][2] + "</td></tr>";

    	  	  			tempString += "<tr><td rowspan=\"4\" width=\"60%\"><center><img src=\"/~jadrn000/PROJ4_IMAGES/"+ proj4_data[j][0]+".jpg\" alt=\""+proj4_data[j][2]+"\""+ " width=\"70%\"  /></center></td><td>$"+ proj4_data[j][6] +" </td></tr>";

  						tempString += "<tr><td><input type='text' value='"+ cartArray[i][1]+"' id='"+ proj4_data[j][0] + "' width='10px'></input></td></tr>";

  						tempString +="<tr><td class=\"button\"><input type='button' id='Update' value='Update cart' name='"+ proj4_data[j][0] + "'/></td></tr>";
  						 
  						tempString += "<tr><td class=\"button\"><input type='button' value='Remove' name='"+ proj4_data[j][0] + "' /></td></tr></table>";			  					 				 
  					}
			}
		}
		  	$('#Total_Price').val(Math.floor(Sum * 100) / 100);
            $('#Items').val(cart.size());

		  	tempString += "<div class='OrderDetails'><div id='Order'>Order Details:</div>"; 
            tempString += "<div class='data'>Total Items ("+ cart.size() +")   = $"+ Math.floor(Sum * 100) / 100  +"</br> ";
            tempString += "Estimated Tax = $"+ Math.floor((0.08*Sum) * 100) / 100  +"</br> ";
            tempString += "Shipping charge = $2</br>";
            tempString += "Total Charge = $"+   Math.floor(((1.08*Sum)+2) * 100) / 100  + "</br></br> ";

            tempString += "<input type='button' id='create-user' class='checkout' value='Check out' /></div></div>";
             
	 	var handle = document.getElementById('cart');
	        handle.innerHTML = tempString;
		
		}
		else{
			 tempString = " <div id='nullcart'>No items in cart!</div><br>";
             tempString +=  "<div id='ch'><a href='products.html' > Buy Chocolates Here </a></div>";


	 	var handle = document.getElementById('cart');
	        handle.innerHTML = tempString;
		}

	}
	$( function() {
    var dialog, form;
 
      
    function addUser() {
   alert('submit');
    }
 
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 580,
      width: 700,
      modal: true,
   
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
 
   $('#cart').on('click',$('input[type="button"]'), function(e) {
        if($(e.target).val() != 'Check out'){return}; 
        dialog.dialog( "open" );
     });
  });


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



  $('#cart').on('click',$('input[type="button"]'), function(e) {
        if($(e.target).val() != 'Remove'){return}; 
        var sku = $(e.target).attr("name");
        cart.delete(sku);
        display_chocolate();
       
     });

   $('#cart').on('click',$('input[type="button"]'), function(e) {
        if($(e.target).val() != 'Update cart'){return}; 
        var sku = $(e.target).attr("name");
        var qun = $('#'+sku).val();
        if(qun < 1){
        	cart.delete(sku);
        	display_chocolate();
        }
      	cart.setQuantity(sku,qun);        
        display_chocolate(); 
     });
   
   	// Referance - Stackoverflow
   	$('#cart').on('keydown',$('input[type="text"]'), function(e) {
      
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)  && (e.which < 96 || e.which > 105) ) {
            e.preventDefault();
            return false;
        }
    });

   });