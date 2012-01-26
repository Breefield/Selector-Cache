// Written by Dustin Hoffman - @breefield

/* selectionCache object
 The selection cache object that wraps around jQuery's native selector
 * @selection - string, the jquery selector
 * @refresh - boolean, do we want to refresh the cached selection?
 */
var selectionCache = function(selection, refresh) {

  // Create storage variable if missing
  if(typeof this.elements == 'undefined') {
    this.elements = [];
  }

  // Make selection and save
  if(typeof this.elements[selection] == 'undefined') {
    this.elements[selection] = $(selection);
  }

  // Refresh if requested
  if(refresh) {
    this.elements[selection] = $(selection);
  }

  // Return seletion
  return this.elements[selection];
}

// Make availible globally
window._$ = selectionCache;