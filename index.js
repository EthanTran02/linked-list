class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
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

  at(target) {
    let current = this.head;
    let count = 1;
    // empty case
    if (current === null) {
      console.log("the list in empty");
      return;
    }

    // regular case
    while (current) {
      if (current.value === target) {
        console.log(`node positio is: ${count}`);
        return;
      }
      count += 1;
      current = current.nextNode;
    }

    // not found case
    console.log("node not found!");
  }

  pop() {
    // 1 -> 2 -> 3 -> null
    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    console.log(current.value);
  }

  print() {
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
list.print();
list.pop();

// keep working on pop() method
