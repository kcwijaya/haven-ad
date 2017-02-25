 /** Google Analytics **/

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-92609430-1', 'auto');
 ga('send', 'pageview');


 /** Facebook Pixel **/

 !function(f,b,e,v,n,t,s)

 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?

 	n.callMethod.apply(n,arguments):n.queue.push(arguments)};

 	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

 	n.queue=[];t=b.createElement(e);t.async=!0;

 	t.src=v;s=b.getElementsByTagName(e)[0];

 	s.parentNode.insertBefore(t,s)}(window,document,'script',

 		'https://connect.facebook.net/en_US/fbevents.js');


 	fbq('init', '1257816767629646'); 

 	fbq('track', 'PageView');


 	<noscript>

 	<img height="1" width="1" src="https://www.facebook.com/tr?id=1257816767629646&ev=PageView&noscript=1"/>

 	</noscript>


 	window.fbAsyncInit = function() {
 		FB.init({
 			appId      : '418924248440046',
 			xfbml      : true,
 			version    : 'v2.8'
 		});
 		jQuery(document).trigger('FBSDKLoaded');
 		FB.AppEvents.logPageView();

 		FB.Event.subscribe('edge.create', function(response) {
 			console.log("Liked on Facebook");
 			fbq('trackCustom', 'Like on Facebook');
 		});

 	};

 	function share() {
 		FB.ui({
 			method: 'share',
 			href: 'https://www.facebook.com/havenmobile',
 		}, function(response){
 			console.log("Share on Facebook");
 			fbq('trackCustom', 'Share on Facebook');
 		});
 	}



 	(function(d, s, id) {
 		var js, fjs = d.getElementsByTagName(s)[0];
 		if (d.getElementById(id)) return;
 		js = d.createElement(s); js.id = id;
 		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=418924248440046";
 		fjs.parentNode.insertBefore(js, fjs);
 	}(document, 'script', 'facebook-jssdk'));

 	(function(d, s, id) {
 		var js, fjs = d.getElementsByTagName(s)[0];
 		if (d.getElementById(id)) return;
 		js = d.createElement(s); js.id = id;
 		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=418924248440046";
 		fjs.parentNode.insertBefore(js, fjs);
 	}(document, 'script', 'facebook-jssdk'));

 	(function(d, s, id) {
 		var js, fjs = d.getElementsByTagName(s)[0];
 		if (d.getElementById(id)) return;
 		js = d.createElement(s); js.id = id;
 		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=418924248440046";
 		fjs.parentNode.insertBefore(js, fjs);
 	}(document, 'script', 'facebook-jssdk'));

