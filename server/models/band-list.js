const Band = require("./band");


class BandList {

    constructor() {
        this.bands = [
            new Band("Metallica"),
            new Band("Linkin Park"),
            new Band("Bon Jovi"),
        ];
    }

    addBand( name ) {
        const new_band = new Band(name);
        this.bands.push( new_band );
        return this.bands;
    }

    removeBand( id ) {
        this.bands = this.bands.filter( band => band.id !== id);
    }

    getBands() {
        return this.bands;
    }

    increaseVotes( id ) {
        this.bands = this.bands.map( band => {
            if( band.id === id) {
                band.votes += 1;
            }
            return band;
        });
    }

    changeName( id, new_name ) {
        this.bands = this.bands.map( band => {
            if( band.id === id) {
                band.name = new_name;
            }
            return band;
        });
    }

}

module.exports = BandList;