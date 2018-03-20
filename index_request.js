const P = require('bluebird');
const request = require('request');

/* request('http://www.mocky.io/v2/5aafa9ca2d00005a006efeff', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */

const url = 'http://www.mocky.io/v2/5aafa9ca2d00005a006efeff';
function getURL(url) {
    return new Promise ((resolve, reject) => {                                      // primero creamos la promesa
        request(url, (error, response, body) => {                                   // contenido de la promesa
            if(error){                                                              // controlamos errores
                return reject(error);
            }
            if(!response || response.statusCode !== 200) {                          // controlamos errores
                return reject({error: 'statuscode', code: response.statusCode});
            }
            return resolve(JSON.parse(body));                                                   // devolvemos resultado
        });
    });
}

getURL(url)                                                                         //probamos que funca
.then((result) => {
    console.log(typeof result);
    console.log(result);
})
.catch(console.error);