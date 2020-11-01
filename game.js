setTimeout(() => {
  console.log('Game over!');
}, 60000)

//I found my riddles at https://solveordie.com/scary-riddles/


const textElement = document.getElementById('text')
// const textElement = $('#text')
const optionButtonsElement = document.getElementById('option-buttons')
// const optionButtonsElement = $('#option-buttons')

let state = {}

let count = 1;

// function clickyGame() {
//
//   if (count<10) {
//     count++;
//     }
//   else {
//    alert('poo')
//   }
// }

function startGame() {
  // state = {}
  showText(1)
}

function showText(textIndex) {
  const texty = texties.find(texty => texty.id === textIndex)
  textElement.innerText = texty.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)

  }//if texty.id=8; {} create btn

  // function clickyGame1() {
  //   if (nextTextId = 8){
  //     return clickyGame()
  //   }

  texty.options.forEach(option => {
    if (showOption(option)) {
      console.log('hello')
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
      // $('optionButtonsElement').append(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextId = option.nextText
  if (nextTextId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showText(nextTextId)
}


const texties = [
  {
    id: 1,
    text: 'You’ve entered the haunted house of Uncle Donnie who lived down the street but now you’re trapped! Ghost Uncle Donnie is a real trickster and has hidden the four keys that will unlock the front door. You’ll have to solve his riddles in order to receive a key.',
    options: [
      {
        text: 'creepy room',
        setState: { roomOne: true },
        nextText: 2
      },
      {
        text: 'creaky room',
        nextText: 2
      },
      {
        text: 'damp room',
        nextText: 2
      },
      {
        text: 'dry room',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Uncle Donnie wants to know the answer to: I am alive without breath and cold as death. I am never thirsty but always drinking. What am I?',
    options: [
      {
        text: 'poop',
        nextText: 9
      },
      {
        text: 'grey matter',
        nextText: 9
      },
      {
        text: 'ocean',
        nextText: 9
      },

      {
        text: 'fish',
        nextText: 3
      }
    ]
  },

  {
    id: 3,
    text: 'You did it! You received your first key! Pick another room.',
    options: [
      {
        text: 'sad room',
        setState: { roomOne: true },
        nextText: 4
      },
      {
        text: 'mad room',
        nextText: 4
      },
      {
        text: 'glad room',
        nextText: 4
      }
    ]},

  {
    id: 4,
    text: "Uncle Donnie says this is a juicy one: A young woman is attending her mother's funeral. While there, she meets a man she has never seen before and falls in love immediately. After the funeral she tries to find him but cannot. Several days later she kills her sister. Why does she kill her sister?",
    options: [
      {
        text: 'Because she was eyeing her man!',
        nextText: 9
      },
      {
        text: 'She is unhinged',
        nextText: 9
      },
      {
        text: "She killed her sister hoping to see this man at her sisters funeral.",
        nextText: 5
      },

      {
        text: 'She was bored',
        nextText: 9
      }
    ]
  },
  {
    id: 5,
    text: 'You did it! You received your second key! Pick another room. Note: If you thought of this answer easily you may be a psychopath',
    options: [
      {
        text: 'party room',
        setState: { roomOne: true },
        nextText: 6
      },
      {
        text: 'farty room',
        nextText: 6
      },

    ]
  },
  {
    id: 6,
    text: "Uncle Donnie wants to make sure that you're prepared when he turns you into a ghost: What room do ghosts avoid?",
    options: [
      {
        text: 'the nether realm',
        nextText: 9
      },
      {
        text: 'The living room.',
        nextText: 7
      },
      {
        text: 'vacant room?',
        nextText: 9
      },

      {
        text: 'I give up make me a ghost',
        nextText: 9
      }
    ]
  },
  {
    id: 7,
    text: 'You did it! You received your third key! Last room.',
    options:[
      {
        text: 'Are you sure you are ready? okaaaaay',

        nextText: 8

      }
    ]

    },
      {
        id: 8,

        text: 'Noone is in this room but you hear a ghostly voice in the darkness (hint hint, wink wink): When you have me more, you can see only less. What Am I?',

        options: [
      {
        text: "Aunty Meryl's fudge cake",
        nextText: 9

      },
          {
            text: "poop (get it? Because you'll get septic eye!)",
            nextText: 9
          },
          {
            text: 'da da da daaanger zooooone!',
            nextText: 9
          },

          {
            text: 'Darkness',
            nextText: 10
          }
        ]
      },



  {
    id: 9,
    text: 'game over! Yuh now a ghost! wanna try again?',
    options: [
      {
        text: 'restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'You did it! You escaped the haunted house of Uncle Donnie who lived down the street! You will not be joining his ghost army.',
    options: [
      {
        text: 'wanna play again?',
        nextText: -1
      }
    ]
  },


    ]

startGame()
// let tempD = [];
// for (let i in texties){
//   if (texties[i].options == "y") {
//     tempD.push('poop');
//   }
//
// }
// texties = tempD;

//
// const button = document.getElementById('start-button')
// button.addEventListener('click', event => {
//   openWin()
// })
