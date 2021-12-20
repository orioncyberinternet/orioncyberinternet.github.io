<?php
/* -----------------------------------------------------
Simple PHP script for Sending Telegram Bot Message
~ Iky | https://www.wadagizig.com
------------------------------------------------------ */

function sendMessage($telegram_id, $message_text, $secret_token) {

    $url = "https://api.telegram.org/bot" . $secret_token . "/sendMessage?parse_mode=markdown&chat_id=" . $telegram_id;
    $url = $url . "&text=" . urlencode($message_text);
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
}

/*----------------------
only basic POST method :
-----------------------*/
$telegram_id = 162655829;
$nama = $_POST ['nama'];
$hp = $_POST ['hp'];
$message_text = $nama.'dan'.$hp;

/*--------------------------------
Isi TOKEN dibawah ini: 
--------------------------------*/
$secret_token = "1163603314:AAGAVi2BTVM7hzNkKVVMWMw-AlH_PaFUqLE";
sendMessage($telegram_id, $message_text, $secret_token);

echo "<script>alert('Pesan berhasil terkirim!'); window.location.href = './';</script>";
?>