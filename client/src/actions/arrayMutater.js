function doubleNShuffle (array){
	return shuffle(array.concat(array));
}

function shuffle (array) {

    for (var i = array.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = array[randomIndex]; 
         
        array[randomIndex] = array[i]; 
        array[i] = itemAtIndex;
    }
    return array;
}

//n = numbers of sets to generate
function populateArray (oneSet, n){

	// return doubleNShuffle(oneSet);
	var gamePieces = oneSet;
	console.log(`oneSet length: ${oneSet.length}`)
	for (let i = 0; i < n-1; i++) {
		gamePieces = gamePieces.concat(oneSet);
	}
    console.log(gamePieces);
	return shuffle(gamePieces);
}

export {
	doubleNShuffle,
	shuffle,
	populateArray
}