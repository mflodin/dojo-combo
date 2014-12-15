define([
	'dojo/_base/declare',
	'dojo/Evented',
	'dojo/on',
	'dojo/store/Memory',
 	'app/_WeatherBase',
 	'dojo/text!./templates/PreviousSearches.html'
 	], function (
 		declare,
 		Evented,
 		on,
 		Memory,
 		_WeatherBase,
 		template
 	) {
 		return declare([_WeatherBase, Evented], {
 			templateString: template,
 			_previousSearches : [],

 			_renderPreviousSearches : function _renderPreviousSearches () {
 				this.container.innerHTML = "";
 				this._previousSearches.map(function __mapPreviousSearchesToSpan (search) {
 					var li = document.createElement('li');
 					li.innerHTML = search.city + ', ' + search.country;
 					on(li, 'click', function () {
 						this._emitSelected(search);
 					}.bind(this));
 					
 					this.container.appendChild(li);
 				}.bind(this));
 			},
 			_emitSelected : function _emitSelected (values) {
 				this.emit('selected', values);
 			},

 			append : function append (values) {
 				this._previousSearches.push(values);
 				this._renderPreviousSearches();
 			}
 		});
});