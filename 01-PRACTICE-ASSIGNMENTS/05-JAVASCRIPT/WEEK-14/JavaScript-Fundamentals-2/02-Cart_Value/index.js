// Function to calculate the total sum of all the prices within a cart ----->


function totalCartValue(...cart) {

    if (cart.length === 0){
      return 0;
    }

    const sum = cart.reduce((total, num1) => total + num1, 0);
    let statement = `the total cart value is: ${sum}`
    console.log(statement);
    return statement;
  }
  
totalCartValue(125, 20, 30)