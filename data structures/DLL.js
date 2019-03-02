class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DLL {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);
		if (this.length === 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}

		this.length += 1;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		const previousTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = previousTail.prev;
			this.tail.next = null;
			previousTail.prev = null;
		}

		this.length -= 1;
		return previousTail;
	}

	shift() {
		if (this.length === 0) return undefined;
		const previousHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = previousHead.next;
			this.head.prev = null;
			previousHead.next = null;
		}

		this.length -= 1;
		return previousHead;
	}

	unshift(val) {
		const node = new Node(val);
		if (this.length === 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}

		this.length += 1;
		return this;
	}

	get(index) {
		if (index < 0 || index > this.length) return null;
		const lengthHalf = Math.round(this.length / 2);
		let counter;
		let current;
		if (index <= lengthHalf) {
			counter = 0;
			current = this.head;
			while (counter != index) {
				counter += 1;
				current = current.next;
			}
			return current;
		} else if (index > lengthHalf) {
			counter = this.length - 1;
			current = this.tail;
			while (counter != index) {
				counter -= 1;
				current = current.prev;
			}
			return current;
		}
	}

	set(index, val) {
		const node = this.get(index);
		if (node === null) return false;
		node.val = val;
		return true;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		else if (index === 0) return !!this.unshift(val);
		else if (index === this.length) return !!this.push(val);

		const node = new Node(val);
		const currentNode = this.get(index);
		const previousNode = this.get(index - 1);

		currentNode.prev = node;
		node.next = currentNode;
		node.prev = previousNode;
		previousNode.next = node;

		this.length += 1;
		return true;
	}

	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length) return this.pop();

		const currentNode = this.get(index);
		const previousNode = currentNode.prev;
		const nextNode = currentNode.next;

		previousNode.next = nextNode;
		nextNode.prev = previousNode;

		currentNode.next = null;
		currentNode.prev = null;

		this.length -= 1;
		return currentNode;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			node.prev = next;

			prev = node;
			node = next;
		}
		return this;
	}
}

// Big O
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n) / O(n/2)
// Access - O(n) / O(n/2)
