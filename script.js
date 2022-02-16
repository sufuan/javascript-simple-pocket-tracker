document.getElementById('calculate-btn').addEventListener('click', function() {


    const foodInput = document.getElementById('food-expense')
    const foodText = foodInput.value;
    const foodAmount = parseFloat(foodText)


    const rentInput = document.getElementById('rent-expense')
    const rentText = rentInput.value;
    const rentAmount = parseFloat(rentText)
    console.log(rentAmount);

    const clothInput = document.getElementById('cloth-expense')
    const clothText = clothInput.value;
    const clothAmount = parseFloat(clothText)

    // add total
    let sumOfExpenses = foodAmount + rentAmount + clothAmount
    console.log(sumOfExpenses);

    // update balance 

    const totalBalance = document.getElementById('total-income')
    totalBalanceText = totalBalance.value
    totalBalanceAmount = parseFloat(totalBalanceText)


    const newBalance = totalBalanceAmount - sumOfExpenses;
    console.log(newBalance);
    document.getElementById('total-expenses').innerText = sumOfExpenses
    document.getElementById('balance').innerText = newBalance

})