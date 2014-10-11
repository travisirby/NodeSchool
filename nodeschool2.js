var sum = 0;

process.argv.forEach(function(elem,i)
{
	if (i > 1){ sum += parseInt(elem);}
});

console.log(sum);
