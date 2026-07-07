<?php
$name = $_POST['name-contact'];
$phone = $_POST['phone-contact'];
$email = $_POST['email-contact'];
$date = $_POST['date-contact'];
$request = $_POST['request-contact'];
?>
<?php
//Nhúng thư viện phpmailer
require_once('class.phpmailer.php');
require_once('class.smtp.php');
//Khởi tạo đối tượng
$mail = new PHPMailer();

// $mail->AddAddress("sgn.it@his-world.com");
$mail->AddAddress("la.thikimanh@his-world.com");

//Thiết lập email nhận email hồi đáp
//nếu người nhận nhấn nút Reply
$mail->AddReplyTo("sgn.it@his-world.com", "Nguyễn Hữu Phúc");

/*=====================================
	* THIET LAP NOI DUNG EMAIL FOR OPERATOR
	*=====================================*/
//Thiết lập tiêu đề

//Thiết lập định dạng font chữ
$mail->CharSet = "utf-8";
//Thiết lập nội dung chính của email
$mail->IsSMTP();                           // telling the class to use SMTP
$mail->Debugoutput = 'html';
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->Host       = "smtp.gmail.com"; // set the SMTP server
$mail->Port       = 587;                    // set the SMTP port
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username   = "songhan.customercare@gmail.com"; // SMTP account username
$mail->Password   = "Songh@n104";        // SMTP account password
$mail->IsHTML(true);
// $mail->Subject = "Thông tin liên hệ tại trang Women Day Promotion";
$mail->Subject = '=?UTF-8?B?' . base64_encode('Kagoshima Online Experience') . '?=';
$body = "<br><br>This customer wants to have consultant about <strong>Kagoshima Online Experience</strong>. <br> Please contact him/her for more information, thank you. <br> <br> <br>";
$body .= "<quote><b><span style='color:red'>THÔNG TIN KHÁCH HÀNG</span><br/></b>
		<ul>
			<li><b>Họ tên khách hàng:</b> $name </li>
			<li><b>Số điện thoại:</b> $phone </li>
			<li><b>Địa chỉ email:</b> $email </li>
			<li><b>Yêu cầu khác:</b> $request </li>
		</ul></quote>";
$mail->Body = $body;

if (!$mail->Send()) {
	$error = $mail->ErrorInfo;
?>
<script>
alert("Error: " + < ? php echo $error ? > );
</script>
<?php
} else {
?>
<script>
window.location = "../../thank-you.html";
</script>
<?php
}
?>