const config = require('./src/config/load');
const express = require('express');
const cors = require('cors');

const main = async () => {

    await config.load(); //First load for everything to work

    const routes_logic = require('./src/routes/router'); //Allowed routes

    const corsOptions = {
        origin: 'http://localhost:5173', // Permite solicitudes desde esta URL
        methods: ['GET', 'POST'], // Métodos permitidos
        allowedHeaders: ['Content-Type'], // Encabezados permitidos
    };

    const app = express();

    app.use(express.json({ limit: '3mb' }));
    app.use(cors(false));
    app.use(__session.handler); //Middleware
    app.use('/urls', routes_logic); //url to access url

    app.use((err, req, res, next) => {
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            console.error(err);
            return res.status(400).send({ status: 404, message: err.message });
        }
        next();
    });

    const port = 3001;
    app.listen(port, function () {
        console.log("run on port:", port);
    });
}

main()