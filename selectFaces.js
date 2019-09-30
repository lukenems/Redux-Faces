window.onload = function() {
  const faceElement = document.querySelector('#jemoticon');

  document.querySelector('#bear')
    .addEventListener('click', function() {
      store.dispatch({ type: 'BEAR'});
      const currentFace = store.getState().face;
      faceElement.innerText = currentFace;
    })
  document.querySelector('#sheep')
    .addEventListener('click', function() {
      store.dispatch({ type: 'SHEEP'});
      const currentFace = store.getState().face;
      faceElement.innerText = currentFace;
    })
  document.querySelector('#fliptable')
    .addEventListener('click', function() {
      store.dispatch({ type: 'FLIP_TABLE'});
      const currentFace = store.getState().face;
      faceElement.innerText = currentFace;
    })
  document.querySelector('#lennyface')
    .addEventListener('click', function() {
      store.dispatch({ type: 'LENNY_FACE'});
      const currentFace = store.getState().face;
      faceElement.innerText = currentFace;
    })
}