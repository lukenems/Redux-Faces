const INITIAL_STATE = { face: "┴┬┴┤( ͡° ͜ʖ├┬┴┬", color: "silver" };

function faceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BEAR":
      return { ...state, face: "(๏㉨๏)", color: "brown" };
    case "SHEEP":
      return { ...state, face: "{ @⁰ꈊ⁰@ }", color: "beige" };
    case "FLIP_TABLE":
      return { ...state, face: "┻━┻ ︵﻿ ¯_༼ᴼل͜ᴼ༽_/¯ ︵ ┻━┻", color: "yellow" };
    case "LENNY_FACE":
      return { ...state, face: "┴┬┴┤( ͡° ͜ʖ├┬┴┬", color: "silver" };

    default:
      return state;
  }
}

const store = Redux.createStore(faceReducer);
