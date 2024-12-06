const logger = require('./middlewares/logger');
const autenticar = require('./middlewares/autenticar');

app.use(logger); // Middleware global
app.use('.rotas/usuarios', autenticar, usuariosRouter); // Middleware específico
