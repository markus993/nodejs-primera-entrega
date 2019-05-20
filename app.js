// Importacion de recursos
let listarCursos = require('./listarCursos');
let inscribirCursos = require('./inscribirCursos');
let estudiante = inscribirCursos.estudiante;

const argv = require('yargs')
// Comando predeterminado, da informacion de como ejecutar la app
.command('$0', 'comando predeterminado', () => {}, (argv) => {
  console.log(
    '\nAplicacion para pre-incripcion de estudiantes a los cursos ofrecidos\n'+
    'Opciones:\n'+
    '\tListado de cursos => app cursos\n'+
    '\tPre-inscripcion a un curso => app preinscripcion -n={Nombre estudiante} -i={identificacion estudiante} -c={Id del curso} \n'
  );
  console.log('Listado de cursos disponibles:');
  listarCursos.lista();
})
// Comando que muestra el listado de cursos
.command(
  'cursos','-> Muestra los cursos disponibles:',
  ()=>{listarCursos.lista();}
)
// Comando para la preinscripcion del estudiante al curso
.command(
  'preinscripcion','-> Pre-inscribe al estudiante a uno de los cursos disponibles',
  estudiante,
  (estudiante)=>{inscribirCursos.preInscribir(estudiante)}
)
.argv;