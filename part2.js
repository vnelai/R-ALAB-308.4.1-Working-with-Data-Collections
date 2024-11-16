//Part 2: Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.
let numberOfColumns;


/*Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.*/

function csvFormat(cvsData) {
    const rows = cvsData.split("\n"); //Split CSV data into rows
    const headers = rows[0].split(","); //Gather headers from first row into one array (This will dynamically split the number of columns)
    const numberOfColumns = headers.length; // The number of columns is equal to header length
    const arrayData = []; //Initialize empty array in which object will be added
    
    arrayData.push(headers); //Push headers into main array

    //Starting from second row, loop through the rows in order to split into cells and add to main array
    for (let i = 1; i <rows.length; i++) {
        const cells = rows[i].split(","); //Split rows into cells (excluding header row)
        if (cells.length === numberOfColumns) { //Make sure the number of cells is the same as number of columns
            arrayData.push(cells); //Push the cells into the main array
        }
    }

    console.log(arrayData); //Print main array result
}

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
csvFormat(csvData);