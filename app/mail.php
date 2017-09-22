<?php 

	$headers = 'From: info@coffeein.imonlyone.ru
' .
                'Reply-To: wc34fun@mail.ru
' .
                'X-Mailer: PHP/';

	$theme = "Телефон: ".$_POST['phone']."  Заявка на ".$_POST['form'];

	$letter ="Телефон: ".$_POST['phone']."\r\n"."Заявка на ".$_POST['form']."\r\n";
	if(!empty($_POST['mail'])) $letter .="Почта: ".$_POST['mail']."\r\n";
	if(!empty($_POST['message'])) $letter .="Сообщение: ".$_POST['message']."\r\n";

	echo $letter ."\r\n";
	if (mail("wc34fun@mail.ru", $theme, $letter, $headers)){
		echo "fine";
		//header("Location: /testform/thankyou.php");
	} else {
		echo "error";
		//header("Location: /testform");
	}

//} else {
	//header("Location: /testform");
//}

?>