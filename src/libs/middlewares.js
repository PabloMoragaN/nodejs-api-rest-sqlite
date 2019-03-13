//Archivo de configuracion del server
import express from 'express';

module.exports = app => {
    //settings del server
    app.set('port', process.env.PORT || 3000);

    //middleware

    app.use(express.json());

};