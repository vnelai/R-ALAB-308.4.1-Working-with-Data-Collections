//Part 4: Sorting and Manipulating Data



// Using array methods, accomplish the following tasks, in order upon the result of Part 3:
 
//Result of Part3
let part3Result = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '98', name: 'Bill', occupation: 'Doctor’s Assistant', age: '26'}
  ];

// 1. Remove the last element from the sorted array.
part3Result.pop();
console.log(part3Result);

// 2. Insert the following object at index 1:
//{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
part3Result.splice(1,0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(part3Result);

//3. Add the following object to the end of the array:
//{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
part3Result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log("The final result of the manipulated data is: ", part3Result);


//4. Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
//This calculation should be accomplished using a loop.
let sumOfAges = 0; //Define sumOfAges variable which will include the sum of all ages, start it with sum of 0
let numberOfPeople = part3Result.length //Define numberOfPeople variable which is given by the total number of elements in array

//Loop through array elements and add the ages into the sumOfAges
for (let i = 0; i < part3Result.length; i++) {
    sumOfAges += parseInt(part3Result[i].age); //convert age string into age integer
}

//calculate the average age of the group
let averageAge = (sumOfAges / numberOfPeople).toFixed(2); 


console.log(`The average age of the group is ${averageAge}`);
