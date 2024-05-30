import Servicio from '../servicio/numeros.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerNumeros = async (req, res) => {
        const numeros = await this.servicio.obtenerNumeros()
        res.json(numeros)
    }

    guardarNumero = async (req, res) => {
        const numero = req.body
        const numeroGuardado = await this.servicio.guardarNumero(numero)
        res.json(numeroGuardado)
    }

    obtenerMaximoYMinimo = async (req, res) => {
        const maxmin = await this.servicio.obtenerMaximoYMinimo()
        res.json(maxmin)
    }

    obtenerCantidadNumeros = async (req, res) => {
        const cantidad = await this.servicio.obtenerCantidadNumeros()
        res.json(cantidad)
    }

    obtenerPromedio = async (req, res) => {
        const promedio = await this.servicio.obtenerPromedio()
        res.json(promedio)
    }

  
}


export default Controlador

