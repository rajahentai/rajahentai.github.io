if(vp1 == null){

if ('mediaSession' in navigator) {

  navigator.mediaSession.metadata = new MediaMetadata({
    title: defaultjudul,
    artist: 'INAFUT.COM ~ Indonesian Foods',
    album: 'Streaming '+defaultjudul,
    artwork: [
      { src: 'https://lh3.googleusercontent.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s96-k/Foods.gif',  sizes: '96x96',   type: 'image/gif' },
      { src: 'https://lh3.googleusercontent.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s128-k/Foods.gif', sizes: '128x128', type: 'image/gif' },
      { src: 'https://lh3.googleusercontent.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s192-k/Foods.gif', sizes: '192x192', type: 'image/gif' },
      { src: 'https://lh3.googleusercontent.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s256-k/Foods.gif', sizes: '256x256', type: 'image/gif' },
      { src: 'https://lh3.googleusercontent.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s384-k/Foods.gif', sizes: '384x384', type: 'image/gif' },
      { src: 'https://lh3.googleusercontent.com/-HlsivgqrRtw/YEmxHKh1XFI/AAAAAAAAASQ/MUkr1bnKbMM18Y9QPQqorB4SIeRUCsv8gCLcBGAsYHQ/s512-k/Foods.gif', sizes: '512x512', type: 'image/gif' },
    ]
  });
 
 try {
 
  navigator.mediaSession.setActionHandler("play", async () => {  await document.querySelector("video").play();  navigator.mediaSession.playbackState = "playing";}),
  navigator.mediaSession.setActionHandler("pause", () => {  document.querySelector("video").pause();  navigator.mediaSession.playbackState = "paused";}),
  navigator.mediaSession.setActionHandler("seekbackward", null),  
  navigator.mediaSession.setActionHandler("seekforward", null),  
  navigator.mediaSession.setActionHandler("previoustrack", null),  
  navigator.mediaSession.setActionHandler("nexttrack", null);
  } 
		catch (error) {  
			console.log(`The media session action "seekbackward" is not supported yet.`), 
			console.log(`The media session action "seekforward" is not supported yet.`), 
			console.log(`The media session action "previoustrack" is not supported yet.`), 
			console.log(`The media session action "nexttrack" is not supported yet.`);	
		}
}
  
} else {  
  
var sampuL = encodeURIComponent(encryptcv1);
var src96 = sampuL.replace(/\%2Fs.+%2F/, "%2Fs96-c-rj%2F");
var src128 = sampuL.replace(/\%2Fs.+%2F/, "%2Fs128-c-rj%2F");
var src192 = sampuL.replace(/\%2Fs.+%2F/, "%2Fs192-c-rj%2F");
var src256 = sampuL.replace(/\%2Fs.+%2F/, "%2Fs256-c-rj%2F");
var src384 = sampuL.replace(/\%2Fs.+%2F/, "%2Fs384-c-rj%2F");
var src512 = sampuL.replace(/\%2Fs.+%2F/, "%2Fs512-c-rj%2F");
  
var src96v2 = src96.replace(/\%3Ds.+[0-9]/, "%3Ds96-c-rj");
var src128v2 = src128.replace(/\%3Ds.+[0-9]/, "%3Ds128-c-rj");
var src192v2 = src192.replace(/\%3Ds.+[0-9]/, "%3Ds192-c-rj");
var src256v2 = src256.replace(/\%3Ds.+[0-9]/, "%3Ds256-c-rj");
var src384v2 = src384.replace(/\%3Ds.+[0-9]/, "%3Ds384-c-rj");
var src512v2 = src512.replace(/\%3Ds.+[0-9]/, "%3Ds512-c-rj");

var src96Fix = decodeURIComponent(src96v2);
var src128Fix = decodeURIComponent(src128v2);
var src192Fix = decodeURIComponent(src192v2);
var src256Fix = decodeURIComponent(src256v2);
var src384Fix = decodeURIComponent(src384v2);
var src512Fix = decodeURIComponent(src512v2);

if ('mediaSession' in navigator) {

  navigator.mediaSession.metadata = new MediaMetadata({
    title: encryptjd1,
    artist: 'Moecan',
    album: 'Streaming Anime Hentai Subtitle Indonesia',
    artwork: [
		{src: src96Fix, sizes: '96x96', type: 'image/jpg'},
		{src: src128Fix, sizes: '128x128', type: 'image/jpg'},
		{src: src192Fix, sizes: '192x192', type: 'image/jpg'},
		{src: src256Fix, sizes: '256x256', type: 'image/jpg'},
		{src: src384Fix, sizes: '384x384', type: 'image/jpg'},
		{src: src512Fix, sizes: '512x512', type: 'image/jpg'},
	]
  });
 
 try {
 
  navigator.mediaSession.setActionHandler("play", async () => {  await document.querySelector("video").play();  navigator.mediaSession.playbackState = "playing";}),
  navigator.mediaSession.setActionHandler("pause", () => {  document.querySelector("video").pause();  navigator.mediaSession.playbackState = "paused";}),
  navigator.mediaSession.setActionHandler("seekbackward", null),  
  navigator.mediaSession.setActionHandler("seekforward", null),  
  navigator.mediaSession.setActionHandler("previoustrack", null),  
  navigator.mediaSession.setActionHandler("nexttrack", null);
  } 
		catch (error) {  
			console.log(`The media session action "seekbackward" is not supported yet.`), 
			console.log(`The media session action "seekforward" is not supported yet.`), 
			console.log(`The media session action "previoustrack" is not supported yet.`), 
			console.log(`The media session action "nexttrack" is not supported yet.`);	
		}
}
}
