var selectionCache = function(selection, alias) {

  // Elements
  if(typeof this.elements == 'undefined') {
    this.elements = [];
  }

  if(typeof this.alias == 'undefined') {
    this.alias = {};
  }

  if(typeof selection == 'undefined' && typeof alias == 'undefined') {
    return this.alias;
  }

  if(typeof this.elements[selection] == 'undefined') {
    this.elements[selection] = $(selection);
  }

  if(typeof alias == 'string') {
    this.alias[alias] = this.elements[selection];
  }

  return this.elements[selection];
}

window._$ = selectionCache;