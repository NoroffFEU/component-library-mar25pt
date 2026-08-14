const pencilButton = document.getElementById("pencil-button")

pencilButton.addEventListener('mouseenter', () => {
  let textTarget =       document.getElementById("pencil-text")
  textTarget.innerHTML = 'I MEAN IT!'
});

pencilButton.addEventListener('mouseleave', () => {
  let textTarget =       document.getElementById("pencil-text")
  textTarget.innerHTML = 'DO NOT PRESS'
});

pencilButton.addEventListener('click', () => {
  document.body.style.background = "black";
  document.body.style.color = "white";
  document.body.style.fontSize = '12px';
  document.body.innerHTML = "look what you have done...."
});