# Parcial Sistemas Distribuidos - Aplicación Node.js

## Integrantes

- David Nuncira - david.nuncira@uptc.edu.co
- Luis Salamanca - jose.salamanca05@uptc.edu.co

## Descripción

Esta es una aplicación web construida en Node.js que consume el servicio RESTful de [JSONPlaceholder](https://jsonplaceholder.typicode.com) para visualizar los posts. La aplicación permite:

1. Mostrar todos los posts disponibles.
2. Mostrar un post específico usando su ID.

La aplicación está contenida en un contenedor Docker, lo que permite su despliegue en cualquier entorno compatible con Docker.

## Requisitos

- Tener instalado [Docker](https://www.docker.com/products/docker-desktop) en tu máquina.

## Instrucciones para descargar y ejecutar la imagen de Docker

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina:

```bash
git clone https://github.com/tu_usuario/parcial-nodejs.git
cd parcial-nodejs


2. Construir y ejecutar la aplicación con Docker
Una vez clonado el repositorio, construye la imagen de Docker con el siguiente comando:

bash
Copiar
docker build -t tu_usuario/parcial-nodejs:latest .

3. Ejecutar la imagen de Docker
Para ejecutar la imagen en un contenedor, usa el siguiente comando:

bash
Copiar
docker run -p 3000:3000 tu_usuario/parcial-nodejs:latest
Este comando ejecutará la aplicación en el puerto 3000. Puedes abrir tu navegador y acceder a la aplicación en:

arduino
Copiar
http://localhost:3000
4. Descargar la imagen desde DockerHub
Si prefieres no construir la imagen localmente, puedes descargarla directamente desde DockerHub. Para hacerlo, usa:

bash
Copiar
docker pull joseslk/mi-aplicacion-web:latest
Una vez descargada la imagen, puedes ejecutar el contenedor con el mismo comando que se explicó antes:

bash
Copiar
docker build -t mi-aplicacion-web .
docker run -d -p 8080:80 mi-aplicacion-web
5. Acceder a la aplicación
Una vez que la aplicación esté corriendo, abre tu navegador y navega a las siguientes rutas:

http://localhost:8080
