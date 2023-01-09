import { v4 as uuidv4 } from 'uuid';

class Tarea {
    id='';
    desc = '';
    completadoEn = null;
   
   // el constructor es lo que se va a ejecutar cuando creemos una nueva instancia de nuestra tareea
   // todas las tareas deberian tener un identificador unico que vamos a crear con un paquete q vamos a instalar
     constructor (desc ){
       this.id = uuidv4();
       this.desc = desc // this hace referencia a la instancia de la clase que se esta usando\
       this.completadoEn = null;
     } 
   
   }

   export  {
    Tarea
}