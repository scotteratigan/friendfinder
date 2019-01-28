// used to generate random answers to seed friends object
let output = "";
for(let i=0; i<10; i++) {
	if (output != "") {
		output += ', ';
	}
	output += `${Math.floor(Math.random()*5)+1}`;
}
console.log(output);