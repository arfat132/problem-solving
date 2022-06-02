// Problem-4

let names= ['Ayesha', 'Amal', 'Apon', 'Arfat', 'Alia', 'Ayman', 'Alisa'];

function oddFriend(names){
    if (!Array.isArray(names)) {
        return 'Please enter an array';
    }
    let oddName = [];
    for(let i = 1; i < names.length; i++){
        let element = names[i].length;
        if (element % 2 != 0){    
        oddName.push(names[i]);
        break;
        }  
    }
  return oddName[0];
}
console.log(oddFriend(['abc', 'abcd', 'abcde']));