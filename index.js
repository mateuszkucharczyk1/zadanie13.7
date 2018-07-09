var fs = require('fs');
var colors = require('colors');



fs.readFile('./tekst.txt', 'utf-8', function(err, data){
	console.log('Dane przed zapisem!'.blue);
	console.log(data);
	fs.appendFile('./tekst.txt', 'Tak wygladaja po zapisie!', function(err){
		if(err) throw err;
		console.log('Zapisano!'.blue);
		fs.readFile('./tekst.txt', 'utf-8', function(err, data){
			console.log('Dane po zapisie'.blue)
			console.log(data);
		});
	});
});

fs.readdir('./node_modules/colors', function(err, files) {
	fs.writeFile('./plik.txt', files, function(err){
		if(err) throw err;

		fs.readFile('./plik.txt', 'utf-8', function(err, data){
			console.log('xxx'.red)
			console.log(data);
		});
	});
});
