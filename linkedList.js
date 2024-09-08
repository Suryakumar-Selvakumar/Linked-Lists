import { Node } from "./node";

export class LinkedList {
  constructor(head) {
    this.head = new Node(head);
  }

  append(value) {
    if (this.head == null) prepend(value);
    else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value, null);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let count = 0;
    let tmp = this.head;
    while (tmp.nextNode != null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  headReturn() {
    return this.head;
  }

  tailReturn() {
    let tmp = this.head;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    let count = 0;
    let tmp = this.head;
    while (tmp.nextNode != null) {
      if (count === index) {
        return tmp;
      }
      count += 1;
      tmp = tmp.nextNode;
    }
  }
}
