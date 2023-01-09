import colors from 'colors';
import { inquirerMenu, 
         leerInput, 
         pausa, 
         listadoTareasBorrar,
         confirmar,
         mostrarListadoCheckList
} from './helpers/inquirer.js';
//import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';
import { Tarea } from './models/tarea.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';



const main = async ()=>{

let opt = '';
const tareas = new Tareas();//PRA CREAR UNA TAREA HACEMOS PRIMERO ESTA INSTANCIA NEW TAREAS
 
const tareasDB= leerDB();
 if(tareas){// para leer las tareas
   tareas.cargarTareasfromArray(tareasDB);  //establecer las tareas
 }




do {

opt = await inquirerMenu();
 
switch (opt) {
    case '1':
     //crear opcion 
     const desc = await leerInput('Descripcion:');
      tareas.crearTarea(desc);
    break;
    case '2':
        tareas.listadoCompleto()
      // console.log(tareas.listadoArr);//listado de las opciones 
    break;

    case '3':// listar completadas
          tareas.listaTareasCompletadas(true)
          // console.log(tareas.listadoArr);//listado de las opciones 
    break;
    case '4':
      tareas.listaTareasCompletadas(false)
      break; 
    case '5':
    const ids= await mostrarListadoCheckList(tareas.listadoArr)
    tareas.toggleCompletadas(ids);
    break;  
        
       
    case '6':
      const id= await listadoTareasBorrar(tareas.listadoArr);
      const ok = await confirmar(' esta seguro desea eliminar?');
      if (ok){
        tareas.deleteTask(id);
        console.log('tarea borrada');
      }
      break;  
  
    
    
}

guardarDB( tareas.listadoArr);

await pausa();


} while (opt !== '0');    
 
}

main();