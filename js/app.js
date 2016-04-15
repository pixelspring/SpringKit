// ------------------------------------------------
// APP.JS
//
// (1)  classList.js (shim that fully implements element.classList)
// (2)  Tabby (tabs)
// (3)  Houdini (accordions)
// ------------------------------------------------

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_"))
  || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
    classListProp = "classList"
  , protoProp = "prototype"
  , elemCtrProto = view.Element[protoProp]
  , objCtr = Object
  , strTrim = String[protoProp].trim || function () {
    return this.replace(/^\s+|\s+$/g, "");
  }
  , arrIndexOf = Array[protoProp].indexOf || function (item) {
    var
        i = 0
      , len = this.length
    ;
    for (; i < len; i++) {
      if (i in this && this[i] === item) {
        return i;
      }
    }
    return -1;
  }
  // Vendors: please allow content code to instantiate DOMExceptions
  , DOMEx = function (type, message) {
    this.name = type;
    this.code = DOMException[type];
    this.message = message;
  }
  , checkTokenAndGetIndex = function (classList, token) {
    if (token === "") {
      throw new DOMEx(
          "SYNTAX_ERR"
        , "An invalid or illegal string was specified"
      );
    }
    if (/\s/.test(token)) {
      throw new DOMEx(
          "INVALID_CHARACTER_ERR"
        , "String contains an invalid character"
      );
    }
    return arrIndexOf.call(classList, token);
  }
  , ClassList = function (elem) {
    var
        trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
      , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
      , i = 0
      , len = classes.length
    ;
    for (; i < len; i++) {
      this.push(classes[i]);
    }
    this._updateClassName = function () {
      elem.setAttribute("class", this.toString());
    };
  }
  , classListProto = ClassList[protoProp] = []
  , classListGetter = function () {
    return new ClassList(this);
  }
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
  return this[i] || null;
};
classListProto.contains = function (token) {
  token += "";
  return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
  var
      tokens = arguments
    , i = 0
    , l = tokens.length
    , token
    , updated = false
  ;
  do {
    token = tokens[i] + "";
    if (checkTokenAndGetIndex(this, token) === -1) {
      this.push(token);
      updated = true;
    }
  }
  while (++i < l);

  if (updated) {
    this._updateClassName();
  }
};
classListProto.remove = function () {
  var
      tokens = arguments
    , i = 0
    , l = tokens.length
    , token
    , updated = false
    , index
  ;
  do {
    token = tokens[i] + "";
    index = checkTokenAndGetIndex(this, token);
    while (index !== -1) {
      this.splice(index, 1);
      updated = true;
      index = checkTokenAndGetIndex(this, token);
    }
  }
  while (++i < l);

  if (updated) {
    this._updateClassName();
  }
};
classListProto.toggle = function (token, force) {
  token += "";

  var
      result = this.contains(token)
    , method = result ?
      force !== true && "remove"
    :
      force !== false && "add"
  ;

  if (method) {
    this[method](token);
  }

  if (force === true || force === false) {
    return force;
  } else {
    return !result;
  }
};
classListProto.toString = function () {
  return this.join(" ");
};

if (objCtr.defineProperty) {
  var classListPropDesc = {
      get: classListGetter
    , enumerable: true
    , configurable: true
  };
  try {
    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
  } catch (ex) { // IE 8 doesn't support enumerable:true
    if (ex.number === -0x7FF5EC54) {
      classListPropDesc.enumerable = false;
      objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
    }
  }
} else if (objCtr[protoProp].__defineGetter__) {
  elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

} else {
// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
  "use strict";

  var testElement = document.createElement("_");

  testElement.classList.add("c1", "c2");

  // Polyfill for IE 10/11 and Firefox <26, where classList.add and
  // classList.remove exist but support only one argument at a time.
  if (!testElement.classList.contains("c2")) {
    var createMethod = function(method) {
      var original = DOMTokenList.prototype[method];

      DOMTokenList.prototype[method] = function(token) {
        var i, len = arguments.length;

        for (i = 0; i < len; i++) {
          token = arguments[i];
          original.call(this, token);
        }
      };
    };
    createMethod('add');
    createMethod('remove');
  }

  testElement.classList.toggle("c3", false);

  // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
  // support the second argument.
  if (testElement.classList.contains("c3")) {
    var _toggle = DOMTokenList.prototype.toggle;

    DOMTokenList.prototype.toggle = function(token, force) {
      if (1 in arguments && !this.contains(token) === !force) {
        return force;
      } else {
        return _toggle.call(this, token);
      }
    };

  }

  testElement = null;
}());

}

}





/*!
 * Tabby v10.0.4: Simple, mobile-first toggle tabs.
 * (c) 2016 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/tabby
 */

(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    define([], factory(root));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory(root);
  } else {
    root.tabby = factory(root);
  }
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

  'use strict';

  //
  // Variables
  //

  var tabby = {}; // Object for public APIs
  var supports = 'querySelector' in document && 'addEventListener' in root && 'classList' in document.createElement('_') && 'onhashchange' in root; // Feature test
  var settings, tab;

  // Default settings
  var defaults = {
    selectorToggle: '[data-tab]',
    selectorToggleGroup: '[data-tabs]',
    selectorContent: '[data-tabs-pane]',
    selectorContentGroup: '[data-tabs-content]',
    toggleActiveClass: 'active',
    contentActiveClass: 'active',
    initClass: 'js-tabby',
    callback: function () {}
  };


  //
  // Methods
  //

  /**
   * A simple forEach() implementation for Arrays, Objects and NodeLists
   * @private
   * @param {Array|Object|NodeList} collection Collection of items to iterate
   * @param {Function} callback Callback function for each iteration
   * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
   */
  var forEach = function (collection, callback, scope) {
    if (Object.prototype.toString.call(collection) === '[object Object]') {
      for (var prop in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, prop)) {
          callback.call(scope, collection[prop], prop, collection);
        }
      }
    } else {
      for (var i = 0, len = collection.length; i < len; i++) {
        callback.call(scope, collection[i], i, collection);
      }
    }
  };

  /**
   * Merge defaults with user options
   * @private
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   * @returns {Object} Merged values of defaults and options
   */
  var extend = function () {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function (obj) {
      for ( var prop in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
          // If deep merge and property is an object, merge properties
          if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
            extended[prop] = extend( true, extended[prop], obj[prop] );
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;

  };

  /**
   * Get the closest matching element up the DOM tree
   * @param {Element} elem Starting element
   * @param {String} selector Selector to match against (class, ID, or data attribute)
   * @return {Boolean|Element} Returns false if not match found
   */
  var getClosest = function ( elem, selector ) {

    // Variables
    var firstChar = selector.charAt(0);
    var attribute, value;

    // If selector is a data attribute, split attribute from value
    if ( firstChar === '[' ) {
      selector = selector.substr(1, selector.length - 2);
      attribute = selector.split( '=' );

      if ( attribute.length > 1 ) {
        value = true;
        attribute[1] = attribute[1].replace( /"/g, '' ).replace( /'/g, '' );
      }
    }

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

      // If selector is a class
      if ( firstChar === '.' ) {
        if ( elem.classList.contains( selector.substr(1) ) ) {
          return elem;
        }
      }

      // If selector is an ID
      if ( firstChar === '#' ) {
        if ( elem.id === selector.substr(1) ) {
          return elem;
        }
      }

      // If selector is a data attribute
      if ( firstChar === '[' ) {
        if ( elem.hasAttribute( attribute[0] ) ) {
          if ( value ) {
            if ( elem.getAttribute( attribute[0] ) === attribute[1] ) {
              return elem;
            }
          } else {
            return elem;
          }
        }
      }

      // If selector is a tag
      if ( elem.tagName.toLowerCase() === selector ) {
        return elem;
      }

    }

    return null;

  };

  /**
   * Stop YouTube, Vimeo, and HTML5 videos from playing when leaving the slide
   * @private
   * @param  {Element} content The content container the video is in
   * @param  {String} activeClass The class asigned to expanded content areas
   */
  var stopVideos = function ( content, activeClass ) {
    if ( !content.classList.contains( activeClass ) ) {
      var iframe = content.querySelector( 'iframe');
      var video = content.querySelector( 'video' );
      if ( iframe ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }
      if ( video ) {
        video.pause();
      }
    }
  };

  /**
   * Toggle tab toggle active state
   * @private
   * @param  {Node}   toggle   The toggle element
   * @param  {Object} settings
   */
  var toggleToggles = function ( toggle, settings ) {

    // Variables
    var toggleGroup = getClosest( toggle, settings.selectorToggleGroup ); // The parent for the toggle group
    if ( !toggleGroup ) return;
    var toggles = toggleGroup.querySelectorAll( settings.selectorToggle ); // The toggles in the group
    var toggleList = getClosest( toggle, 'li' ); // Toggle list item (if applicable)

    // Hide each toggle
    forEach(toggles, function (toggle) {

      // Toggle class
      toggle.classList.remove( settings.toggleActiveClass );

      // If toggle is a list item, toggle class
      var toggleList = getClosest( toggle, 'li' );
      if ( toggleList ) {
        toggleList.classList.remove( settings.toggleActiveClass );
      }

    });

    // Show the selected toggle
    toggle.classList.add( settings.toggleActiveClass );
    if ( toggleList ) {
      toggleList.classList.add( settings.toggleActiveClass );
    }

  };

  /**
   * Toggle tab active state
   * @private
   * @param  {String} tabID    The ID of the tab to activate
   * @param  {Object} settings
   */
  var toggleTabs = function ( tabID, settings ) {

    // Variables
    var tab = document.querySelector( tabID ); // The selected tab
    if ( !tab ) return;
    var tabGroup = getClosest( tab, settings.selectorContentGroup ); // The parent for the tab group
    if ( !tabGroup ) return;
    var tabs = tabGroup.querySelectorAll( settings.selectorContent ); // The tabs in the group

    // Hide each tab
    forEach(tabs, function (tab) {
      stopVideos(tab);
      tab.classList.remove( settings.contentActiveClass );
    });

    // Show the selected tab
    tab.classList.add( settings.contentActiveClass );

  };

  /**
   * Show a tab and hide all others
   * @public
   * @param  {Element} toggle The element that toggled the show tab event
   * @param  {String}  tabID The ID of the tab to show
   * @param  {Object}  options
   */
  tabby.toggleTab = function ( toggle, tabID, options ) {

    // Selectors and variables
    var toggleSettings = extend( settings || defaults, options || {} );  // Merge user options with defaults
    var tabs = document.querySelectorAll(tabID); // Get tab content

    // Toggle visibility of the toggles and tabs
    toggleToggles(toggle, toggleSettings);
    toggleTabs( tabID, toggleSettings );

    // Run callbacks after toggling tab
    toggleSettings.callback( toggle, tabID );

  };

  /**
   * Handle has change event
   * @private
   */
  var hashChangeHandler = function () {

    // Get hash from URL
    var hash = root.location.hash;

    // If clicked tab is cached, reset it's ID
    if ( tab ) {
      tab.id = tab.getAttribute( 'data-tab-id' );
      tab = null;
    }

    // If there's a URL hash, activate tab with matching ID
    if ( !hash ) return;
    var toggle = document.querySelector('[data-tab][href*="' + hash + '"]');
    tabby.toggleTab( toggle, hash );

  };

  /**
   * Handle toggle click events
   * @private
   */
  var clickHandler = function (event) {

    // Check if event target is a tab toggle, and that it's not the currently active toggle
    var toggle = getClosest( event.target, settings.selectorToggle );
    if ( !toggle || !toggle.hash || toggle.hash === root.location.hash ) return;

    // Get the tab content
    tab = document.querySelector( toggle.hash );

    // If tab content exists, save the ID as a data attribute and remove it (prevents scroll jump)
    if ( !tab ) return;
    tab.setAttribute( 'data-tab-id', tab.id );
    tab.id = '';

  };

  /**
   * Destroy the current initialization.
   * @public
   */
  tabby.destroy = function () {
    if ( !settings ) return;
    document.documentElement.classList.remove( settings.initClass );
    document.removeEventListener('click', clickHandler, false);
    root.removeEventListener('hashchange', hashChangeHandler, false);
    settings = null;
    tab = null;
  };

  /**
   * Initialize Tabby
   * @public
   * @param {Object} options User settings
   */
  tabby.init = function ( options ) {

    // feature test
    if ( !supports ) return;

    // Destroy any existing initializations
    tabby.destroy();

    // Merge user options with defaults
    settings = extend( defaults, options || {} );

    // Add class to HTML element to activate conditional CSS
    document.documentElement.classList.add( settings.initClass );

    // Listen for all click events
    document.addEventListener('click', clickHandler, false);
    root.addEventListener('hashchange', hashChangeHandler, false);

    // If URL has a hash, activate hashed tab by default
    hashChangeHandler();

  };


  //
  // Public APIs
  //

  return tabby;

});

// ----------------------------------------------
// Call Tabby Tabs:
// ----------------------------------------------
tabby.init();















/*!
 * Houdini v8.2.0: A simple collapse-and-expand script
 * (c) 2016 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/houdini
 */

(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    define([], factory(root));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory(root);
  } else {
    root.houdini = factory(root);
  }
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

  'use strict';

  //
  // Variables
  //

  var houdini = {}; // Object for public APIs
  var supports = 'querySelector' in document && 'addEventListener' in root && 'classList' in document.createElement('_'); // Feature test
  var settings;

  // Default settings
  var defaults = {
    selector: '[data-collapse]',
    toggleActiveClass: 'active',
    contentActiveClass: 'active',
    initClass: 'js-houdini',
    callback: function () {}
  };


  //
  // Methods
  //

  /**
   * A simple forEach() implementation for Arrays, Objects and NodeLists
   * @private
   * @param {Array|Object|NodeList} collection Collection of items to iterate
   * @param {Function} callback Callback function for each iteration
   * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
   */
  var forEach = function (collection, callback, scope) {
    if (Object.prototype.toString.call(collection) === '[object Object]') {
      for (var prop in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, prop)) {
          callback.call(scope, collection[prop], prop, collection);
        }
      }
    } else {
      for (var i = 0, len = collection.length; i < len; i++) {
        callback.call(scope, collection[i], i, collection);
      }
    }
  };

  /**
   * Merge defaults with user options
   * @private
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   * @returns {Object} Merged values of defaults and options
   */
  var extend = function () {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function (obj) {
      for ( var prop in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
          // If deep merge and property is an object, merge properties
          if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
            extended[prop] = extend( true, extended[prop], obj[prop] );
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;

  };

  /**
   * Get the closest matching element up the DOM tree
   * @param {Element} elem Starting element
   * @param {String} selector Selector to match against (class, ID, or data attribute)
   * @return {Boolean|Element} Returns false if not match found
   */
  var getClosest = function ( elem, selector ) {

    // Variables
    var firstChar = selector.charAt(0);
    var attribute, value;

    // If selector is a data attribute, split attribute from value
    if ( firstChar === '[' ) {
      selector = selector.substr(1, selector.length - 2);
      attribute = selector.split( '=' );

      if ( attribute.length > 1 ) {
        value = true;
        attribute[1] = attribute[1].replace( /"/g, '' ).replace( /'/g, '' );
      }
    }

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

      // If selector is a class
      if ( firstChar === '.' ) {
        if ( elem.classList.contains( selector.substr(1) ) ) {
          return elem;
        }
      }

      // If selector is an ID
      if ( firstChar === '#' ) {
        if ( elem.id === selector.substr(1) ) {
          return elem;
        }
      }

      // If selector is a data attribute
      if ( firstChar === '[' ) {
        if ( elem.hasAttribute( attribute[0] ) ) {
          if ( value ) {
            if ( elem.getAttribute( attribute[0] ) === attribute[1] ) {
              return elem;
            }
          } else {
            return elem;
          }
        }
      }

      // If selector is a tag
      if ( elem.tagName.toLowerCase() === selector ) {
        return elem;
      }

    }

    return null;

  };

  /**
   * Stop YouTube, Vimeo, and HTML5 videos from playing when leaving the slide
   * @private
   * @param  {Element} content The content container the video is in
   * @param  {String} activeClass The class asigned to expanded content areas
   */
  var stopVideos = function ( content, activeClass ) {
    if ( !content.classList.contains( activeClass ) ) {
      var iframe = content.querySelector( 'iframe');
      var video = content.querySelector( 'video' );
      if ( iframe ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }
      if ( video ) {
        video.pause();
      }
    }
  };

  var bringFocus = function ( content, activeClass ) {
    if ( !content.classList.contains( activeClass ) ) return;
    content.focus();
  };

  /**
   * Close all content areas in an expand/collapse group
   * @private
   * @param  {Element} toggle The element that toggled the expand or collapse
   * @param  {Object} settings
   */
  var closeCollapseGroup = function ( toggle, settings ) {
    if ( !toggle.classList.contains( settings.toggleActiveClass ) && toggle.hasAttribute('data-group') ) {

      // Get all toggles in the group
      var groupName = toggle.getAttribute('data-group');
      var group = document.querySelectorAll('[data-group="' + groupName + '"]');

      // Deactivate each toggle and it's content area
      forEach(group, function (item) {
        var content = document.querySelector( item.getAttribute('data-collapse') );
        item.classList.remove( settings.toggleActiveClass );
        content.classList.remove( settings.contentActiveClass );
      });

    }
  };

  /**
   * Toggle the collapse/expand widget
   * @public
   * @param  {Element} toggle The element that toggled the expand or collapse
   * @param  {String} contentID The ID of the content area to expand or collapse
   * @param  {Object} options
   * @param  {Event} event
   */
  houdini.toggleContent = function (toggle, contentID, options) {

    var settings = extend( settings || defaults, options || {} );  // Merge user options with defaults
    var content = document.querySelector(contentID); // Get content area

    // Toggle collapse element
    closeCollapseGroup(toggle, settings); // Close collapse group items
    toggle.classList.toggle( settings.toggleActiveClass );// Change text on collapse toggle
    content.classList.toggle( settings.contentActiveClass ); // Collapse or expand content area
    stopVideos( content, settings.contentActiveClass ); // If content area is closed, stop playing any videos
    bringFocus( content, settings.contentActiveClass ); // If content area is open, bring focus

    settings.callback( toggle, contentID ); // Run callbacks after toggling content

  };

  /**
   * Handle toggle click events
   * @private
   */
  var eventHandler = function (event) {
    var toggle = getClosest(event.target, settings.selector);
    if ( toggle ) {
      if ( toggle.tagName.toLowerCase() === 'a' || toggle.tagName.toLowerCase() === 'button' ) {
        event.preventDefault();
      }
      var contentID = toggle.hasAttribute('data-collapse') ? toggle.getAttribute('data-collapse') : toggle.parentNode.getAttribute('data-collapse');
      houdini.toggleContent( toggle, contentID, settings );
    }
  };

  /**
   * Add a11y attributes to the DOM
   * @param {boolean} remove If true, remove a11y attributes from the DOM
   */
  var addAttributes = function ( remove ) {

    // Get all toggles
    var toggles = document.querySelectorAll( settings.selector );

    // For each toggle
    forEach(toggles, function (toggle) {

      // Get the target content area
      var content = document.querySelector( toggle.getAttribute( 'data-collapse' ) );

      // Remove attributes
      if ( remove ) {
        toggle.removeAttribute( 'aria-hidden' );
        if ( content ) {
          content.removeAttribute( 'tabindex' );
        }
        return;
      }

      // Add attributes
      toggle.setAttribute( 'aria-hidden', 'true' );
      if ( content ) {
        content.setAttribute( 'tabindex', '-1' );
      }

    });

  };

  /**
   * Destroy the current initialization.
   * @public
   */
  houdini.destroy = function () {
    if ( !settings ) return;
    document.documentElement.classList.remove( settings.initClass );
    addAttributes(true);
    document.removeEventListener('click', eventHandler, false);
    settings = null;
  };

  /**
   * Initialize Houdini
   * @public
   * @param {Object} options User settings
   */
  houdini.init = function ( options ) {

    // feature test
    if ( !supports ) return;

    // Destroy any existing initializations
    houdini.destroy();

    // Merge user options with defaults
    settings = extend( defaults, options || {} );

    // Add class to HTML element to activate conditional CSS
    document.documentElement.classList.add( settings.initClass );

    // Add attributes
    addAttributes();

    // Listen for all click events
    document.addEventListener('click', eventHandler, false);

  };


  //
  // Public APIs
  //

  return houdini;

});

// ----------------------------------------------
// Call Houdini:
// ----------------------------------------------
houdini.init();










/*!
 * Drop v11.1.0: Simple, mobile-friendly dropdown menus
 * (c) 2016 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/drop
 */

(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    define([], factory(root));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory(root);
  } else {
    root.drop = factory(root);
  }
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

  'use strict';

  //
  // Variables
  //

  var drop = {}; // Object for public APIs
  var supports = 'querySelector' in document && 'addEventListener' in root && 'classList' in document.createElement('_'); // Feature test
  var isTouch = 'ontouchstart' in document; // Check for touch support
  var settings;

  // Default settings
  var defaults = {
    selector: '[data-dropdown]',
    activeClass: 'active',
    initClass: 'js-drop',
    callback: function () {}
  };


  //
  // Methods
  //

  /**
   * A simple forEach() implementation for Arrays, Objects and NodeLists
   * @private
   * @param {Array|Object|NodeList} collection Collection of items to iterate
   * @param {Function} callback Callback function for each iteration
   * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
   */
  var forEach = function (collection, callback, scope) {
    if (Object.prototype.toString.call(collection) === '[object Object]') {
      for (var prop in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, prop)) {
          callback.call(scope, collection[prop], prop, collection);
        }
      }
    } else {
      for (var i = 0, len = collection.length; i < len; i++) {
        callback.call(scope, collection[i], i, collection);
      }
    }
  };

  /**
   * Merge defaults with user options
   * @private
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   * @returns {Object} Merged values of defaults and options
   */
  var extend = function () {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function (obj) {
      for ( var prop in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
          // If deep merge and property is an object, merge properties
          if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
            extended[prop] = buoy.extend( true, extended[prop], obj[prop] );
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;

  };

  /**
   * Get closest DOM element up the tree that contains a class or data attribute
   * @param  {Element} elem The base element
   * @param  {String} selector The class or data attribute to look for
   * @return {Boolean|Element} False if no match
   */
  var getClosest = function ( elem, selector ) {

    // Variables
    var firstChar = selector.charAt(0);
    var supports = 'classList' in document.documentElement;
    var attribute, value;

    // If selector is a data attribute, split attribute from value
    if ( firstChar === '[' ) {
      selector = selector.substr(1, selector.length - 2);
      attribute = selector.split( '=' );

      if ( attribute.length > 1 ) {
        value = true;
        attribute[1] = attribute[1].replace( /"/g, '' ).replace( /'/g, '' );
      }
    }

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

      // If selector is a class
      if ( firstChar === '.' ) {
        if ( supports ) {
          if ( elem.classList.contains( selector.substr(1) ) ) {
            return elem;
          }
        } else {
          if ( new RegExp('(^|\\s)' + selector.substr(1) + '(\\s|$)').test( elem.className ) ) {
            return elem;
          }
        }
      }

      // If selector is an ID
      if ( firstChar === '#' ) {
        if ( elem.id === selector.substr(1) ) {
          return elem;
        }
      }

      // If selector is a data attribute
      if ( firstChar === '[' ) {
        if ( elem.hasAttribute( attribute[0] ) ) {
          if ( value ) {
            if ( elem.getAttribute( attribute[0] ) === attribute[1] ) {
              return elem;
            }
          } else {
            return elem;
          }
        }
      }

      // If selector is a tag
      if ( elem.tagName.toLowerCase() === selector ) {
        return elem;
      }

    }

    return null;

  };

  /**
   * Close all dropdown menus
   * @param {Object} options Custom settings
   * @public
   */
  drop.closeDrops = function () {

    // Get dropdowns
    var drops = document.querySelectorAll( settings.selector );

    // Close all the dropdowns
    forEach(drops, function (drop) {
      drop.classList.remove( settings.activeClass );
    });

  };

  /**
   * Open a dropdown menu
   * @public
   * @param  {Element} toggle  Element that triggered the expand or collapse
   * @param  {Object}  options Custom settings
   */
  drop.openDrop = function ( toggle, options ) {

    // Selectors and variables
    var settings = extend( settings || defaults, options || {} );  // Merge user options with defaults

    // Close any open dropdown menus
    drop.closeDrops();

    // Open the toggled dropdown menu
    toggle.classList.add( settings.activeClass );

    // Run callbacks after drop toggle
    settings.callback( toggle );

  };

  /**
   * Handle toggle and document click events
   * @param {Event} event
   * @private
   */
  var clickHandler = function (event) {

    // Variables
    var toggle = event.target;
    var menu = getClosest( toggle, settings.selector );

    if ( menu ) {
      // If dropdown menu, do nothing
      return;
    } else {
      // If document body, close open dropdown menus
      drop.closeDrops();
    }

  };

  var focusHandler = function (event) {

    // Variables
    var target = event.target;
    var toggle = getClosest( target, settings.selector );

    // If focused element isn't dropdown, close all dropdowns and end
    if ( !toggle ) {
      drop.closeDrops();
      return;
    }

    // If focused element is currently active dropdown, end
    if ( toggle.classList.contains( settings.activeClass ) ) {
      return;
    }

    // Otherwise, activate the dropdown
    drop.openDrop(toggle, settings);

  };

  var hoverHandler = function (event) {

    // Variables
    var target = event.target;
    var toggle = getClosest( target, settings.selector );

    // If a dropdown menu, activate it
    if ( toggle && !toggle.classList.contains( settings.activeClass ) ) {
      drop.openDrop(toggle, settings); // Open this dropdown

      // Prevent default on touch devices
      if ( isTouch ) {
        event.preventDefault();
      }
    }
  };

  /**
   * Destroy the current initialization.
   * @public
   */
  drop.destroy = function () {

    if ( !settings ) return;

    // Remove init class
    document.documentElement.classList.remove( settings.initClass );

    // Remove event listeners
    document.removeEventListener('click', clickHandler, false);
    document.removeEventListener('focusin', focusHandler, false);
    document.removeEventListener('mouseover', hoverHandler, false);

    // Close all dropdowns
    drop.closeDrops();

    // Reset variables
    settings = null;

  };

  /**
   * Initialize Drop
   * @public
   * @param {Object} options User settings
   */
  drop.init = function ( options ) {

    // feature test
    if ( !supports ) return;

    // Destroy any existing initializations
    drop.destroy();

    // Selectors and variables
    settings = extend( defaults, options || {} ); // Merge user options with defaults
    var toggles = document.querySelectorAll( settings.selector + ' > a' );

    // Add class to HTML element to activate conditional CSS
    document.documentElement.classList.add( settings.initClass );

    // Event listeners
    document.addEventListener('click', clickHandler, false);
    document.addEventListener('focusin', focusHandler, false);
    document.addEventListener('mouseover', hoverHandler, false);
    if ( isTouch ) {
      document.addEventListener('touchstart', hoverHandler, false);
    }

  };


  //
  // Public APIs
  //

  return drop;

});