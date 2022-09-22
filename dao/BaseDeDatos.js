var counter = require("../models/counter.js");

class BaseDeDatos {
    
    constructor(){
        this.counterModel = counter;
    }

    async increment_count() {
        try {
            const query = {};
            const update = { $inc: {count: 1}};
            const options = { upsert: true , returnOriginal: false };
            let count = await this.counterModel.findOneAndUpdate(query, update, options)
            return count

        } catch(e) {
            throw e;
        }
    }

    async decrement_count() {
        try {
            const query = {};
            const update = { $inc: {count: -1}};
            const options = { upsert: true , returnOriginal: false };
            let count = await this.counterModel.findOneAndUpdate(query, update, options)
            return count

        } catch(e) {
            throw e;
        }
    }
}

module.exports = BaseDeDatos;
    