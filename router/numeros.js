import express from 'express'
import Controlador from '../controlador/numeros.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/entrada', this.controlador.obtenerNumeros )
        this.router.get('/promedio', this.controlador.obtenerPromedio )
        this.router.get('/minmax', this.controlador.obtenerMaximoYMinimo )
        this.router.get('/cantidad', this.controlador.obtenerCantidadNumeros )

        this.router.post('/entrada', this.controlador.guardarNumero )


        return this.router
    }
}

export default Router