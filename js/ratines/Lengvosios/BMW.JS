

const Transportas = require('./../Transportas/Transportas');

class BMW extends Transportas {
    constructor(name,) {
        super(name,);
        this.engineRun = true;
    }
}

module.exports = BMW;