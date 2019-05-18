// Estructura estudiante
let estudiante = {
    nombre:{
      demand:true,
      alias:'n'
    },
    identificacion:{
      demand:true,
      alias:'i'
    },
    curso:{
      demand:true,
      alias:'c'
    }
}

let preInscribir = (estudiante,i = 0)=> {
    // Importamos los cursos
    let {cursos} = require('./cursos');
    // Buscamos el curso correspondiente al ID
    let cursoPreInscribir = cursos.find(
        function (cursosF) {
            return cursosF.id == estudiante.c;
        }
    );
    // Verificamos si el curso fue encontrado
    if (typeof(cursoPreInscribir) == "undefined") {
        // Si no fue encontrado, informamos la novedad
        console.log('El curso con ID:'+estudiante.c+' no existe');
    }else{
        // Si fue encontrado pasamos a realizar la pre-inscripcion
        const fs = require('fs');
        // Carpeta donde se almacenaran las pre-inscripciones
        var dir = './pre-inscripciones';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        // Texto del archivo
        let texto = 'Pre-inscripcion de estudiante\n'+
        'Datos estudiante\n'+
        '- Nombre: '+estudiante.n+'\n'+
        '- Identificacion: '+estudiante.i+'\n'+
        'Datos del curso\n'+
        '- Id: '+cursoPreInscribir.id+'\n'+
        '- Nombre: '+cursoPreInscribir.nombre+'\n'+
        '- Duracion: '+cursoPreInscribir.duracion+'\n'+
        '- Valor: '+cursoPreInscribir.valor+'\n'
        ;
        // nombre del archivo
        let nombreArchivo = 'estudiante'+estudiante.i+'Curso'+estudiante.c+'.txt';
        // guardamos la pre-inscripcion
        fs.writeFile(dir+'/'+nombreArchivo,texto,(err)=>{
            if (err) throw (err);
            console.log(texto);
            console.log('Se ha guardado la pre-inscripcion con exito.');
        });
    }
};

module.exports.preInscribir = preInscribir;
module.exports.estudiante = estudiante;