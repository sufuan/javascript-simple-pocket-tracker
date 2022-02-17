function add() {
    // get all input value 
    const foodAmount = parseFloat(document.getElementById('food-expense').value)
    const rentAmount = parseFloat(document.getElementById('rent-expense').value)
    const clothAmount = parseFloat(document.getElementById('cloth-expense').value)
        // add total
    let sumOfExpenses = foodAmount + rentAmount + clothAmount
    return sumOfExpenses
}


function calc() {

    let sumOfExpenses = add()

    // update balance 

    totalBalanceAmount = parseFloat(document.getElementById('total-income').value)
    const remainingBalance = totalBalanceAmount - sumOfExpenses;

    document.getElementById('total-expenses').innerText = sumOfExpenses
    document.getElementById('balance').innerText = remainingBalance
        // return newBalance;
    return remainingBalance
}

// 


function calculatePercent() {
    // calulate percentence 
    let saveParcent = parseFloat(document.getElementById('save-parcent').value)
    let savePercentVal = saveParcent / 100
    let savings = savePercentVal * totalBalanceAmount
    document.getElementById('saving-amount').innerText = savings

    // calculate remaining saving 
    let remainingBalance = calc()
    let remainSavings = remainingBalance - savings
    document.getElementById('remain-amount').innerText = remainSavings


}