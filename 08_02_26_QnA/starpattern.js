// Star Pattern

function diamond(n) {
  // Upper half including middle
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
}

diamond(5);