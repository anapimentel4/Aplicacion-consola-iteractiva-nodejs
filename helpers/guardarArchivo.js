import fs, { existsSync } from 'fs';

const  archivo = './db/data.json'

// debo recibir siempre la data que quiero grabar
const guardarDB = (data)=>{
    //donde quiero grabar la informacion...db
fs.writeFileSync( archivo, JSON.stringify(data)) // en el parentesis voy a poner el path donde quiero grabarlo y luego la data que quero guardar
}

const leerDB = ()=>{
    // verificar si el archivo existe para poder leerlo
    
    if(!fs.existsSync(archivo)){
        return null
    }
// si existe entonces vamos a leer esa data en el cual voy a almancenar todo lo que se encuentra en el fs
    const info = fs.readFileSync(archivo, {enconding: 'utf-8'});
     const data = JSON.parse(info);
     

     return data
}

export{ guardarDB,
        leerDB}