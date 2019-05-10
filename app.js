let cursos = require('./listaCursos');

const argv = require('yargs')
.command('cursos','-> Muestra los cursos disponibles',()=>{
    cursos.lista();
})
.argv;
