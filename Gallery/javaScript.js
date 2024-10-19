const squareOne = {
    side:10,
    color:"Orange"
};

const squareTwo = {
    color:"Green",
    ...squareOne
}

console.log(squareTwo.color)