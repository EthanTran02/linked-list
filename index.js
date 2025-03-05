export class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    //emty list case
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // list already have item case
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    return;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count += 1;
      current = current.nextNode;
    }
    return console.log(`size: ${count}`);
  }

  getHead() {
    if (this.head) {
      console.log(`first node: ${this.head.value}`);
      return;
    }
    console.log("empty");
  }

  getTail() {
    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }
    console.log(`last node: ${current.value}`);
  }

  at(index) {
    let current = this.head;
    let count = 0;

    // empty case
    if (current === null) {
      console.log("the list in empty");
      return;
    }

    // regular case
    while (current && count < index) {
      current = current.nextNode;
      count += 1;
    }

    if (current) {
      console.log(`Value at index ${index}: ${current.value}`);
      return;
    } else {
      console.log(`not found item at index ${index}`);
      return;
    }
  }

  pop() {
    let current = this.head;

    // 1 item case
    if (current.nextNode === null) {
      this.head = null;
      return;
    }

    // multiple items case
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.value === value) {
        return count;
      }
      current = current.nextNode;
      count++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.value);
      current = current.nextNode;
    }
    result;
    console.log(result.join(" -> ") + " -> null");
  }
}

// test case
const list = new LinkedList();
list.prepend(1);
list.append(2);
list.append(3);
// 1 -> 2 -> 3 -> null

// printin out
list.toString();
