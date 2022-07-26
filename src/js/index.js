import _ from 'lodash';
const path = './../html/includes/';

import mainLayer from './layers/main-layer.js';

//const header = document.body.querySelector('.header');
const content = document.body.querySelector('.content');
//const footer = document.body.querySelector('.footer');

const result = mainLayer;

content.innerHTML = result;
