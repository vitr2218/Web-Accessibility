// JavaScript source code
$(document).ready(function() { // do this when the document is loaded
    $("#dialer").show(); // show dialer
    $("#list").hide(); // hide the contact list
    $("#add").hide();
	$("#help").hide();
	
	});

$("#b1").click(function() { // when "button_id" is clicked
    $("#dialer").show(); // show dialer
    $("#list").hide(); // hide the contact list
    $("#add").hide();
	$("#help").hide();
});
$("#b2").click(function() { // when "button_id" is clicked
	$("#list").show(); // show the contact list
    $("#dialer").hide(); // show dialer
    $("#add").hide();
	$("#help").hide();
});
$("#b3").click(function() { // when "button_id" is clicked
	$("#add").show();
    $("#dialer").hide(); // show dialer
    $("#list").hide(); // hide the contact list
	$("#help").hide();
});
$("#b4").click(function() { // when "button_id" is clicked
	$("#help").show();
    $("#dialer").hide(); // show dialer
    $("#list").hide(); // hide the contact list
	$("#add").hide();

});

$("#dial_pad button").click(function() {
    $("#dialer_ex").val($("#dialer_ex").val() + this.innerText);
})

$("#clear").click(function() {
    $("#dialer_ex").val("");

	})