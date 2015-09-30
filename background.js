(function (chrome) {
  var PageObserver = function(){
    var options = {
      url: {
        word: 'http://www.thefreedictionary.com/',
        idiom: 'http://idioms.thefreedictionary.com/'
      }
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

    var getUrl = function(text){
      var isWord = text.split(' ').length > 1;

      var url = isWord ? options.url.word : options.url.idiom;

      url+= isWord ? text : text.split(' ').join('+');

      return url;
    };

    var openPopup = function(info, tab){
      var sText = info.selectionText;
      chrome.windows.create({
        'url': getUrl(sText),
        'type': 'popup',
        width: 500,
        height: 700,
      }, Function.prototype);
    };

    bindEvents();

  };

  pageObserver = new PageObserver();
})(chrome);
