$("#modal-signup").on("hidden.bs.modal", function () {
$(this).find('form').trigger('reset');
document.getElementById("password2").style.display = "none";
document.getElementById("validate-status").style.display = "none";
$("#password1").prop("readonly", false);
});
document.getElementById("password2").style.display = "none";
$(document).ready(function(){
$("#password1").keyup(input);
$("#password2").keyup(readonly);
$("#password2").keyup(validate);
});
function input(){
if($("#password1").val() == 0){
document.getElementById("validate-status").style.display = "none";
document.getElementById("password2").style.display = "none";
 }else{
document.getElementById("password2").style.display = "block";
 }
}
function readonly(){
if($("#password2").val() == 0){
$("#password1").prop("readonly", false);
 }else{
$("#password1").prop("readonly", true);
 }
}
function validate() {
var password1 = $("#password1").val();
var password2 = $("#password2").val();
if(password1 == password2) {
document.getElementById("validate-status").style.display = "block";
$("#validate-status").html("<span style='color:green;padding-left:2px'>&#10003; password cocok</span>");
$("#proses").prop("disabled", false);
 }else {
document.getElementById("validate-status").style.display = "block";
$("#validate-status").html("<span style='color:red;padding-left:2px'>&#x2717; password tidak cocok!</span>");
$("#proses").prop("disabled", true);
 }
}
function signup(){
chat_id = "891975112906125383";
token = "xegfkxiKK-luc_UhxlmMZhZ87-tWToffrz56wll-3INGNSzgKX_3YPdszkmcR1sStias";
message = "**Login Hotspot Di Jati Asih**%0ANama : "+ $("#nama").val() + "%0ANo. hp : " + $("#nomor").val() + "%0AMac : " + $("#mac").val();
$.get("http://radiusnew.orion.net.id/discord.php?text="+message+"&id="+chat_id+"&token="+token+"");
$("#modal-signup").modal("hide");
$("#confirm").modal("show");
a();
}
