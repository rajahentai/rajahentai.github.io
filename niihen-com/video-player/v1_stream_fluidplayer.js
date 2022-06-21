$(document).ready(function(){
	var creampie = "https://drive.google.com/uc?export=view&id=";
	var defaultCoverURL = encodeURIComponent(thumbnail);
	var defaultJudul = encodeURIComponent(judul);

    $('a[href^="https://drive.google.com/open?"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("https://drive.google.com/open?id=", creampie); 
		var Perawanin = encodeURIComponent(Perawan);
		$(this).attr("id", "crot"); 
		$(this).attr("href", "#"); 	
		$(this).attr("style", "display:none;"); 
	    	$('#streaming-container').attr("style", "opacity:1 !important");
    $('#ListServer0').html( ' <button id="ServDef">Server Default</button> ' );    			
		    $("#ServDef").click(function(){	
		      $('#streamingframe').attr("src", "https://www.movieluck.ml/p/in-stream.html?jd1="+defaultJudul+"&vp1="+Perawanin+"&cv1="+defaultCoverURL);
		    });
	  });
      
	  $('a[href^="http://hentai.dx.am/id?=1"]').each(function(){
		var Janda2 = $(this).attr("href"); 
		var Perawan2 = Janda2.replace("http://hentai.dx.am/id?=1&v=", creampie); 
		var Perawanin2 = encodeURIComponent(Perawan2);
		$(this).attr("id", "crot"); 
		$(this).attr("href", "#"); 
		$(this).attr("style", "display:none;"); 
    $('#ListServer1').html( ' <button id="ServAlt">Server Alternatif</button> ' );    			
		    $("#ServAlt").click(function(){	
		      $('#streamingframe').attr("src", "https://www.movieluck.ml/p/in-stream.html?jd1="+defaultJudul+"&vp1="+Perawanin2+"&cv1="+defaultCoverURL);
		    });
	  });

	  $('a[href^="http://hentai.dx.am/id?=2"]').each(function(){
		var Janda3 = $(this).attr("href"); 
		var Perawan3 = Janda3.replace("http://hentai.dx.am/id?=2&v=", creampie); 
		var Perawanin3 = encodeURIComponent(Perawan3);
		$(this).attr("id", "crot"); 
		$(this).attr("href", "#"); 
		$(this).attr("style", "display:none;"); 
    $('#ListServer2').html( ' <button id="ServAmn">Server Aman</button> ' );    			
			$("#ServAmn").click(function(){	
		    $('#streamingframe').attr("src", "https://www.movieluck.ml/p/in-stream.html?jd1="+defaultJudul+"&vp1="+Perawanin3+"&cv1="+defaultCoverURL);
		  });
	  });
});     
