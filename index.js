function loadPage() {
  let gridSize = 0;
 
  while (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
    gridSize = window.prompt("Enter a grid side length between 1-100");
  }

  const etchScreenDiv = document.createElement("div");
  etchScreenDiv.className = "etch_screen";

  function createInnerDivElement() {
    const innerColumnDiv = document.createElement("div");
    innerColumnDiv.className = "inner_container";

    for (let j = 0; j < gridSize; j++)
      innerColumnDiv.appendChild(createInnerPixelElement(j));
    return (innerColumnDiv);
  }

  function createInnerPixelElement() {
    const innerPixelDiv = document.createElement("div");
    innerPixelDiv.className = "pixel_element";
    return (innerPixelDiv);
  }

  for (let i = 0; i < gridSize; i++) etchScreenDiv.appendChild(createInnerDivElement(i));

  document.body.appendChild(etchScreenDiv);

  let pixels = document.getElementsByClassName("pixel_element");

  for (let k = 0; k < pixels.length; k++) {
    pixels[k].onmouseover = function () { mouseOver() };

    function mouseOver() {
      var bcolor = pixels[k].style.backgroundColor;
      console.log(bcolor);
      pixels[k].style.backgroundColor = '#999999';
    }
  }

  const button_div = document.createElement("div");
  button_div.className = "button_container";

  function clearPixels() {
    for (let m = 0; m < pixels.length; m++) pixels[m].style.backgroundColor = '#ffffff';
  }

  const btn2 = document.createElement("button");
  btn2.innerHTML = "Shake";
  btn2.addEventListener("click", clearPixels);
  button_div.appendChild(btn2);

  function reloadPage() {
    location.reload(true);
  }

  const btn3 = document.createElement("button");
  btn3.innerHTML = "New Grid";
  btn3.addEventListener("click", reloadPage);
  button_div.appendChild(btn3);

  document.body.appendChild(button_div);
}

window.onload = loadPage;





