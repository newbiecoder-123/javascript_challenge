// From data.js
var tableData = data;

// We declare the variable by using let function
// Select the table body
var tbody = d3.select("tbody"); 

// Create a function to fill in the data
function populateDate(data){
    // Start By Clearing Existing Data
    tbody.html("");
    // Use forEach function to iterate through EACH object in the array
    data.forEach((dataRow) => {
        // Add rows to the table
        var row = tbody.append("tr");
        // Using D3 object.values and forEach function to iterate and grab values and insert into our new rows
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    })
}

// When the filter table button is selected, then this function is invoked
function buttonFilter(){
    // This prevents the page from refreshing
    d3.event.preventDefault();
    // Obtain the values
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    // Data check for the date
    if(date) {
        // Filter the data to match what we are looking for
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    populateDate(filterData);
}
// Event handler function that is being invoked
d3.selectAll("#filter-btn").on("click", buttonFilter);

// Call the function to fill in the data
populateDate(tableData);