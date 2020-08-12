class Plantilla{
    constructor(nombre,localizacion,tipo,horario,promedio,id){
        this[id]={
            nombre:nombre,
            localizacion:localizacion,
            tipo:tipo,
            horario:horario,
            promedio:promedio,
        }
    }
}

module.exports={Plantilla};