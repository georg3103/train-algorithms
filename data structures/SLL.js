class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class SSL {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		if (val !== undefined) {
			const node = new Node(val);
			if (this.head === null) {
				this.head = node;
				this.tail = this.head;
			} else {
				this.tail.next = node;
				this.tail = node;
			}

			this.length += 1;
			return this;
		}
	}

	pop() {
		if (this.head === null) return undefined;
		let current = this.head;
		let previous = null;
		while (current) {
			previous = current;
			current = current.next;
		}
		this.tail = previous;
		this.tail.next = null;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		this.length -= 1;
		return current;
	}

	shift() {
		if (this.head === null) return undefined;
		const currentHead = this.head;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		} else this.head = this.head.next;

		this.length -= 1;
		return currentHead;
	}

	unshift(val) {
		const node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length += 1;
		return this;
	}

	get(index) {
		if (index < 0 || index > this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter != index) {
			counter += 1;
			current = current.next;
		}
		return current;
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

		node.next = currentNode;
		previousNode.next = node;

		this.length += 1;
		return true;
	}

	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length) return this.pop();

		const previousNode = this.get(index - 1);
		const currentNode = previousNode.next;
		previousNode.next = currentNode.next;
		currentNode.next = null;

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
			prev = node;
			node = next;
		}
		return this;
	}
}
