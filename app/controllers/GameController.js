import GameService from "../services/GameService.js";

// PRIVATE AREA
let _gameService = new GameService()

function _draw() {
    document.getElementById("target").innerHTML = _gameService.Target.Template
}

// PUBLIC AREA
export default class GameController {
    constructor() {
        console.log("Hello from the game Controller");
        _draw()
    }

    // slap() {
    //     _gameService.slap()
    //     _draw()
    // }

    // kick() {
    //     _gameService.kick()
    //     _draw()
    // }

    attack(attackName) {
        _gameService.attack(attackName)
        _draw()
    }


}
