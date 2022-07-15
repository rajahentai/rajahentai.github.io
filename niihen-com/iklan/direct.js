$(document).ready(function(){

  $('a').each(function(){ 
  var link7an = $(this).attr("href"), linkdirectad = "https://linkonclick.com/jump/next.php?r=6076862"; 
   $(this).click(function(){	
		     window.location=linkdirectad; window.open(link7an);
   });
  });

});    
