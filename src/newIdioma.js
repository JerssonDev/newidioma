export default function newIdioma  (str)  {

  let strTranslation = str

  
  if (str.toLowerCase().endsWith('ar')) {

    strTranslation = str.slice(0, -2)

  }

  if (str.toLowerCase().startsWith('z')) {

    strTranslation += 'pe'

  } 

  const length = strTranslation.length;

  if (length >=10) {

    const firstHalf = strTranslation.slice(0, Math.round(length / 2))
    const secondHalf = strTranslation.slice(Math.round(length / 2))

    strTranslation = `${firstHalf}-${secondHalf}`

  }
  
  if (str == reverse(str)) {

    return minMay(str)

  }

  return strTranslation

}

const reverse = (str) => str.split('').reverse().join('')

const minMay = (str) => {
  
  let srtArray = str.split('')
  let newStr = []
  const length = srtArray.length

  for (var i = 0; i < length; i++) {

    i % 2 == 0  ? newStr[i] = srtArray[i].toUpperCase() : newStr[i] = srtArray[i].toLowerCase()

  }

  return newStr.join('')

}
