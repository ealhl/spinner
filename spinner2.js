let spin = "|/-\\|/-\\|";
let time = 0;

setTimeout(() => {
  for (const char of spin) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, time);
    time += 200;
  }
  setTimeout(() => {
    console.log();
  }, time);
});
