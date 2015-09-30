(function (chrome) {
  var PageObserver = function(){
    var options = {
      url: 'http://www.thefreedictionary.com/'
    };
    var bindEvents = function(){
        chrome.runtime.onInstalled.addListener(attachContextMenu);
        chrome.contextMenus.onClicked.addListener(openPopup);
    };

    var attachContextMenu = function(){
      var context = "selection";
      var title = "Google for Selected Text";
      var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": "context" + context});
    };

    var openPopup = function(info, tab){
      var sText = info.selectionText;
      chrome.windows.create({
        'url': options.url + sText,
        'type': 'popup',
        width: 500,
        height: 700,
      }, Function.prototype);
    };


    bindEvents();

  };

  pageObserver = new PageObserver();
})(chrome);
// (function(){
//   chrome.runtime.onInstalled.addListener(function() {
//     var context = "selection";
//     var title = "Google for Selected Text";
//     var id = chrome.contextMenus.create({"title": title, "contexts":[context],
//                                            "id": "context" + context});
//   });
//
// })()
//
//
//
//
//
// // add click event
// chrome.contextMenus.onClicked.addListener(onClickHandler);
//
// // The onClicked callback function.
// function onClickHandler(info, tab) {
//   var sText = info.selectionText;
//   chrome.windows.create({
//     'url': 'http://www.thefreedictionary.com/' + sText,
//     'type': 'popup',
//     width: 500,
//     height: 700,
//   }, function(window) {});
// };
