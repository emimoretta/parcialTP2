import ModelMem from '../model/DAOs/numerosMem.js'

class Servicio {
    constructor() {
        this.model = new ModelMem()

    }
    

    obtenerNumeros = async () => {
       const numeros = await this.model.obtenerNumeros()
       const nuevoObjeto = {numeros:numeros.map(n=>n.numero)} 
       return nuevoObjeto
    } 

    guardarNumero = async numero => {
        const numeroNuevo = await this.model.guardarNumero(numero)
        return numeroNuevo
    }

    obtenerMaximoYMinimo = async () => {
        const numeros = await this.model.obtenerMaximoYMinimo()
        const arrayNumeros = numeros.map(n=>Number(n.numero))
        const max = Math.max(...arrayNumeros)
        const min = Math.min(...arrayNumeros)
        const nuevoObjeto = {max:max,min:min}
        return nuevoObjeto
     } 

     obtenerCantidadNumeros = async () => {
        const numeros = await this.model.obtenerCantidadNumeros()
        const nuevoObjeto = {cantidad:numeros.length}
        return nuevoObjeto

     }

    obtenerPromedio = async () => {
        const numeros = await this.model.obtenerPromedio()
        const arrayNumeros = numeros.map(n=>Number(n.numero))
        const suma = arrayNumeros.reduce((acc, num) => acc + num, 0);
        const promedio = suma/arrayNumeros.length
        const nuevoObjeto = {promedio:promedio}
        return nuevoObjeto
     } 

   
}

export default Servicio