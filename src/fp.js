
function double(x) {
  return x * 2;
}
function increment(x) {
  return x + 1;
}

function incrementBy(x, y) {
  return x + y;
}

const fp = x => incrementBy(increment(double(x)), 123);
const e = fp(123)

module.exports = { fp, e }
