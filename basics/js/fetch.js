// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// Get instantly
// Get delayed
// Get rejected

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    // gets data from URL
    fetch(url)
        // Converts data to JSON Object
        .then(response => response.json())
        // Displays JSON Object
        .then(json => console.log(json))
}