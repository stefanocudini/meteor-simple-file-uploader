
Template.upform.events({
	'change input': function(e) {
		e.preventDefault();
		_.each(e.originalEvent.srcElement.files, function(file) {
			console.log(file);
			saveFile(file, file.name);
		});
	}
});