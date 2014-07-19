/**
 * TODO support other encodings:
 * http://stackoverflow.com/questions/7329128/how-to-write-binary-data-to-a-file-using-node-js
 */

function cleanName(str) {
	return str.replace(/\.\./g,'').replace(/\//g,'');
}

Meteor.methods({
	uploadFile: function(blob, name) {
		var fs = Npm.require('fs'),
			name = cleanName(name || 'file'),
			path = process.env.PWD+'/public/uploads/';

		// TODO Add file existance checks, etc...
		fs.writeFile(path + name, blob, 'binary', function(err) {
			if (err) {
				console.log('Failed to save file.', err);
			} else {
				console.log('The file ' + name + ' was saved to ' + path);
			}
		}); 
	}
});
