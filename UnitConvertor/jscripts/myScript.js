$ = function(id){
	return document.getElementById(id);
};

var ResetTextfields = function()
{
	$("SI_unit").innerHTML="Kilometres:";
	$("Imp_unit").innerHTML="Miles:";
	$("si").value="";
	$("imp").value="";
	$("imp").disabled=true;
	$("result").innerHTML="<p class='w3-left-align w3-padding'>Please enter a number into the first box.</p>";
	$("length").checked=true;
	$("temp").checked=false;
	$("energy").checked=false;
}

var SetFields = function(id)
{
	if (id == 1)
	{
		$("SI_unit").innerHTML="Kilometres:";
		$("Imp_unit").innerHTML="Miles:";
		$("si").value="";
		$("imp").value="";
		$("imp").disabled=true;
		$("result").innerHTML="<p class='w3-left-align w3-padding'>Please enter a number into the first box.</p>";
	}
	else if (id == 2)
	{
		$("SI_unit").innerHTML="Celcius:";
		$("Imp_unit").innerHTML="Fahrenheit:";
		$("si").value="";
		$("imp").value="";
		$("imp").disabled=true;
		$("result").innerHTML="<p class='w3-left-align w3-padding'>Please enter a number into the first box.</p>";
	}
	else if (id == 3)
	{
		$("SI_unit").innerHTML="Kilojoules:";
		$("Imp_unit").innerHTML="Kilocalories:";
		$("si").value="";
		$("imp").value="";
		$("imp").disabled=true;
		$("result").innerHTML="<p class='w3-left-align w3-padding'>Please enter a number into the first box.</p>";
	}
} 

var calculateLength = function()
{
	var si = parseFloat($("si").value);
	if (isNaN(si))
	{
		$("si").value="";
		$("imp").value="";
		$("result").innerHTML="<p class='w3-left-align w3-padding'>Please enter a number into the first box.</p>";
	}
	else
	{
		var impRes = si*0.621371.toFixed(2);
		$("imp").value = impRes;
		$("result").innerHTML="<p class='w3-left-align w3-padding'> "+$("si").value+"km is "+$("imp").value+"mi.</p>"

	}
}

var calculateTemp = function()
{
	var si = parseFloat($("si").value);
	if (isNaN(si))
	{
		$("si").value="";
		$("imp").value="";
		$("result").innerHTML="<p class='w3-left-align w3-padding'>Please enter a number into the first box.</p>";
	}
	else
	{
		var impRes = (si*1.8+32).toFixed(1);
		$("imp").value = impRes;
		$("result").innerHTML="<p class='w3-left-align w3-padding'> "+$("si").value+"C is "+$("imp").value+"F.</p>"

	}
}

var calculateEnergy = function()
{
	var si = parseFloat($("si").value);
	if (isNaN(si))
	{
		$("si").value="";
		$("imp").value="";
		$("result").innerHTML="<p class='w3-left-align w3-padding'>Please enter a number into the first box.</p>";
	}
	else
	{
		var impRes = (si*0.239006).toFixed(2);
		$("imp").value = impRes;
		$("result").innerHTML="<p class='w3-left-align w3-padding'> "+$("si").value+"kJ is "+$("imp").value+"kcal.</p>"

	}
}

var convert = function()
{
	if ($("length").checked == true)
	{
		calculateLength();
	}

	else if ($("temp").checked == true)
	{
		calculateTemp();
	}

	else if ($("energy").checked == true)
	{
		calculateEnergy();
	}

}

window.onload = function()
{
	ResetTextfields();
	$("convert").onclick = function(){convert();}
	$("reset").onclick = function(){ResetTextfields();}

};

function myFunction() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") == -1) {
	  x.className += " w3-show";
	} else { 
	  x.className = x.className.replace(" w3-show", "");
	}
}