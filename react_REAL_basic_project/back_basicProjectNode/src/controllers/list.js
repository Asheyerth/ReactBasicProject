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

    }

    async addListItem(data_req) {
        //agregar item a la lista
        console.log("Entra a addListItem")

        //Esta parte es para conseguir el id. 
        // NO debería ocurrir porque el ID es generado por la base de datos de forma automática autoincremental
        const listaArrayJSON = await this.getList();
        console.log("Contenido base de datos:")
        for (let i = 0; i < listaArrayJSON.length; i++) {
            console.log("listaArray[", i, "]: ", listaArrayJSON[i], +" , "+listaArrayJSON[i].id + " , " + listaArrayJSON[i].name)
        }
        const newId = listaArrayJSON.length + 1; // Generate a new ID based on the length of the array

        //Data to add
        const dataToWrite = `${newId},${data_req.name}\n`;
        console.log("data: ", dataToWrite)

        //Adding data
        await fs.appendFileSync(this.filePath, dataToWrite)

        return await this.getList(); // Return the updated list after adding the new item
        //return null //to generate error
    }

    async getList() {
        //obtener lista
        console.log("Entra a getList")
        try {
            const data = await fs.readFileSync(this.filePath, 'utf8');
            console.log(data);
            //return data
            
            return(data.split('\n').filter(line => line.trim() !== '').map(line => {
                const [id, name] = line.split(',');
                return { id: parseInt(id), name: name };
            }));  //lo hizo la IA, está muy overkill .-. 
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