<?php
session_start();
if (isset($_POST['state'])) {
     if ($_POST['state'] == 'register') {
		$name = htmlspecialchars(trim($_POST['first_name'])) . ' ' . htmlspecialchars(trim($_POST['last_name']));
		$_SESSION['email'] = $_POST['email'];
		$_SESSION['password'] = password_hash(htmlspecialchars(trim($_POST['password'])), PASSWORD_BCRYPT);
		echo "<script type='text/javascript'>";
		echo "alert('Welcome " . $name . "!. Sign in to continue.');";
		echo "document.location = 'index.html';</script>";
	 }

	 else {
		$email = htmlspecialchars(trim($_POST['in_email']));
		$pass = htmlspecialchars(trim($_POST['in_pass']));
		if ($email == $_SESSION['email'] && password_verify($pass, $_SESSION['password'])) {
		   setcookie('logged', 'ok');
		   echo "<script type='text/javascript'>";
		   echo "alert('Welcome to the Mac App Store!');";
		   echo "document.location = 'home.html';</script>";
		} else {
			echo "<script type='text/javascript'>";
			echo "alert('Invalid Credentials! Please Try Again!');";
			echo "document.location = 'index.html';</script>";
		}
	 }
}
?>