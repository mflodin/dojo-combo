define([
    'dojo/_base/declare',
    "dojo/dom",
    "dojo/dom-class",
    'app/_WeatherBase',
    'app/weatherApi',
    'dojo/text!./templates/WeatherDisplay.html'
], function(
    declare,
    dom,
    domClass,
    _WeatherBase,
    weatherApi,
    template
) {
    return declare([_WeatherBase], {
        templateString: template,
        // Attributes
        location: "",
        _setLocationAttr: {
            node: "locationNode",
            type: "innerHTML"
        },
        _updateTemperature : function _updateTemperature () {
           var degrees;

            if (this.scale === 'fahrenheit') {
                degrees = this.temperature * (9/5) - 459.67;
            } else {    
                degrees = this.temperature - 273.15;
            }
            this.degreesNode.innerHTML = Math.round(degrees);
        },

        temperature: null,
	    _setTemperatureAttr: function _setTemperatureAttr(temperature) {
            this._set('temperature', temperature);
            this._updateTemperature();
         },

        scale: "celsius",
        _setScaleAttr: function _setScaleAttr(scale) {
            this._set('scale', scale);
            this.scaleNode.innerHTML = scale === "fahrenheit" ? "°F" : "°C";
            this._updateTemperature();
        },

        description: "",
        _setDescriptionAttr: {
            node: "descriptionNode",
            type: "innerHTML"
        },
        query : function query(queryValues) {
            weatherApi.getWeatherFor(queryValues).then(function displayWeather(weatherData) {
                this.set('location', weatherData.name);
                var weatherDescription = weatherData.weather.map(function(el) {
                    return el.description;
                }).join(', ');

                this.set('description', weatherDescription);
                this.set('temperature', weatherData.main.temp);
                domClass.remove(this.containerNode, "hidden");
            }.bind(this));
        }
    });
});
