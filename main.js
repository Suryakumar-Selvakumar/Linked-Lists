import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("cow");

list.pop();

list.insertAt("chicken", 5);

list.removeAt(0);

console.log(list.toString());

// All linkedList functions working, Yay!!
