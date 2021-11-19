'use strict';


function randomNumber(min, max) {
	// Returns a random integer between the integers min and max. Max not included.
	// Example: randomNumber(3, 6) will return 3, 4 or 5.
	return min + Math.floor((max - min) * Math.random())
}

function topSection() {
	let info = quizIndex

	//TOP LEFT INFO
	let title1 = $('<div>').html(info.title[0])
	let img = $('<img>').attr('src', `../images/${index.marvelLogo[0]}`)
	let title2 = $('<div>').html(info.title[1])

	let infoText = $('<div>').html(info.info)

	$('.qTitle').append(title1, img, title2)
	$('.qTitleText').append(infoText)


	//TOP RIGHT HIGHSCORES
	let scoreTitle = $('<div>').html(info.hsTitle).addClass('qScoreBoxTitle')

	let scoreGrid = $('<div>').addClass('qScoreBoxGrid')

	for (let i = 1; i <= 3; i++) {
		let place = $('<p>').html(i + ".").addClass(`qPlace${i}`)
		scoreGrid.append(place)
	}

	//Titles score, name, date
	for (let i = 0; i < info.hsTitles.length; i++) {
		let title = $('<p>').html(info.hsTitles[i]).addClass(`qTitle${i}`)
		let hej = $('<div>').addClass(`qHsRow${i}`)
		scoreGrid.append(title, hej)
	}

	//Divar där highscore info placeras
	let scoreDiv = $('<div>').addClass('qScoreDiv qHsDetails')
	let nameDiv = $('<div>').addClass('qNameDiv qHsDetails')
	let dateDiv = $('<div>').addClass('qDateDiv qHsDetails')
	let hej = $('<div>').addClass('qHej')
	scoreGrid.append(scoreDiv, nameDiv, dateDiv)

	let stringAux = localStorage.getItem('highscores')
	let highscoresArr = JSON.parse(stringAux) // transforms back to the original value

	if (!highscoresArr) {
		info.highScores.forEach(function (param) {
			scoreDiv.append($('<div>').html(param.score))
			nameDiv.append($('<div>').html(param.name))
			dateDiv.append($('<div>').html(param.date))
		})
	} else {
		info.highScores = highscoresArr
		info.highScores.forEach(function (param) {
			scoreDiv.append($('<div>').html(param.score))
			nameDiv.append($('<div>').html(param.name))
			dateDiv.append($('<div>').html(param.date))
		})
	}

	$('.qScoreBox').append(scoreTitle, scoreGrid)
}

function countSection() {
	let info = quizIndex

	$('.qCountScore').html(info.countContent[0])
	$('.qScore').html('0')

	$('.qCountTime').html('02:00')

	$('.qCountQue').html(info.countContent[2])
	$('.qQue').html('0')
	$('.qQueLength').html(info.countContent[3])
}

function startView() {

	//Fyller strukturen med innehåll  
	$('.qStartTitle').html(quizIndex.quizTitle)
	$('.qStart').html(quizIndex.start)

	//Gör så att rutan för start quiz syns
	$('.qStartContainer').css({
		display: 'flex'
	})

	let img = heroes[2].images[0]
	$('#qQuizImageBox').css({
		backgroundImage: `url(../images/${img})`
	})
}

function gameOver() {
	stopTimer()

	//Fyller strukturen med innehåll
	$('.qOverTitle').html(quizIndex.overTitle)
	$('.qScoreInfo').html(quizIndex.scoreInfo)
	$('.qYourScore').html($('.qScore').html())
	$('.qNewHsCon').html(quizIndex.highscore[0])
	$('.qNewHs').html(quizIndex.highscore[1])
	$('.qOverName').html(quizIndex.name)
	$('.qOverNameBox input').attr('placeholder', ` ${quizIndex.maxCharacters}`)
	$('.qOverButton').html(quizIndex.button[1])

	//Gör så att rutan för game over syns
	$('.qOverContainer').css({
		display: 'flex'
	})
	$('.qNewHsBox').css({
		display: 'none'
	})
	$('.qOverNameBox').css({
		display: 'none'
	})


	//SKAPA SCORE ARRAY
	let sAux = parseInt($('.qScore').html())

	// CHECK FOR NEW RECORDS
	let stringAux = localStorage.getItem('records') //Record ligger just nu som string i arrayen
	let recordsArray = JSON.parse(stringAux) // transforms back to the original value

	//Om det inte finns några records i recordsarray
	if (!recordsArray) {
		recordsArray = [0, 0, 0]
		let stringArray = JSON.stringify(recordsArray) // transforms into a string
		localStorage.setItem('records', stringArray)
	}

	//Skapar record i recordsarray
	for (let i = 0; i < recordsArray.length; i++) {
		if (sAux > recordsArray[i]) {
			recordsArray.splice(i, 0, sAux)
			recordsArray.pop()

			$('.qNewHsBox').css({
				display: 'flex'
			})
			$('.qOverNameBox').css({
				display: 'flex'
			})
			$('.qOverButton').html(quizIndex.button[0])
			$('.qOverButton').attr('disabled', true).addClass('qDisable')


			//GET DATE & TIME
			let dateTime = getDate()

			$('.qScoreDiv').data('date', dateTime)
			$('.qScoreDiv').data('index', i)
			$('.qScoreDiv').data('score', sAux)

			break // Loopen slutar när den har hittat den första recordet som den är större än, så att den inte fortsätter och ändrar alla
		}
	}

	// Spara nya record till recordsarray
	localStorage.setItem('records', JSON.stringify(recordsArray))
}

function updateHighscore(index, score, date) {
	let name = $('.qOverNameBox input').val()
	let newObject = {
		score: score,
		name: name,
		date: date
	}

	quizIndex.highScores.splice(index, 0, newObject)
	quizIndex.highScores.pop()

	//Uppdatera highscore-box i topsection
	for (let i = 0; i <= 2; i++) {
		let ii = i + 1
		$(`.qScoreDiv div:nth-of-type(${ii})`).html(quizIndex.highScores[i].score)
		$(`.qNameDiv div:nth-of-type(${ii})`).html(quizIndex.highScores[i].name)
		$(`.qDateDiv div:nth-of-type(${ii})`).html(quizIndex.highScores[i].date)
	}


	localStorage.setItem('highscores', JSON.stringify(quizIndex.highScores))
}

function quizActive() {
	//Next knapp disabled
	$('.qNext').attr('disabled', true).addClass('qDisable')

	let numArr = [0, 1, 2, 3]
	let rAux = randomNumber(0, quizQu.length)
	let random = quizQu[rAux]
	let randomQue = random.question
	let randomAns = random.answers

	//Skapa random fråga
	$('.qQuestion').html(randomQue)
	//Spara data i elementet
	$('.qQuestion').data('random', random)

	//Väljer bild på den frågan handlar om
	let img = random.key
	$('#qQuizImageBox').css({
		backgroundImage: `url(../images/${img}FilmLarge.jpg)`
	})

	//Puttar in objekt med alla dess värden i tomma arrayen (även svarsalternativ)
	answeredQue.push(random)

	//Skapar random svar
	for (let i = 1; i <= 4; i++) {
		let ranAux = randomNumber(0, numArr.length)
		let ranNum = numArr[ranAux]

		$(`#qQuizBox > div:nth-of-type(${i})`).html(randomAns[ranNum])
		numArr.splice(ranAux, 1) //Tar bort svarsalternativet som placerats i diven så det inte ska bli dubbelt
	}

	//tar bort från aktiva arrayen
	quizQu.splice(rAux, 1)
}

function appendAnswered() {
	let data = $('.qQuestion').data('random')
	let img = data.key
	let ansBox = $('<div>').addClass('qAnsBox')
	let ansHero = $('<div>').addClass('qAnsHero').css({
		backgroundImage: `url(../images/${img}FilmLarge.jpg)`
	})
	let check = $('<div>').addClass('qSymbol')
	let ansSym = $('<div>').addClass('qAnsSym qCenter').append(check)

	if (data.check == 'correct') {
		ansBox.css({
			backgroundColor: 'var(--green)'
		})
		check.addClass('qCheckImg')
	} else if (data.check == 'incorrect') {
		ansBox.css({
			backgroundColor: 'var(--red)'
		})
		check.addClass('qWrongImg')
	}

	$('.qAnsWrapper').append(ansBox.append(ansHero, ansSym))
}

function checkClick(param) {
	let randomIndex = $('.qQuestion').data('random')
	let randomIndexCorrect = randomIndex.correctAnswer

	if (param.html() == randomIndexCorrect) {
		param.addClass('qCorrect')
		addScore()
		randomIndex.check = 'correct'
	} else {
		param.addClass('qIncorrect')
		randomIndex.check = 'incorrect'

		$('#qQuizBox div').each(function (i, element) {
			let answer = $(element).html()
			if (answer == randomIndexCorrect) {
				setTimeout(function () {
					$(element).addClass('qCorrect')
				}, 200)
			}
		})
	}
}

function startTimer() {
	const startingMinutes = 2
	let time = startingMinutes * 60 //Minuter i sek
	const countdownEl = $('.qCountTime')

	let idTime = setInterval(function () {
		const minutes = Math.floor(time / 60) //Sek delat i 60 för att få fram min
		let seconds = time % 60 // Det som blir över när man delat blir sek

		seconds = seconds < 10 ? '0' + seconds : seconds

		countdownEl.html(`0${minutes}:${seconds}`)

		if (minutes == '00' && seconds == '00') {
			gameOver()
			stopTimer()
		}

		time-- //Tickar ned sekunderna
	}, 1000)
	$('.qCountTime').data('idInterval', idTime)
}

function stopTimer() {
	clearInterval($('.qCountTime').data('idInterval'))
}

function countQuestion() {
	let question = parseInt($('.qQue').html())
	question = question + 1
	$('.qQue').html(question)
}

function addScore() {
	let score = parseInt($('.qScore').html())
	score = score + 1
	$('.qScore').html(score)
}

function resetCount() {
	$('.qCountTime').html('02:00')
	$('.qQue').html(0)
	$('.qScore').html(0)
}

function getDate() {
	let today = new Date()
	let month = (today.getMonth() + 1)
	if (month < 10) {
		month = '0' + (today.getMonth() + 1)
	}
	let date = today.getDate() + '/' + month + '/' + today.getFullYear()
	let minute = today.getMinutes()
	if (minute < 10) {
		minute = '0' + today.getMinutes()
	}
	let time = today.getHours() + ":" + minute
	let dateTime = date + ' ' + time

	return dateTime
}

function animationHs(addRemove) {
	let dataIndex = $('.qScoreDiv').data('index')

	if (addRemove == 'add') {
		$(`.qHsRow${dataIndex}`).addClass('qAnimationHS')
	} else if (addRemove == 'remove') {
		$(`.qHsRow${dataIndex}`).removeClass('qAnimationHS')
	}
}


//EVENT-HANDLERS

$('.qStart').on('click', function () {
	startTimer()
	countQuestion()
	$('.qStartContainer').css({
		display: 'none'
	})
	$('.qOverNameBox input').val('')
	quizActive()
})


$('.qOverButton').on('click', function () {
	$('.qOverContainer').css({
		display: 'none'
	})
	$('.qAnswer').removeClass('qCorrect qIncorrect')
	$('.qAnswer').css({
		pointerEvents: 'auto'
	})
	$('.qAnsWrapper').empty()
	resetCount()
	startView()
	animationHs('remove')

	if ($(this).html() == quizIndex.button[0]) {
		//Hämtar data ang index, score och datum från gameover() och kallar på updateHighscore med dessa parametrar så att highscores kan uppdateras
		let i = $('.qScoreDiv').data('index')
		let s = $('.qScoreDiv').data('score')
		let dt = $('.qScoreDiv').data('date')
		updateHighscore(i, s, dt)
		animationHs('add')
	}

	//Uppdaterar quizQu-array och tömmer answeredQue-array
	quizQu = answeredQue.concat(quizQu)
	answeredQue.length = 0
})

$('.qAnswer').on('mouseenter', function () {
	$(this).addClass('qAnswerHover')
})

$('.qAnswer').on('mouseleave', function () {
	$(this).removeClass('qAnswerHover')
})

$('.qAnswer').on('click', function () {
	let denna = $(this)
	checkClick(denna)

	$('.qAnswer').css({
		pointerEvents: 'none'
	})

	//Next knapp aktiveras
	$('.qNext').attr('disabled', false).removeClass('qDisable')
})


$('.qNext').on('click', function () {
	$('.qAnswer').removeClass('qCorrect qIncorrect')
	$('.qAnswer').css({
		pointerEvents: 'auto'
	})

	if (quizQu.length == 0) {
		gameOver()
		appendAnswered()
	} else {
		countQuestion()
		appendAnswered()
		quizActive()
	}
})

$('.qOverNameBox input').on('keyup', function () {
	let input = $('.qOverNameBox input').val()
	if (input.length > 0) {
		$('.qOverButton').attr('disabled', false).removeClass('qDisable')
	}
})