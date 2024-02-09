// Import the library
import * as cw from './Cityworks.js';
cw.Cityworks.configure('devcw.stlouis-mo.gov', {path: 'cityworks', version: 15});
//const _ = require('lodash');
  cw.Cityworks.authenticate ('cinweb','').then(resp => {}).catch(error => {
    console.log(error.message)
  });
 // cw.Cityworks.getToken();
  
  cw.request.getById(88888).then(resp => {console.log(resp)}).catch(error => {console.log(error.message)
  });