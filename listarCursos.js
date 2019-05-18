// Funcion recursiva para listar cursos
let lista = (i = 0)=> {
    let {cursos} = require('./cursos');
    if (typeof(cursos[i]) != "undefined") {
        console.log(
            'El curso '+cursos[i].nombre+
            '(Id:'+cursos[i].id+') tiene una duracion de '+
            cursos[i].duracion+' horas y un valor de '+
            cursos[i].valor+' pesos.\n'
        );
        setTimeout(function() {
            lista(i+1);
        },2000);  
    }
};

module.exports.lista = lista;
