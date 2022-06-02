// Problem 3

function picnicBudget(members){
    if(typeof members != 'number'){
        return 'Please enter a number';
    }

    let firstTicketPrice = 5000;
    let secondTicketPrice = 4000;
    let thirdTicketPrice = 3000;

    if(members <= 100){
        const memberscount = members * firstTicketPrice;
        return memberscount;
    }
    else if(members <= 200){
        const firstCategory = 100 * firstTicketPrice;
        const firstRestMembers = members - 100;
        const secondCategory = firstRestMembers * secondTicketPrice;
        const totalBudget = firstCategory + secondCategory;
        return totalBudget;
    }
    else{
        const firstCategory = 100 * firstTicketPrice;
        const secondCategory = 100 * secondTicketPrice;
        const secondRestMembers = members - 200;
        const thirdCategory = secondRestMembers * thirdTicketPrice;
        const totalBudgetPrice = firstCategory + secondCategory + thirdCategory;
        return totalBudgetPrice;
    }
    
}
console.log(picnicBudget(250));