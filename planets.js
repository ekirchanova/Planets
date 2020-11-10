const url = 'https://swapi.dev/api/planets/';

async function getInfo(url)
{
  let response = await fetch(url);
  let info = await response.json();
  return info;
}

function addNewPlanet(planet)
{
  let div = document.createElement('div');
  div.className = "planet";
  div.id = planet.name;
  div.innerHTML = `<p class = "name_planet" id = ${planet.name}>Имя планеты: ${planet.name} </p> </br> 
  <ul>
  <li class = "name_propety" id = ${planet.name}>Период вращения: ${planet.rotation_period} </li> 
  <li class = "name_propety" id = ${planet.name}>Период орбитального вращения: ${planet.orbital_period} </li> 
  <li class = "name_propety" id = ${planet.name}>Диаметр: ${planet.diameter} </li> 
  <li class = "name_propety" id = ${planet.name}>Климат: ${planet.climate} </li> 
  <li class = "name_propety" id = ${planet.name}>Гравитация: ${planet.gravity} </li> 
  <li class = "name_propety" id = ${planet.name}>Местность: ${planet.terrain} </li> 
  <li class = "name_propety" id = ${planet.name}>Вода на поверхности: ${planet.surface_water} </li>
  <li class = "name_propety" id = ${planet.name}>Население: ${planet.population} </li> 
  </ul></br> </br>`;

  document.body.append(div);
}
function writeInfo(planets,nameNeededPlanet){
  const neededPlanet=planets.find(planet =>planet.name==nameNeededPlanet);
  const residentsUrl = neededPlanet.residents;
  const rand = Math.floor( Math.random() * residentsUrl.length);
  const residentUrl = residentsUrl[rand];
  const resident = getInfo(residentUrl);
  resident.then(result =>{
    console.log(result);
  });
}
function handler(event){
  const id = event.target.id;
  planets.then(result=>{
    writeInfo(result.results,id);
  }
  )
}

function addAllPlanets(planets){
  const html = planets.map( element =>{
   addNewPlanet(element)
  });
}


const planets = getInfo(url);
planets.then(result =>{
  addAllPlanets(result.results);
}
)
document.addEventListener('click' , handler);