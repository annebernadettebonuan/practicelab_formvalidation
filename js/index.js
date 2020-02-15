function createEra(name, id)
{
  return{
    name: name,
    id: id
  };
}

function createTheme(name, id, color, url)
{
  return{
    name: name,
    id: id,
    color: color,
    url: url
  };
}

function removeOptions(select)
{
  while (select.options.length > 1)
  {                
    select.remove(1);
  }
  select.value = "";
}

var picurl;

function addOptions(select, options)
{
  console.log(select, options)
  options.forEach(function(option)
    {
      picurl = option.url;
      select.options.add(new Option(option.name, option.id, option.url));
    });
}

var eraSelect = document.getElementById('era-select');
var themeSelect = document.getElementById('theme-select');

var era = [
  createEra('Summer Nights', 'summer-nights'),
  createEra('Likey', 'likey'),
  createEra('Feel Special', 'feel-special'),
];

var themes = [
  createTheme('Blue Summer Nights', 'blue-summer-nights', 'summer-nights', '../images/fancy.png'),
  createTheme('Yellow Summer Nights', 'yellow-summer-nights', 'summer-nights', '../images/fancy.png'),
  createTheme('Brown Summer Nights', 'brown-summer-nights', 'summer-nights', '../images/fancy.png'),
  
  createTheme('Blue Likey', 'blue-likey', 'likey', '../images/twicetagram.png'),
  createTheme('Yellow Likey', 'yellow-likey', 'likey', '../images/twicetagram.png'),
  createTheme('Brown Likey', 'brown-likey', 'likey', '../images/twicetagram.png'),

  createTheme('Blue Feel Special', 'blue-fs', 'feel-special', '../images/feelspecial.png'),
  createTheme('Yellow Feel Special', 'yellow-fs', 'feel-special', '../images/feelspecial.png'),
  createTheme('Brown Feel Special', 'brown-fs', 'feel-special', '../images/feelspecial.png')
];

function updatePicture()
{
  var selectedEra = eraSelect.value;
  var options = themes.filter(function(era)
    {
      return era.color === selectedEra;
    });
  
  removeOptions(themeSelect);
  addOptions(themeSelect, options);
  document.getElementById('image').innerHTML = "";
}

addOptions(eraSelect, era);

//bill function
function billingFunction()
{
  if(document.getElementById('togglecheck').checked)
     {
        var snum = document.getElementById('mailnum').value;
        var sname = document.getElementById('mailname').value;
        var city = document.getElementById('mailcity').value;
        var province = document.getElementById('mailprovince').value;
        var zipcode = document.getElementById('mailzip').value;

        document.getElementById('billnum').value = snum;         
        document.getElementById('billname').value = sname;
        document.getElementById('billcity').value = city;
        document.getElementById('billprovince').value = province;
        document.getElementById('billzip').value = zipcode;
     }
  else
    {
      document.getElementById('billnum').value = "";         
      document.getElementById('billname').value = "";
      document.getElementById('billcity').value = "";
      document.getElementById('billprovince').value = "";
      document.getElementById('billzip').value = "";
    }
}


/////theme-selector

function updatePrice()
{
  document.getElementById('image').style.backgroundImage = 'url('+picurl+')';

  switch(picurl)
  {
    case '../images/fancy.png':
      document.getElementById('price').style.fontSize = '25px';
      document.getElementById('price').style.paddingLeft = '5px';
      document.getElementById('price').innerHTML = "Price: 100PHP";
      break;
    case '../images/twicetagram.png':
      document.getElementById('price').innerHTML = "Price: 300PHP";
      break;
    case '../images/feelspecial.png':
      document.getElementById('price').innerHTML = "Price: 200PHP";
      break;
  }
}

function changePic()
{
  updatePicture();
  updatePrice();
}

///modal

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

function getModal(modal)
{
  let pass1 = document.getElementById('password1').value;
    let pass2 = document.getElementById('password2').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let uname = document.getElementById('username').value;
    let email1 = document.getElementById('email1').value;
    let email2 = document.getElementById('email2').value;
    let bday = document.getElementById('birthday').value;
    //mailadd
    let msnum = document.getElementById('mailnum').value;
    let msname = document.getElementById('mailname').value;
    let mcity = document.getElementById('mailcity').value;
    let mprovince = document.getElementById('mailprovince').value;
    let mzipcode = document.getElementById('mailzip').value;

    let mailadd = msnum + msname + mcity + mprovince + mzipcode;

    //billadd
    let bsnum = document.getElementById('billnum').value;
    let bsname = document.getElementById('billname').value;
    let bcity = document.getElementById('billcity').value;
    let bprovince = document.getElementById('billprovince').value;
    let bzipcode = document.getElementById('billzip').value;
    
    let billadd = bsnum + bsname + bcity + bprovince + bzipcode;
    
    var emailcheck;
    var pwordcheck;
    var namecheck;
    var bdaycheck;
    var unamecheck;
    var addresscheck;
    //address
    if(mailadd == "" || billadd == "")
    {
        document.getElementById('warning-address').innerHTML = 'Please enter your address.';
    }
    else
    {
        addresscheck = true;
    }
    //name
    if(fname == "" || lname == "")
    {
        document.getElementById('warning-info').innerHTML = 'Please enter your name.';
    }
    else
    {
        namecheck = true;
    }
    //bday
    if(bday == "")
    {
        document.getElementById('warning-bday').innerHTML = 'Please enter your birthday.';
    }
    else
    {
        bdaycheck = true;
    }
    //email
    if(email1 == "" || email2 == "")
    {
        document.getElementById('warning-email').innerHTML = 'Please enter a valid email.';
    }
    else
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(email1 === email2)
        {
          if(email1.match(mailformat))
          {
            document.getElementById('email1').focus();
            emailcheck = true;
          }
          else
          {
            document.getElementById('warning-email').innerHTML = "Please enter a valid email.";
          }
        }
        else
        {
            document.getElementById('warning-email').innerHTML = "Email does not match.";
            document.getElementById('email1').value = "";
            document.getElementById('email2').value = "";
        }
    }
    //username
    if(uname == "")
    {
       document.getElementById('warning-username').innerHTML = 'Please a valid username.';
    }
    else
    {
        if(uname.length <= 6)
        {
            document.getElementById('warning-username').innerHTML = 'Please a valid username.';
            document.getElementById('username').value = "";
        }
        else
        {
            unamecheck = true;
        }
    }
    //password
    if(pass1 == "" || pass2 == "")
    {
        document.getElementById('warning-password').innerHTML = 'Please enter a valid password.';
    }
    else
    {
        if(pass1 === pass2)
        {
            if(pass1 == fname || pass1 == lname || pass1 == uname) 
            {
                document.getElementById('warning-password').innerHTML = "Password cannot contain name. Please change your password.";
            }
            else
            {
                if(pass1.length > 8)
                {
                    pwordcheck = true;
                }
                else
                {
                    document.getElementById('warning-password').innerHTML = "Password cannot be less than 8 characters."
                }
            }
        }
        else
        {
            document.getElementById('warning-password').innerHTML = "Password does not match";
            document.getElementById('password1').value = "";
            document.getElementById('password2').value = "";
        }
    }
    if(emailcheck == true && pwordcheck == true && namecheck == true
    && bdaycheck == true && unamecheck == true && addresscheck == true)
    {
        document.getElementById('warning-username').innerHTML = "";
        document.getElementById('warning-email').innerHTML = "";
        document.getElementById('warning-info').innerHTML = "";
        document.getElementById('warning-address').innerHTML = "";
        document.getElementById('warning-password').innerHTML = "";
        document.getElementById('warning-bday').innerHTML = "";
        displayInfo();
    }
}

function displayInfo()
{
    //mailadd
    let msnum = " " + document.getElementById('mailnum').value;
    let msname = " " + document.getElementById('mailname').value;
    let mcity = " " + document.getElementById('mailcity').value;
    let mprovince = " " + document.getElementById('mailprovince').value;
    let mzipcode = " " + document.getElementById('mailzip').value;

    let mailadd = msnum + msname + mcity + mprovince + mzipcode;

    //billadd
    let bsnum = " " + document.getElementById('billnum').value;
    let bsname = " " + document.getElementById('billname').value;
    let bcity = " " + document.getElementById('billcity').value;
    let bprovince = " " + document.getElementById('billprovince').value;
    let bzipcode = " " + document.getElementById('billzip').value;

    let billadd = bsnum + bsname + bcity + bprovince + bzipcode;

    //info
    let fname = " " + document.getElementById('fname').value;
    let lname = " " + document.getElementById('lname').value;
    let mname = " " + document.getElementById('mname').value;
    let aname = " " + document.getElementById('auxname').value;
    
    let name = fname + mname + lname + aname;
    
    let uname = " " + document.getElementById('username').value;
    let email = " " + document.getElementById('email1').value;
    let bday = " " + document.getElementById('birthday').value;
    let sex = " " + document.getElementById('sex').value;
    let citizenship = " " + document.getElementById('citizenship').value;
    let pnum = " " + document.getElementById('number').value;

    document.getElementById('last-content-username').innerHTML = "<p id='last-content-username'>Username: <font color='red'>" + uname + "</font></p>";
    document.getElementById('last-content-email').innerHTML =  "<p id='last-content-email'>E-mail Addess:<font color='red'>" + email + "</font></p>";
    document.getElementById('last-content-name').innerHTML =  "<p id='last-content-name'>Name: <font color='red'>" + name + "</font></p>";
    document.getElementById('last-content-birthday').innerHTML =  "<p id='last-content-birthday'>Birthday:<font color='red'>" + bday + "</font></p>";
    document.getElementById('last-content-citizenship').innerHTML =  "<p id='last-content-citizenship'>Citizenship:<font color='red'>" + citizenship + "</font></p>";
    document.getElementById('last-content-sex').innerHTML =  "<p id='last-content-sex'>Sex:<font color='red'>" + sex + "</font></p>";
    document.getElementById('last-content-number').innerHTML =  "<p id='last-content-number'>Phone Number:<font color='red'>" + pnum + "</font></p>";
    document.getElementById('last-content-mailingaddress').innerHTML =  "<p id='last-content-mailingaddress'>Mailing Address:<font color='red'>" + mailadd + "</font></p>";
    document.getElementById('last-content-billingaddress').innerHTML =  "<p id='last-content-billingaddress'>Billing Address:<font color='red'>" + billadd + "</font></p>";

    modal.style.display = 'block';
}