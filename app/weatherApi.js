define(["dojo/_base/xhr"], function(xhr) {
	var getJSON = function getJSON(params) {
		return xhr.get({
			url: params.url,
			content: params.content,
			handleAs: "json",
			headers: {
				"X-Requested-With": null
			}
		});
	};
	return {
		getWeatherFor: function getWeatherFor(query) {
			// var url = "//0.0.0.0:9000/data/weather.json";
			var url = "//api.openweathermap.org/data/2.5/weather";

			url += "?q=" + query.city + "," + query.country;
			console.log(url);
			return getJSON({
				url: url
			});
		},
		getCountries : function getCountries () {
			var url = "//0.0.0.0:9000/data/countries.json";
			console.log(url);
			return getJSON({
				url: url
			}); 
		}
	};
});