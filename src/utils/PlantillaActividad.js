class PlantillaActividad{
    constructor(nombre,localizacion,horario,costo,duracion,id){
        this[id]={
            nombre:nombre,
            localizacion:localizacion,
            horario:horario,
            costo:costo,
            duracion:duracion
        }
    }
}

module.exports={PlantillaActividad};