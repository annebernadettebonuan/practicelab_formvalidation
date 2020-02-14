function createDegree(name, id)
{
  return {
    name: name,
    id: id,
  };
}

function createMajor(name, id, degree)
{
  return {
    name: name,
    id: id,
    degree: degree,
  };
}

function createYear(name, id)
{
  return {
    name: name,
    id: id,
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

function addOptions(select, options)
{
  console.log(select, options)
  options.forEach(function(option)
  {
    select.options.add(new Option(option.name, option.id));
  });
}

var degreeSelect = document.getElementById('degree-select');
var majorSelect = document.getElementById('major-select');

var degrees = [
  createDegree('Computer Science', 'CS'),
  createDegree('Information Systems', 'IS'),
  createDegree('Information Technology', 'IT'),
];

var majors = [
  createMajor('Core Computer Science', 'coreCS', 'CS'),
  createMajor('Game Development', 'gameDev', 'CS'),
  createMajor('Data Science', 'dataSci', 'CS'),
  createMajor('Business Analytics', 'bAnalytics', 'IS'),
  createMajor('Network and Security', 'netSec', 'IT'),
  createMajor('Web and Mobile App Development', 'webApp', 'IT'),
  createMajor('Robotics', 'robotics', 'IT')
];

function updateMajors()
{
  var selectedDegree = degreeSelect.value;
  var options = majors.filter(function(degree)
  {
    return degree.degree === selectedDegree;
  });
  
  removeOptions(majorSelect);
  addOptions(majorSelect, options);
}

addOptions(degreeSelect, degrees);t




function changePage()
{
    var originalhtml = document.getElementById('changingcontainer').innerHTML;
    document.getElementById('changingcontainer').innerHTML = '<div id = "landing-container"><div id = "landing-elements"><img src="images/ustseal.png" class = "ustseal"><h1 class ="ust-landing"> University of Santo Tomas </h1><h2 class ="app-landing"> Application for Graduation </h2><div class="button-landing"><a class="apply-button" onclick="unDo()">Apply</a></div></div></div>';
}

function unDo()
{
    document.getElementById('changingcontainer').innerHTML = changePage().originalhtml;
}