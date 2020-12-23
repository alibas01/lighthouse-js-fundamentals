

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations(x) {
  const y = [];
  for (let i=0; i<x.length; i++) {
    if ( x [ i ] [ 1 ] >= 20 && (x[i][2]==='school'|| x[i][2]==='community centre')) {
      y.push(x[i][0]);
    }
  }
  return y;
  // console.log(y);
}

console.log(chooseStations(stations));
// chooseStations(stations);


/*function chooseStations(stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if ( capacity>=20 ) {
      const type = station[2]
      if (type === 'school' || type === 'community centre') {
        goodStations.push(station[0]);
      }  
    }
  }
  return goodStations;
}*/