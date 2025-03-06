//Escribe un comentario explicando para qué sirve http
//http es un módulo que permite crear un servidor web y enviar solicitudes a un servidor web.
import http from 'http';

//Escribe un comentario explicando para qué sirve fs
//fs es un módulo que permite interactuar con el sistema de archivos.
import fs from 'fs';

    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       //Agrega un enlace en bienvenida a la página de escuelas 
       //Agrega un enlace en bienvenida a la página de donantes 
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error interno del servidor');
          return;
        }
        //Escribe qué significa el 200
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de las escuelas
    function getEscuelas(req, res) {
        //Esto representa un objeto JSON de una escuela
        //Agrega otra escuela
        const escuelas = [ 
        { "nombre": "Escuela Benito Juárez", "direccion": "Av. Principal 123, Ciudad de México"},
        { "nombre": "Escuela Miguel Hidalgo", "direccion": "Av. Principal 456, Ciudad de México"}
        ];  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      res.end(JSON.stringify(escuelas));
      //stringify sirve para convertir un objeto JSON en una cadena de texto
    }

     //Agrega un enlace a bienvenida y a donantes en escuelas.html 
    function mostrarEscuelas(req, res) {
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Error interno del servidor');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      //Agrega un enlace a bienvenida y a escuelas en donantes.html
      function mostrarDonantes(req, res) {
        //Construye una página básica donantes.html
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Error interno del servidor');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las donantes
    function getDonantes(req, res) {
    //Tienes que corregir varias cosas en esta sección
        const donantes = [
            { "nombre": "Donante 1", "cantidad": 1000},
            { "nombre": "Donante 2", "cantidad": 2000}
        ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(donantes));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Recorcholis hermano la pagina no fue encontrada lol');
    }

    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/SRC/Actividad4_5/bienvenida.html') {
        darBienvenida(req, res);
      } else if (url === '/api/SRC/Actividad4_5/escuelas.html') {
        getEscuelas(req, res);
      } else if (url === '/api/SRC/Actividad4_5/donantes.html') {
        getDonantes(req, res);
      } 
      else if (url === '/SRC/Actividad4_5/escuelas.html') {
        mostrarEscuelas(req, res);
      } 
      else if (url === '/SRC/Actividad4_5/donantes.html') {
        mostrarDonantes(req, res);
      } 
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a opinion.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html