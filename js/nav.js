"use strict";

//kollar vilken sida man är på
let currentPath = location.href.split("/").slice(-1);
currentPath = currentPath[0]
currentPath = currentPath.substring(0, currentPath.length - 5)

//Skapar landskapsnaven
function makeNavLandskape(nW) {
	createBigDivs()
	startNavMakingLand(nW)
	makeSearch()

	//Gör dropdown menyn klickbar
	$(".nDrop").on("click", function () {
		let check = $(".nDropBox")
		if ($(check).css("display") == "none") {
			$(".nDropBox").css({
				display: "block"
			})
		} else {
			$(".nDropBox").css({
				display: "none"
			})
		}
	})

	//Tar bort dropdownmenyn
	$("body").on("mouseup", function () {
		$(".nDropBox").css({
			display: "none"
		})
	})
}

//Skapar mobilnaven
function makeNavMobile(nW) {
	createBigDivs()
	startNavMakingMob(nW)
	makeLogoMid()
	makeSearch()

	//Vid responsivt - händer lite kul dynamiskt wowoowoowow
	$(".nSeachDiv > div").on("click", function (eObj) {
		eObj.stopPropagation()
		$(".nSeachBar").css({
			width: "100%",
			borderColor: "white"
		})
	})

	$(".nSquareNav").on("click", function (eObj) {
		eObj.stopPropagation()
		let check = $(".nSquareDrop")
		if ($(check).css("max-height") == "0px") {
			$(".nSquareDrop").css({
				maxHeight: "2000px"
			})
			$(".nDropBox").css({
				display: "flex"
			})
		} else {
			$(".nSquareDrop").css({
				maxHeight: "0px"
			})
			$(".nDropBox").css({
				display: "flex"
			})
		}
	})
}

//Skapar stora divarna, dvs vänstra, mittersta och högra
function createBigDivs() {
	$("nav").empty()
	let nPlaceHolder = $("<div>").addClass("nPlaceHolder")
	let nNavBar = $("<div>").addClass("nNavBar")
	let nInputBar = $("<div>").addClass("nInputBar")
	$("nav").append(nPlaceHolder, nNavBar, nInputBar)
}

//Skapar navbar till landscape, mittersta delen i navbaren
function startNavMakingLand(nW) {
	for (let i = 0; i < nNavData.length; i++) {
		let currentN = nNavData[i]
		$(".nNavBar").append(makeNav(nW, currentN))
	}
}

//Här appendas all info för mobile, vänstra delen i navbaren
function startNavMakingMob(nW) {
	$(".nPlaceHolder").append(createHamFood(nW))
}

//Skapar de tre strecken för naven i mobile
function createHamFood(nW) {
	let nSquareNav = $("<div>").addClass("nSquareNav")

	let nSquareBox = $("<div>").addClass("nSquareBox")
	let nFirstSpan = $("<div>").addClass("nLine nFirstSpan")
	let nMidSpan = $("<div>").addClass("nLine nMidSpan")
	let nLastSpan = $("<div>").addClass("nLine nLastSpan")

	let nSquareDrop = $("<div>").addClass("nSquareDrop")
	for (let i = 0; i < nNavData.length; i++) {
		let currentN = nNavData[i]
		$(nSquareDrop).append(makeNav(nW, currentN))
	}

	$(nSquareBox).append(nFirstSpan, nMidSpan, nLastSpan)
	return $(nSquareNav).append(nSquareBox, nSquareDrop)
}

//Skapar html-element för navbar mobil till den mellersta delen i naven
function makeNav(nW, currentN) {
	let nP = $("<p>").addClass("nText").html(currentN)
	let nDiv = $("<div>").addClass("nDiv")
	let nA = $("<a>").addClass("nLink")

	if (currentPath == "index" || !currentPath) {
		if (currentN == "HOME") {
			$(nA).attr("href", "index.html")
		} else if (currentN == "ABOUT") {
			$(nA).attr("href", "articles/aboutus.html")
		} else if (currentN == "logo") {
			if (nW > 900) {
				$(nA).attr("href", "../")
				$(nA).addClass("nDivLogo")
				$(nP).html("").css({
					backgroundImage: `url(images/${nLogo[0]})`,
					height: "30px",
					width: "30px",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center"
				})
			} else if (nW <= 900) {
				$(nA).addClass("nLogoResp").attr("href", "../")
			}
		} else if (currentN == "CHARACTERS") {
			$(nA).addClass("nDrop")
			let nArrow = $("<div>").addClass("nArrow")
			$(nP).append(nArrow)

			let nDropBoxLand = $("<div>").addClass("nDropBox")
			heroes.forEach(function (element) {
				$(nDropBoxLand).append(createDropDownMeny(element))
			})
			$(nA).append(nDropBoxLand)
		} else if (currentN == "QUIZ") {
			$(nA).attr("href", "game/quiz.html")
		}
	} else {
		if (currentN == "HOME") {
			$(nA).attr("href", "../index.html")
		} else if (currentN == "ABOUT") {
			$(nA).attr("href", "../articles/aboutus.html")
		} else if (currentN == "logo") {
			if (nW > 900) {
				$(nA).attr("href", "../../")
				$(nA).addClass("nDivLogo")
				$(nP).html("").css({
					backgroundImage: `url(../images/${nLogo[0]})`,
					height: "30px",
					width: "30px",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center"
				})
			} else if (nW <= 900) {
				$(nA).addClass("nLogoResp").attr("href", "../../")
			}
		} else if (currentN == "CHARACTERS") {
			$(nA).addClass("nDrop")
			let nArrow = $("<div>").addClass("nArrow")
			$(nP).append(nArrow)

			let nDropBoxLand = $("<div>").addClass("nDropBox")
			heroes.forEach(function (element) {
				$(nDropBoxLand).append(createDropDownMeny(element))
			})
			$(nA).append(nDropBoxLand)
		} else if (currentN == "QUIZ") {
			$(nA).attr("href", "../game/quiz.html")
		}
	}
	$(nDiv).append(nP)
	$(nA).prepend(nDiv)
	return nA
}

//Skapar dropdwon menyn för landscape
function createDropDownMeny(element) {
	let currentC = element.alias
	let nDropA = $("<a>").addClass("nDropA")
	let nDropDiv = $("<div>").addClass("nDropDiv")
	let nDropP = $("<p>").addClass("nDropP")
	let whatP = (currentPath == "index" || !currentPath) ? `articles/${element.id}.html` : `../articles/${element.id}.html`

	$(nDropP).html(currentC)
	$(nDropA).attr("href", whatP)
	$(nDropDiv).append(nDropP)
	return $(nDropA).append(nDropDiv)
}

//Här skapas input fältet, lika för alla viwerbreddar
function makeSearch() {
	let nSeachDiv = $("<div>").addClass("nSeachDiv")
	if (currentPath == "index" || !currentPath) {
		let nMagIcon = $("<div>").css({
			backgroundImage: `url(images/${nLogo[1]})`,
			height: "16px",
			width: "16px",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			minWidth: "25px",
			backgroundSize: "contain"
		})
		$(nSeachDiv).append(nMagIcon)
	} else {
		let nMagIcon = $("<div>").css({
			backgroundImage: `url(../images/${nLogo[1]})`,
			height: "16px",
			width: "16px",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			minWidth: "25px",
			backgroundSize: "contain"
		})
		$(nSeachDiv).append(nMagIcon)
	}
	let nInputBar = $('<input>').addClass("nSeachBar").attr("type", "search")

	$(nSeachDiv).prepend(nInputBar)
	$(".nInputBar").append(nSeachDiv)
}

//Får logan att hamna i mitten när det är mobile
function makeLogoMid() {
	let nLogoMid = $("<a>").addClass("nLogoMid")

	if (currentPath == "index" || !currentPath) {
		$(nLogoMid).css({
			backgroundImage: `url(images/${nLogo[0]})`,
			height: "30px",
			width: "30px",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			cursor: "pointer"
		})
		$(nLogoMid).attr("href", "../")
	} else {
		$(nLogoMid).css({
			backgroundImage: `url(../images/${nLogo[0]})`,
			height: "30px",
			width: "30px",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			cursor: "pointer"
		})
		$(nLogoMid).attr("href", "../../")
	}
	$(".nNavBar").append(nLogoMid)
}

// --------------------------------------------------------search-modal---------------------------------------------------------//
//on input,focus ska sökdivarna skapas
function makeSearchDiv() {
	let nOuterDiv = $("<div>").attr("id", "searchResultsInner")
	let nOutput = $("<h2>")
	let nOutputText = searchBarData.text[0]
	let nOutputSpan = $("<span>").attr("id", "searchOutputField")
	let nInnerSearchDiv = $("<div>").attr("id", "searchDivContainer")
	nOuterDiv.append(nOutput, nInnerSearchDiv)
	nOutput.append(nOutputText, nOutputSpan)
	return nOuterDiv
}

//tar emot input, jämför med objekt-values i smalllettersarr(heroes.tolowercase()) och anropar makesearchresults() för varje element som matchar
function showSearchResults(inputVal, viewern) {
	if (inputVal == "") {
		$("#searchDivContainer").empty()
		$("#searchOutputField").empty()
	} else {
		$("#searchOutputField").html(inputVal)
		let searchResultsArr = smallLetterArr.map(function (element) {
			for (let prop in element) {
				if (element[prop].includes(inputVal.toLowerCase())) {
					return element
				}
			}
		})
		//ta bort de elementen som är undefined
		searchResultsArr = searchResultsArr.filter(function (element) {
			return element !== undefined
		})
		$("#searchDivContainer").empty()
		searchResultsArr.forEach(function (element) {
			$("#searchDivContainer").append(makeSearchResults(element, viewern))
		})
	}
}

//skapa lådorna med sökresultat
function makeSearchResults(elmnt, viewern) {
	let vilkenPath = (currentPath == "index" || !currentPath) ? `articles/${elmnt.id}.html` : `../articles/${elmnt.id}.html`
	let nSearchResultsDiv = $("<a>").attr("id", `${elmnt.id}Res`).attr("href", vilkenPath).addClass("searchResDiv")
	let nSearchResultsImg = $("<div>").addClass("searchImg")
	let nSearchResultsTitel = $("<div>").addClass("searchTitle")
	let nSearchResultsTitelH = $("<h3>").html(elmnt.alias.toUpperCase())
	if (currentPath == "index" || !currentPath) {
		if (viewern < 700) {
			nSearchResultsImg.css("backgroundImage", `url(images/${elmnt.imageSmall})`)
		} else {
			nSearchResultsImg.css("backgroundImage", `url(images/${elmnt.imageBig})`)
		}
	} else {
		if (viewern < 700) {
			nSearchResultsImg.css("backgroundImage", `url(../images/${elmnt.imageSmall})`)
		} else {
			nSearchResultsImg.css("backgroundImage", `url(../images/${elmnt.imageBig})`)
		}
	}

	nSearchResultsDiv.append(nSearchResultsImg, nSearchResultsTitel)
	nSearchResultsTitel.append(nSearchResultsTitelH)

	return nSearchResultsDiv
}


//direct code
$(window).on("load resize", function () {
	let nW = $(window).width()
	if (nW > 900) {
		makeNavLandskape(nW)
	} else if (nW <= 900) {
		makeNavMobile(nW)
	}
	$(`.nSeachDiv input[type=search]`).on("focus click", function (eObj) {
		eObj.stopPropagation()
	})
	$(`.nSeachDiv input[type=search]`).on("keyup", function () {
		$("#searchResultsContainer").empty().css("display", "flex")
		$("#searchResultsContainer").append(makeSearchDiv())
		showSearchResults($(this).val(), nW)
		if ($(this).val() == "") {
			$("#searchResultsContainer").empty().css("display", "none")
		}
	})
	$("main").on("mouseup", function () {
		$("#searchResultsContainer").empty().css("display", "none")
		$(`.nSeachDiv input[type=search]`).val("")
	})
	$("nav").on("mouseup", function () {
		$("#searchResultsContainer").empty().css("display", "none")
		$(`.nSeachDiv input[type=search]`).val("")
	})
})