function test() {
    alert('backgrundjs');
}

// 这是监听消息
chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    if(request.greeting =="hello") {
      sendResponse({farewell:"goodbye"});
    }
});