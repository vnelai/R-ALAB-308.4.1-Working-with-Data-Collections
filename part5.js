// Part 5: Full Circle

// As a final task, transform the final set of data back into CSV format.

// Define the result from Part 4 of lab into a variable
let part4Result = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
  ];

//Collect the names of the keys we will add to our final CSV and assign to variable headerCSV
let headerCSV = Object.keys(part4Result[0]);

// Declare the valuesCSV which will include all the values of the objects
let valuesCSV = [];


//Loop through array to collect the values and push threm in valuesCSV array
for (let i = 0; i < part4Result.length; i++) {
     values = Object.values(part4Result[i]);
     valuesCSV.push(values);
}

//for the finalCSV we will combine the header and the values and ensure the format is on a single line
let finalCSV = headerCSV + '\\n,' + valuesCSV.join('\\n');
console.log(finalCSV);