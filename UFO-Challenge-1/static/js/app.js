// From data.js
var tableData = data;

// Variable Declaration
var tbody = d3.select("tbody");

// Create a function to fill the table with data
function populateTable(tableData){
    // Loop through each object in the array
    data.forEach((dataRow) => { // use forEach function to loop through each object in the array
        var row = tbody.append("tr"); // add rows to the table 
        Object.values(dataRow).forEach((val) => {  // use forEach function to loop through each object in the array and find key-value pairs
            var cell = row.append("td"); // add cells to the table
            cell.text(val);
        });
    })
}
// Create a filter function
function filterDate(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filteredData = tableData;

    // Create a check for date
    if(date) {
        // Use a filter to provide a check for the date
        filteredData = filteredData.filter((row) => row.datetime === date);
    }
    // Populate the table with the filtered data
    populateTable(filterData);
}
// Handler function activated
d3.selectAll("#filter-btn").on("click", filterDate);

populateTable(tableData)