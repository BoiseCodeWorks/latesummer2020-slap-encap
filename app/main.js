
import GameController from "./controllers/GameController.js";
console.log("hello from main");

class App {
    constructor() {
        this.gameController = new GameController()
    }
}

window["app"] = new App()