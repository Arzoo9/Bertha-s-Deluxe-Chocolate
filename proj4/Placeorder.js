$(document).ready(function () {

	$('#Button1').on('click', function(e) {
            
            dialog.dialog( "open" );
           
        
    });

	$( function() {
        var dialog, form;
     
        dialog = $( "#dialog-form" ).dialog({
            autoOpen: false,
            height: 670,
            width: 440,
            modal: true,

            close: function() {
                //form[ 0 ].reset();
                dialog.dialog( "close" );
            }
        });

});