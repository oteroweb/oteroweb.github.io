'use strict';

angular.module('Client')
	.factory('NoteResource', function($resource) {
		// return $resource("http://localhost:8000/notes/:id", {
		return $resource("http://dailybitspro.com/api/API/public/notes/:id", {
			id: "@id"
		}, {
			update: {
				method: "PUT"
			}
		});
	});

	// http://dailybitspro.com/api/API/public/