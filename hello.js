for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('var: ', i);
  }, 1000)
}

for (var i = 0; i < 10; i++) {
  (function (x) {
    setTimeout(function () {
      console.log('var+function: ', x);
    }, 1000)
  })(i);
}

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('let: ', i);
  }, 1000)
}
