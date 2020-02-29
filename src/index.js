module.exports = function toReadable (number) {
  let str = String(number);
  let arr1 = ['', 'one','two', 'three', 'four', 'five','six','seven','eight',
  'nine','ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen',
  'seventeen', 'eighteen', 'nineteen'];
  let arr12 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen',
  'seventeen', 'eighteen', 'nineteen']
  let arr2 = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  let arr3 = [''] 

  if (number == 0) {
      return 'zero';
  }
  else if (str.length == 1) {
      return arr1[number];
  }
  else if (str.length == 2 && str[0] == 1) {
    return arr1[number];
}
  else if (str.length == 2 && str[1] == 0) {
    return  arr2[+str[0]];
}
  else if (str.length == 2) {
      return  arr2[+str[0]] + ' ' + arr1[+str[1]]
  }
  
  else if (str.length == 3 && +str[1] == 0 && +str[2] == 0) {
    return arr1[+str[0]] + ' ' + 'hundred';
  }

  else if (str.length == 3 && +str[1] == 1) {
    return arr1[+str[0]] + ' ' + 'hundred' + ' ' + arr12[str[2]];
  }
  else if (str.length == 3 && +str[2] == 0) {
    return arr1[+str[0]] + ' ' + 'hundred' + ' ' + arr2[+str[1]];
  }
  else if (str.length == 3 && +str[1] == 0) {
    return arr1[+str[0]] + ' ' + 'hundred' + ' ' + arr1[str[2]];
}
  else if (str.length == 3 && +str[1] !== 1) {
      return arr1[+str[0]] + ' ' + 'hundred' + ' ' + arr2[+str[1]] + ' ' + arr1[str[2]];
  }
}

