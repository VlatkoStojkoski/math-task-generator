const gURL = 'https://corona.lmao.ninja/all', 
lURL = 'https://corona.lmao.ninja/countries/macedonia';

let global;
let uT;

fetch(gURL)
.then((response) => {
	return response.json();
})
.then((data) => {
	global=data;
	uT=new Date(global.updated);
	let updateTime;
	updateTime=`Updated on ${uT.getDate()}.${(uT.getMonth()+1)} ${uT.getHours()}:${uT.getMinutes()}`;
	const updateSpan=document.getElementById('updateTime'),
		  cases=document.getElementById('globalCases'),
		  active=document.getElementById('globalActive'),
		  recovered=document.getElementById('globalRecovered'),
		  dead=document.getElementById('globalDead');
	updateSpan.innerHTML=updateTime;
	cases.innerHTML=global.cases;
	active.innerHTML=global.cases - global.deaths - global.recovered;
	recovered.innerHTML=global.recovered;
	dead.innerHTML=global.deaths;
});

let local;

fetch(lURL, {})
.then((response) => {
	return response.json();
}).then((data) => {
	local = data;
	const updateSpan=document.getElementById('updateTime'),
		  cases=document.getElementById('localCases'),
		  active=document.getElementById('localActive'),
		  recovered=document.getElementById('localRecovered'),
		  lNew=document.getElementById('localNew'),
		  dead=document.getElementById('localDead'),
		  critical=document.getElementById('localCritical');
	cases.innerHTML=local.cases;
	active.innerHTML=local.cases - local.deaths - local.recovered;
	recovered.innerHTML=local.recovered;
	lNew.innerHTML=`+${local.todayCases}`;
	dead.innerHTML=local.deaths;
	critical.innerHTML=local.critical;
});