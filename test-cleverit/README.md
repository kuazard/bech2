# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


> Micro front-end encargado de vender pinturas de arte.

## Tabla de contenidos

  - [Comenzando 🔰](#comenzando-)
  - [Prerrequisitos 📋](#prerrequisitos-)
  - [Instalación 🎉](#instalación-)
  - [Ejecución 🚀](#ejecución-)
  - [Ejecutar proyecto local](#ejecutar-proyecto-local)
  - [Compilación  🔧](#compilación--)

  

## Comenzando 🔰

A continuación se listarán todos los puntos necesarios para comenzar a desarrollar con el proyecto cotizador seguro de auto desde su fase de instalación hasta levantar un ambiente local de desarrollo sin problemas, se incluirán instrucciones de ejecución de comandos, testing, reglas y contexto de como esta estructurado el proyecto incluyendo su estructura de carpetas junto con su descripción.

## Prerrequisitos 📋

Para poder compilar y ejecutar la aplicación necesitas lo siguiente:

1. [Node.js 16.x](https://nodejs.org/es/download/)
2. [react](https://https://create-react-app.dev/)

* **Recuerda configurar tus llaves ssh:**
  + [GitLab and SSH keys | GitLab ](https://docs.gitlab.com/ee/ssh/)
  + [Agregar una clave SSH nueva a tu cuenta de GitHub - GitHub Docs](https://docs.github.com/es/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)


## Instalación 🎉

Ejecutar el siguiente comando para instalar dependencias:

```bash
$ npm install 
```

## Ejecución 🚀

### Ejecutar proyecto local

Ejecutar **npm run dev** para un servidor de desarrollo. Navega a http://127.0.0.1:5173/. La aplicación se recargará automáticamente si cambias cualquiera de los archivos fuente.

```bash
$ npm run serve
```

Nota: el proyecto necesita bootstrap 5.3.x para funcionar correctamente.

## Pruebas 🛂

Las pruebas son necesarias para la construcción de nuevas funcionalidades dentro del proyecto, verificando la estructura y sintaxis del código, esto es importante para evitar posibles errores en el futuro.


## Conceptos 📚

* **Components**
    + Pieza de software personalizado y reutilizable compuesto por:
       +  Una Vista
       +  Lógica

* **Views**
    + Página o segmento visual que permite la interacción del usuario




## Versionamiento 🎏

Estas son las ramas donde mantienen las diferentes versiones del código fuente para cada uno de los ambientes:

* Desarrollo:
````
integracion 
````
* QA/Cert:
````
develop
````
* Producción:
````
master
````


* **Error Registro**
    + Ejecutar el siguiente comando: npm config set registry http://registry.npmjs.org/
## Licencia 📄
```
Copyright (C) Consorcio Digital - All Rights Reserved
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
```