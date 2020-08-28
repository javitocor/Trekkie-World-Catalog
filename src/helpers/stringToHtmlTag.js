function stringToHtmlTag(string) {
  const htmlObject = document.createElement('p');
  htmlObject.innerHTML = string;
  return htmlObject;
}

export default stringToHtmlTag;
