//Juro que esto iba a ser un controller, acabó siendo un model
const path = require('path');
const fs = require('fs');

class List {

    constructor() {
        //contruir cosas
        //Aqui se definiria si esta en qa o en prod
        //Todo objeto creado a partir de este tendría definido el ambiente

        this.filePath = path.join(__dirname, '..', 'database_xd', 'LetsImagineThisIsDynamo.csv');
        //this.filePath = '../database_xd/LetsImagineThisIsDynamo.csv';
        //const filePath = path.join(__dirname, 'config.json');

        //Esto no debería existir xd
        this.contador = 0
    }

    async addListItem(data_req) {
        //agregar item a la lista
        console.log("Entra a addListItem")

        const data = this.contador + "," + data_req.name;
        console.log("data: ", data)
        await fs.appendFileSync(this.filePath, JSON.stringify({data}) + ",\n")
        this.contador++; // Increment the counter after adding an item
    }

    async getList() {
        //obtener lista
        console.log("Entra a getList")
        try {
            const data = await readFile(this.filePath, { encoding: 'utf8' });
            console.log(data);
        } catch (err) {
            console.error('Error reading the file:', err.message);
        }
    }

    async updateListItem(data_req) {
        //actualizar item de la lista
    }

    async deleteListItem(data_req) {
        //eliminar item de la lista
    }


}

module.exports = List;