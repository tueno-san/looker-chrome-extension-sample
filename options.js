function Save() {
  var message = document.getElementById('input_message').value;  // テキストボックス（input_message）に入力された文字列をmessage変数に格納
 
   var message2 = document.getElementById('input_message2').value;  // テキストボックス（input_message）に入力された文字列をmessage変数に格納

   var message3 = document.getElementById('input_message3').value;  // テキストボックス（input_message）に入力された文字列をmessage変数に格納

 var message4 = document.getElementById('input_message4').value;  // テキストボックス（input_message）に入力された文字列をmessage変数に格納

var message5 = document.getElementById('input_message5').value;  // テキストボックス（input_message）に入力された文字列をmessage変数に格納


  chrome.storage.local.set({'Alertmsg': message}, function () {
  });  // Alertキーとmessageの文字列を対にして記録
  
  chrome.storage.local.set({'Alertmsg2': message}, function () {
  });  // Alertキーとmessageの文字列を対にして記録
  
    chrome.storage.local.set({'Alertmsg3': message}, function () {
  });  // Alertキーとmessageの文字列を対にして記録

  chrome.storage.local.set({'Alertmsg4': message}, function () {
  });  // Alertキーとmessageの文字列を対にして記録
  chrome.storage.local.set({'Alertmsg5': message}, function () {
  });  // Alertキーとmessageの文字列を対にして記録


}
 
function Load() {
  chrome.storage.local.get('Alertmsg', function (items) {
    document.getElementById('input_message').value = items.Alertmsg;  // Alertmsgキーと対に記録された文字列を、idがinput_messageのテキストボックスに出力
  });
    chrome.storage.local.get('Alertmsg2', function (items) {
    document.getElementById('input_message2').value = items.Alertmsg2;  // Alertmsgキーと対に記録された文字列を、idがinput_messageのテキストボックスに出力
  });
     chrome.storage.local.get('Alertmsg3', function (items) {
    document.getElementById('input_message3').value = items.Alertmsg3;  // Alertmsgキーと対に記録された文字列を、idがinput_messageのテキストボックスに出力
  });
     chrome.storage.local.get('Alertmsg4', function (items) {
    document.getElementById('input_message4').value = items.Alertmsg4;  // Alertmsgキーと対に記録された文字列を、idがinput_messageのテキストボックスに出力
  });
    chrome.storage.local.get('Alertmsg5', function (items) {
    document.getElementById('input_message5').value = items.Alertmsg5;  // Alertmsgキーと対に記録された文字列を、idがinput_messageのテキストボックスに出力
  });

}
 
document.addEventListener('DOMContentLoaded', Load);  // オプションページ（options.html）の読み込みと解析が完了したらLoad関数を実行
 
document.getElementById('save_button').addEventListener('click', Save);　　// 保存ボタン（save_button）がク