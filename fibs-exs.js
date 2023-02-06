// iterative
// method 1
function fibsIterative(n) {
    let a = 0;
    let b = 1;
    let c;
    if(n === 0) return [a];
    if(n === 1) return [a,b];
    let fib = [a,b];
    for(let i=2; i<=n; i++){
        c = a + b;
        fib.push(c)
        a = b;
        b = c;
    }
    return fib;
}

// method 2
function fibsIterative(n) {
    if(n === 0) return [0];
    let fib = [0,1];
    for(let i = 0; i <= n-2; i++) {
        fib.push(fib[i]+fib[i+1])
    }
    return fib;
}

// reucrsion
function fibsRecursive(n) {
    return (n <= 1) ? n : fibsRecursive(n-1) + fibsRecursive(n-2)
}

// now if we want an array of all the result utnil n
// method 1
function fibs(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const arr = fibs(n - 1);
    const nextFib = arr[arr.length - 1] + arr[arr.length - 2];
    return [...arr, nextFib];
}         

// method 2
function fibsRecursive(n) {
    return (n <= 1) ? n : fibsRecursive(n-1) + fibsRecursive(n-2)
}

function displayFib(n) {
    arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(fibsRecursive(i));
    }
    return arr;
}






























function fibsArr(n) {
    if(n === 0) return [];
    if(n === 1) return [0];
    if(n === 2) return [0,1];

    const arr = fibsArr(n-1);
    const nextFib = arr[arr.length-1] + arr[arr.length-2];
    return [...arr, nextFib]
}
