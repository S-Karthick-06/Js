let result = "";

for (let i = 1; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    result = result + "* ";
  }
  result = result + "\n";
}

console.log(result);
