const loginController = require('../controllers/login.controller')
module.exports = (app) => {
    app.post('/signup', loginController.signUp);
}