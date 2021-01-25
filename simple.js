
{
    //Shorthand multiple variables
    let [x, y] = [10, 20];
    console.log('Multiple shorthand declarations:', x, y);

    // Variable swap
    [x, y] = [y, x];

    // Template literal. NOTICE! you use backticks to wrap `
    console.log(`New values after variable swap are now x: ${x}, y: ${y}`);
}


// Destructuring
{
    const person = {
        name: 'Albert',
        inventory: {apples: 5, melons: 3}
    };
    const {name, inventory: {apples}} = person;
    console.log(`${name} has ${apples} apples`);
}


// Spread operator
{
    const students = ['Anton', 'Maria'];
    const people = ['Steven', 'Ellen', 'Batista', ...students];
    const maria = {name: 'Maria', age: 33};
    const student = {id: 1, ...maria};
    console.log('Array spread: ', people);
    console.log('Student object: ', student);
}


// String to key
{
    const key = 'name';
    const object = {[key]: 'Maria'};
    console.log('String to key: ', object);
}


// Arrow function, map, and filters
{
    let numbers = [2, 6, 10];

    // You can skip the function name as it's anonymous. If only one argument, you can skip (). If only one statement, you can skip curly braces too.
    // Map method calls the arrow function on every item, where we square the number.
    let result = numbers.map((x) => x * x);
    console.log('Map method result:', result);

    // Adds all numbers above 5 using filter
    const filteredNumbers = numbers.filter((x) => x > 5);
    console.log('Filter method result:', filteredNumbers);

    // Sum of all elements. Accumulator starts on first element value, while currentVal second element value. Accumulator holds currently accumulated value
    const total = numbers.reduce(
        (accumulator, currentVal) => accumulator + currentVal
    );
    console.log('Reduce method result:', total);

    // Return first matched element
    let firstMatchValue = numbers.find((x) => x > 5);
    console.log('Find method result:', firstMatchValue);

    // Same as find, but returns the index of the element
    let firstMatchValueIndex = numbers.findIndex((x) => x > 5);
    console.log('Find method result:', firstMatchValueIndex);
}


// Shortening code a bit with the ternary operator. If the first is true, the second will be evaluated too
// (essentially executing whatever follows) Useful for conditional rendering.
{
    let loggedIn = true;
    loggedIn && console.log('Expression was true. User is logged in I guess?');

    loggedIn = false;
    loggedIn && console.log('This message will never be reached as the first expression was not true');
}


// Even random number
{
    let evenRandomNumber = ~~(Math.random() * 1000);
    console.log('Even random number: ', evenRandomNumber);
}


// Get query parameter. Say we have http://localhost.com/?name=Steven&age=58
{
    let params = new URLSearchParams(location.search);
    let name = params.get('name');
    let age = params.get('age');
    console.log('Search param: ', `name=${name}`, `age=${age}`);
}