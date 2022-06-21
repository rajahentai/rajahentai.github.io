function iklanJav(json) {
	var posts = "";
	for (var i = 0; i < json.feed.entry.length; i++) {
		var title = json.feed.entry[i].title.$t;
		var label = json.feed.entry[i].category[i].term;
		var url = json.feed.entry[i].link.pop().href;
		var urlGenre = url.replace(/cf.+html/,'cf/search/label/'+label);
		var thumbnail = json.feed.entry[i].media$thumbnail.url;
		var postSummary = json.feed.entry[i].content.$t;
		var entryShort = postSummary.substring(0, 200);
		var entryEnd = entryShort.lastIndexOf(" ");
		var postContent = entryShort.substring(0, entryEnd) + '...';
		var encthumb = encodeURIComponent(thumbnail);
		var encthumbwebp = encthumb.replace(/%2Fs+[0-9].+-c/,"%2Fs300-rw");
		var decthumb = decodeURIComponent(encthumbwebp); 
		var thumbnails = decthumb.replace(/[0-9]+.bp.blogspot.com/,'lh4.googleusercontent.com');
		posts += ""                                                                             +
		 "<a class='thumbx' href='"+url+"' title='Download JAV "+title+"' target='_blank'>"     +
		 "<img data-src='"+thumbnails+"' alt='Download JAV "+title+"' class='post-thumbnail "   +
     "lazy' src='https://lh4.googleusercontent.com/-8FaUdtZGvFM/XZzJNW-VG5I/AAAAAAAADIo/"   +
     "5520jWvYEqUQ_D8i_vva369pfT1iRtrhwCLcBGAsYHQ/w300-h170-rw-n-l85-fSoften=10,30,0/"      +
     "NiiHen.png'/> </a>"                                                                   +
		 "<div class='labelnyatas'><i class='fas fa-tags'></i> "                                +
		 "<a rel='tag' >SPONSORED CONTENT</a> "                                                 +
		 "<a href='"+urlGenre+"' rel='tag' target='_blank'>"+label.replace('.','')+"</a>"       +
		 "</div>"                                                                               +
		 "<h2 class='post-title entry-title' itemprop='name headline'>"                         +
		 "<a href='"+url+"' itemprop='url' target='_blank'>"+title+" ~ Free Download Jav</a>"   +
		 "</h2>"                                                                                +
		 "<div class='bwh-title'>"                                                              +
		 "<div class='isibwh'>"                                                                 +
		 "<i class='fas fa-info-circle'></i> <span'>Konten Sponsor</span>"                      +
		 "</div>"                                                                               +
		 "<a class='comment-link' href='/contact' >Advertisement</a></div>"                     +
		 "<div class='post-body entry-content'>"                                                +
		 "<p>" + postContent.replace('h3','span').replace('table','span') + "</p>"              +
		 "</div>"                                                                               +
		 "<span class='jump-link'>"                                                             +
		 "<a href='"+url+"' title='"+title+"' target='_blank'><i class='fa fa-link' "           +
     "aria-hidden='true'></i> "+url+" <i class='fas fa-angle-double-right' "                +
     "aria-hidden='true'></i></a>"                                                          +
		 "</span>"
		;
	}
	document.getElementById('iklan-jav').innerHTML = posts;
}
