<?php
session_start();
session_destroy();
if (isset($_SERVER['HTTP_COOKIE'])) {
	$cookies = explode(';', $_SERVER['HTTP_COOKIE']);
	foreach($cookies as $cookie) {
	   $parts = explode('=', $cookie);
	   $name = trim($parts[0]);
	   setcookie($name, '', time()-1000);
	   setcookie($name, '', time()-1000, '/');
	}  
}
echo "<script type='text/javascript'>";
echo "alert('Thank you for visiting. All cookies have been deleted :)');";
echo "document.location = 'index.html';</script>";
?>