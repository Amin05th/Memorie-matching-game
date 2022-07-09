const { Player , MixOrMatch, AudioController } = require('../script.ts')

describe('Test AudioController', () => {
    const audio = new AudioController()
    // const AudioElement = document.createElement('audio')
    // AudioElement.preload = "auto"
    // AudioElement.src = "/Sounds/Assets_Audio_creepy.mp3"
    // it('tests Constructor',() => {
    //     expect(audio).toBe({"bgMusic": AudioElement.src = "/Sounds/Assets_Audio_creepy.mp3", "gameOverMusic": AudioElement.src = '/Sounds/Assets_Audio_gameOver.wav', "flipMusic": AudioElement.src = '/Sounds/Assets_Audio_flip.wav', "victoryMusic": AudioElement.src = '/Sounds/Assets_Audio_victory.wav', "matchMusic": AudioElement.src = '/Sounds/sui - sound effect.mp3', "bgVolume": '0.5'})
    // })

    describe('should test methods', () => {
        it('should start Music', () => {
            const musicStart = audio.startMusic()
            expect(musicStart).toEqual(7)
        })

        it('should stop Music', () => {
            const musicStart = audio.stopMusic()
            expect(musicStart).toEqual(7)
        })

        it('should flip Music', () => {
            const musicStart = audio.flip()
            expect(musicStart).toEqual(7)
        })

        it('should match Music', () => {
            const musicStart = audio.match()
            expect(musicStart).toEqual(7)
        })

        it('should victory Music', () => {
            const musicStart = audio.victory()
            expect(musicStart).toEqual(7)
        })

        it('should gameOver Music', () => {
            const musicStart = audio.gameOver()
            expect(musicStart).toEqual(7)
        })
    });
});

describe('Test Player', () => {
    const name = 'amin'
    const player = new Player(name)
    const div = document.createElement('div')
    const p = document.createElement('p')
    
    describe('test constructor', () => {
        it('should default pass', () => {
            expect(player).toEqual({"box": div, "matchedCardsArray": [], "playerName": name, "playerNameBox": p, "scoreBox": p, "turn": false})
        })
    
        it('should pass with turn ture', () => {
            player.turn = true
            expect(player).toEqual({"box": div, "matchedCardsArray": [], "playerName": name, "playerNameBox": p, "scoreBox": p, "turn": true})
        })
    
        it('should pass with not a empty array', () => {
            player.matchedCardsArray.push('egewg')
            expect(player).toEqual({"box": div, "matchedCardsArray": ["egewg"], "playerName": name, "playerNameBox": p, "scoreBox": p, "turn": true})
        })
    })

    describe('test Methods', () => {
        it('should test createPlayer', () => {
            const createPlayer = player.createPlayer()
            div.classList.add('player')
            div.classList.add('whiteLargeFont')
            div.textContent = name
            div.append(p)
            expect(createPlayer).toEqual(div)
        })

        it('should test uptadescore', () => {
            const uptadedScore = player.updatescore()
            expect(uptadedScore).toBe(5)
        })

        it('should test addPlayerTurnClass', () => {
            const uptadeTurn = player.addPlayerTurnClass()
            expect(uptadeTurn).toBe(7)
        })

        it('should test addPlayerTurnClass', () => {
            const removeTurn = player.removePlayerTurnClass()
            expect(removeTurn).toBe(7)
        })
    })
});

 describe('Test MixOrMatch', () => {
    const game = new MixOrMatch()
    describe('test constructor', () => {
        const bgMusicElement = document.createElement('audio')
        const gameOverElement = document.createElement('audio')
        const flipElement = document.createElement('audio')
        const victoryElement = document.createElement('audio')
        const matchElement = document.createElement('audio')
        bgMusicElement.preload = "auto"
        gameOverElement.preload = "auto"
        flipElement.preload = "auto"
        victoryElement.preload = "auto"
        matchElement.preload = "auto"
        bgMusicElement.src = "/Sounds/Assets_Audio_creepy.mp3"
        gameOverElement.src = "/Sounds/Assets_Audio_creepy.mp3"
        flipElement.src = "/Sounds/Assets_Audio_creepy.mp3"
        victoryElement.src = "/Sounds/Assets_Audio_creepy.mp3"
        matchElement.src = "/Sounds/Assets_Audio_creepy.mp3"
        it('should default pass', () => {
            expect(game).toEqual({"allPlayers": [], "audioController": {"bgMusic": bgMusicElement, "bgVolume": '0.5', "flipMusic": flipElement , "gameOverMusic": gameOverElement, "matchMusic": matchElement , "victoryMusic": victoryElement }, "cardsArray": undefined, "changeTurnAfterMissMatch": false, "playerContainer": null, "timeRemaining": undefined, "timer": null, "totalPlayers": undefined, "totalTime": undefined})
        })
    });

    describe('test methods', () => {
        it('test startGame', () => {
            const start = game.startGame()
            expect(start).toEqual(7)
        })
    })
    
})