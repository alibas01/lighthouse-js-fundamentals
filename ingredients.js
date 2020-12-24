const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i = 0;
while(i < ingredients.length) {
  console.log(ingredients[i]);
  i ++;
}

// Write a for loop that prints out the contents of ingredients:

for(let item of ingredients) {
  console.log(item);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

let num = ingredients.length - 1;
while(num>=0) {
  console.log(ingredients[num]);
  num --;
}

for(let num=ingredients.length-1; num>=0; num--) {
  console.log(ingredients[num]);
}

