const friendData = [{
		'name': 'Jonas',
		'photo': '../images/1.jpg',
		'scores': [4, 4, 2, 3, 2, 1, 1, 3, 4, 5]
	},{
		'name': 'Joseph',
		'photo': '../images/2.jpg',
		'scores': [5, 5, 5, 5, 3, 3, 3, 3, 4, 1]
	},{
		'name': 'Janet',
		'photo': '../images/3.jpg',
		'scores': [5, 3, 3, 2, 4, 2, 3, 3, 2, 4]
	},{
		'name': 'James',
		'photo': '../images/4.jpg',
		'scores': [3, 4, 5, 4, 1, 2, 1, 1, 3, 4]
	},{
		'name': 'Johnathan',
		'photo': '../images/5.jpg',
		'scores': [2, 1, 5, 1, 2, 1, 3, 2, 1, 1]
	},{
		'name': 'Jenny',
		'photo': '../images/6.jpg',
		'scores': [3, 4, 5, 4, 3, 5, 5, 4, 5, 4]
	},{
		'name': 'Jessica',
		'photo': '../images/7.jpg',
		'scores': [5, 4, 1, 1, 2, 3, 3, 2, 1, 3]
	}
];

const findClosestMatch = (data) => {
	// takes a user object with a scores array inside, returns the closest match.
	const {scores} = data.body;
	let minDifference = 100; // default starting value - any person will match higher
	let bestMatchIndex = -1;
	for(let i = 0; i < friendData.length; i++) { // consider friendData.forEach function here
		let difference = totalDifferenceInArrays(scores, friendData[i].scores);
		if (difference < minDifference) {
			minDifference = difference;
			bestMatchIndex = i;
		}
	}
	return friendData[bestMatchIndex];
}

function totalDifferenceInArrays (arrOne, arrTwo) {
	// expects two arrays of integers of equal length
	// sums the difference of each index position and returns that sum as an integer
	if (arrOne.length != arrTwo.length) {
		throw new Error('Arrays to compare must be identical in length.');
	}
	let totalDifference = 0;
	for(let i = 0; i < arrOne.length; i++) {
		totalDifference += Math.abs(arrOne[i] - arrTwo[i]);
	}
	return totalDifference;
}

module.exports = {
	findClosestMatch,
	friendData
};
