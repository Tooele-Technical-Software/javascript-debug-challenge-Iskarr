// Note: We use a try...catch block for each example to ensure that
// one error doesn't stop the entire script from running.

// === 1. ReferenceError: X is not defined ===
try {
    console.error("--- 1. ReferenceError: `undefinedVariable` is not defined ---");
    console.log(undefinedVariable);
} catch (e) {
    console.error(e);
}

// ---

// === 2. TypeError: 'X' is not a function ===
try {
    console.error("--- 2. TypeError: `'hello'` is not a function ---");
    const myString = "hello";
    myString();
} catch (e) {
    console.error(e);
}

// ---

// === 3. SyntaxError: Unexpected token 'X' ===
try {
    console.error("--- 3. SyntaxError: Unexpected token (uncomment the line to see) ---");
    // const badSyntax = "missing quotes;
} catch (e) {
    console.error(e); // This one won't be caught by try...catch, as it's a parse error
}

// ---

// === 4. TypeError: Cannot read properties of undefined (reading 'X') ===
try {
    console.error("--- 4. TypeError: Cannot read properties of undefined ---");
    const obj = undefined;
    console.log(obj.property);
} catch (e) {
    console.error(e);
}

// ---

// === 5. TypeError: Cannot read properties of null (reading 'X') ===
try {
    console.error("--- 5. TypeError: Cannot read properties of null ---");
    const obj = null;
    console.log(obj.property);
} catch (e) {
    console.error(e);
}

// ---

// === 6. Uncaught (in promise) [Error] ===
console.error("--- 6. Uncaught (in promise) [Error] ---");
// This promise will reject without a .catch() block, leading to an unhandled rejection.
new Promise((resolve, reject) => {
    reject(new Error("This is an unhandled promise rejection!"));
});

// ---

// === 7. ReferenceError: Cannot access 'X' before initialization ===
try {
    console.error("--- 7. ReferenceError: Cannot access `temporalDeadZone` before initialization ---");
    console.log(temporalDeadZone);
    let temporalDeadZone = 1;
} catch (e) {
    console.error(e);
}

// ---

// === 8. RangeError: Maximum call stack size exceeded ===
// To prevent the page from freezing, we will only log the setup.
// Uncomment the function call below to see the error.
console.error("--- 8. RangeError: Maximum call stack size exceeded (uncomment the function call below) ---");
/*
function infiniteLoop() {
    infiniteLoop();
}
infiniteLoop();
*/

// ---

// === 9. SyntaxError: Identifier 'X' has already been declared ===
try {
    console.error("--- 9. SyntaxError: Identifier 'a' has already been declared (uncomment the second let a) ---");
    let a = 1;
    // let a = 2; // This line causes the error.
} catch (e) {
    console.error(e);
}

// ---

// === 10. NetworkError: Failed to fetch ===
// This error depends on network access and CORS policies.
// It's not guaranteed to be logged but is a common occurrence.
console.error("--- 10. NetworkError: Failed to fetch (attempting to fetch a non-existent URL) ---");
fetch("https://this-url-does-not-exist-123456789.com")
    .then(response => console.log(response))
    .catch(error => console.error("Fetch Error:", error));

// ---

// === 11. TypeError: 'X' is not iterable ===
try {
    console.error("--- 11. TypeError: '`notIterable` is not iterable' ---");
    const notIterable = 123;
    for (const item of notIterable) {}
} catch (e) {
    console.error(e);
}

// ---

// === 12. Uncaught SyntaxError: Invalid or unexpected token ===
try {
    console.error("--- 12. Uncaught SyntaxError: Invalid or unexpected token (uncomment the bad hex literal) ---");
    // const invalidToken = 0xG;
} catch (e) {
    console.error(e);
}

// ---

// === 13. ReferenceError: 'X' is not defined (in strict mode) ===
try {
    console.error("--- 13. ReferenceError: `undeclaredVar` is not defined (in strict mode) ---");
    function strictFunc() {
        'use strict';
        undeclaredVar = 1;
    }
    strictFunc();
} catch (e) {
    console.error(e);
}

// ---

// === 14. Uncaught URIError: URI malformed ===
try {
    console.error("--- 14. Uncaught URIError: URI malformed ---");
    decodeURIComponent('%');
} catch (e) {
    console.error(e);
}

// ---

// === 15. TypeError: 'X' is not a constructor ===
try {
    console.error("--- 15. TypeError: `'hello'` is not a constructor ---");
    new 'hello';
} catch (e) {
    console.error(e);
}