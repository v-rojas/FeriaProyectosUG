const express = require('express');
var cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 3050;

const app = express();

app.use(cors());
app.use(bodyParser.json());
// to route image folder
app.use(express.static(__dirname + '/img'));

// Mysql Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'import_db'
});

// Chech Connection
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
})

// Listen server connection
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM usuarios WHERE usuario = ? and clave = ?';
    const usuario = req.body.usuario;
    const clave = req.body.clave;
    connection.query(sql, [usuario, clave], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            res.json(results);
        } else {
            res.json({
                code: 0,
                text: 'Credenciales incorrectas.'
            });
        }
    });
});

app.post('/register', (req, res) => {
    const sql = "INSERT INTO usuarios SET ?";
    const post = {
        usuario: req.body.cedula,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        clave: req.body.clave1,
        sexo: 'F',
        correo: req.body.correo,
        perfil: 4,
        estado: 'A',
        aut: 1,
        reseteo: 0
    };
    connection.query(sql, post, (error, results) => {
        if (error) throw error;
        res.json([{
            code: 1,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            perfil: 4,
            text: 'Gracias por registrarte.'
        }]);
    });
});

app.get('/projectsByCategory/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    const sql = "SELECT * FROM proyectos WHERE categoria = ?";
    connection.query(sql, categoria, (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            res.json(results);
        }
    });
});

app.get('/aulaProyecto/:idProyecto', (req, res) => {
    const idProyecto = req.params.idProyecto;
    const sql = "SELECT idcurso FROM asignarcurso WHERE idProyecto = ?";
    connection.query(sql, idProyecto, (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            res.json(results);
        }
    });
});

app.get('/projectsByCourse/:curso', (req, res) => {
    const curso = req.params.curso;
    const sql = "SELECT * FROM asignarcurso WHERE idcurso = ?";
    connection.query(sql, curso, (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            res.json(results);
        }
    });
});

app.get('/teachers', (req, res) => {
    const sql = "SELECT * FROM docente";
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            res.json(results);
        }
    });
});

app.get('/subjects', (req, res) => {
    const sql = "SELECT * FROM materia";
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            res.json(results);
        }
    });
});

app.get('/courses', (req, res) => {
    const sql = "SELECT * FROM cursos";
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            res.json(results);
        }
    });
});

app.get('/projects', (req, res) => {
    const sql = "SELECT * FROM proyectos";
    connection.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            res.json(results);
        }
    });
});

app.post('/sendEmail', (req, res) => {
    const id = req.body.cedula;
    const sql = 'SELECT nombres, correo, clave FROM usuarios WHERE usuario = ?';
    connection.query(sql, id, (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'feria.proyectos.ug2020@gmail.com',
                    pass: 'FeriaProyectosadmin123'
                }
            })
            const mailOptions = {
                from: 'Feria de proyectos',
                to: results[0].correo,
                subject: 'Recuperación de contraseña',
                html: '<img src="https://www.timingecuador.com/img/logo_carreras/5k_UG2017.jpg"><h1 style="color: #0c2d66;text-align: center;">Hola, ' + results[0].nombres + '</h1><h4 style="color: black">Hemos recibido un requerimiento por olvido de contraseña. Por favor, ingresa esta contraseña para poder acceder al aplicativo: <span style="color: #51d1f6;">' + results[0].clave + '</span></h4>'
            }
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    throw error
                } else {
                    res.json({
                        code: 1,
                        text: 'Email enviado, revisa tu cuenta de correo para obtener la contraseña'
                    })
                }
            })
        } else {
            res.json({
                code: 0,
                text: 'El usuario ingresado no existe.'
            });
        }
    });
})

app.post('/calificaevaluador', (req, res) => {
    const sql = "INSERT INTO calificaevaluador SET ?";
    const post = {
        idproyecto: req.body.idproyecto,
        dominio: req.body.dominio,
        creatividad: req.body.creatividad,
        presentacion: req.body.presentacion,
        decoracion: req.body.decoracion,
        recursos: req.body.recursos,
        idusuario: req.body.idusuario,
        evalusuario: req.body.evalusuario,
        visitausuario: req.body.visitausuario,
    };
    connection.query(sql, post, (error, results) => {
        if (error) throw error;
        res.json([{
            code: 1,
            text: 'Calificación registrada'
        }]);
    });
});

app.post('/permiteevaluar', (req, res) => {
    const sql = "SELECT * FROM calificaevaluador WHERE idproyecto = ? and idusuario = ?";
    const idproyecto = req.body.idproyecto;
    const idusuario = req.body.idusuario;

    connection.query(sql, [idproyecto, idusuario], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.length > 0) {
            res.json({
                code: 0,
                text: 'Su calificación ya ha sido registrada para este proyecto'
            });
        } else {
            res.json(results);
        }
    });
});