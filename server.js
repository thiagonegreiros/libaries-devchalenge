/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 * Data: 29/12/2020
 * Author: Thiago Negreiros
 */

const app = require('./src/app');
const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log("This aplication are using the port: ", port);
});