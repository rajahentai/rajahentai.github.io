function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function SetCookie (name, value) {
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
document.cookie = name + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) {
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var expDays = 1;
var exp = new Date();
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
function amt()
{
var count = GetCookie('count')
if(count == null) {
SetCookie('count','1')
return 1
}
else {
var newcount = parseInt(count) + 1;
DeleteCookie('count')
SetCookie('count',newcount,exp)
return count
}
}
function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
var hitunganviewnya = amt();






//document.write("You've been here <b>" + hitunganviewnya + "</b> times.");

//var scriptxGHEA = document.createElement('script');
//scriptxGHEA.setAttribute('type', 'text/javascript');
//scriptxGHEA.setAttribute('src', 'https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v9.0');

if (hitunganviewnya == 1) { 
  //document.head.appendChild(scriptxGHEA); 
} else
if (hitunganviewnya == 3) { 
  window.location='https://www.safestgatetocontent.com/d935uuk9?key=155feaf5ca9d2b1dcba49fd42bcef5b8';
} else
if (hitunganviewnya == 10) { 
  window.location='https://www.safestgatetocontent.com/d935uuk9?key=155feaf5ca9d2b1dcba49fd42bcef5b8';
} else 
if (hitunganviewnya == 15) { 
  window.location='https://www.safestgatetocontent.com/d935uuk9?key=155feaf5ca9d2b1dcba49fd42bcef5b8';
} else 
if (hitunganviewnya == 20) { 
  window.location='https://www.safestgatetocontent.com/d935uuk9?key=155feaf5ca9d2b1dcba49fd42bcef5b8';
} else 
if (hitunganviewnya == 25) { 
  window.location='https://www.safestgatetocontent.com/d935uuk9?key=155feaf5ca9d2b1dcba49fd42bcef5b8';
} else 
{}
