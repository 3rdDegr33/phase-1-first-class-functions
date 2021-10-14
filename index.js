function sayHello() {
    return 'Hello';
}

function receivesAFunction(sayHello) {
    sayHello();
}

function returnsANamedFunction() {
    let name = 'Johnny';
    
    return function intro() {
        console.log(`Hello ${name}`);
    };
}

function returnsAnAnonymousFunction() {
    let name = 'Johnny';

    return function() {
        console.log(`Hello ${name}`);
    };
}