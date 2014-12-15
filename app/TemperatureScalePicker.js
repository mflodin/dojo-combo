define([
	'dojo/_base/declare',
	"dojo/dom",
	'dojo/Evented',
	'dojo/on',
 	'app/_WeatherBase',
 	'dojo/text!./templates/TemperatureScalePicker.html'
 	], function (
 		declare,
 		dom,
 		Evented,
 		on,
 		_WeatherBase,
 		template
 	) {
 		return declare([_WeatherBase, Evented], {
 			templateString: template,
 			postCreate : function postCreate () {
 				on(this.celsius, 'click', function () {
 					this.emit('click', {value: 'celsius'});
 				}.bind(this));

 				on(this.fahrenheit, 'click', function () {
 					this.emit('click', {value: 'fahrenheit'});
 				}.bind(this));
 			}
 		});
});