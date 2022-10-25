var getElementsByClassName = function(className) {
  var elementsWithClassName = [];

  var helperFunction = function (element) {
    if (element.classList && element.classList.contains(className)) {
      elementsWithClassName.push(element);
    }

    if (element.hasChildNodes()) {
      var childElements = element.childNodes;
      for (var i = 0; i < childElements.length; i++) {
        helperFunction(childElements[i]);
      }
    }

  };
  helperFunction(document.body);

  return elementsWithClassName;
};