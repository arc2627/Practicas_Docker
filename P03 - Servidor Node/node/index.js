import express from 'express'
//import mongoose from 'mongoose'

/*
const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))
  */

const app = express()
const PUERTO = 3000;

//mongoose.connect('mongodb://usuario:password@servidor:puerto/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... chanchitos...')
  //const animales = await Animal.find();
  return res.send('Hola mundo!!!!!')
})

// /alumno/5
app.get('/alumno/:id', async (_req, res) => {
  const id = _req.params.id;
  console.log(`Consultando alumno ${id}`)
  //const animales = await Animal.find();
  return res.send(`Alumno favorito: ${id}`)
})

// /buscar?nombre=Alejandro
app.get('/buscar', async (_req, res) => {
  const nombre = _req.query.nombre;
  console.log(`Buscando alumno ${nombre}`)
  //const animales = await Animal.find();
  return res.send(`Te he encontrado: ${nombre}`)
})

app.get('/random', async (_req, res) => {
  const numero = Math.floor(Math.random() * 101);
  console.log(`Generando un número aleatorio entre 0 y 100`);
  //const animales = await Animal.find();
  return res.send(`${numero}`)
})

app.get('/date', async (_req, res) => {
  const fecha = new Date();
  console.log(`Devolviendo la fecha de hoy`);
  return res.send(`${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`)
})
/*
app.get('/examenes/:id', async (_req, res) => {
  const id = _req.params.id

  switch(id){
    case 1:
      const fechaExamen = new Date(2026, 11, 23)
      return res.send(`${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`);
      break;
    
    case 2: 
      const fechaExamen = new Date(2026, 11, 27)
      return res.send(`${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`);
      break;

    case 3:
      const fechaExamen = new Date(2026, 11, 30)
      return res.send(`${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`);
      break;

    case 4:
      const fechaExamen = new Date(2026, 10, 02)
      return res.send(`${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`);
      break;

    default:
      return res.send("No hay exámenes con ese id");
  }
})
  */

app.get('/suma', async(_req, res) =>{
  const primerNum = Number(_req.query.primero)
  const segundoNum = Number(_req.query.segundo);

  console.log(`Sumando ${primerNum} y ${segundoNum}`);
  const resultado = primerNum+segundoNum;
  return res.send(resultado)
})

app.get('/resta', async(_req, res) =>{
  const primerNum = Number(_req.query.primero)
  const segundoNum = Number(_req.query.segundo);

  console.log(`Sumando ${primerNum} y ${segundoNum}`);
  const resultado = primerNum-segundoNum;
  return res.send(resultado)
})

/*
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'animalico', estado: 'Feliz' })
  return res.send('ok')
})
  */

app.listen(PUERTO, () => console.log(`escuchando... ${PUERTO}`))