// Problem 1

function anaToVori(ana){
    if(typeof ana != 'number'){
        return 'Please enter a number';
    }
    const vori = ana * 0.0625;
    return vori;
}
console.log(anaToVori(32));