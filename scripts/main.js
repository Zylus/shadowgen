
$(function() {

    // Populate using an object literal

     WTF.init({

         heading: [
             "Check this chummer out... they're a",
             "The hottest runner in the sprawl is a",
			 "You better hide yo kids from this",
			 "I'm gonna play a fucking"
         ],
         response: [
             "Boring, give me another one",
			 "Too crazy, even for the Sixth World",
			 "That just won't work. Retry!"
         ],
         template: [
             "@attr @race @job from @loc who has an unusual interest in @spec",
			 "@attr @race @job from @loc who @trait and is interested in @spec",
			 "@attr @race @job from @loc who is being hunted by @enemy",
			 "@attr @race @job from @loc who has connections to @friends",
			 "@attr @race @job from @loc who is being hunted by @enemy and @trait",
			 "@attr @race @job from @loc who has connections to @friends and @trait",
			 "@attr @race @job from @loc who @trait",
			 "@attr @race @job from @loc who @trait",
			 "@attr @race @job from @loc who @trait",
			 "@attr @race @job from @loc who @trait and @trait",
			 "@attr @race @job from @loc who @trait and @trait"

         ],
         race: [
             "human",
             "elf",
             "dwarf",
			 "orc",
			 "troll"
         ],
		 
		 attr: [
             "violent",
             "just",
             "pragmatic",
			 "emotional",
			 "gentle",
			 "aggressive",
             "cautious",
             "sweet",
			 "cheerful",
			 "depressed",
			 "annoying",
             "stuck-up",
             "caring",
			 "badass",
			 "psychopathic",
			 "well-behaved",
			 "crazy",
			 "cybered-up",
			 "racist",
			 "charming",
			 "serious",
			 "scary"
         ],
		 
		 job: [
             "street samurai",
             "cyber warrior",
             "mercenary",
             "spec ops",
			 "assassin",
			 "magical investigator",
			 "street shaman",
			 "street doc",
			 "combat mage",
			 "support mage",
			 "melee adept",
			 "melee expert",
			 "weapon specialist",
             "gunner",
             "sniper",
             "heavy gunner",
			 "face",
			 "fixer",
			 "crime lord",
			 "team leader",
			 "decker",
			 "technomancer",
			 "gun adept",
			 "rigger",
			 "vehicle expert",
             "driver",
             "smuggler",
             "ganger",
			 "bounty hunter",
			 "security expert",
			 "demolitions expert"
         ],
         loc: [
             "the UCAS",
			 "the CAS",
			 "the NAN",
             "South America",
             "Aztlan",
             "Germany",
			 "central Europe",
			 "eastern Europe",
			 "Russia",
			 "Japan",
			 "China",
			 "Hong Kong",
			 "Africa",
			 "Tir Tairngire",
			 "the Sioux Nation"
         ],
		 spec: [
             "firearms",
             "dancing",
             "driving",
             "matrix culture",
			 "cooking",
			 "tinkering",
			 "dank memes",
			 "shopping",
			 "gaming",
			 "gambling"
         ],
		 enemy: [
             "the triad",
             "the yaks",
             "the vory",
             "Lone Star",
			 "Knight Errant",
			 "Ares",
			 "Aztechnology",
             "EVO corporation",
             "Horizon group",
             "Mitsuhama",
			 "Neonet",
			 "Renraku",
			 "Saeder-Krupp",
             "Shiawase",
             "Wuxing",
             "the Johnson of a run gone bad",
			 "humanis",
			 "an influential figure",
			 "a dragon"
         ],
		 friends: [
             "the triad",
             "the yaks",
             "the vory",
             "a Lone Star cop",
			 "a Knight Errant sergeant",
			 "an Ares exec",
			 "an Aztechnology blood mage",
             "an EVO scientist",
             "a Horizon reporter",
             "a Mitsuhama scientist",
			 "a Neonet spider",
			 "a Red Samurai",
			 "a Saeder-Krupp security manager",
             "a Shiawase scientist",
             "a Wuxing corporate mage",
			 "an influential figure",
			 "an inventive street doc",
			 "a BBS admin",
			 "a local gang"
         ],
		 trait: [
             "is afraid of spirits",
             "is a cold-hearted businessperson",
             "is too compassionate for their own good",
             "easily makes friends",
			 "is an alcoholic",
			 "is addicted to stims",
			 "is addicted to BTLs",
             "loathes drugs and cyberware",
             "barely has essence left",
             "grew up in a slum",
			 "is the illegitimate child of a corp exec",
			 "enjoys cheap trid shows",
			 "is a socialite through and trough",
             "has an academic education",
             "is on a quest for vengeance",
             "is in the shadows because they enjoy it",
			 "is an ex-wageslave",
			 "has a family they care about",
			 "has family working for the corps"
         ]
     }); 

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});