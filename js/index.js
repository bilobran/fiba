const n=parseInt(prompt('Введіть число Фібаначіка'))

const result= fibLoop(n);
alert (result);
  function fibLoop(n) {
 let a = 1, b = 1;
 for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
  b = c;
  
 }         
return b;
}

// const n = parseInt(prompt('Введіть число Фібаначіка'));
function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n]
}

alert(fib(n));

// const n = parseInt(prompt('Введіть число Фібоначіка'));

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)
}
alert(fib(n));
