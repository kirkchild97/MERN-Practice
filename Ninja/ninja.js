class Ninja{
    constructor({name, health}){
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
    }

    sayName(){ console.log(this.name); }

    showStats(){ console.log(`Name: ${this.name}, Health: ${this.health}, Speed:${this.speed}, Strength:${this.strength}`); }

    drinkShake(){ this.health += 10; }
}