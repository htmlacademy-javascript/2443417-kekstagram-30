
function lineLenght(str, lenght) {
  return str.length <= lenght;
}
lineLenght('Все могут короли' , 8);

function palidrome (str) {
  const checkStr = str.replaceAll(' ', '').toUpperCase();
  let newStr = '';
  for (let i = checkStr.length - 1; i >= 0; i--) {
    newStr += checkStr[i];
  }
  if (checkStr === newStr) {
    return 'Это палидром';
  } else {
    return 'Это не палидром';
  }
}
palidrome('224422');
