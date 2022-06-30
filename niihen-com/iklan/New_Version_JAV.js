	function ngonsole(){
		var urikont = document.getElementById('url').innerHTML; //console.log(urikont);
		var titkont = document.getElementById('title').innerHTML; //console.log(titkont);
		var sbpkont = document.getElementById('shortBodyPlain').innerHTML; //console.log(sbpkont);
		var tiukont = document.getElementById('teaserImageUrl').innerHTML; //console.log(tiukont);
		var postkon = ""+
					"<a class='thumbx' href='"+urikont+"' title='Download JAV "+titkont+"' target='_blank'>"+
					"<img data-src='"+tiukont+"' alt='Download JAV "+titkont+"' class='post-thumbnail lazy' src='https://lh4.googleusercontent.com/-8FaUdtZGvFM/XZzJNW-VG5I/AAAAAAAADIo/5520jWvYEqUQ_D8i_vva369pfT1iRtrhwCLcBGAsYHQ/w300-h170-rw-n-l85-fSoften=10,30,0/NiiHen.png'> "+
					"</a>"+
					"<div class='labelnyatas'>"+
					"<i class='fas fa-tags'></i> "+
					"<a rel='tag'>SPONSORED CONTENT</a> "+
					"</div>"+
					"<h2 class='post-title entry-title' itemprop='name headline'>"+
					"<a href='"+urikont+"' itemprop='url' target='_blank'>"+titkont+" ~ Free Download Jav</a>"+
					"</h2>"+
					"<div class='bwh-title'>"+
					"<div class='isibwh'>"+
					"<i class='fas fa-info-circle'></i> <span'>Konten Sponsor</span'>"+
					"</div>"+
					"<a class='comment-link' href='/contact' target='_blank'>Advertisement</a>"+
					"</div>"+
					"<div class='post-body entry-content'>"+
					"<p>"+sbpkont+"</p>"+
					"</div>"+
					"<span class='jump-link'><a href='"+urikont+"' title='"+titkont+"' target='_blank'>"+
					"<i class='fa fa-link' aria-hidden='true'></i> "+urikont+" <i class='fas fa-angle-double-right' aria-hidden='true'></i></a>"+
					"</span>";
		document.getElementById('iklan-jav').innerHTML = postkon;
	
		$(document).ready(function(){
			$('a[href^="https://streamsb.com"]').each(function(){ 
			var coba1 = $(this).attr("href").replace(/http.+streamsb.com/,"http://ouo.io/qs/GGytQtE4?s=streamsb.com"); 
			$(this).attr("href", "#"); 
			$(this).attr("id", "dlsb"); 
			$("#dlsb").click(function(){ window.open(coba1); });
			});
			
			$('a[href^="https://www.fembed.com"]').each(function(){ 
			var coba2 = $(this).attr("href").replace(/http.+fembed.com/,"http://ouo.io/qs/GGytQtE4?s=www.fembed.com"); 
			$(this).attr("href", "#"); 
			$(this).attr("id", "dlfm"); 
			$("#dlfm").click(function(){ window.open(coba2); });
			});
		
		});
	}

var readTokenFromResponse = function(response, attr) {
        return $(response).find('tr th:contains(' + attr + ')').parent().find('td').text()
}
jQuery(function($) {
  $("#rss-feeds").rss("https://www.blogger.com/feeds/7486822895993461897/posts/default?max-results=1&start-index=1", {
          entryTemplate: "<ul style='display:none'>"+
							"<div id='url'>{url}</div>"+
						//	"<div id='author'>{author}</div>"+
						//	"<div id='date'>{date}</div>"+
							"<div id='title'>{title}</div>"+
						//	"<div id='shortBody'>{shortBody}</div>"+
						//	"<div id='bodyPlain'>{bodyPlain}</div>"+
							"<div id='shortBodyPlain'>{shortBodyPlain}</div>"+
						//	"<div id='teaserImage'>{teaserImage}</div>"+
							"<div id='teaserImageUrl'>{teaserImageUrl}</div>"+
						//	"<div id='index'>{index}</div>"+
						//	"<div id='totalEntries'>{totalEntries}</div>"+
						//	"<div id='body'>{body}</div>"+
						  "</ul>", 
          support: false, 
          tokens: {
            year: function(entry, tokens) {
              return new Date(entry.publishedDate).getFullYear()
            }
          }
  },
		 function callback() {ngonsole();}
  )
})
