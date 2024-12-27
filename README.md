# Aplicación de Gestión de Pacientes de Veterinarios

La aplicación de Gestión de Pacientes de Veterinarios se desarrolló en el marco del curso de Javascript Moderno en Udemy.

## Objetivo

La funcionalidad del sistema es que cada veterinario pueda gestionar las consultas de sus pacientes.

En la aplicación se utilizaron varias tecnologías modernas, como React para el desarrollo del Front-End y Express con Node.js para el Back-End.

## Front-End

- **Navegación:** Se usó React Router para la navegación entre páginas.
- **Peticiones HTTP:** Se implementó Axios para facilitar las peticiones HTTP al servidor.
- **Estilización:** Se utilizó Tailwind CSS para la estilización.

## Back-End

- **Arquitectura:** El Back-End está construido mediante la Arquitectura MVC (Modelo-Vista-Controlador).
- **Autenticación y Autorización:** Se implementó un sistema de autorización y autenticación de usuarios con JSON Web Token (JWT).
- **Seguridad de Contraseñas:** Se usó la librería Bcrypt para hashear las contraseñas de los usuarios en la base de datos.
- **Base de Datos:** MongoDB fue la base de datos utilizada para el almacenamiento de datos, utilizando el ORM Mongoose para la comunicación.
- **Middlewares:** Se utilizaron _middlewares_ para corroborar la autorización de los usuarios.
- **Notificaciones por Correo:** Se implementó el servicio Nodemailer para enviar mensajes por correo electrónico para la creación, autenticación e inicio de sesión de usuarios.

## Instalación

#### Paso 1

Clonar el repositorio

```bash
git clone https://github.com/OssDevp/avp_software_web.git
```

#### Paso 2

Instalar las dependencias del Front-End y del Back-End

```bash
npm install
```

#### Paso 3

Crear un archivo `.env` en la carpeta `Back-End` con las siguientes variables de entorno:

```javascript
MONGO_URL= url de la base de datos de MongoDB
JWT_SECRET= clave secreta para la generación de tokens JWT

FRONTEND_URL=http://localhost:5173
```

En el mismo archivo de `.env`, agregar las siguientes variables para el envío de correos electrónicos (para el servicio de Nodemailer):

```javascript
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
```

#### Paso 4

Crear un archivo `.env` en la carpeta `Front-End` con la siguiente variable de entorno:

```javascript
VITE_BACKEND_URL=
```

#### Paso 5

Iniciar el servidor de desarrollo en cada carpeta (Front-End y Back-End)

```bash
npm run dev
```

#### Login

![login](/resources/iniciar-sesion.png)

#### Crear Cuenta

![Crear Paciente](/resources/create-account.png)

#### Pagina Principal

![Pagina Principal](/resources/home-patient.png)
