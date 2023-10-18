

for (let i = 0; i <= 10; i++) {
    console.log(i);
  }


  let m = 0;
  while (m <= 10) {
    console.log(m);
    m++;
  }


  let n = 0;
do {
  console.log(n);
  n++;
} while (n <= 10);

for (let i = 0; i < 5; i++) {
    
    console.log("Se va repeta de 5 ori.");
  }


const array = [5, 9, 11, 13, 66, 45,'hey'];
  

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const text = "Outside is beautiful";

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

const array1 = [5, 6, 7, 8];
console.log(array1.map((x) => x + 2));


const arr =[1,2,3,4,5,6,7,8,9]
console.log(arr.map((item, index) =>{
    return{
        count: item,
        index: index

    }
}))


const words = ['red', 'white', 'blue', 'green' ];
const text1 = words.filter((word) => word.length > 1);
console.log(text1);


const flowers = ['bees', 'butterfly', 'white butterfly', 'flower', 'roses'];
console.log('indexOf',flowers.indexOf('flower'));


const array2 = [ 1 , 3 , 56, 78];
const idx = array2.findIndex((item) => {
return item > 4
})
console.log(idx)


const array3 = (Value) => Value < 74;
const array4 = [78, 30, 9, 29, 15, 19];
console.log(array4.every(array3));


const array5 = [[1, 2], 3, [4, 5]]
console.log('flat', array5.flat());


const array6 = [1, 2, 3, 4, 5]
array6.forEach((item) => {
    console.log('item',item)
})

const array7 = [7, 56, 8, 178, 444];
const found = array7.find((element) => element > 10);

console.log('find element',found);

const array8 = [7, 3, 7, 90, 23];
const array9 = [56, 23, 8, 178, 444];
const array10 = array9.concat(array8)

console.log('concatinarea', array10)

const array11 = [7, 3, 7, 90, 23];
const array12 = [56, 23, 8, 178, 444];
const array13 = [...array11, ...array12]
console.log('concatinarea1', array13)

const array14 = [23, 9867, 6, 34, 5];
console.log('includes', array14.includes(2))