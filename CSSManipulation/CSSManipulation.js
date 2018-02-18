function makeChanges(borderRedTag, borderGreenTag, borderBlueTag, borderWidthTag, backgroundRedTag, backgroundGreenTag, backgroundBlueTag) {
  let myParagraph = document.getElementById("my-paragraph");

  let borderRed = document.getElementById(borderRedTag).value;
  let borderGreen = document.getElementById(borderGreenTag).value;
  let borderBlue = document.getElementById(borderBlueTag).value;
  let borderWidth = document.getElementById(borderWidthTag).value;

  let backgroundRed = document.getElementById(backgroundRedTag).value;
  let backgroundGreen = document.getElementById(backgroundGreenTag).value;
  let backgroundBlue = document.getElementById(backgroundBlueTag).value;

  myParagraph.style.borderColor = "rgb(" + borderRed + "," + borderGreen + "," + borderBlue + ")";
  myParagraph.style.borderWidth = borderWidth;

  myParagraph.style.backgroundColor = "rgb(" + backgroundRed + "," + backgroundGreen + "," + backgroundBlue + ")";
}
