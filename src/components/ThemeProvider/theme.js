import get from 'lodash/get'
import range from 'lodash/range'

import memorize from '../../utils/memorize'

export const breakpoints = [352, 769, 1024, 1280, 1920, 2400].map(n => `${n}px`);

export const responsiveIndex = [
  2, // mobile
  4, // laptop
  5,
]

const responsiveMap = breakpoints.map((_, i) => {
  const id = responsiveIndex.findIndex(ri => ri > i)
  return id >= 0 ? id : responsiveIndex.length
})

export const responsive = memorize((...args) => {
  const argsLen = args.length
  if (argsLen <= 1) return args[0]
  return breakpoints.map((_, i) => get(args, [responsiveMap[i]], null))
});

const lightGray = '#ccd4df';
const gray = '#efefef';
const brightGray='#cccccc'
const darkGray = '#707070';
const red = '#EA5204';
const prussianBlue = '#002A5E';
const brightBlue='#babcd2'
const ceruleanBlue = '#13E6F0';
const darkViolet = '#7D3787';
const vividViolet = '#A446BA'
const gigas = '#4F3398'
const mustard = '#FFDC53'
const pinkSalmon = '#FF90A1'
const mandy = '#df536A'
const disco = '#B71962'
const lightBlue = '#e6f1ff'
const titleBlue = '#19376d'
const bgGreen = '#00796D'
const darkGreen = '#18776c'
const lightGreen = '#b7e074'
const numberGreen = '#9ab965'
const lime = '#BAE659'
const purple = '#7d3787'

export default {
  breakpoints,
  zOrder: range(6).map(z => 10 ** z),
  colors: {
    red,
    purple,
    lightGray,
    darkGray,
    brightGray,
    gray,
    darkViolet,
    bgGreen,
    darkGreen,
    prussianBlue,
    ceruleanBlue,
    brightBlue,
    mandy,
    gigas,
    titleBlue,
    lightBlue,
    lightGreen,
    numberGreen,
    blue: prussianBlue,
    milkBlue: brightBlue,
    darkBlue: prussianBlue,
    neonBlue: ceruleanBlue,
    mustard,
    vividViolet,
    pinkSalmon,
    disco,
    lime,
    primary: prussianBlue,
    primaryHover: ceruleanBlue,
  },
};
