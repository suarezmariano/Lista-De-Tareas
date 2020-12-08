const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function(tareas) {
        let tareasEnJson = JSON.stringify(tareas, null, 2);
        fs.writeFileSync(this.archivo, tareasEnJson);
    },
    guardarTarea: function(tarea) {
        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tareas)
    },
    modificarTarea: function(tarea) {
        let tareas = this.leerJSON();
        tareas = tarea;
        this.escribirJSON(tareas)
    }


}

module.exports = archivoTareas;