import colors from 'colors';
import {Tarea} from './tarea.js';
import ConfirmPrompt from 'inquirer/lib/prompts/confirm.js';

class Tareas {
    _listado = {} // para listar las tareas solo tenemos que utilizar este objeto
     

get listadoArr(){
    const listado = [];
    Object.keys(this._listado).forEach(key =>{
        const tarea = this._listado[key]; // tarea igual th is.listado y me intresa obtenerlo por el key 
        listado.push(tarea)
    });
    return listado;
}

    constructor() {
        this._listado = {};
    }
    //eliminar una propiedad del objeto
    deleteTask(id = ''){
        if (this._listado[id]){// si existe una propiedad id en el listado
            delete this._listado[id]// entonces borrar la propiedad que recibimos (id) en el objeto
        }
    }

     cargarTareasfromArray(tareas = []){ //  recordar las tareas son un arreglo
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea
        })

     } 
     
        crearTarea( desc = '') {
            const tarea = new Tarea(desc);
            this._listado[tarea.id] = tarea
        }

        // para imprimir las tareas ya creadas con su numero de orden, y si estan pendientes o no 
        // para el numero de orden neesitamos el indice, el segundo argumento del foreach usa el indice
  
        listadoCompleto(){
          
          console.log();
            this.listadoArr.forEach( (tarea, i)  =>{
            const idx = `${i +1}`.green;
            const {desc , completadoEn} = tarea;
            const estado = (completadoEn)
                            ?'Completado'.green
                            :'Pendiente'.red
            console.log(`${idx} ${desc}:: ${estado}`);
           });
           // console.log(this._listado);
        }
        listaTareasCompletadas( completadas = true ){
            console.log();
            let contador = 0;

        this.listadoArr.forEach( tarea =>{
       
            const {desc , completadoEn} = tarea;
            const estado = (completadoEn)
                            ?'Completado'.green
                            :'Pendiente'.red;
            if(completadas){
                //mostrar completadas
                if( completadoEn){
                    contador+=1;
                    console.log(`${(contador + '.').green} ${desc}:: ${completadoEn.green}`);//UN NUM + UN STRING DA COMO RESULT STRING
                }
            }else{
                if(!completadoEn){
                    contador+=1;
                    console.log(`${(contador + '.').green} ${desc}:: ${estado}`);
                }
            }
        });

    }
    toggleCompletadas(ids =[]){
        // si viene un id significa que debo marcarlo como completado lo hacemos mediante foreach
        ids.forEach(id=>{

            const tarea = this._listado[id];
            if (!tarea.completadoEn){ //si la tarea tiene algo yo no deberia hacer nada pero si esta en null le hacemos el new Date()
                tarea.completadoEn = new Date().toISOString()
            }
        });

            
        //para marcar como no completadas todas las tareas que no vengan en el arreglo de arriba del el id
        //primero tengo que  buscar todas las llaves que tengo  podemos utilizar el getter o el object.key
        this.listadoArr.forEach(tarea =>{
            
            if (!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn =null;
            }
        })
    } 

}


export  {
    Tareas, 

    

}

