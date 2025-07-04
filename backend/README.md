# 🚀 Backend - FlowDays Professional

Backend de la aplicación FlowDays Professional desarrollado con Flask y Python.

## 📋 Características

- **API RESTful** para gestión de tareas y turnos
- **Base de datos MySQL** con SQLAlchemy ORM
- **Autenticación JWT** para usuarios
- **Integración con Google Gemini AI** para chat inteligente
- **Sistema de recordatorios** por email
- **Estadísticas en tiempo real**

## 🛠️ Tecnologías

- **Python 3.8+**
- **Flask 3.1.1**
- **SQLAlchemy 3.1.1**
- **MySQL 8.0+**
- **Google Gemini AI**
- **JWT Extended**

## 🚀 Instalación

### Prerrequisitos

1. **Python 3.8 o superior**
2. **MySQL 8.0 o superior**
3. **Git**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Alcidexpress/gestion-tareas.git
   cd gestion-tareas/backend
   ```

2. **Crear entorno virtual**
   ```bash
   python -m venv env
   
   # Windows
   env\Scripts\activate
   
   # macOS/Linux
   source env/bin/activate
   ```

3. **Instalar dependencias**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configurar base de datos**
   ```sql
   CREATE DATABASE tasks_db;
   CREATE USER 'flowdays_user'@'localhost' IDENTIFIED BY 'tu_password';
   GRANT ALL PRIVILEGES ON tasks_db.* TO 'flowdays_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

5. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env
   DATABASE_URL=mysql+mysqlconnector://root:Telco0032@localhost/tasks_db
   SECRET_KEY=dev-secret-key-change-in-production
   JWT_SECRET_KEY=jwt-secret-key-change-in-production
   GEMINI_API_KEY=tu_api_key_de_google
   ```

6. **Inicializar base de datos**
   ```bash
   python -c "from app import app, db; app.app_context().push(); db.create_all()"
   ```

## 🏃‍♂️ Ejecución

### Desarrollo
```bash
python app.py
```

### Producción
```bash
python run.py
```

### Tests
```bash
python -m pytest test_app.py
```

## 📊 Endpoints API

### Tareas
- `GET /api/tasks` - Obtener todas las tareas
- `POST /api/tasks` - Crear nueva tarea
- `PUT /api/tasks/{id}` - Actualizar tarea
- `DELETE /api/tasks/{id}` - Eliminar tarea
- `GET /api/tasks/date/{date}` - Obtener tareas por fecha

### Turnos
- `GET /api/shifts` - Obtener todos los turnos
- `POST /api/shifts` - Crear nuevo turno
- `PUT /api/shifts/{id}` - Actualizar turno
- `DELETE /api/shifts/{id}` - Eliminar turno

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión

### Chat IA
- `POST /api/chat/send` - Enviar mensaje al asistente IA

### Estadísticas
- `GET /api/stats/week/{date}` - Estadísticas semanales
- `GET /api/stats/month/{date}` - Estadísticas mensuales

## 🔧 Configuración

### Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `DATABASE_URL` | URL de conexión a MySQL | `mysql+mysqlconnector://root:Telco0032@localhost/tasks_db` |
| `SECRET_KEY` | Clave secreta de Flask | `dev-secret-key-change-in-production` |
| `JWT_SECRET_KEY` | Clave secreta para JWT | `jwt-secret-key-change-in-production` |
| `GEMINI_API_KEY` | API Key de Google Gemini | Requerida |

### Base de Datos

La aplicación utiliza MySQL con las siguientes tablas principales:

- **tasks**: Tareas del usuario
- **work_shifts**: Turnos laborales
- **work_stats**: Estadísticas de trabajo
- **notifications**: Notificaciones
- **users**: Usuarios del sistema

## 🧪 Testing

```bash
# Ejecutar todos los tests
python -m pytest

# Ejecutar tests específicos
python -m pytest test_app.py::test_get_empty

# Con cobertura
python -m pytest --cov=app
```

## 📁 Estructura del Proyecto

```
backend/
├── app/
│   ├── __init__.py          # Configuración de la aplicación
│   ├── config.py            # Configuración
│   ├── models.py            # Modelos de usuario
│   ├── routes/
│   │   ├── auth.py          # Rutas de autenticación
│   │   └── chat.py          # Rutas del chat IA
│   ├── schemas.py           # Esquemas de validación
│   └── utils.py             # Utilidades
├── static/
│   ├── app.js              # JavaScript del frontend
│   └── styles.css          # Estilos CSS
├── templates/
│   └── index.html          # Template principal
├── app.py                  # Aplicación principal
├── models.py               # Modelos de datos
├── run.py                  # Script de ejecución
├── server.js               # Servidor Node.js alternativo
├── test_app.py             # Tests
├── requirements.txt        # Dependencias Python
├── package.json            # Dependencias Node.js
└── README.md               # Este archivo
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Alcidexpress**
- GitHub: [@Alcidexpress](https://github.com/Alcidexpress)

---

**¡Gracias por usar FlowDays Professional! 🚀** 