
//UI logic//
$(document).ready(function(){

    
    $("#design").click(function() {
        $("#design").hide();
        $("#mydesign").show();
    });
    $("#mydesign").click(function() {
        $("#mydesign").hide();
        $("#design").show();
    });

   
    $("#development").click(function() {
        $("#development").hide();
        $("#my-development").show();
    });
    $("#my-development").click(function() {
        $("#my-development").hide();
        $("#development").show();
    });


    $("#product").click(function() {
        $("#product").hide();
        $("#myproduct").show();
    });
    $("#myproduct").click(function() {
        $("#product-1").hide();
        $("#product").show();
    });

    
    $("#product").click(function() {
        $("#product").hide();
        $("#product-1").show();
    });
    $("#myproduct").click(function() {
        $("#myproduct").hide();
        $("#product").show();
    });


 
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

//form validation
   
     $("form#form").submit(function(event){
         // event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();

        if ($("input#name").val() && $("input#email").val()){
        alert ("Hey " + name + ", we have received your wonderful message. Thank you for reaching out to Delani Studio, We shall get back to you ASAP!!");
        }
        else {
            alert("Please enter your name and email!");
        }
          
    });
});