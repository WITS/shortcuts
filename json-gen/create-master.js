/*
	Creates a master.json file based on the contents of the data/ directory
*/

const fs = require('fs');
const YAML = require('yamljs');

let output = [];

for (let f of fs.readdirSync(__dirname + '/../data')) {
	// Debug logging
	if (true) {
		console.log('Loading software: %s', f.replace(/\.yaml$/i, ''));
	}
	// Load the file
	let data = YAML.parse(fs.readFileSync(__dirname + '/../data/' + f,
		{ encoding: 'utf-8' }));

	// TODO: sanitize input

	output.push(data);
}

fs.writeFileSync(__dirname + '/../web/js/data.js', 'Data = ' + JSON.stringify(output) + ';');