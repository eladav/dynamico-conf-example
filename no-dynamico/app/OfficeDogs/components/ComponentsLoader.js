import React from 'react';
import * as NB from 'native-base';

export default async () => {
    const code = await (fetch('http://127.0.0.1:8080/dist/index.js').then(c => c.text()));
    const req = (name) => name === 'react' ? React : NB;
    const moduleObject = {};

    new Function('module', 'require', code)(moduleObject, req);

    return moduleObject.exports;  
}