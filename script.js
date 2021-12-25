
// Filter out countries
// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
// 2.	Find the country containing the hightest number of characters in the countries array
// 3. Sort the countries by length of characters in the countries array
// 4.	Extract all the countries containing only four characters from the countries array and print it as array
// 5.	Extract all the countries containing two or more words from the countries array and print it as array
// 6.	Reverse the countries array and capitalize each country and stored it as an array.
// 7.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.





const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States'];


// step-1
function countryFind1(array) {

  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].includes("land")) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}
console.log(countryFind1(countries));



//get min/max value of arrays


// step-2
var lgth = 0;
var longest;

for (var i = 0; i < countries.length; i++) {
  if (countries[i].length > lgth) {
    var lgth = countries[i].length;
    longest = countries[i];

  }
}

console.log(longest);

//step 3
function countrySort(arr) {
  const sortCountry = arr.sort((a, b) => a.length - b.length);
  return sortCountry

}
console.log(countrySort(countries));

// step-4

function countryFind4(array) {

  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4)

      newArr.push(array[i]);

  }

  return newArr;
}

console.log(countryFind4(countries));

// step-5

function countryFind5(arr) {

  let step5 = []

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].includes(" ")) {

      step5.push(arr[i])
    }
  }
  return step5;
}

console.log(countryFind5(countries))

//step-6

function countryFind6(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }

  return array.reverse();
}
console.log(countryFind6(countries))


// step-7

function countryFind7(arr) {

  let step7 = []

  for (let i = 0; i < arr.length; i++) {

    if (!arr[i].includes("land")) {

      let str = arr[i] + "land"
      step7.push(str)
    }
  }
  return step7;
}
console.log(countryFind7(countries))







