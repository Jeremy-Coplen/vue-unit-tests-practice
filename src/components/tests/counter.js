export function increment(num) {
    if(typeof(num) === "number") {
        return num + 1
    }
    else {
        throw new Error("You must input a number")
    }
}

export function decrement(num) {
    if(typeof(num) === "number") {
        return num - 1
    }
    else {
        throw new Error("You must input a number")
    }
}