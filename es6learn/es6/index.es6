let arr = [1, 2, 3].map(function (id) {
    return function () {
        console.log(id);
    }
})
console.log(arr);