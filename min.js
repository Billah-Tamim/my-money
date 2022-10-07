

document.getElementById('calculate').addEventListener('click',function(){
    const income = document.getElementById('income');
    let incomeValue =  parseFloat(income.value);
    const food = document.getElementById('food');
    let foodValue =  parseFloat(food.value);
    const rent = document.getElementById('rent');
    let rentValue =  parseFloat(rent.value);
    const clothes = document.getElementById('clothes');
    let clothesValue =  parseFloat(clothes.value);
    if(isNaN(clothesValue)){
        clothesValue = 0;
    }
    if(isNaN(rentValue)){
        rentValue = 0;
    }
    if(isNaN(foodValue)){
        foodValue = 0;
    }
    if(isNaN(incomeValue)){
        incomeValue = 0;
    }
    const totalExpense = foodValue + rentValue + clothesValue ;
    const balance = incomeValue - totalExpense;

    const expenseBox = document.getElementById('expense-box');
    const balanceBox = document.getElementById('balance-box');
    const error = document.getElementById('error');
    if(incomeValue>= totalExpense){
        expenseBox.innerText = totalExpense;
        balanceBox.innerText = balance;
        error.style.display = 'none';

    }
    else{
        expenseBox.innerText = 00;
        balanceBox.innerText = 00;
        error.style.display = 'block';
    }
   
    
})

document.getElementById('save-button').addEventListener('click', function(){
    const save = document.getElementById('save');
    const saveValue = parseFloat(save.value);
    const balanceBox = document.getElementById('balance-box');
    const balanceBoxValue = parseFloat(balanceBox.innerText);
    const savingBox = document.getElementById('saving-box');
    const remainingBox = document.getElementById('remaining-box');
    if(balanceBoxValue>0){
        const saving = (balanceBoxValue * saveValue) / 100;
        const warning = document.getElementById('warning');

        if(saving> balanceBoxValue){
            warning.style.display = 'block';
            savingBox.innerText = 0;
            remainingBox.innerText = 0;
        }
        else{
            savingBox.innerText = saving;
            const remains = balanceBoxValue - saving;
            remainingBox.innerText = remains;
            warning.style.display = 'none';
        }
        
        
    }
    else{
        savingBox.innerText = 00;
        remainingBox.innerText = 00;
    }
})