//First load to everything to work
const load = async () => {
    const __session = require('../utils/routes');
    global.__lista = require('../controllers/list');

    global.__session = __session;
}



module.exports.load = load;