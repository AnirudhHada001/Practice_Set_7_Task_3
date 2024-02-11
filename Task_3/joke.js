// Task 3

let myJokes = [
      {
          "category": "Programming",
          "type": "single",
          "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 4,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 37,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Debugging: Removing the needles from the haystack.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 40,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 184,
          "safe": false,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "safe": true,
          "id": 301,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 45,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 24,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 23,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 42,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "I'd tell you a joke about NAT but I would have to translate.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "safe": true,
          "id": 319,
          "lang": "en"
      }
      {
          "category": "Programming",
          "type": "single",
          "joke": "\"Knock, knock.\"\n\"Who's there?\"\n\n[very long pause]\n\n\"Java.\"",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 36,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 41,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 35,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Debugging: Removing the needles from the haystack.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 40,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "ASCII silly question, get a silly ANSI.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 25,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Documentation is like sex:\nWhen it's good, it's very good.\nWhen it's bad, it's better than nothing...",
          "flags": {
              "nsfw": true,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "safe": false,
          "id": 305,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 43,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 22,
          "safe": true,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
          "flags": {
              "nsfw": true,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": true
          },
          "id": 30,
          "safe": false,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "single",
          "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false,
              "explicit": false
          },
          "id": 132,
          "safe": true,
          "lang": "en"
      }
  ]

let index = Math.floor(Math.random() * (myJokes.length - 1))
joke.inneHTML = myJokes[index].joke;