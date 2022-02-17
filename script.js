function add() {
    //     // get all input value
    const foodInput = document.getElementById('food-expense')
    const rentInput = document.getElementById('rent-expense')
    const clothinput = document.getElementById('cloth-expense')

    //    validate

    if ((foodInput.value != "" && foodInput.value > 0) && (rentInput.value != "" && rentInput.value > 0) && (clothinput.value != "" && clothinput.value > 0)) {
        const foodAmount = parseFloat(foodInput.value)
        const rentAmount = parseFloat(rentInput.value)
        const clothAmount = parseFloat(clothinput.value)


        let sumOfExpenses = foodAmount + rentAmount + clothAmount
        console.log(sumOfExpenses);
        document.getElementById('total-expenses').innerText = sumOfExpenses
        document.getElementById('err1').innerText = ''
        return sumOfExpenses




    } else {

        document.getElementById('err1').innerText = 'err'
    }


}



function calc() {

    let sumOfExpenses = add()

    let totalBalanceInput = document.getElementById('total-income').value
    let totalBalanceAmount = parseFloat(totalBalanceInput)


    if (totalBalanceInput != '' && totalBalanceInput > 0) {

        let remainingBalance = totalBalanceAmount - sumOfExpenses;
        if (totalBalanceAmount < sumOfExpenses) {
            alert('Money expenses can not be bigger than income')
            document.getElementById('balance').innerText = 0
            document.getElementById('total-expenses').innerText = 0
            document.getElementById('err1').innerText = 'err'

        } else {

            document.getElementById('balance').innerText = remainingBalance
                //  return remainingBalance
            document.getElementById('err1').innerText = ''
        }
        document.getElementById('err').innerText = ''

    } else {
        document.getElementById('err').innerText = 'err'
    }


    return totalBalanceAmount






}

// 


//







function calculatePercent() {
    // calulate percentence 
    let totalBalanceAmount = calc()
    console.log(totalBalanceAmount);
    let InputParcent = document.getElementById('save-parcent').value
    if (InputParcent > 0 && InputParcent != '') {
        InputParcentValue = parseFloat(InputParcent)
        let savePercentVal = InputParcentValue / 100
        console.log(savePercentVal);
        let savings = savePercentVal * totalBalanceAmount
        document.getElementById('saving-amount').innerText = savings
        console.log('ok');



        let sumOfExpenses = add()
        let remainingBalance = totalBalanceAmount - sumOfExpenses
        let remainSavings = remainingBalance - savings
        document.getElementById('remain-amount').innerText = remainSavings
        document.getElementById('err2').innerText = ''

    } else {
        document.getElementById('err2').innerText = 'err'
    }





}