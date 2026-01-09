function* infiniteCounter() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();

console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
