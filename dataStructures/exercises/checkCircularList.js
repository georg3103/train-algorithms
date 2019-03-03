const SSL = require('../SLL');

function checkCircularList(list) {
	if (list.getLength === 0) return false;
	else if (list.getLength === 1) {
		return list.head.next === null ? false : true;
	} else {
		let slow = list.head;
		let fast = list.head;
		while (fast !== null) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow === fast) return true;
		}
		return false;
	}
}

module.exports = checkCircularList;
