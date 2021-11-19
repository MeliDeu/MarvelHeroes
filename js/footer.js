"use strict";

for (let i = 0; i < footerData.length; i++) {
	//Uppdelningen för varje rubrik/låda
	let footerDevider = $("<div>").addClass("footerDev")
	let currentF = footerData[i].id

	if (currentF == "INFO") {
		let footerSmallOne = $("<div>").addClass("footerSmall").html(footerData[i].textOne)
		let footerSmallTwo = $("<div>").addClass("footerSmall").html(footerData[i].textTwo)
		let footerCap = $("<div>").addClass("footerCap").html(currentF)

		$(footerDevider).append(footerCap, footerSmallOne, footerSmallTwo)
	} else if (currentF == "CONTACT") {
		let footerSmallOne = $("<div>").addClass("footerSmall").html(footerData[i].textOne)
		let footerSmallTwo = $("<div>").addClass("footerSmall").html(footerData[i].textTwo)
		let footerSmallThree = $("<div>").addClass("footerSmall").html(footerData[i].textThree)
		let footerCap = $("<div>").addClass("footerCap").html(currentF)

		$(footerDevider).append(footerCap, footerSmallOne, footerSmallTwo, footerSmallThree)
	} else {
		let footerSmallOne = $("<div>").addClass("footerSmall").html(footerData[i].textOne)
		let footerSmallTwo = $("<div>").addClass("footerSmall").html(footerData[i].textTwo)
		let footerSmallThree = $("<div>").addClass("footerSmall").html(footerData[i].textThree)
		let footerCap = $("<div>").addClass("footerCap").html(currentF)

		$(footerDevider).append(footerCap, footerSmallOne, footerSmallTwo, footerSmallThree)
	}
	$("footer").append(footerDevider)
}