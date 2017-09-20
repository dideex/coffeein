<?php 
	$account = "wc34fun@mail.ru";
	$headers = 'From: info@localhost
' .
                'Reply-To: '.$account.'
' .
                'X-Mailer: PHP/';

	$theme = "Письмо от ".$_POST['phone'];
	
	$letter ="Телефон: ".$_POST['phone']."\r\n";
	if(!empty($_POST['email'])) $letter .="Email: ".$_POST['email']."\r\n";
	if(!empty($_POST['message'])) $letter .="Письмо: ".$_POST['message']."\r\n";
	if (mail($account, $theme, $letter, $headers)){
		//header("Location: /testform/thankyou.php");
	} else {
		//header("Location: /testform");
	}

//} else {
	//header("Location: /testform");
//}

?>