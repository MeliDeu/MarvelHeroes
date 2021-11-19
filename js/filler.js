"use strict";

let htmlFile = location.href.split("/").slice(-1);
htmlFile = htmlFile[0]
htmlFile = htmlFile.substring(0, htmlFile.length-5)
htmlFile = !htmlFile ? "index" : htmlFile

switch (htmlFile) {
  case 'index':
    $(document).ready(fillIndex)
    break
  case 'quiz':
    topSection()
    countSection()
    startView()
    break
  default:
    makeArticle(htmlFile)
    break
}
