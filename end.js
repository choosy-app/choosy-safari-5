document.addEventListener("contextmenu", function(event) {
  var tag = event.target;
  while(tag !== document && tag.tagName.toLowerCase() !== "a") {
    tag = tag.parentNode;
  }

  if(tag !== document) {
    safari.self.tab.setContextMenuEventUserInfo(event, tag.href);
  } else {
    safari.self.tab.setContextMenuEventUserInfo(event, "");
  }
}, false);
