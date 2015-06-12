"use strict";

var ratingStyle = {

  style: {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: '2rem',
    lineHeight: '2rem',
    color: '#e3e3e3',
    textShadow: '0px 1px 0px #D2D1D1',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
     Prevent flickering while tapping on WebKit
     http://stackoverflow.com/a/3516243/837709
     */
    WebkitTapHighlightColor: 'transparent'
  },

  disabledStyle: {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  focusStyle: {
    outline: 0,
    WebkitAnimation: 'belle-rating-focus 2s',
    borderRadius: 2
  },

  characterStyle: {
    color: '#FFCC00',
    textShadow: '0px 1px 0px #DCB000',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none'
  },

  hoverCharacterStyle: {
    color: '#FFDA46'
  },

  activeCharacterStyle: {
    textShadow: '0px -1px 0px #D6AB00',
    color: '#F3C200',
    position: 'relative',
    top: 1,

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none'
  }

};

export default ratingStyle;
