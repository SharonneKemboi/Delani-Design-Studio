//Add a toggle event for the design.dev and product icons/

$(document).ready(function(){
    // design  event
    $("#design").click(function() {
        $("#design").hide();
        $("#mydesign").show();
    });
    $("#mydesign").click(function() {
        $("#mydesign").hide();
        $("#design").show();
    });

    // development event
    $("#development").click(function() {
        $("#development").hide();
        $("#my-development").show();
    });
    $("#my-development").click(function() {
        $("#my-development").hide();
        $("#development").show();
    });

    // product event
    $("#product").click(function() {
        $("#product").hide();
        $("#myproduct").show();
    });
    $("#myproduct").click(function() {
        $("#product-1").hide();
        $("#product").show();
    });

    // product event
    $("#product").click(function() {
        $("#product").hide();
        $("#product-1").show();
    });
    $("#myproduct").click(function() {
        $("#myproduct").hide();
        $("#product").show();
    });
});