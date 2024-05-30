class ModelMem {
    #numeros  = []

    constructor() {
        this.#numeros = []
    }

    obtenerNumeros = async () => 
    {
        const arrayNumeros = this.#numeros
        return arrayNumeros
     }

     obtenerMaximoYMinimo = async () => 
        {
            const arrayNumeros = this.#numeros
            return arrayNumeros
         }
    
         obtenerCantidadNumeros = async () => 
            {
                const arrayNumeros = this.#numeros
                return arrayNumeros
             }

    obtenerPromedio = async () => 
    {
        const arrayNumeros = this.#numeros
        return arrayNumeros
    }

    guardarNumero = async numero => {
        const numeroNuevo = numero
        this.#numeros.push(numeroNuevo)
        return numeroNuevo
    }

}

export default ModelMem