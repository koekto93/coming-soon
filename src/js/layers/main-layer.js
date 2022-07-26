import {
  mainLayer,
  counterBlock,
  notificationBlock,
  textBlock,
  counter,
} from '../common.js';
import { initializeClock } from './counter';

var deadline = new Date(2022, 12, 1); // for endless timer

window.onload = () => initializeClock('countdown', deadline);

const counterBlockData = {
  counter,
};

const data = { textBlock, counterBlock, counterBlockData, notificationBlock };

const template = mainLayer(data);

export default template;
