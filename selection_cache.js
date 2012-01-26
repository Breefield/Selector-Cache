var selectionCache = function(selection, refresh) {

  // Elements
  if(typeof this.elements == 'undefined') {
    this.elements = [];
  }

  if(typeof this.elements[selection] == 'undefined') {
    this.elements[selection] = $(selection);
  }

  if(refresh) {
    this.elements[selection] = $(selection);
  }

  return this.elements[selection];
}

window._$ = selectionCache;