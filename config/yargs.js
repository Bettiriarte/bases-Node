const argv =require('yargs')
.option('b',{
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe:'toma la base de la tabla de multiplicar'
})
.check((argv, options)=>{
  if(isNaN(argv.b)){
    throw 'la base tiene que ser un numero'
  }
  return true;
})

.option('l',{
  alias: 'listar',
  type: 'boolean',
  default: false,
  describe:'muestra la tabla en consola'
})
.option('h',{
  alias: 'hasta',
  type: 'number',
  default: 10,
  describe:'establece el limite del multiplicando'
})
.argv;

module.exports = argv;