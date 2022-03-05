Array.prototype.fillArrayRandom = function (n, min, max) {
	this.fill(0);
	this.forEach((element, index, array) => (array[index] = Array(n).fillRandom(min, max)));

	return this;
};

Array.prototype.fillRandom = function (min, max) {
	this.fill(0);
	this.forEach((element, index, array) => (array[index] = Math.round(min + Math.random() * (max - min))));

	return this;
};

Array.prototype.multiplyArray = function (array) {
	var length = this.length > array.length ? this.length : array.length;
	var temp = new Array(length);
	for (var i = 0; i < length; i++) {
		temp[i] = this[i] * array[i];
	}

	return temp;
};

Array.prototype.getMax = function () {
	var result = {};
	result.unique = true;
	result.value = null;
	result.index = null;

	for (var i = 0; i < this.length; i++) {
		if (result.value == null) {
			result.index = i;
			result.value = this[i];
		} else {
			if (result.value < this[i]) {
				result.index = i;
				result.value = this[i];
			} else {
				if (this[i] === result.value) {
					result.unique = false;
				}
			}
		}
	}

	return result;
};

Array.prototype.sumArray = function (array) {
	var length = this.length > array.length ? this.length : array.length;
	var temp = new Array(length);
	for (var i = 0; i < length; i++) {
		temp[i] = this[i] + array[i];
	}

	return temp;
};

Array.prototype.differenceArray = function (array) {
	var length = this.length > array.length ? this.length : array.length;
	var temp = new Array(length);
	for (var i = 0; i < length; i++) {
		temp[i] = this[i] - array[i];
	}

	return temp;
};
