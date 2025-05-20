# Parcial Sistemas Distribuidos

## Integrantes

- David Nuncira - david.nuncira@uptc.edu.co
- Luis Salamanca - jose.salamanca05@uptc.edu.co

## Descripción

Esta es una aplicación web construida que consume el servicio RESTful de [JSONPlaceholder](https://jsonplaceholder.typicode.com) para visualizar los posts. La aplicación permite:

1. Mostrar todos los posts disponibles.
2. Mostrar un post específico usando su ID.

La aplicación está contenida en un contenedor Docker, lo que permite su despliegue en cualquier entorno compatible con Docker.

## Requisitos

- Tener instalado [Docker](https://www.docker.com/products/docker-desktop) en tu máquina.

## Instrucciones para descargar y ejecutar la imagen de Docker

Si prefieres no construir la imagen localmente, puedes descargarla directamente desde DockerHub. Para hacerlo, usa:

```bash
docker pull joseslk/mi-aplicacion-web:latest
```
Una vez descargada la imagen, puedes ejecutar el contenedor con el mismo comando que se explicó antes:

```bash
docker run -d -p 8080:80 joseslk/mi-aplicacion-web:latest
```

5. Acceder a la aplicación
Una vez que la aplicación esté corriendo, abre tu navegador y navega a las siguientes rutas:

http://localhost:8080
