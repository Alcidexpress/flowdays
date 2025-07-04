# 🎨 Frontend - FlowDays Professional

Frontend de la aplicación FlowDays Professional desarrollado con HTML5, CSS3 y JavaScript ES6+.

## 📋 Características

- **Interfaz moderna y responsiva** con gradientes y animaciones
- **Calendario interactivo** con indicadores visuales
- **Gestión completa de tareas** con prioridades y recordatorios
- **Gestión de turnos laborales** con 6 tipos diferentes
- **Chat flotante con IA** integrado con Google Gemini
- **Estadísticas en tiempo real** con gráficos visuales
- **Diseño mobile-first** optimizado para todos los dispositivos

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con gradientes y animaciones
- **JavaScript ES6+** - Interactividad y lógica
- **Font Awesome** - Iconografía profesional
- **Google Fonts** - Tipografía Poppins

## 🚀 Instalación

### Prerrequisitos

1. **Navegador web moderno** (Chrome, Firefox, Safari, Edge)
2. **Servidor backend** ejecutándose en `http://localhost:5000`

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Alcidexpress/gestion-tareas.git
   cd gestion-tareas/frontend
   ```

2. **Instalar dependencias** (opcional)
   ```bash
   npm install
   ```

3. **Ejecutar el frontend**
   ```bash
   # El frontend se sirve desde el backend
   # Asegúrate de que el backend esté ejecutándose
   cd ../backend
   python app.py
   ```

4. **Abrir en navegador**
   ```
   http://localhost:5000
   ```

## 🎨 Características de Diseño

### Interfaz Moderna
- **Gradientes profesionales** - Diseño visual atractivo
- **Animaciones suaves** - Transiciones fluidas
- **Iconografía clara** - Font Awesome para mejor UX
- **Paleta de colores** - Azul y púrpura profesional

### Responsividad
- **Mobile-first** - Optimizado para dispositivos móviles
- **Tablet-friendly** - Interfaz adaptativa
- **Desktop-optimized** - Experiencia completa en escritorio

### Accesibilidad
- **Navegación por teclado** - Compatible con lectores de pantalla
- **Contraste adecuado** - Cumple estándares WCAG
- **Textos descriptivos** - Alt text y labels apropiados

## 📱 Funcionalidades

### Gestión de Tareas
- ✅ Crear, editar y eliminar tareas
- ✅ Título, descripción y prioridad configurable
- ✅ Ubicación y hora específica
- ✅ Sistema de recordatorios inteligente
- ✅ Marcado de completado/pendiente
- ✅ Filtros y búsqueda avanzada

### Gestión de Turnos
- ✅ 6 tipos de turno (Mañana, Tarde, Noche, Festivo, Libre, Vacaciones)
- ✅ Horarios de inicio y fin con cálculo automático
- ✅ Notas adicionales para cada turno
- ✅ Estadísticas laborales detalladas
- ✅ Cálculo de horas por período

### Calendario Unificado
- ✅ Vista mensual integrada
- ✅ Indicadores visuales diferenciados
- ✅ Tareas: punto azul en esquina inferior
- ✅ Turnos: barras de colores en parte superior
- ✅ Múltiples elementos por día
- ✅ Navegación intuitiva

### Chat IA Integrado
- ✅ Chat flotante con Izán Bot
- ✅ Respuestas inteligentes sobre la aplicación
- ✅ Ayuda contextual en tiempo real
- ✅ Integración con Google Gemini AI

## 🎯 Casos de Uso

### 👨‍💼 Profesional Independiente
- **Escenario:** Freelancer gestionando proyectos y horarios
- **Beneficio:** Control total de tiempo y proyectos
- **Funcionalidades:** Tareas de entregables, turnos de trabajo

### 🏢 Empleado Corporativo
- **Escenario:** Trabajador con horarios fijos y tareas diarias
- **Beneficio:** Organización personal y profesional
- **Funcionalidades:** Reportes, reuniones, horario laboral

### 👨‍⚕️ Profesional de la Salud
- **Escenario:** Médico con guardias y citas
- **Beneficio:** Gestión de tiempo crítico
- **Funcionalidades:** Citas, guardias, documentación

### 🎓 Estudiante Trabajador
- **Escenario:** Estudiante que trabaja y estudia
- **Beneficio:** Balance vida académica y laboral
- **Funcionalidades:** Tareas académicas, trabajo part-time

## 📁 Estructura del Proyecto

```
frontend/
├── index.html              # Página principal
├── app.js                  # Lógica JavaScript
├── styles.css              # Estilos CSS
├── package.json            # Configuración npm
└── README.md               # Este archivo
```

## 🔧 Configuración

### Variables de Entorno

El frontend se conecta al backend a través de la API REST. Asegúrate de que:

- El backend esté ejecutándose en `http://localhost:5000`
- La API esté disponible en `/api/*`
- CORS esté configurado correctamente

### Personalización

Puedes personalizar el frontend modificando:

- **Colores:** Variables CSS en `styles.css`
- **Iconos:** Font Awesome en `index.html`
- **Funcionalidad:** JavaScript en `app.js`
- **Estructura:** HTML en `index.html`

## 🧪 Testing

```bash
# Abrir en navegador para testing manual
open http://localhost:5000

# Verificar consola del navegador para errores
# Verificar Network tab para llamadas API
```

## 🚀 Despliegue

### Desarrollo
```bash
# El frontend se sirve desde el backend
cd ../backend
python app.py
```

### Producción
```bash
# Configurar servidor web (nginx, Apache)
# Servir archivos estáticos desde /static
# Configurar proxy reverso al backend
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

## 🙏 Agradecimientos

- **Font Awesome** - Por los iconos profesionales
- **Google Fonts** - Por la tipografía Poppins
- **Google Gemini AI** - Por la inteligencia artificial

---

**¡Gracias por usar FlowDays Professional! 🚀** 