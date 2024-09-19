const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');
const middlewares = jsonServer.defaults();

// Usa middlewares predeterminados (CORS, logging, etc.)
server.use(middlewares);

// Rewriter para ajustar las rutas
server.use(jsonServer.rewriter({
    '/api/*': '/$1'  // Elimina el prefijo /api si lo usas en la app
}));

// Usa el router basado en db.json para manejar los endpoints
server.use(router);

// Inicia el servidor en el puerto proporcionado por Vercel o el puerto 3000 en local
server.listen(process.env.PORT || 3000, () => {
    console.log('JSON Server is running');
});

// Exporta el servidor para Vercel
module.exports = server;
