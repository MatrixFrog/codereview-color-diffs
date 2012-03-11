
(function() {
  var textElem = document.querySelector('pre');
  console.log(textElem);
  var text = textElem.innerHTML;
  textElem.innerHTML = text.replace(/^\+.*$/gm, '<span class=added>$&</span>')
                           .replace(/^-.*$/gm, '<span class=removed>$&</span>')
                           .replace(/^@.*$/gm, '<span class=line-numbers>$&</span>')
                           .replace(/^([iI]ndex:?|diff --git) .*$/gim,
                                    '<span class=filename>$&</span>');
})();
