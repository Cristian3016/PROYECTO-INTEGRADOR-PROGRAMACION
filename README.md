# Nombre de los intengrantes del grupo:

1)-Cristian Caro
2)-Esteban Vera
3)-Fabricio Vargas
4)-Vanesa Gimenez
5)- Stefania Silva

# Frontend del Proyecto

Este proyecto es una aplicación frontend desarrollada con Angular. Sigue las instrucciones a continuación para configurarlo y ejecutarlo en tu entorno local.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [Angular CLI](https://angular.io/cli) (versión 15 o superior recomendada)
- Un navegador web moderno

## Instrucciones de instalación

1. Clona este repositorio o descarga los archivos en tu máquina local.
2. Navega a la carpeta raíz del proyecto utilizando la terminal:

   ```bash
   cd Frontend
   ```

3. Instala las dependencias del proyecto ejecutando:

   ```bash
   npm install
   ```

## Ejecución del proyecto

1. Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

   ```bash
   ng serve
   ```

2. Abre tu navegador y navega a `http://localhost:4200` para ver la aplicación en funcionamiento.

## Estructura del proyecto

- **`src/`**: Contiene el código fuente principal de la aplicación.
- **`angular.json`**: Archivo de configuración del proyecto Angular.
- **`package.json`**: Lista las dependencias y scripts del proyecto.
- **`node_modules/`**: Dependencias instaladas automáticamente (no modificar).

## Scripts útiles

- `ng serve`: Ejecuta el servidor de desarrollo.
- `ng build`: Construye el proyecto para producción en la carpeta `dist/`.
- `ng test`: Ejecuta las pruebas unitarias.

# Backend del Proyecto

Este proyecto es un servidor backend desarrollado con Express.js y TypeORM para gestionar la lógica de pedidos y el almacenamiento en una base de datos SQLite.

# Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js] (versión 16 o superior recomendada)
- Instrucciones de instalación
- Clona este repositorio o descarga los archivos en tu máquina local.

## Instrucciones de instalación

1. Clona este repositorio o descarga los archivos en tu máquina local.

2. Navega a la carpeta raíz del backend utilizando la terminal:

cd Backend

3. Instala las dependencias del proyecto ejecutando:

npm install

4. Configura el archivo **`ormconfig.json`** con la conexión a la base de datos SQLite:

{
  "type": "sqlite",
  "database": "./database.sqlite",
  "entities": ["src/models/*.ts"],
  "synchronize": true
}

## Ejecución del proyecto

1. Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

npx ts-node src/server.ts

2. El servidor estará disponible en http://localhost:3000

# Estructura del proyecto

- **`src/`**: Contiene el código fuente principal, incluyendo controladores, modelos y rutas.
- **`ormconfig.json`**: Configuración de la base de datos.
- **`package.json`**: Lista las dependencias y scripts del proyecto.
- **`database.sqlite`**: Archivo generado automáticamente para almacenar los datos.

# Scripts útiles

npx ts-node src/server.ts: Ejecuta el servidor de desarrollo.