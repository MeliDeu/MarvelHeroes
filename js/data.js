"use strict";

//info för artikelsidor och Quiz
const heroes = [
	{
		id: "captainmarvel",
		alias: "Captain Marvel",

		//bildinfo
		images: ["captainmarvelFilmLarge.jpg", "captainmarvelFilmSmall.jpg", "captainmarvelComLarge.jpg", "captainmarvelComSmall.jpg", "captainmarvelStandingLarge.png", "captainmarvelStandingSmall.png"],
		imageText: ["Captain Marvel as a movie character", "Captain Marvel in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(255,65,24,1) 0%, rgba(255,162,162,1) 50%, rgba(255,65,24,1) 100%)",

		//metainfo
		realName: "Carol Susan Jane Danvers",
		realNameKort: "Carol Danvers",
		ability: "Superhuman Strength",
		citizenship: "American",
		height: "1.80m",
		creators: "Roy Thomas & Gene Colan",
		firstAp: "Marvel Super-Heroes #13",

		//description
		description: ["Carol Susan Jane Danvers is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Roy Thomas and artist Gene Colan, Danvers first appeared as an officer in the United States Air Force and a colleague of the Kree superhero Mar-Vell in Marvel Super-Heroes #13 (March 1968). Danvers later became the first incarnation of Ms. Marvel in Ms. Marvel #1 (cover-dated Jan. 1977) after her DNA was fused with Mar-Vell's during an explosion, giving her superhuman powers. Debuting in the Silver Age of comics, the character was featured in a self-titled series in the late 1970s before becoming associated with the superhero teams the Avengers and the X-Men. The character has also been known as Binary, Warbird and Captain Marvel at various points in her history. Danvers has been labeled as Marvel's most notable female hero, and frequently touted as one of the most powerful characters in the franchise.", " Near death, Carol Danvers was transformed into a powerful warrior for the Kree. Now, returning to Earth years later, she must remember her past in order to prevent a full invasion by shapeshifting aliens, the Skrulls. Carol Danvers has been featured in other Marvel licensed products including video games, animated television series, and merchandise such as trading cards. Brie Larson portrays the character in the Marvel Cinematic Universe in the films Captain Marvel (2019) and Avengers: Endgame (2019).		"],
		source: ["Wikipedia", "Marvel"],
		kalla: ["https://en.wikipedia.org/wiki/Captain_Marvel_(Marvel_Comics)", "https://www.marvel.com/characters/captain-marvel-carol-danvers"],

		//additional info för frågor
		actors: "Brie Larson",
		placeOfBirth: "USA",
		yearOfAp: "1968"
	},
	{
		id: "hulk",
		alias: "The Hulk",

		//bildinfo
		images: ["hulkFilmLarge.jpg", "hulkFilmSmall.jpg", "hulkComLarge.jpg", "hulkComSmall.jpg", "hulkStandingLarge.png", "hulkStandingSmall.png"],
		imageText: ["The Hulk as a movie character", "The Hulk in the comics"],
		gradientColor: "linear-gradient(218deg, rgba(0,86,55,1) 0%, rgba(20,116,63,1) 14%, rgba(35,140,66,1) 30%, rgba(57,171,76,1) 52%, rgba(35,140,66,1) 73%, rgba(20,116,63,1) 89%, rgba(0,86,55,1) 100%)",

		//metainfo
		realName: "Robert Bruce Banner",
		realNameKort: "Bruce Banner",
		ability: "Superhuman Strength",
		citizenship: "American & Sakaaran",
		height: "1.78m as Bruce Banner & 1.67m-2.03m as Hulk",
		creators: "Stan Lee & Jack Kirby",
		firstAp: "Incredible Hulk #1",

		//description
		description: ["The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, the two existing as independent personalities and resenting of the other.", "Following his accidental exposure to gamma rays saving the life of Rick Jones during the detonation of an experimental bomb, Banner is physically transformed into the Hulk when subjected to emotional stress, at or against his will, often leading to destructive rampages and conflicts that complicate Banner's civilian life. The Hulk's level of strength is normally conveyed as proportionate to his level of anger. Commonly portrayed as a raging savage, the Hulk has been represented with other personalities based on Banner's fractured psyche, from a mindless, destructive force, to a brilliant warrior, or genius scientist in his own right. Despite both Hulk and Banner's desire for solitude, the character has a large supporting cast, including Banner's lover Betty Ross, his best friend Rick Jones, his cousin She-Hulk, therapist and ally Doc Samson, and his co-founders of the superhero team the Avengers, etc. However, his uncontrollable power has brought him into conflict with his fellow heroes and others. Despite this he tries his best to do what's right while battling villains such as Leader, Abomination, Absorbing Man and more."],
		source: ["Wikipedia", "Wikipedia"],
		kalla: ["https://en.wikipedia.org/wiki/Hulk", "https://en.wikipedia.org/wiki/Hulk"],

		//additional info för frågor
		actors: "Bill Bixby, Lou Ferrigno, Edward Norton, Eric Bana & Mark Ruffalo",
		placeOfBirth: "USA",
		yearOfAp: "1962"
	},
	{
		id: "deadpool",
		alias: "Deadpool",

		// bildinfo
		images: ["deadpoolFilmLarge.jpg", "deadpoolFilmSmall.jpg", "deadpoolComLarge.jpg", "deadpoolComSmall.jpg", "deadpoolStandingLarge.png", "deadpoolStandingSmall.png"],
		imageText: ["Deadlpool as a movie character", "Deadpool in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(19,14,13,1) 0%, rgba(209,37,49,1) 50%, rgba(19,14,13,1) 100%)",

		//metainfo
		realName: "Wade Winston Wilson",
		realNameKort: "Wade Wilson",
		ability: "Regenerative Healing Factor",
		citizenship: "Canadian",
		height: "1.88m",
		creators: "Fabian Nicieza & Rob Liefeld",
		firstAp: "New Mutants #98",

		//description
		description: ["Deadpool (Wade Winston Wilson) is a fictional character appearing in American comic books published by Marvel Comics. Created by writer Fabian Nicieza and artist/writer Rob Liefeld, the character first appeared in The New Mutants #98 (cover-dated February 1991). Initially Deadpool was depicted as a supervillain when he made his first appearance in The New Mutants and later in issues of X-Force, but later evolved into his more recognizable antiheroic persona. Deadpool, whose real name is Wade Wilson, is a disfigured mercenary with the superhuman ability of an accelerated healing factor and physical prowess. The character is known as the 'Merc with a Mouth' because of his tendency to talk and joke constantly, including breaking the fourth wall for humorous effect and running gags.", "The character's popularity has seen him featured in numerous forms of other media. In the 2004 series Cable & Deadpool, he refers to his own scarred appearance as 'Ryan Reynolds crossed with a Shar-Pei' (though in the comic, Reynolds' name is misspelled as 'Renolds'.)Reynolds himself would eventually portray the character in the X-Men film series, appearing in X-Men Origins: Wolverine (2009), Deadpool (2016), and its sequel Deadpool 2 (2018). He is slated to continue playing the character in the Marvel Cinematic Universe."],
		source: ["Wikipedia", "Wikipedia"],
		kalla: ["https://en.wikipedia.org/wiki/Deadpool", "https://en.wikipedia.org/wiki/Deadpool"],

		//additional info för frågor
		actors: "Ryan Reynolds",
		placeOfBirth: "Canada",
		yearOfAp: "1991"
	},
	{
		id: "blackwidow",
		alias: "Black Widow",

		//bildinfo
		images: ["blackwidowFilmLarge.jpg", "blackwidowFilmSmall.jpg", "blackwidowComLarge.jpg", "blackwidowComSmall.jpg", "blackwidowStandingLarge.png", "blackwidowStandingSmall.png"],
		imageText: ["Black Widow as a movie character", "Black Widow in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(78,78,78,1) 0%, rgba(193,193,193,1) 50%, rgba(78,78,78,1) 100%)",

		//metainfo
		realName: "Natalia 'Natasha' Alianovna Romanova",
		realNameKort: "Natalia Romanova",
		ability: "Superhuman Agility",
		citizenship: "Russian/Soviet",
		height: "1.70m",
		creators: "Stan Lee, Don Rico & Don Heck",
		firstAp: "Tales of Suspense #52",

		//description
		description: ["Natalia Alianovna 'Natasha' Romanova (Russian: Наталья Альяновна 'Наташа' Романова; alias: Natasha Romanoff; Russian: Наташа Романоф), colloquial: Black Widow (Russian: Чёрная Вдова; transliterated Chyornaya Vdova) is a fictional superhero appearing in American comic books published by Marvel Comics. Created by editor and plotter Stan Lee, scripter Don Rico, and artist Don Heck, the character debuted in Tales of Suspense #52 (April 1964). The character was introduced as a Russian spy, an antagonist of the superhero Iron Man. She later defected to the United States, becoming an agent of the fictional spy agency S.H.I.E.L.D. and a member of the superhero team the Avengers.", "Natasha was biochemically enhanced through the Black Widow Ops Program when she was an infant. She received the Red Room's version of the Super-Soldier Serum that was created by Dr. Lyudmila Kudrin to enhance her immune system, bodily condition, and longevity. Nick Fury's intel classified her as Power Level 7. Scarlett Johansson portrays the character in the Marvel Cinematic Universe films Iron Man 2 (2010), The Avengers (2012), Captain America: The Winter Soldier (2014), Avengers: Age of Ultron (2015), Captain America: Civil War (2016), Avengers: Infinity War (2018), Captain Marvel and Avengers: Endgame (both 2019). Johansson will reprise the role in the prequel film Black Widow (2020)."],
		source: ["Wikipedia", "Marvel Fandom"],
		kalla: ["https://en.wikipedia.org/wiki/Black_Widow_(Natasha_Romanova)", "https://marvel.fandom.com/wiki/Natalia_Romanova_(Earth-616)"],

		//additional info för frågor
		actors: "Scarlett Johansson",
		placeOfBirth: "Russia (USSR)",
		yearOfAp: "1964"
	},
	{
		id: "captainamerica",
		alias: "Captain America",

		//bildinfo
		images: ["captainamericaFilmLarge.jpg", "captainamericaFilmSmall.jpg", "captainamericaComLarge.jpg", "captainamericaComSmall.jpg", "captainamericaStandingLarge.png", "captainamericaStandingSmall.png"],
		imageText: ["Captain America as a movie character", "Captain America in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(22,44,162,1) 0%, rgba(105,157,255,1) 50%, rgba(22,44,162,1) 100%)",

		//metainfo
		realName: "Steven 'Steve' Rogers",
		realNameKort: "Steve Rogers",
		ability: "Master Shield Fighter",
		citizenship: "American",
		height: "1.88m",
		creators: "Joe Simon, Jack Kirby",
		firstAp: "Captain America Comics #1",

		//description
		description: ["Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941). Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication.", "The character wears a costume bearing an American flag motif, and he utilizes a nearly indestructible shield that he throws as a projectile. Captain America is the alter ego of Steve Rogers, a frail young man enhanced to the peak of human perfection by an experimental serum to aid the United States government's efforts in World War II. Near the end of the war, he was trapped in ice and survived in suspended animation until he was revived in modern times. Although Captain America often struggles to maintain his ideals as a man out of his time, he remains a highly respected figure in his community, which includes becoming the long-time leader of the Avengers. Captain America was the first Marvel Comics character to appear in media outside comics with the release of the 1944 movie serial, Captain America."],
		source: ["Wikipedia", "Wikipedia"],
		kalla: ["https://en.wikipedia.org/wiki/Captain_America", "https://en.wikipedia.org/wiki/Captain_America"],

		//additional info för frågor
		actors: "Dick Purcell, Arthur Pierce, Reb Brown, Matt Salinger, Chris Evans",
		placeOfBirth: "USA",
		yearOfAp: "1941"
	},
	{
		id: "ironman",
		alias: "Iron Man",

		//bildinfo
		images: ["ironmanFilmLarge.jpg", "ironmanFilmSmall.jpg", "ironmanComLarge.jpg", "ironmanComSmall.jpg", "ironmanStandingLarge.png", "ironmanStandingSmall.png"],
		imageText: ["Iron Man as a movie character", "Iron Man in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(106,12,11,1) 0%, rgba(207,45,45,1) 50%, rgba(106,12,11,1) 100%)",

		//metainfo
		realName: "Anthony Edward 'Tony' Stark",
		realNameKort: "Tony Stark",
		ability: "Super Strength",
		citizenship: "American & Bulgarian",
		height: "1.85m",
		creators: "Stan Lee, Larry Lieber, Don Heck & Jack Kirby",
		firstAp: "Tales of Suspense #39",

		//description
		description: ["Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963) and received his own title in Iron Man #1 (May 1968). A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward 'Tony' Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a mechanized suit of armor to save his life and escape captivity. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man.", "Initially, Iron Man was a vehicle for Stan Lee to explore Cold War themes, particularly the role of American technology and industry in the fight against communism. Subsequent re-imaginings of Iron Man have transitioned from Cold War motifs to contemporary matters of the time. Throughout most of the character's publication history, Iron Man has been a founding member of the superhero team the Avengers and has been featured in several incarnations of his own various comic book series. Iron Man has been adapted for several animated TV shows and films."],
		source: ["Wikipedia", "Wikipedia"],
		kalla: ["https://en.wikipedia.org/wiki/Iron_Man", "https://en.wikipedia.org/wiki/Iron_Man"],

		//additional info för frågor
		actors: "Robert Downey, Jr.",
		placeOfBirth: "Bulgaria",
		yearOfAp: "1963",
	},
	{
		id: "wolverine",
		alias: "Wolverine",

		//bildinfo
		images: ["wolverineFilmLarge.jpg", "wolverineFilmSmall.jpg", "wolverineComLarge.jpg", "wolverineComSmall.jpg", "wolverineStandingLarge.png", "wolverineStandingSmall.png"],
		imageText: ["Wolverine as a movie character", "Wolverine in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(14,17,19,1) 0%, rgba(255,254,3,1) 50%, rgba(14,17,19,1) 100%)",

		//metainfo
		realName: "James 'Logan' Howlett",
		realNameKort: "Logan Howlett",
		ability: "Adamantium Skeleton",
		citizenship: "Canadian & Krakoan",
		height: "1.60m",
		creators: "Roy Thomas, Len Wein & John Romita",
		firstAp: "Incredible Hulk #180",

		//description
		description: ["Wolverine (birth name; James Howlett; alias; Logan and Weapon X) is a fictional character appearing in American comic books published by Marvel Comics, mostly in association with the X-Men. He is a mutant who possesses animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, and three retractable claws in each hand. Wolverine has been depicted variously as a member of the X-Men, Alpha Flight, and the Avengers.", "The character appeared in the last panel of The Incredible Hulk #180 before having a larger role in #181 (cover-dated Nov. 1974). He was created by Marvel editor-in-chief Roy Thomas, writer Len Wein and Marvel art director John Romita Sr. Romita designed the character, although it was first drawn for publication by Herb Trimpe. Wolverine then joined a revamped version of the superhero team the X-Men, where eventually writer Chris Claremont and artist-writer John Byrne would play significant roles in the character's development. Artist Frank Miller collaborated with Claremont and helped revise the character with a four-part eponymous limited series from September to December 1982, which debuted Wolverine's catchphrase, 'I'm the best there is at what I do, but what I do best isn't very nice.' Wolverine is typical of the many tough antiheroes that emerged in American popular culture after the Vietnam War; his willingness to use deadly force and his brooding nature became standard characteristics for comic book antiheroes by the end of the 1980s. As a result, the character became a fan favorite of the increasingly popular X-Men franchise, and has been featured in his own solo comic book series since 1988."],
		source: ["Wikipedia", "Wikipedia"],
		kalla: ["https://en.wikipedia.org/wiki/Wolverine_(character)", "https://en.wikipedia.org/wiki/Wolverine_(character)"],

		//additional info för frågor
		actors: "Hugh Jackman",
		placeOfBirth: "Canada",
		yearOfAp: "1974"
	},
	{
		id: "blackpanther",
		alias: "Black Panther",

		//bildinfo
		images: ["blackpantherFilmLarge.jpg", "blackpantherFilmSmall.jpg", "blackpantherComLarge.jpg", "blackpantherComSmall.jpg", "blackpantherStandingLarge.png", "blackpantherStandingSmall.png"],
		imageText: ["Black Panther as a movie character", "Black Phanter in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(26,5,84,1) 0%, rgba(196,171,255,1) 50%, rgba(26,5,84,1) 100%)",

		//metainfo
		realName: "T'Challa",
		realNameKort: "T'Challa",
		ability: "Energy Pulse",
		citizenship: "Wakandan",
		height: "1.83m",
		creators: "Stan Lee & Jack Kirby",
		firstAp: "Fantastic Four #52",

		//description
		description: ["Black Panther is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer-editor Stan Lee and writer-artist Jack Kirby, first appearing in Fantastic Four #52 (cover-dated July 1966) in the Silver Age of Comic Books. Black Panther's real name is T'Challa, king and protector of the fictional African nation of Wakanda. Along with possessing enhanced abilities achieved through ancient Wakandan rituals of drinking the essence of the heart-shaped herb, T'Challa also relies on his proficiency in science, rigorous physical training, hand-to-hand combat skills, and access to wealth and advanced Wakandan technology to combat his enemies.", "Black Panther is the first superhero of African descent in mainstream American comics, having debuted years before early black superheroes such as Marvel Comics' the Falcon (1969), Luke Cage (1972) and Blade (1973) or DC Comics' John Stewart in the role of Green Lantern (1971). In one comic book storyline, the Black Panther mantle is handled by Kasper Cole, a multiracial New York City police officer. Beginning as an impersonator, Cole would later take on the moniker of White Tiger and become an ally to T'Challa. The role of Black Panther and leadership of Wakanda is also given to T'Challa's sister Shuri for a short time."],
		source: ["Wikipedia", "Wikipedia"],
		kalla: ["https://en.wikipedia.org/wiki/Black_Panther_(Marvel_Comics)", "https://en.wikipedia.org/wiki/Black_Panther_(Marvel_Comics)"],

		//additional info för frågor
		actors: "Chadwick Boseman",
		placeOfBirth: "Wakanda",
		yearOfAp: "1966"
	},
	{
		id: "thor",
		alias: "Thor",

		//bildinfo
		images: ["thorFilmLarge.jpg", "thorFilmSmall.jpg", "thorComLarge.jpg", "thorComSmall.jpg", "thorStandingLarge.png", "thorStandingSmall.png"],
		imageText: ["Thro as a move character", "Thor in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(77,121,136,1) 0%, rgba(101,220,249,1) 50%, rgba(77,121,136,1) 100%)",

		//metainfo
		realName: "Thor Odinson",
		realNameKort: "Thor Odinson",
		ability: "Controls Mjolnir (his hammer)",
		citizenship: "Asgardian",
		height: "1.98m",
		creators: "Stan Lee, Don Rico, Hy Rosen, Jack Kirby & Larry Lieber",
		firstAp: "Venus #11",

		//description
		description: ["Thor Odinson is a fictional superhero appearing in American comic books published by Marvel Comics. The character, which is based on the Norse deity of the same name, is the Asgardian god of thunder who possesses the enchanted hammer, Mjolnir, which grants him the ability to fly and manipulate weather amongst his other superhuman attributes. Debuting in the Silver Age of Comic Books, the character first appeared in Journey into Mystery #83 (August 1962) and was created by penciller-plotter Jack Kirby, editor-plotter Stan Lee, and scripter Larry Lieber. He has starred in several ongoing series and limited series, and is a founding member of the superhero team the Avengers, appearing in each volume of that series. The character has also appeared in associated Marvel merchandise including animated television series, movies, video games, clothing, toys and trading cards.", "The character was first portrayed in live action by Eric Allan Kramer in the 1988 television movie The Incredible Hulk Returns. Chris Hemsworth portrays Thor Odinson in the Marvel Cinematic Universe films Thor (2011), The Avengers (2012), Thor: The Dark World (2013), Avengers: Age of Ultron (2015), Doctor Strange (2016) in a cameo, Thor: Ragnarok (2017), Avengers: Infinity War (2018), Avengers: Endgame (2019) and will return in Thor: Love and Thunder (2022). Additionally, archival footage of Hemsworth as Thor was used in the 2013 episodes 'Pilot' and 'The Well' of Marvel's Agents of S.H.I.E.L.D."],
		source: ["Wikipedia", "Wikipedia"],
		kalla: ["https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)", "https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)"],

		//additional info för frågor
		actors: "Chris Hemsworth",
		placeOfBirth: "A cave in Norway",
		yearOfAp: "1950"
	},
	{
		id: "gamora",
		alias: "Gamora",

		//bildinfo
		images: ["gamoraFilmLarge.jpg", "gamoraFilmSmall.jpg", "gamoraComLarge.jpg", "gamoraComSmall.jpg", "gamoraStandingLarge.png", "gamoraStandingSmall.png"],
		imageText: ["Gamora as a move character", "Gamora in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(24,107,42,1) 0%, rgba(80,209,108,1) 50%, rgba(24,107,42,1) 100%)",

		//metainfo
		realName: "Gamora Zen Whoberi Ben Titan",
		realNameKort: "Gamora Ben Titan",
		ability: "Regenerative Healing Factor",
		citizenship: "Zen-Whoberis",
		height: "1.83m",
		creators: "Jim Starlin",
		firstAp: "Strange Tales #180",

		//description
		description: ["Gamora Zen Whoberi Ben Titan is a fictional character appearing in American comic books published by Marvel Comics. Created by writer/artist Jim Starlin, the character first appeared in Strange Tales #180 (June 1975). Gamora is the adopted daughter of Thanos, and the last of her species. Her powers include superhuman strength and agility and an accelerated healing factor. She also is an elite combatant, being able to beat most of the opponents in the galaxy. She is a member of the group known as the Infinity Watch. The character played a role in the 2007 crossover comic book event 'Annihilation: Conquest' and became a member of the titular team in its spin-off comic, Guardians of the Galaxy.", "It is unknown just how extensive Gamora's abilities are, because she is the last of her kind. She is undoubtedly a master assassin and fighter, able to beat almost any opponent and escape danger through her physical strength alone. She is also a master strategist, able to think on her feet and use her wits to escape any danger that presents itself. She is adept in several technologies, as she can fly planes, escape pods, and possesses extensive knowledge of the inner workings of complex spacecraft. Gamora has been featured in a variety of associated Marvel merchandise. Zoe Saldana plays the character in the Marvel Cinematic Universe films Guardians of the Galaxy (2014), Guardians of the Galaxy Vol. 2 (2017), Avengers: Infinity War (2018), and Avengers: Endgame (2019)."],
		source: ["Wikipedia", "Marvel Movies Fandom"],
		kalla: ["https://en.wikipedia.org/wiki/Gamora", "https://marvel-movies.fandom.com/wiki/Gamora"],

		//additional info för frågor
		actors: "Zoe Saldana",
		placeOfBirth: "Planet Zen-Whoberi",
		yearOfAp: "1975"
	},
	{
		id: "doctorstrange",
		alias: "Doctor Strange",

		//bildinfo
		images: ["doctorstrangeFilmLarge.jpg", "doctorstrangeFilmSmall.jpg", "doctorstrangeComLarge.jpg", "doctorstrangeComSmall.jpg", "doctorstrangeStandingLarge.png", "doctorstrangeStandingSmall.png"],
		imageText: ["Doctor Strange as a movie character", "Doctor Strange in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(19,14,13,1) 0%, rgba(0,141,200,1) 50%, rgba(19,14,13,1) 100%)",

		//metainfo
		realName: "Stephen Vincent Strange",
		realNameKort: "Vincent Strange",
		ability: "Dimensional Travel",
		citizenship: "American",
		height: "1.88m",
		creators: "Stan Lee & Steve Ditko",
		firstAp: "Strange Tales #110",

		//description
		description: ["Doctor Stephen Strange is a fictional superhero appearing in American comic books published by Marvel Comics. Created by artist Steve Ditko and writer Stan Lee, the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Inspired by stories of black magic and Chandu the Magician, Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics.", "The character begins as an egotistical surgeon who loses the ability to operate after a car crash severely damages his hands. Searching the globe for healing, he encounters the Ancient One, the Sorcerer Supreme. Strange becomes his student and learns to be a master of both the mystical and the martial arts. He acquires an assortment of mystical objects, including the powerful Eye of Agamotto and Cloak of Levitation, and takes up residence in a New York City mansion called the Sanctum Sanctorum. Strange assumes the title of Sorcerer Supreme and, with his friend and valet Wong, defends the world from mystical threats. The character was first portrayed in live-action by Peter Hooten in the 1978 television film Dr. Strange. Benedict Cumberbatch portrays the character in the Marvel Cinematic Universe films Doctor Strange (2016), Thor: Ragnarok (2017), Avengers: Infinity War (2018), and Avengers: Endgame (2019). Cumberbatch will reprise the role in the sequel Doctor Strange in the Multiverse of Madness (2022)."],
		source: ["Wikipedia", "Wikipedia"],
		kalla: ["https://en.wikipedia.org/wiki/Doctor_Strange", "https://en.wikipedia.org/wiki/Doctor_Strange"],

		//additional info för frågor
		actors: "Benedict Cumberbatch",
		placeOfBirth: "USA",
		yearOfAp: "1963"
	},
	{
		id: "spiderman",
		alias: "Spider-Man",

		//bildinfo
		images: ["spidermanFilmLarge.jpg", "spidermanFilmSmall.jpg", "spidermanComLarge.jpg", "spidermanComSmall.jpg", "spidermanStandingLarge.png", "spidermanStandingSmall.png"],
		imageText: ["Spider-Man as a movie character", "Spider-Man in the comics"],
		gradientColor: "linear-gradient(36deg, rgba(177,19,19,1) 0%, rgba(232,77,89,1) 50%, rgba(177,19,19,1) 100%)",

		//metainfo
		realName: "Peter Benjamin Parker",
		realNameKort: "Peter Parker",
		ability: "Spider-Sense",
		citizenship: "American",
		height: "1.78m",
		creators: "Stan Lee & Steve Ditko",
		firstAp: "Amazing Fantasy #15",

		//description
		description: ["Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He appears in American comic books published by Marvel Comics, as well as in a number of movies, television shows, and video game adaptations set in the Marvel Universe. In the stories, Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker were killed in a plane crash. Lee and Ditko had the character deal with the struggles of adolescence and financial issues, and accompanied him with many supporting characters, such as J. Jonah Jameson, Harry Osborn, Max Modell, romantic interests Gwen Stacy and Mary Jane Watson, and foes such as Doctor Octopus, the Green Goblin and Venom. His origin story has him acquiring spider-related abilities after a bite from a radioactive spider; these include clinging to surfaces, shooting spider-webs from wrist-mounted devices, and detecting danger with his 'spider-sense'", "When Spider-Man first appeared in the early 1960s, teenagers in superhero comic books were usually relegated to the role of sidekick to the protagonist. The Spider-Man series broke ground by featuring Peter Parker, a high school student from Queens behind Spider-Man's secret identity and with whose 'self-obsessions with rejection, inadequacy, and loneliness' young readers could relate.While Spider-Man had all the makings of a sidekick, unlike previous teen heroes such as Bucky and Robin, Spider-Man had no superhero mentor like Captain America and Batman; he thus had to learn for himself that 'with great power there must also come great responsibility'—a line included in a text box in the final panel of the first Spider-Man story but later retroactively attributed to his guardian, the late Uncle Ben."],
		source: ["Wikipedia", "Wikipedia"],
		kalla: ["https://en.wikipedia.org/wiki/Spider-Man", "https://en.wikipedia.org/wiki/Spider-Man"],

		//additional info för frågor
		actors: "Tobey Maguire, Andrew Garfield & Tom Holland",
		placeOfBirth: "USA",
		yearOfAp: "1962"
	}
]

//info för About-us-sidan
const thisIsUs = [{
		//metadata & bildinfo
		id: "mel",
		alias: "Mel",
		images: ["melStandingLarge.png", "melStandingSmall.png"],
		realName: "Melanie Deuretzbacher",
		ability: "Night Owl",
		citizenship: "Austrian",
		height: "1.68m",
		creators: "Henriette & Johannes",
		firstAp: "1991",
		description: `"Marvel inspired me to find out my own superpowers. I found out that I can travel through time: I sit down with my homework right in the morning and when I blink it's suddenly 3am and I'm still sitting with my homework. I haven't found a way to travel back into the past... but I'm working on it!"`,
		gradientColor: "linear-gradient(36deg, rgba(0,51,55,1) 0%, rgba(141,194,117,1) 50%, rgba(0,51,55,1) 100%)"
	},
	{
		//metadata & bildinfo
		id: "vilma",
		alias: "Vilma",
		images: ["vilmaStandingLarge.png", "vilmaStandingSmall.png"],
		realName: "Vilma Nilsson",
		ability: "Planningfreak",
		citizenship: "Swedish",
		height: "1.6m",
		creators: "Anja & Jörgen",
		firstAp: "1998",
		description: `"The irony that I chose Black Widow as my character and I'm  extremely afraid of spiders. I also, like her, have superhuman agility and almost managed to go down in the split once, about 9 years ago."`,
		gradientColor: "linear-gradient(36deg, rgba(0,35,55,1) 0%, rgba(35,127,167,1) 50%, rgba(0,35,55,1) 100%)"
	},
	{
		//metadata & bildinfo
		id: "kajsa",
		alias: "Kajsa",
		images: ["kajsaStandingLarge.png", "kajsaStandingSmall.png"],
		realName: "Kajsa Ojala Åkerman",
		ability: "Perfectionist",
		citizenship: "Swedish",
		height: "1.66m",
		creators: "Jatta & Petri",
		firstAp: "1995",
		description: `"Just like Captain Marvel I have super strength. It is impossible to move me from my work until it's perfectly done. Not convinced? What if I said that I have Finnish sisu in my blood?"`,
		gradientColor: "linear-gradient(36deg, rgba(55,0,0,1) 0%, rgba(180,55,44,1) 50%, rgba(55,0,0,1) 100%)"
	}
]

//questions for quiz
let quizQu = [
	{
		question: "What is the name of Thor's hammer?",
		answers: ["Mjolnir", "Asgard", "Loki", "Oden"],
		correctAnswer: "Mjolnir",
		key: 'thor'
	},
	{
		question: "What is the name of Spider-Man's uncle?",
		answers: ["Peter", "Ben", "Vincent", "Bruce"],
		correctAnswer: "Ben",
		key: 'spiderman'
	},
	{
		question: "Who is not 1.88m tall?",
		answers: ["Captain America", "Doctor Strange", "Gamora", "Deadpool"],
		correctAnswer: "Gamora",
		key: 'captainamerica'
	},
	{
		question: "What is Doctor Strange's ability?",
		answers: ["Dimensional Travel", "Super Strength", "Spider-Sense", "Superhuman Agility"],
		correctAnswer: "Dimensional Travel",
		key: 'doctorstrange'
	},
	{
		question: "In which comic book had Wolverine his first appearance?",
		answers: ["Fantastic Four #52", "Strange Tales #180", "Incredible Hulk #180", "Tales of Suspense #52"],
		correctAnswer: "Incredible Hulk #180",
		key: 'wolverine'
	},
	{
		question: "What is Black Panther's citizenship?",
		answers: ["Wakandan", "Asgardian", "Zen-Whoberis", "American"],
		correctAnswer: "Wakandan",
		key: 'blackpanther'
	},
	{
		question: "What is Deadpool's real name?",
		answers: ["Anthony Edward 'Tony' Stark", "Wade Winston Wilson", "James 'Logan' Howlett", "Peter Benjamin Parker"],
		correctAnswer: "Wade Winston Wilson",
		key: 'deadpool'
	},
	{
		question: "Who are the creators of Captain Marvel?",
		answers: ["Stan Lee and Steve Ditko", "Fabian Nicieza and Rob Liefeld", "Stan Lee and Jack Kirby", "Roy Thomas and Gene Colan"],
		correctAnswer: "Roy Thomas and Gene Colan",
		key: 'captainmarvel'
	},
	{
		question: "Who is the actress that plays the Black Widow in the Marvel-movies?",
		answers: ["Zoe Saldana", "Brie Larson", "Scarlett Johansson", "Elizabeth Olsen"],
		correctAnswer: "Scarlett Johansson",
		key: 'blackwidow'
	},
	{
		question: "Who had his/her appearance first?",
		answers: ["Captain America", "Thor", "Deadpool", "Iron Man"],
		correctAnswer: "Captain America",
		key: 'gamora'
	},
	{
		question: "Which citizenship does Iron Man have?",
		answers: ["Only Canadian", "Bulgarian and Russian", "Only American", "American and Bulgarian"],
		correctAnswer: "American and Bulgarian",
		key: 'ironman'
	},
	{
		question: "Who turns into Hulk when angry?",
		answers: ["T'Challa", "Steven 'Steve' Rogers", "Robert Bruce Banner", "Stan Lee"],
		correctAnswer: "Robert Bruce Banner",
		key: 'hulk'
	}
]

let answeredQue = []

const quizIndex = {
	title: ["QUIZ: ", "HEROES"],
	info: "Do you know everything about the Marvel Heroes? Take the Marvel Heroes Quiz to show us your potential or to learn more about them. This quiz looks best in landscape mode, min 900px.",
	hsTitle: "TOP 3 HIGHSCORES",
	quizTitle: "Do you have the power it takes?",
	start: 'START QUIZ',
	scoreInfo: 'Your score:',
	highscore: ["Congratulations!", "You made a new highscore!"],
	maxCharacters: "max. 5 characters",
	hsTitles: ["SCORE", "NAME", "DATE & TIME"],
	countTitles: ["SCORE", "QUESTION"],
	highScores: [
		{
			score: '--',
			name: '--',
			date: '--'
		},
		{
			score: '--',
			name: '--',
			date: '--'
		},
		{
			score: '--',
			name: '--',
			date: '--'
		}
	],
	countContent: ['SCORE:', '00:', 'QUESTION:', '/12'],
	overTitle: 'GAME OVER',
	name: 'Name:',
	button: ['OK', 'TRY AGAIN'],
	next: 'Next'
}

const footerData = [
	{
		id: "INFO",
		textOne: "Page made for the course 'Programming for the web' at Malmö University",
		textTwo: "Read about our heroes, about us and master the Quiz!"
	},
	{
		id: "CONTACT",
		textOne: "Contact Kajsa at 227-8246627",
		textTwo: "Contact Melanie at 426-6729361",
		textThree: "Contact Vilma at 252-2594369"
	},
	{
		id: "FRIA LÄROMEDLET",
		textOne: "Copyright (C) 2020 Fria Läromedlet Marvel",
		textTwo: "Link to Fria läromedlets webpage:",
		textThree: "http://www.mpppfw20.se/index.html"
	}
]

const nNavData = ["HOME", "ABOUT", "logo", "CHARACTERS", "QUIZ"]

const nLogo = ["logo.svg", "search.png"]

const metaArray = ["NAME", "HEIGHT", "ABILITY", "CITIZENSHIP", "FIRST APPEARANCE", "CREATORS"]

const index = {
	quizText: ["QUIZ", "Do you already know everything about Marvel Heroes? Then give the quiz a try! Disclaimer: The quiz will only work perfectly when you are on a PC.", "DO YOU HAVE THE POWER IT TAKES?", "GO TO QUIZ"],
	infoText: ["FRIA LÄROMEDLET:", "HEROES", "This webpage has been created as part of the course 'Programming for the web' at Malmö University. To find out some interesting facts about the students behind this project, go to About.", "The theme of this webpage is Marvel Heroes. Marvel is mainly known due to their comics but they even have released several movies. You probably wouldn't guess that the Marvel era already began in 1961. Have fun on our page and hopefully, you will learn a thing or two!"],
	darkPatternIndex: ["darkBackgroundLarge.jpg", "darkBackgroundSmall.jpg"],
	spideyIndex: ["spidermanHangingLarge.png", "spidermanHangingSmall.png"],
	marvelLogo: ["marvelLogoBig.jpg", "marvelLogoSmall.jpg"]
}

//currentSlideArr: arrayer för margins (carousel)
const slideArrMobil = [
	{
		pageNr: 1,
		marg: 0
	},
	{
		pageNr: 2,
		marg: "-100vw"
	},
	{
		pageNr: 3,
		marg: "-200vw"
	},
	{
		pageNr: 4,
		marg: "-300vw"
	},
	{
		pageNr: 5,
		marg: "-400vw"
	},
	{
		pageNr: 6,
		marg: "-500vw"
	}
]

const slideArrDesktop = [
	{
		pageNr: 1,
		marg: 0
	},
	{
		pageNr: 2,
		marg: "-100vw"

	},
	{
		pageNr: 3,
		marg: "-200vw"
	}
]

const slideArrBig = [
	{
		pageNr: 1,
		marg: 0
	},
	{
		pageNr: 2,
		marg: "-1313px"

	},
	{
		pageNr: 3,
		marg: "-2613px"
	}
]

//searchBar
const searchBarData = {
	text: ["Search results for"]
}

//vi skapar en med små bokstäver för att få en array att söka igenom för search
let smallLetterArr = []

for (let i = 0; i < heroes.length; i++) {
	let nObj = {
		id: heroes[i].id.toLowerCase(),
		alias: heroes[i].alias.toLowerCase(),
		imageBig: heroes[i].images[4],
		imageSmall: heroes[i].images[5],
		imageText: `${heroes[i].imageText[0].toLowerCase()} ${heroes[i].imageText[1].toLowerCase()}`,
		realName: heroes[i].realName.toLowerCase(),
		realNameKort: heroes[i].realNameKort.toLowerCase(),
		ability: heroes[i].ability.toLowerCase(),
		citizenship: heroes[i].citizenship.toLowerCase(),
		height: heroes[i].height.toLowerCase(),
		creators: heroes[i].creators.toLowerCase(),
		firstAp: heroes[i].firstAp.toLowerCase(),
		description: `${heroes[i].description[0].toLowerCase()} ${heroes[i].description[1].toLowerCase()}`
	}
	smallLetterArr.push(nObj)
}