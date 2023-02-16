$(document).ready(function(){
  $(".hide").hide();
  
  
  $(".marker-NorthAmerica").click(function(){
    $(".hide").hide();
    $(".Na-txt").fadeIn(300);
  });
  
    $(".marker-Europe").click(function(){
       $(".hide").hide();
    $(".Eur-txt").fadeIn(300);
  });
  
    $(".marker-Asia").click(function(){
       $(".hide").hide();
    $(".Asia-txt").fadeIn(300);
  });
  
    $(".marker-Africa").click(function(){
       $(".hide").hide();
    $(".Afr-txt").fadeIn(300);
  });
  
  $(".marker-SouthAmerica").click(function(){
       $(".hide").hide();
    $(".SA-txt").fadeIn(300);
  });
  
  $(".marker-Australia").click(function(){
       $(".hide").hide();
    $(".Aus-txt").fadeIn(300);
  });
  
});