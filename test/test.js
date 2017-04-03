const expect = require('chai').expect
const newIdioma = require('..').default

describe('#newIdioma',function() {

	it ('si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
		const translation = newIdioma('Programar')
		expect(translation).to.equal('Program')
	})

	it ('si la palabra inicia con z, se le añade "pe" al final', function () {
		const translation1 = newIdioma('Zorro')
		const translation2 = newIdioma('Zarpar')
		expect(translation1).to.equal('Zorrope')
		expect(translation2).to.equal('Zarppe')
	})

	it ('si la palabra traducida tiene 10 o mas letras se debe de partir por la mitad y unir con un "-" en medio', function () {
		const translation = newIdioma('abecedario')
		expect(translation).to.equal('abece-dario')
	})

	it ('si la palabra es un palindromo, ninguna regla cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function () {
		const translation = newIdioma('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})

})