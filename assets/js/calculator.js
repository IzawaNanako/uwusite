//TODO make this a real thing
//acceptable values: 0, +-1~9, +, -, *, /, =, ^(root capable), (, ), ., %, !
//considerable values: sqrt()
//priority: () -> ^ -> * / -> else
//decimal and fraction
//buttons or not, input box must

var input = prompt("test", "etc");
const answer = calc(input);

function calc() {

}

function power(n, m) {
    return Math.pow(n, m);
}

function times(n, m) {
    return n * m;
}

function divide(n, m) {
    return n / m;
}

function plus(n, m) {
    return n + m;
}

function minus(n, m) {
    return n - m;
}

function mod(n, m) {
    return n % m;
}

function factor(n) {
    var value = 1;
    for (var i=2;i<=n;i++) {
        value *= i;
    }
    return value;
}