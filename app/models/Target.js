

export default class Target {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.attacks = {
            slap: 1,
            punch: 5,
            kick: 10
        }
    }

    get Template() {
        let subTemplate = `
            <h1 class="text-primary">${this.name}</h1>
            <h3 class="${this.health > 50 ? 'text-success' : 'text-danger'}">Health: ${this.health}</h3>
            `
        for (let attack in this.attacks) {
            subTemplate += `<button onclick="app.gameController.attack('${attack}')"> ${attack}</button>`
        };
        return subTemplate
    }
}