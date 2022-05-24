class Ninja{
    constructor({name, health}){
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
    }

    sayName(){ console.log(this.name); }

    showStats(){ console.log(`Name: ${this.name}, Health: ${this.health}, Speed:${this.speed}, Strength:${this.strength}`); }

    drinkSake(){ this.health += 10; }
}

class Sensei extends Ninja{
    constructor({name, health=200}){
        super({name, health});
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log('I am wise because I realize that I know nothing.');
        super.drinkSake();
    }
}