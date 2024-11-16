// Part 3: Transforming Data

/*Implement the following:
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.*/


function csvFormat(cvsData) {
    const rows = cvsData.split("\n"); //Split CSV data into rows
    const headers = rows[0].split(","); //Gather headers from first row into one array (This will dynamically split the number of columns)
    const numberOfColumns = headers.length; // The number of columns is equal to header length
    const arrayData = []; //Initialize empty array in which object will be added


     //Starting from second row, loop through the rows in order to split into cells
     for (let i = 1; i <rows.length; i++) {
        const cells = rows[i].split(","); //Split rows into cells (excluding header row)
        if (cells.length === numberOfColumns) { //Make sure the number of cells is the same as number of columns
           const dataObject = {}; ////Each row will be in its own object, create empty object for each row
            
            //Connect each cell to its relative header/key
           for (let j = 0; j <numberOfColumns; j++) {
            const key = headers[j].toLowerCase(); //Convert these keys to all lowercase letters for consistency
            dataObject[key] = cells[j]; //Assign the cells as values to the header keys
           }
           
           arrayData.push(dataObject); //Push the completed objects into the main data array 
        }
    }
    console.log(arrayData); //Print main array result
}

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
csvFormat(csvData);