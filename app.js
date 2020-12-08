const fs = require('fs')

let archivoTareas = require('./tareas');

let accion = process.argv[2];



switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();

        tareas.forEach((tarea, index) => {
            console.log(index + 1 + '. ' + tarea.titulo + " = " + tarea.estado)
        });


        console.log()
        break;

        case 'crear':
            const nombreDeTarea = process.argv[3];
            if(!textoDeTarea) {
                return console.log('Debe ingresar el nombre de la tarea')
            }
            const objetoTarea = {
                titulo: nombreDeTarea,
                estado: 'pendiente'
            }
            archivoTareas.guardarTarea(objetoTarea);

            break;

        
         case 'modificar':
            let tareas2 = archivoTareas.leerJSON();
           
            const tareaAModificar = process.argv[3];
               if(!tareaAModificar) {
             return console.log('Debe ingresar el nombre de la tarea');
             };

            const nuevoEstadoDeTarea = process.argv[4];
            const index = tareas2.findIndex ((a) => a.titulo == tareaAModificar);
            tareas2[index].estado = nuevoEstadoDeTarea;
            archivoTareas.modificarTarea(tareas2);
            break;

    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear y modificar');
        break;
}
