function adder (a) {

    console.log(`sum(${a}) = ${a}`);

    return function (b) {
        const result = a + b;

        console.log(`sum(${b}) = ${result}`);

        return function (c) {
            const resultSecond = result + c;

            console.log(`sum(${c}) = ${resultSecond}`)
        }
    }
}

adder(3)(5)(20);