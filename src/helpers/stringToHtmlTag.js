function stringToHtmlTag(string) {
  const htmlObject = document.createElement('p');
  htmlObject.innerHTML = string;
  return htmlObject.textContent;
}

export default stringToHtmlTag;
