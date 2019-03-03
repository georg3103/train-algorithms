class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	add(val) {
		const node = new Node(val);
		if (this.size === 0) {
			this.head = node;
			this.tail = node;
		} else {
			const currenthead = this.head;
			this.head = node;
			this.head.next = currenthead;
		}

		return (this.size += 1);
	}

	remove() {
		if (this.size === 0) return null;
		const node = this.head;
		if (this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = node.next;
			node.next = null;
		}

		this.size -= 1;
		return node.val;
	}
}

// Big O
// Insertion - O(1)
// Removal - O(1)
// Recap
// 1) LIFO principle
// 2) Usage: call stack, undo/redo, routing ...
