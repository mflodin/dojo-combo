define([
	'dojo/_base/declare',
	"dojo/dom",
	'dojo/Evented',
	'dojo/on',
	'dojo/store/Memory',
 	'app/_WeatherBase',
    'app/weatherApi',
	'dijit/form/Form',
	'dijit/form/TextBox',
	'dijit/form/FilteringSelect',
	'dijit/form/Button',
 	'dojo/text!./templates/SearchBar.html'
 	], function (
 		declare,
 		dom,
 		Evented,
 		on,
 		Memory,
 		_WeatherBase,
 		weatherApi,
 		Form,
		TextBox,
		FilteringSelect,
		Button,
 		template
 	) {
 		return declare([_WeatherBase, Evented], {
 			templateString: template,
 			postCreate : function postCreate () {
 				var store = new Memory({
 					idProperty: 'code'
 				});
 				this.countrySelect.set('searchAttr', 'name');
 				this.countrySelect.set('store', store);
 				weatherApi.getCountries().then(function setCountrySelectData (countries) {
 					store.setData(countries);
 				});

 				this.form.on('submit', function submitForm (evt) {
 					evt.preventDefault();
 					var formValues = this.form.get('value');
 					this.emit('query', formValues);
 				}.bind(this));            	
 			}
 		});
});