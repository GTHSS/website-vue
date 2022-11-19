let domModifications = "";

// Load a CSS file Dynamically into the DOM.
function loadCssIntoDom(source) {
  // The element was added BEFORE, we don't want to add it again, right?
  if (domModifications.indexOf(source) !== -1) return;

  const htmlHead = document.getElementsByTagName("head")[0];

  // Creating link element
  const newElement = document.createElement("link");
  newElement.href = source;
  newElement.type = "text/css"; // MIME.
  newElement.rel = "stylesheet";
  htmlHead.append(newElement);
  domModifications += " " + source;
}
