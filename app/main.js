require([
	'app/WeatherDisplay',
	'app/PreviousSearches',
	'app/SearchBar',
	'app/TemperatureScalePicker'
], function (
	WeatherDisplay,
	PreviousSearches,
	SearchBar,
	TemperatureScalePicker
) {
	var searchBar = new SearchBar().placeAt('header');
	var scalePicker = new TemperatureScalePicker().placeAt('header');
	var weatherDispley = new WeatherDisplay().placeAt('main');
	var previousSearches = new PreviousSearches().placeAt('main');
	
	scalePicker.on('click', function(evt) {
		weatherDispley.set('scale', evt.value);
	});

	searchBar.on('query', function (query) {
		weatherDispley.query(query);	
		previousSearches.append(query);
	});

	previousSearches.on('selected', function (values) {
		weatherDispley.query(values);
	});


});