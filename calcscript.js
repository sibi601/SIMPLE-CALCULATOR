
function result(){
	let x=parseInt(document.getElementById('a').value)
	let y=parseInt(document.getElementById('b').value)
	var option=document.getElementById('opt').value

	if (option=='+'){
		var z=x+y;
	}
	else if(option=='-'){
		var z=x-y;
	}
	else if(option=='*'){
		var z=x*y;
	}
	else if(option=='/'){
		var z=x/y;
	}
	document.getElementById('result').innerHTML="The result is " + z;
}