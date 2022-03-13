//Add a toggle event for the design.dev and product icons/
//UI logic//
$(document).ready(function(){
    
    // design click and toggle event
    $("#design").click(function() {
        $("#design").hide();
        $("#mydesign").show();
    });
    $("#mydesign").click(function() {
        $("#mydesign").hide();
        $("#design").show();
    });

    // development click and toggle event
    $("#development").click(function() {
        $("#development").hide();
        $("#my-development").show();
    });
    $("#my-development").click(function() {
        $("#my-development").hide();
        $("#development").show();
    });

    // product click and toggle  event
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


    // "PORTFOLIO" toggle event
    let portfolios = [{work: "one", info: "work1"}, {work: "two", info: "work2"}, {work: "three", info: "work3"}, {work: "four", info: "work4"}, 
                     {work: "five", info: "work5"}, {work: "six", info: "work6"}, {work: "seven", info: "work7"}, {work: "eight", info: "work8"}];

    portfolios.forEach(function(portfolio){
        $("." + portfolio.work).mouseover(function(){
            $("." + portfolio.info).show();
        });

        $("." + portfolio.work).mouseout(function(){
            $("." + portfolio.info).hide();
        });
    });
});