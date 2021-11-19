"use strict";


// ----------------------------------------------variabler---------------------------------------------------------//
//variabel för mediaquery som uppdaterar bilderna
let mobilQuery = window.matchMedia("(max-width: 700px)")

let which   //beskriver vilken sida som carousel befinner sig på 
let currentSlideArr = []  //arrayn som används för carousel beroende på viewer width
let viewer = $(window).width()  

// ----------------------------------------------funktioner---------------------------------------------------------//
//fyller hela indexSidan
function fillIndex() {
  $(".pix").empty()  //eftersom sidan fylls vid varje resize måste de tillagda element tas bort innan de läggs till
  let spidey = (mobilQuery.matches) ? index.spideyIndex[1] : index.spideyIndex[0]
  $("#indexSpidey").append($("<img>").attr("src", `images/${spidey}`))
  let backgroundImg = (mobilQuery.matches) ? index.darkPatternIndex[1] : index.darkPatternIndex[0]
  $("#indexBackgroundDark").css({
    backgroundImage: `url(images/${backgroundImg})`
  })
  //lägger in text i vänstra index-textBox (info om quiz)
  let leftText = $(".indexLeftTextItem")
  for (let i = 0; i < leftText.length; i++) {
    $(leftText[i]).html(index.quizText[i])
  }
  //skapa länk till quiz
  $("#indexTextLeft a").attr("href", "game/quiz.html")
  //Lägger in bilden i höger index-textBox (MarvelLogotypen)
  let nMarvelText = $("<h1>").addClass("indexRightTextItem")
  let whichMarvelLogo = (mobilQuery.matches) ? `images/${index.marvelLogo[1]}` : `images/${index.marvelLogo[1]}`
  let nMarvelLogo = $("<img>").attr("src", whichMarvelLogo)
  $("#indexRightBildOText").append(nMarvelLogo, nMarvelText)
  //Lägger in text i höger index-textBox (info om projekt och tema)
  let rightText = $(".indexRightTextItem")
  for (let i = 0; i < rightText.length; i++) {
    $(rightText[i]).html(index.infoText[i])
  }

  //skapa carousel
  $("#carContainer").empty()
  heroes.forEach(function (element) {
    $("#carContainer").append(makeLittleBoxes(element))
  })
}

// skapar carousel-lådorna
function makeLittleBoxes(param) {
  let nAnchor = $("<a>").attr("href", `articles/${param.id}.html`)
  let nOuterDiv = $("<div>").addClass("carSlidesCards").attr("id", `${param.id}Index`).css("background", param.gradientColor)
  let nNamnDiv = $("<div>").addClass("carName").attr("id", `${param.id}IndexName`)
  let nBildDiv = $("<div>").addClass("carBild").attr("id", `${param.id}IndexBild`)
  let nRealName = $("<h5>").html(param.realNameKort.toUpperCase())
  let nAlias = $("<h2>")
  let nMobilNamn = $("<div>").html(param.alias).addClass("mobileName")
  let indexThumb = (mobilQuery.matches) ? param.images[5] : param.images[4]
  let nBild = $("<img>").attr("src", `images/${indexThumb}`).addClass("carPix")

  nAnchor.append(nOuterDiv)
  nOuterDiv.append(nNamnDiv, nBildDiv, nMobilNamn)
  nNamnDiv.append(nRealName, nAlias)
  nBildDiv.append(nBild)

  //om namnet är längre än 8 tecken OCH innehåller ett mellanslag, ska ordet delas i 2, annars kan den visas i en rad
  if (param.alias.length > 8 && param.alias.includes(" ")) {
    let namnArr = param.alias.split(" ")
    nAlias.html(namnArr[0].toUpperCase())
    nNamnDiv.append($("<h2>").html(namnArr[1].toUpperCase()))
  } else {
    nAlias.html(param.alias.toUpperCase())
  }

  nAnchor.data("heroes", param)

  return nAnchor
}
//assignar ett värde till currentSlideArr, beroende på viewer width
function setCurrentArr() {
  viewer = $(window).width()
  currentSlideArr = []
  if (viewer < 900) {
    currentSlideArr = slideArrMobil
  } else if (viewer >= 900 && viewer < 1300) {
    currentSlideArr = slideArrDesktop
  } else {
    currentSlideArr = slideArrBig
  }
}
//fyller SVG-cirklarna beroende på vilken sida man befinner sig på i carousel
function fillCircle() {
  $(".circle").css("fill", "lightgrey")
  $(`svg:nth-of-type(${currentSlideArr[which].pageNr+1}) .circle`).css("fill", "grey")
}
//röra sig framåt i carousel
function forwards(elmntNr) {
  $("#carContainer").css({
    marginLeft: currentSlideArr[elmntNr].marg
  })
  fillCircle()
}
//röra sig bakåt i carousel
function backwards(elmntNr) {
  $("#carContainer").css({
    marginLeft: currentSlideArr[elmntNr].marg
  })
  fillCircle()
}

// ----------------------------------------------direct code & event-handlers---------------------------------------------------------//
//när sidan laddas kollas vilken viewer och därefter sätts currentArr
$(document).ready(function () {
  which = 0
  setCurrentArr()
  forwards(which)
})

//när man drar i fönstret sätts currentarr igen, which sätts tillbaka till 0 så att första slide visas
$(window).on("resize", function () {
  viewer = $(window).width()
  fillIndex()
  which = 0
  setCurrentArr()
  forwards(which)
})

// gå till höger i carousel
$("#carFor").on("click", function () {
  if (which == currentSlideArr.length - 1) {
    which = 0
    forwards(which)
  } else {
    which++
    forwards(which)
  }
})

// gå till vänster i carousel
$("#carBack").on("click", function () {
  setCurrentArr()
  if (which == 0) {
    which = currentSlideArr.length - 1
    backwards(which)
  } else {
    which--
    backwards(which)
  }
})

//autoslide i carousel
setTimeout(function () {
  let ntOut = setInterval(function () {
    if (which == currentSlideArr.length - 1) {
      which = 0
      forwards(which)
    } else {
      which++
      forwards(which)
    }
  }, 4000)
  $("#carContainer").data("ntOut", ntOut)
}, 1000)

$("#carCtrls svg").on("click", function () {
  clearInterval($("#carContainer").data("ntOut"))
})