// Simulate fetching data from an API or performing an asynchronous operation
function getData(callback) {
    // Simulate a delay to make it more realistic
    setTimeout(() => {
      const data = [      { name: 'MJ', age: 25 },      { name: 'Vic', age: 30 },      { name: 'Francine', age: 20 }    ];
      callback(data);
    }, 1000); // Delay for 1 second
  }
  
  // Manipulate the received data
  function manipulateData(data, callback) {
    // Sort the data by age in descending order
    const sortedData = data.sort((a, b) => b.age - a.age);
  
    // Invoke the callback function with the sorted data
    callback(sortedData);
  }
  
  // Display the manipulated data
  function displayData(data) {
    console.log('Manipulated data:', data);
  }
  
  // Chain the functions together
  getData((data) => {
    manipulateData(data, (manipulatedData) => {
      displayData(manipulatedData);
    });
  });
  