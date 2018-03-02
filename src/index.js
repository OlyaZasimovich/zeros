module.exports = function getZerosCount(number) {
	var counter = 0;
	for (var i=1; i<=number; i++) {
		var b = i;
		while(b >= 5 && b % 5 === 0) {
			b = b / 5;
			counter++;
		};
	};

	return counter;
}
