const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const modelViewerId = event.target.getAttribute('data-model');
    const modelViewer = document.getElementById(modelViewerId);
    if (modelViewer && modelViewer.canActivateAR) {
      modelViewer.activateAR();
    } else {
      alert("AR is not supported or model is not ready!");
    }
  });
});
