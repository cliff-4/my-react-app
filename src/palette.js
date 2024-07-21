import themesObject from './themes.json';

let hexList = themesObject.allThemes[themesObject.currTheme].hexList;
let indices = [
  "primary",
  "secondary",
  "tertiary",
  "quarternary",
  "quinternary"
];
let palette = {}
for (let i = 0; i < hexList.length; i++) {
  palette[indices[i]] = '#' + hexList[i];
}


// export default colours
export default palette