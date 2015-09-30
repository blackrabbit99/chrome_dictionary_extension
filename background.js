(function (chrome) {
  var PageObserver = function(){
    var options = {
      url: {
        word: 'http://thefreedictionary.com/',
        idiom: 'http://idioms.thefreedictionary.com/'
      },
      menuItem: {
        context: 'selection',
        title: 'Find definition'
      },
      popup: {
        type: 'popup',
        width: 700,
        height: 500
      }
    };
    var bindEvents = function(){
        chrome.runtime.onInstalled.addListener(attachContextMenu);
        chrome.contextMenus.onClicked.addListener(openPopup);
    };

    var attachContextMenu = function(){
      var context = options.menuItem.context;
      var title = options.menuItem.title;
      var id = chrome.contextMenus.create({
        "title": title,
        "contexts":[context],
        "id": "context" + context
      });
    };

    var getUrl = function(text){
      var isWord = text.split(' ').length === 1;
      var url = isWord ? options.url.word : options.url.idiom;

      url+= isWord ? text : text.split(' ').join('+');

      alert(url);
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
