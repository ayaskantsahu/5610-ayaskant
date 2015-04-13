<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>CS5610</title>
	<meta name="description" content="">
	<meta name="author" content=" Made by Ayaskant">
    <meta http-equiv="X-UA-Compatible" content="IE=9" />


	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- PT Sans -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600&subset=latin,latin-ext' rel='stylesheet' type='text/css'>

	<!-- Crete Roung -->
	<link href='http://fonts.googleapis.com/css?family=Crete+Round&subset=latin,latin-ext' rel='stylesheet' type='text/css'>

	<!-- CSS
  ================================================== -->
  	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/base.css">
	<link rel="stylesheet" href="css/skeleton.css">
	<link rel="stylesheet" href="css/layout.css">

	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
	<script type="text/javascript" src="javascript/validate.js"></script>
	<script type="text/javascript" src="javascript/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" type="text/css" href="javascript/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
	<script type="text/javascript">
		$(document).ready(function() {
				$("a[rel=example_group]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
		});
	</script>

</head>
<body>


	<header>			
		<nav>
			<div class='mycontainer'>
				<div class='five columns logo'>
					<a href='www.linkedin.com/in/sahuayaskant'><h3>Ayaskant Sahu</h3></a>
				</div>

				<div class='eleven columns'>
					<ul class='mainMenu'>
						<li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
                        <li><a href="statistics/" target="_blank">Statistics</a></li>
                        <li><a href="source/" target="_blank">Source</a></li>
                        <li><a href="search/" target="_blank">Search</a></li>
                        <li><a href="searchtree/" target="_blank">SearchTree</a></li>
                        <li><a href="textview/" target="_blank">TextView</a></li>
                        <li><a href="filelist.aspx" target="_blank">FileList</a></li>
                        <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
                        <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
                        <li><a href="blog/" target="_blank">Blog</a></li>
                        <li><a href="experiments/index.htm" target="_blank">Experiments</a></li>
                        <li><a href="https://github.com/ayaskantsahu/5610-ayaskant" target="_blank">Github</a></li>
					</ul>
				</div>
			</div>
		</nav>

		<div class='mycontainer'>
			<div class='slogan'>
				<div class='ten columns'>
					<img src="me.png" width="250" height="250"/>
				</div>

				<div class='six columns'>
					<h4>Welcome!!</h4>
					<p>This is my responsive homepage and it is built without using bootstrap. Media queries have been used instead.</p>
					<a href='https://github.com/ayaskantsahu/5610-ayaskant/tree/master/css' class='button medium green'>See the code</a>
				</div>
			</div>
		</div>	
	</header>


	<div class='clear'></div>
	<div class='clear'></div>


	<div class='mycontainer'>

		<div class='one-third column'>
			<img src='images/misc/about_us.png'>
			<h3>About Me</h3>
			<p>I am currently pursuing my Masters in Computer Science degree and this is my final semester. I have prior work experience in Java/J2EE and am looking forward to strengthen my web development skills.</p>
		</div>


		<div class='one-third column'>
			<img src='images/misc/team.png'>
			<h3>The Course</h3>
			<p>This home page is developed as part of assignments for course CS 5610 under Prof. JOSE ANNUNZIATO. We are learning the latest web technologies as part of this course.</p>
		</div>



		<div class='one-third column'>
			<img src='images/misc/goals.png'>
			<h3>Goals</h3>
			<p>The aim of this course is to learn web development skills and get introduced to latest technologies in web/javascript world. I hope to learn and utlize HTML 5, CSS 3, Angular JS, Node JS and MongoDB in my experiments as well as the final project.</p>
		</div>
		
	</div>

	<div class='clear'></div>

	<footer>
		<div class='mycontainer'>
			
			<div class='eight columns'>
				<h5>Thank you for visiting my page</h5>
				<p></p>
			</div>

			<div class='four columns social'>
				<h5>Social media</h5>
				<a href='https://github.com/ayaskantsahu'><img src='images/social/github.png'></a>
				<a href='https://www.facebook.com/ayaskant.sahu.1'><img src='images/social/facebook.png'></a>
				<a href='https://twitter.com/ayaskant_S'><img src='images/social/twitter.png'></a>
				<a href='www.linkedin.com/in/sahuayaskant'><img src='images/social/linkedin.png'></a>
			</div>

			<div class='four columns'>
				<h5>Get in touch</h5>
				<p>Drop me a line on:
					<a href='mailto:ayaskant@ccs.neu.edu'>ayaskant@ccs.neu.edu</a></p>
			</div>


		<a id='top' href='#'>&uarr;</a>	
		</div>
	</footer>


	<script type="text/javascript">
		var toper = $('a#top');


		$(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                toper.fadeIn( 200 );
            } else {
                toper.fadeOut( 200 );
            }
        });

         toper.click(function(){
        	$('html, body').animate({scrollTop:0}, 500);	        	
        	return false;
    	}); 
	</script>


</body>
</html>