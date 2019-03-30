class HashTable {
	constructor(size = 100) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let LIMITER = 31;
		for (let i = 0; i < Math.min(key.length, 100); i += 1) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * LIMITER + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		// make key value pair
		const pair = [ key, value ];
		// hash the key
		const index = this._hash(key);
		// check if it is the first pair
		if (this.keyMap[index] !== []) {
			this.keyMap[index] = [];
		}
		// push pair
		this.keyMap[index].push(pair);
	}

	get(key) {
		// get key index in key map
		const index = this._hash(key);
		// get array, that stores key
		const slot = this.keyMap[index];
		if (slot) {
			for (let i = 0; i < slot.length; i += 1) {
				const slotKey = slot[i][0];
				if (key === slotKey) {
					return slot[i];
				}
			}
		}
		return undefined;
	}

	keys() {
		let result = [];
		for (let i = 0; i < this.keyMap.length; i += 1) {
			const slot = this.keyMap[i];
			if (slot) {
				for (let j = 0; j < slot.length; j += 1) {
					// not sufficient condition
					if (!result.includes(slot[j][0])) {
						result.push(slot[j][0]);
					}
				}
			}
		}
		return result;
	}

	values() {
		let result = [];
		for (let i = 0; i < this.keyMap.length; i += 1) {
			const slot = this.keyMap[i];
			if (slot) {
				for (let j = 0; j < slot.length; j += 1) {
					if (!result.includes(slot[j][1])) {
						result.push(slot[j][1]);
					}
				}
			}
		}
		return result;
	}
}

// Big O
// Insertion - O(1)
// Removal - O(1)
// Access - O(1)
// Recap
// main thing - distribution + avoiding collisions
