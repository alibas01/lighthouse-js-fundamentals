function judgeVegetable(vegetables, metric) {
  let highest = 0;
  let name = "";
  for(let veg of vegetables) {
    if(veg[metric]>highest) {
      name = veg['submitter'];
      highest = veg[metric];
    }
  }
  return name;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));

