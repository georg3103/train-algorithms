const Queue = require('../Queue');

function wave(q1, q2) {
	const newQueue = new Queue();
	const iter = (acc, q1, q2) => {
		if (q1.getSize === 0 && q2.getSize === 0) return acc;

		if (q1.getSize !== 0) {
			acc.add(q1.remove());
		}

		if (q2.getSize !== 0) {
			acc.add(q2.remove());
		}

		return iter(acc, q1, q2);
	};

	const result = iter(newQueue, q1, q2);
	return result;
}

module.exports = wave;
