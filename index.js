require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const PORT = process.env.PORT

/*//Traemos la librería para la conexión
const mysql = require('mysql2');
//Creamos la configuración de la conexión

const conexion =  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.user,
    password: process.env.pass,
    database: process.env.db,
});
//Conectamos a la DB
conexion.connect((error) =>{
    if(error) throw error;
    console.log('Conexión a la Data Base exitosa!!');
});*/

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/public',express.static('Public'));
app.use('/multimedia',express.static('multimedia'));

//Configuramos el Motor de Plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res) =>{
    res.render('index')
});

app.get('/formulario', (req, res) =>{
    res.render('formulario')
});
app.get('/contacto', (req, res) =>{
    res.render('contacto')
});

app.post('/formulario', (req, res) =>{
    //Desestructuración de las variables
    const { nombre, apellido,email,telefono,empresa,insteducativa,descripcion,archivo} = req.body;
        let data = {
            nombre: nombre, 
            apellido: apellido,
            email: email,
            telefono: telefono,
            empresa: empresa,
            insteducativa: insteducativa,
            descripcion: descripcion,
            archivo: archivo
        }
        let sql = 'Insert into proyectos set ?';
        conexion.query(sql, data, (error, results) =>{
            if(error) throw error;
            res.render('formulariorecibido'); 
        })
    });

app.get('/productos', (req, res) =>{
    let sql = 'SELECT * FROM productos';
    conexion.query(sql, (error, results) =>{
        if(error) throw error;
        res.render('productos', {
            titulo: 'Productos',
            results: results,        
        })
    })
});


app.post('/contacto', (req, res) =>{
    //Desestructuración de las variables
    const { nombre, apellido,email,telefono} = req.body;
        let data = {
            nombre_contacto: nombre, 
            apellido_contacto: apellido,
            email_contacto: email,
            telefono_contacto: telefono,}
        let sql = 'Insert into contacto set ?';
        conexion.query(sql, data, (error, results) =>{
            if(error) throw error;
            res.render('contactorecibido'); 
        })
    });

//conexion.end();

app.listen(PORT, () =>{
    console.log(`Servidor está trabajando en el Puerto ${PORT}`);
});

app.on('error', (err) =>{
    console.log(`Error en la ejecución del Servidor ${error}`);
})


