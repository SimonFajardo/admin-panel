# admin-panel
En este repositorio se desarrolló un panel de vista de administrador para una aplicación de restaurante

1- Abrir la terminal de Visual Studio Code y ejecutar estando posicionado dentro de la carpeta (ejemplo: admin_panel) el comando "npm init --yes", al haber previamente instalado en la computadora el entorno Node.js. Una vez ejecutado este comando se genera en la carpeta el archivo package.json. Nota explicativa: los comandos ingresados en la terminal van sin las comillas.

2- Ejecutamos el comando "npm install json-server" para crear un API REST que devuelve datos en formato JSON. Esto nos crea un web service falso con datos de prueba, pero ideal para aprender y prototipar aplicaciones frontend con un framework Javascript del lado del cliente.

3- Creamos un archivo db.json donde vamos a tener dos arreglos, un arreglo "menu" con el contenido especificado en el archivo y otro llamado "cliente".

4- En el archivo package.json en el objeto "scripts" eliminamos el que trae por defecto y colocamos "server": "json-server --watch db.json" el cual es el que vamos a utilizar para correr nuestro archivo para poder conectarnos al db.json.

5- Ejecutamos en la terminal el comando "npm run server" para correr el servidor de prueba.

6- En Visual studio Code vamos a "settings" y en la pestaña "Open Settings (JSON)" que es un icono con forma de hoja lo seleccionamos, y revisamos que tengamos dentro del json el siguiente objeto:

"liveServer.settings.ignoreFiles": [
        "**/db.json",
        ".vscode/**",
        "**/*.scss",
        "**/*.sass",
        "**/*.ts"
    ]

Esto se hace para ignorar algunas ejecuciones del archivo db.json. Una vez realizamos la modificación guardamos el archivo.

7- Creamos dentro de esta carpeta las carpetas css, js y los archivos editar-producto.html, index.html y nuevo-producto.html.

8- Instalamos el framework de Tailwind, descargando el archivo tailwind.min.css en la carpeta css.

9- En la carpeta js estan varios archivos javascript que tienen tanto el frontend como el backend de la página.
