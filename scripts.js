let shape = document.querySelector("div.shape"),
  background = document.querySelector("input#backgroundColor"),
  border = document.querySelector("input#borderColor"),
  radius = document.querySelector("input#borderRadius"),
  stroke = document.querySelector("input#borderWidth");

background.addEventListener("input", function () {
  backgroundValue = background.value;
  shape.style.background = backgroundValue;
});

border.addEventListener("input", function () {
  borderValue = border.value;
  shape.style.borderColor = borderValue;
});

radius.addEventListener("input", function () {
  radiusValue = radius.value;
  shape.style.borderRadius = radiusValue;
});

stroke.addEventListener("input", function () {
  strokeValue = stroke.value;
  shape.style.borderWidth = strokeValue;
});

function showResults() {
  finalCode = document.querySelector("p#result");
  finalCode.innerHTML = `<b>background-color:</b> ${background.value};<br>
    <b>border:</b> ${stroke.value} solid ${border.value};<br>
    <b>border-radius:</b> ${radius.value};`;
}
