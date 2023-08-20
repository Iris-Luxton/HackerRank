
function thread(x) {
    console.log("function ran")
    for (i = 0; i < 10000000; i++) {
        x = x + 1;
    }
    return x;
}

console.log(thread(0));