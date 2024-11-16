// R-ALAB 308.4.1: 
// Working with Data Collections


// Part 1: Refactoring Old Code

// Old Code for CSV string processing 

// function csvFormat(csvData) {
//     const rows = csvData.split("\n"); //Split CSV data into rows
//     rows.forEach(row => {
//         const cells = row.split(','); //Split CSV data into cells
//         console.log(cells);
//     });
// }


// let csvData1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// csvFormat(csvData1);


// Alternate version of code using arrays and objects
function cvsFormat(cvsData) {
    const rows = cvsData.split("\n"); //Split CSV data into rows
    const headers = rows[0].split(","); //Gather headers from first row into one array
    const arrayData = []; 

    for (let i = 1; i <rows.length; i++) {
        const cells = rows[i].split(","); //Split rows into cells (excluding header row)
        const dataObjects = {}; //Each row will be in its own object, create empty object for each row
        for (j = 0; j < headers.length; j++) {
            dataObjects[headers[j]] = cells [j]; //Assign headers to related cells, creating a key: value pairs
        }
        arrayData.push(dataObjects); //Push the completed objects into the main data array 
    }
    console.log(arrayData); //Print array with objects
}

// Test code
let csvData3 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
cvsFormat(csvData3);