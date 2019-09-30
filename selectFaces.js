window.onload = function() {
  const faceElement = document.querySelector('#jemoticon');

  function select(state) {
    return [state.face, state.color]
  };
  
  let currentValue
  function handleChange() {
    let previousValue = currentValue; 
    [currentFace, currentColor] = select(store.getState());
  
    if (previousValue !== currentFace) {
      faceElement.innerText = currentFace;
      faceElement.style.backgroundColor = currentColor;
    }
  }
  
  store.subscribe(handleChange);

  document.querySelector('#bear')
    .addEventListener('click', function() {
      store.dispatch({ type: 'BEAR'});
    });

  document.querySelector('#sheep')
    .addEventListener('click', function() {
      store.dispatch({ type: 'SHEEP'});
    });

  document.querySelector('#fliptable')
    .addEventListener('click', function() {
      store.dispatch({ type: 'FLIP_TABLE'});
    });

  document.querySelector('#lennyface')
    .addEventListener('click', function() {
      store.dispatch({ type: 'LENNY_FACE'});
    });
}