class Cat {
    constructor(name, fur) {
       this.name = name;
       this.furColor = fur;
       this.legsCount = 4;
       this.hasTale = true;
       this.voiceCount = 0;
       this.sound = 'miau miau!';
    }

    voice() {
        //this.voiceCount++
        console.log(`${this.name}: $!(${++this.voiceCount})`);
    

    }

}

module.exports = Cat;