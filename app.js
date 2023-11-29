import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
// import * as hbs from 'hbs';
// import {hbs} from 'hbs';
import {default as hbs} from "hbs";
import 'dotenv/config'




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()




let port = process.env.PORT

// const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');




//servir contenido estatico

app.use(express.static('public'));

app.get('/',  (req, res)=> {
  res.render('home',{nombre:'Erland' , titulo: 'Curso de Node'})
})

app.get('/hola-mundo',  (req, res)=> {
  res.send('Hello World en su respectiva ruta ' )
})

app.get('/generic',  (req, res)=> {
    //  res.setHeader('Content-Type','text/plain');
    //  res.sendFile(__dirname+'/public/generic.html')
    res.render('generic',{nombre:'Erland' , titulo: 'Curso de Node'})
    // return res.status(400).json({error:`Page Not Found`});

})
app.get('/elements',  (req, res)=> {
    //  res.setHeader('Content-Type','text/plain');
    //  res.sendFile(__dirname+'/public/elements.html')
    res.render('elements',{nombre:'Erland' , titulo: 'Curso de Node'})
    // return res.status(400).json({error:`Page Not Found`});

})

app.get('*',  (req, res)=> {
    //  res.setHeader('Content-Type','text/plain');
     res.sendFile(__dirname+'/public/404.html')
    // return res.status(400).json({error:`Page Not Found`});

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

