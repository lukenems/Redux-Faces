const INITIAL_STATE = { face: "┴┬┴┤( ͡° ͜ʖ├┬┴┬" };

function faceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BEAR":
      return { ...state, face: "(๏㉨๏)" };
    case "SHEEP":
      return { ...state, face: "{ @⁰ꈊ⁰@ }" };
    case "FLIP_TABLE":
      return { ...state, face: "┻━┻ ︵﻿ ¯_༼ᴼل͜ᴼ༽_/¯ ︵ ┻━┻" };
    case "LENNY_FACE":
      return { ...state, face: "┴┬┴┤( ͡° ͜ʖ├┬┴┬" };

    default:
      return state;
  }
}

const store = Redux.createStore(faceReducer);
