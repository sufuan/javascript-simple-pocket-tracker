//   get total income
let totalIncome = parseFloat(document.getElementById('total-income').value)



// calculate totalExpense
let totalExpense = document.getElementById('calculate-btn').addEventListener('click', function() {
    //  get expenses input value 
    let foodExpense = parseFloat(document.getElementById('food-expense').value)
    let rentExpense = parseFloat(document.getElementById('rent-expense').value)
    let clothExpense = parseFloat(document.getElementById('cloth-expense').value)

    // add all expenses
    document.getElementById('total-expenses').innerText = foodExpense + rentExpense + clothExpense


    // calculate remaining balance
    const balance = totalIncome - totalExpense;
    console.log(typeof balance);
    const v = document.getElementById('remaining-balance')
    console.log(v);

})