//ini script untuk ambil parameter
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var vp1 = getUrlParam('vp1',null);
var cv1 = getUrlParam('cv1',null);
var jd1 = getUrlParam('jd1',null);

if(vp1 == null){
var videoplayer1 = "https://lh3.googleusercontent.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s360-rh/Foods.gif";
var covervideo1 = "https://lh3.googleusercontent.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s360-k/Foods.gif";	
var defaultjudul = "How to apply the white sauce";
var scdef = "<source src='"+videoplayer1+"' type='video/mp4'/>";
$(document).ready(function(){
	$('#my-video').each(function(){$(this).attr("poster", covervideo1); });
});
	
}else{
	
var encryptvp1 = decodeURIComponent(vp1);
var encryptcv1 = decodeURIComponent(cv1);
var encryptjd1 = decodeURIComponent(jd1);
var scawal = "<source src='"+encryptvp1+"' type='video/mp4'/>";
$(document).ready(function(){
	$('#my-video').each(function(){$(this).attr("poster", encryptcv1); });
});
}
