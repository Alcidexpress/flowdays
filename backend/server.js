const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Configura conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Telco0032',
  database: 'tasks_db'
});

// Conecta a MySQL
connection.connect(err => {
  if (err) {
    console.error('Error conectando a la BD:', err);
    process.exit(1);
  }
  console.log('✅ Conectado a MySQL');
});

// Crear tabla tasks si no existe
const createTableQuery = `
CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  priority VARCHAR(50) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  date DATE DEFAULT CURRENT_DATE,
  time TIME NULL,
  description TEXT NULL,
  location VARCHAR(200) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

connection.query(createTableQuery, err => {
  if (err) console.error('Error creando tabla tasks:', err);
  else console.log('✅ Tabla tasks creada/verificada');
});

// Rutas API

// Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  connection.query('SELECT * FROM tasks ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Agregar nueva tarea
app.post('/api/tasks', (req, res) => {
  const { title, priority, description, location, date, time } = req.body;
  if (!title || !priority) {
    return res.status(400).json({ error: 'Título y prioridad son requeridos' });
  }
  
  const taskData = {
    title,
    priority,
    description: description || null,
    location: location || null,
    date: date || new Date().toISOString().split('T')[0],
    time: time || null
  };
  
  connection.query(
    'INSERT INTO tasks (title, priority, description, location, date, time) VALUES (?, ?, ?, ?, ?, ?)',
    [taskData.title, taskData.priority, taskData.description, taskData.location, taskData.date, taskData.time],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, ...taskData });
    }
  );
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${port}`);
  console.log(`📊 API disponible en http://localhost:${port}/api/tasks`);
});
