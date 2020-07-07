import Target from "../models/Target.js";

let _target = new Target("Bob", 100)

export default class GameService {

    constructor() {
        console.log("Hello from game service");
    }

    attack(attackName) {
        _target.health -= _target.attacks[attackName]
    }

    // slap() {
    //     _target.health--
    //     console.log(_target);
    // }

    // kick() {
    //     _target.health -= 10
    //     console.log(_target);
    // }

    get Target() {
        return new Target(_target.name, _target.health)
    }

}