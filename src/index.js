//Archivo principal del servidor

import express from 'express';
import consign from 'consign';

//const consign= requite('consign');
//const express = require('express');


const app = express();

consign({
    cwd: __dirname


}).include('libs/config.js').then('db.js').then('libs/middlewares.js').then('routes').then('libs/boot.js').into(app)

/** include-->config de DB,
 * then--> config de conexion a DB y los modelos,
 * then --> la configuracion del server/express ,
 *  then--> importa las rutas del express /peticiones GET POST DELETE PUT, 
 *  then--> inicializacion de los modelos y arranque del server 
 * into --> en el parametro app*/