var correctSirName = /^[A-Z]{1}[a-z]{1,}$/;
var sirName;  var sNFC = false;

var correctFullName = /^[A-Z]{1}[A-Za-z\s]*$/;
var fullName; var fNFC = false;

var correctEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var eMail; var eMFC;

var correctPassword = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,16}$/;
var password; var pFC = false; var cPFC = false;

var DOB; var dOBFC = false;

var gender; var gFC = false;

var region; var rFC; var Asia=false;
var country; var cFC = false;

function sirNameClick()
{
	validate();
	sNFC = true;
	document.getElementById('ISN').style.display = "none";
}

function fullNameClick()
{
	validate();
	fNFC = true;
	document.getElementById('IFN').style.display="none";
}

function emailClick()
{
	validate();
	eMFC = true;
	document.getElementById('IEM').style.display = "none";
}

function passwordClick()
{
	document.getElementById('ICP').style.display = "none";
	validate();
	pFC = true;
	document.getElementById('IP').style.display = "none";
}

function confirmPasswordClick()
{
	validate();
	cPFC = true;
	document.getElementById('ICP').style.display = "none";
}

function dateOfBirthClick()
{
	validate();
	dOBFC = true;
	document.getElementById('IDOB').style.display = "none";
}

function genderClick()
{
	validate();
	gFC = true;
	document.getElementById('IG').style.display = "none";
}

function regionClick()
{
	validate();
	rFC = true;
	document.getElementById('IR').style.display = "none";
}

function countryClick()
{
	validate();
	cFC = true;
	document.getElementById('IC').style.display = "none";
}

function checkSirName()
{
	sirName = document.getElementById('SirName').value;

	if(sirName.match(correctSirName))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function checkFullName()
{
	fullName = document.getElementById('FullName').value;
	
	if(fullName.match(correctFullName))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function checkEMail()
{
	eMail = document.getElementById('Email').value;
	
	if(eMail.match(correctEmail))
	{
		return true;
	}
	else
	{
		return false ;
	}
}

function checkPassword()
{
	password = document.getElementById('Password').value;
	
	if(password.match(correctPassword))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function checkConfirmPassword()
{
	password = document.getElementById('Password').value;
	var cp = document.getElementById('ConfirmPassword').value;
	
	if(cp === password)
	{
		if(checkPassword())
		{
			document.getElementById('ICP').style.display="none";
			return true;
		}
	}
	else
	{
		return false;
	}
}

function checkDateOfBirth()
{
	DOB = new Date(document.getElementById('DOB').value);
	var TD = new Date();
	var d = TD.getTime() - DOB.getTime();
	console.log(d)
	
	if(!DOB.getDate() || d<0 || d>3745162252123)
	{
		return false;
	}	
	else
	{
		return true;
	}
}

function checkGender()
{
	if(document.getElementById('Male').checked)
	{
		return "M";
	}
	else if(document.getElementById('Female').checked)
	{
		return "F";
	}
	else
	{
		return false;
	}
}

function checkRegion()
{
	region = document.getElementById('Region').value;
	switch(region)
	{
		case "Select Region":	document.getElementById('Country').innerHTML = "<option>Select Region First</option>";
								Asia = false;
								return false;
		case "Notrh America":
		case "South America":
		case "Australia":
		case "Antartica":
		case "Europe":
		case "Africa":			document.getElementById('Country').innerHTML = "<option>No Countries Avaliable</option>";
								Asia = false;
								return true;
		case "Asia":			if(Asia==false){
								document.getElementById('Country').innerHTML = "<option>Select Country</option><option>Afghanistan</option><option>Bangladesh</option><option>Bhutan</option><option>India</option><option>Maldives</option><option>Nepal</option><option>Pakistan</option><option>Srilanka</option>";Asia=true;
								return true;}
	}
}

function checkCountry()
{
	if(Asia==true)
	{
		country = document.getElementById('Country').value;
		if(country.match("Select Country") && cFC == true)
		{
			document.getElementById('IC').style.display = "block";
			return false;
		}
		else
		{
			return true;
		}
	}
	else
	{
		document.getElementById('IC').style.display = "none";
		return true;
	}
}

function validate()
{
	document.getElementById('False').style.display="none";
	var allPass = true;

	var a = checkSirName();
	if(a==false && sNFC == true)
	{
		document.getElementById('ISN').style.display = "block";
		allPass = false;
	}
	
	var b = checkFullName();
	if(b==false && fNFC == true)
	{
		document.getElementById('IFN').style.display = "block";
		allPass = false;
	}
	
	var c = checkEMail();
	if(c==false && eMFC == true)
	{
		document.getElementById('IEM').style.display = "block";
		allPass = false;
	}
	
	var d = checkPassword();
	if(d==false && pFC==true)
	{
		document.getElementById('IP').style.display = "block";
		allPass = false;
	}
	
	var e = checkConfirmPassword();
	if(e==false && cPFC==true)
	{
		document.getElementById('ICP').style.display = "block";
		allPass = false;
	}
	
	var f = checkDateOfBirth()
	if(f==false && dOBFC==true)
	{
		document.getElementById('IDOB').style.display = "block";
		allPass = false;
	}
	
	var g = checkGender()
	if(g==false && gFC==true)
	{
		document.getElementById('IG').style.display = "block";
		allPass = false;
	}
	
	var h = checkRegion()
	if(h==false && rFC==true)
	{
		document.getElementById('IR').style.display = "block";
		allPass = false;
	}
	
	var i = checkCountry()
	if(i==false && cFC==true)
	{
		document.getElementById('IC').style.display = "block";
		allPass = false;
	}
	
	return allPass;
}

function submit()
{
	sNFC  = true;
	fNFC  = true;
	eMFC  = true;
	pFC   = true;
	cPFC  = true;
	dOBFC = true;
	gFC   = true;
	rFC   = true;
	cFC   = true;
	
	if(!validate())
	{
		document.getElementById('False').style.display="block";
	}
	else
	{
		alert("All Valid");
	}
}
