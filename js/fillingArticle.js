"use strict";

//just nu... DEFINIERAR VAD SOM SKA LADDAS IN TYP
let query = window.matchMedia("(max-width: 700px)")

//SKAPAR META RUBRIKERNA
function makeArticle(htmlFile) {
	$("title").text(htmlFile)

	for (let i = 0; i < metaArray.length; i++) {
		let firstB = $("<div>").addClass("artFirst").html(metaArray[i]).css({
			color: "white"
		})
		let secondB = $("<div>").addClass("artSec")

		firstB.append(secondB)
		$(".artTextMeta").append(firstB)
	}

	//Om det handlar om oss
	if (htmlFile == "aboutus") {

		for (let i = 0; i < thisIsUs.length; i++) {
			let skapare = thisIsUs[i].id

			//Ändrar metan
			$(`.artTopMetaPic:nth-child(${i+1}) > div > .artTextCap`).html(skapare)
			$(`.artTopMetaPic:nth-child(${i+1}) .artFirst:nth-child(1) div`).html(thisIsUs[i].realName)
			$(`.artTopMetaPic:nth-child(${i+1}) .artFirst:nth-child(2) div`).html(thisIsUs[i].height)
			$(`.artTopMetaPic:nth-child(${i+1}) .artFirst:nth-child(3) div`).html(thisIsUs[i].ability)
			$(`.artTopMetaPic:nth-child(${i+1}) .artFirst:nth-child(4) div`).html(thisIsUs[i].citizenship)
			$(`.artTopMetaPic:nth-child(${i+1}) .artFirst:nth-child(5) div`).html(thisIsUs[i].firstAp)
			$(`.artTopMetaPic:nth-child(${i+1}) .artFirst:nth-child(6) div`).html(thisIsUs[i].creators)
			//Metatext, undertill
			$(`.artTopMetaPic:nth-child(${i+1}) .artTextSmall`).html(thisIsUs[i].description)

			//Bilder + gradient
			let standingPic = query.matches ? thisIsUs[i].images[1] : thisIsUs[i].images[0]
			$(`.artTopMetaPic:nth-child(${i+1}) .artRightPic .artStandigHero`).css("background-image", `url(../images/${standingPic})`)
			$(`.artTopMetaPic:nth-child(${i+1}) .artRightPic`).css("background", thisIsUs[i].gradientColor)

		}

		//Om det handlar om en hjälte
	} else {
		for (let i = 0; i < heroes.length; i++) {
			let namn = heroes[i].id

			if (namn == htmlFile) {
				let currentH = i
				$(".artTextCap").html(heroes[currentH].alias)
				$(".artFirst:nth-child(1) > div").html(heroes[currentH].realName)
				$(".artFirst:nth-child(2) > div").html(heroes[currentH].height)
				$(".artFirst:nth-child(3) > div").html(heroes[currentH].ability)
				$(".artFirst:nth-child(4) > div").html(heroes[currentH].citizenship)
				$(".artFirst:nth-child(5) > div").html(heroes[currentH].firstAp)
				$(".artFirst:nth-child(6) > div").html(heroes[currentH].creators)

				//Bildbeskrvningstext
				$("#artTextPicLeft").html(heroes[currentH].imageText[0])
				$("#artTextPicRight").html(heroes[currentH].imageText[1])

				//Text om hjälten
				$("#artTextAboutLeft").html(heroes[currentH].description[0])
				$("#artTextAboutRight").html(heroes[currentH].description[1])

				//Källa för text
				$(".artBotTextFlex:nth-child(1) > div > .artDescr").html(heroes[currentH].source[0]).attr("href", heroes[currentH].kalla[0])
				$(".artBotTextFlex:nth-child(2) > div > .artDescr").html(heroes[currentH].source[1]).attr("href", heroes[currentH].kalla[1])

				//Bilder, uppifrån, vänster, höger. INTE KORREKT ÄN!!!
				let standingPic = query.matches ? heroes[currentH].images[5] : heroes[currentH].images[4]
				$(".artStandigHero").css("background-image", `url(../images/${standingPic})`)
				$(".artRightPic").css("background", heroes[currentH].gradientColor)
				let picLeft = query.matches ? heroes[currentH].images[1] : heroes[currentH].images[0]
				$("#artTextLeft").css("background-image", `url(../images/${picLeft})`)
				let picRight = query.matches ? heroes[currentH].images[3] : heroes[currentH].images[2]
				$("#artTextRight").css("background-image", `url(../images/${picRight})`)

			}
		}
	}
}