
require('colors');


const mostrarMenu =()=>{
     return new Promise((resolve) => {
        console.log('========================');
        console.log('seleccione una opcion'.green);
        console.log('========================\n');
        
        console.log(`${ '1-'.green } Crear tarea`);
        console.log(`${ '2-'.green } Listar tareas pendientes`);
        console.log(`${ '3-'.green } Listar tareas completadas`);
        console.log(`${ '4-'.green } Listar tarea`);
        console.log(`${ '5-'.green } Completar tarea `);
        console.log(`${ '6-'.green } Borrar tarea `);
        console.log(`${ '0-'.green } Salir\n`);
    
    
        const readline = require('readline').createInterface({
            input: process.stdin, // con esto ya sabe node que vamos a pausar la ejec de la app para recibir caracteres y el enter del usuario
            output:process.stdout, // para mostrarle algun mensaje en consola cuando le estoy pidiendo algo al usuario
        });
    
        readline.question('\nSeleccione una opcion?', (opt)=>{
            console.log({opt});
            readline.close();
            resolve(opt)
    
        });
     })
  
}

 const pausa = ()=>{
     return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`presione ${'Enter'.blue} Para continuar`, (opt)=>{
            readline.close();
            resolve()
        });
     
     })
   
 }
module.exports={
    mostrarMenu, 
    pausa
  
}