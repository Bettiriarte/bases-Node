const fs = require('fs')

const CrearArchivo = async (base, listar, hasta) => { 

  
  try{
    let salida="";
    
    for(let i=1; i<=hasta; i++){
      salida += `${base} x ${i} = ${base * i}\n`;
      }  
      if(listar){
        
        console.log("================")
        console.log(`Tabla del ${base}`)
        console.log("================")
        console.log(salida);
      }

    // opcion#2
 fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
return`tabla-${base}.txt`

}catch(err) {
  throw err;
}
  
  }
  
  module.exports ={
    CrearArchivo
    }


    // opcion#1
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;
    // )}