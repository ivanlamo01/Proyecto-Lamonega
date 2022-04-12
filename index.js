const express = require('express');
const app = express();
const Port = 8080;
const path = require('path');
const hbs = require('hbs');
//Traemos la librería para la conexión
const mysql = require('mysql2');

//Creamos la configuración de la conexión
const conexion =  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "chivolandia1",
    database: "3dp",
    socketPath: '/var/run/mysqld/mysqld.sock'
});

//Conectamos a la DB
conexion.connect((error) =>{
    if(error) throw error;
    console.log('Conexión a la Data Base exitosa!!');
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/public',express.static('public'));
app.use('/multimedia',express.static('multimedia'))

//Configuramos el Motor de Plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res) =>{
    res.render('index', {titulo: 'Bienvenidos a la App'})
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

app.listen(Port, () =>{
    console.log(`Servidor está trabajando en el Puerto ${Port}`);
});

app.on('error', (err) =>{
    console.log(`Error en la ejecución del Servidor ${error}`);
})


