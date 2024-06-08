// closures example

function x() {
  let a = 10;
  function y() {
    console.log("a inside closure", a);
  }
  y();
}

x();
