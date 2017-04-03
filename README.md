# New Idioma

Este es un idioma inventado para el curso de javascript

## Descripcion del idioma

- si la palabra termina en "ar", se le quitan esos dos caracteres
- si la palabra inicia con z, se le añade "pe" al final
- si la palabra traducida tiene 10 o mas letras se debe de partir por la mitad y unir con un "-" en medio
- si la palabra es un palindromo, ninguna regla cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas

## Instalación

```
$ npm install newIdioma
```

## Uso 

```
import newIdioma from 'newIdioma'

newIdioma('programar') // program
newIdioma('zorro') // zorrope
newIdioma('zarpar') // zarppe
newIdioma('abecedario') // abece-dario
newIdioma('sometemos') // SoMeteMoS
```

## Créditos
- [Jersson Mendoza](https://twitter.com/JerssonMLinares)

## Licencia

[MIT](https://opensource.org/licenses/MIT)