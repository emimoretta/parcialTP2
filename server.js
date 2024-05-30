//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import
import express from 'express'
import RouterNumeros from './router/numeros.js'
import path from 'path';
import { fileURLToPath } from 'url';


const app = express()
app.use(express.json())
app.use(express.static('/public'))
app.use(express.urlencoded({extended: true}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar el motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Ruta para renderizar la vista
app.get('/numeros', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


// ---------------------------------------------
//         API Restful : libros
// ---------------------------------------------
app.use('/numeros', new RouterNumeros().start())


// ---------------------------------------------
//         LISTEN DEL SERVIDOR EXPRESS
// ---------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor ApiRestFul escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
