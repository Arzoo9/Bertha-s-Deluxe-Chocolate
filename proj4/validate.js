$(document).ready(function () {

    $("#checkbox").change(function () {
        if ($("#checkbox").is(':checked')) {
            $("input[name=SFname]").val($("input[name=Fname]").val());
            $("input[name=SLname]").val($("input[name=Lname]").val());
            $("input[name=SA01]").val($("input[name=A01]").val());
            $("input[name=SA02]").val($("input[name=A02]").val());
            $("input[name=SCity]").val($("input[name=City]").val());
            $("input[name=SZipCode]").val($("input[name=ZipCode]").val());
            $("input[name=SCountry]").val($("input[name=Country]").val());
            $("#SState").val($("#State").val());
        } else {
            $("input[name=SFname]").val(" ");
            $("input[name=SLname]").val(" ");
            $("input[name=SA01]").val(" ");
            $("input[name=SA02]").val(" ");
            $("input[name=SCity]").val(" ");
            $("input[name=SCountry]").val(" ");
            $("input[name=SZipCode]").val(" ");
            $("#SState").val(" ");
        }


    });

$("#Placeorder").click(function (e) {

      if (document.getElementById("State").value.length !== 2) {
            alert("Use two letter state abbreviation.");
            document.getElementById("State").focus();
            return false;
        }
        
       else if (document.getElementById("ZipCode").value.length !== 5 || isNaN(document.getElementById("ZipCode").value)) {
            alert("Please enter valid Zip Code, It must be 5 digit.");
            document.getElementById("ZipCode").focus();
            return false;
        } 
         
        else if (document.getElementById("PhNum").value.length !== 10 || isNaN(document.getElementById("PhNum").value)) {
            alert("Please enter valid Phone Number");
            document.getElementById("PhNum").focus();
            return false;
        } 
        else if (document.getElementById("cardno").value.length !== 16 || isNaN(document.getElementById("cardno").value)) {
            alert("Please enter valid card number");
            document.getElementById("cardno").focus();
            return false;
        } 
         else if (document.getElementById("Month").value.length !== 2 || isNaN(document.getElementById("Month").value)) {
            alert("Please enter valid month");
            document.getElementById("Month").focus();
            return false;
        } 
        else if (document.getElementById("Year").value.length !== 2 || isNaN(document.getElementById("Year").value)) {
            alert("Please enter valid year");
            document.getElementById("Year").focus();
            return false;
        } 
       else if (document.getElementById("SState").value.length !== 2) {
            alert("Use two letter state abbreviation.");
            document.getElementById("SState").focus();
            return false;
        }
        else if (document.getElementById("SZipCode").value.length !== 5 || isNaN(document.getElementById("SZipCode").value)) {
            alert("Please enter valid Zip Code, It must be 5 digit.");
            document.getElementById("SZipCode").focus();
            return false;
        }
        else{
            $('form').serialize();
            $('form').submit();

        }
	
    }
    );
});  