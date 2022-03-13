'use strict'

//ф-я возвр-я индексы заглавных букв в строке
const j = "aaGhhT"

const captions = str => {
    let result = [];
    str
        .split('')
        .forEach(function (el, i) {
            if (el === el.toUpperCase()) result.push(i);
        });
    return result;
};

console.log(captions(j));

// =====================================


function sum(a) {
	let currentSum = a;

	function f(b) {
		currentSum += b;
		return f;
	};

	f.toString = function() {
		return currentSum;
	}

	return f;
}

alert(sum(1)(2)(3));

// ==================================

