const array = [1,2,3,4,5,6,7,8];

const result = array.filter(
    (element) => element % 2 == 0
);

const resultMap = array.map(
    (element) => element * 3
);

if (array.some((element) => element === 25)) {
    console.log('25 existe');
}

//console.log( array.indexOf(5));
array.splice(4, 1);
console.log(array);
compare = function(a,b) {return a - b;}
ƒ (a,b) {return a - b;}
const tab = [1,11,12,21,3,4,41,0,5];
newTab = tab.sort(compare);