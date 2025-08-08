// Since we can't create separate files in this environment,
// I'll include the bugs.js content directly here but clearly separated

// ==================== BUGS.JS FILE CONTENT ====================
// This is the code you need to edit to fix the errors!
// Each function below corresponds to a numbered error in the console

// ERROR #1: ReferenceError - undefinedVariable
function test1() {
  // FIX: Declare this variable before using it
  
  console.log(undefinedVariable); // FIX: Declare this variable first
  return true;
}

// ERROR #2: TypeError - null property access
function test2() {
  let obj = null;
  console.log(obj.name); // FIX: Check if obj is null before accessing properties, reassign it to fix.
  return true;
}

// ERROR #3: SyntaxError - missing closing parenthesis
function test3() {
  let test = console.log"This is a test"; // FIX: Add the missing parenthesis 
  return test; // FIX: Add missing closing parenthesis
}

// ERROR #4: RangeError - invalid array length
function test4() {
  let arr = new Array(-5); // FIX: Array length cannot be negative
  return arr.length;
}

// ERROR #5: TypeError - not a function
function test5() {
  let notAFunction = "I'm a string";
  return notAFunction();
}

// ERROR #6: ReferenceError - variable not declared
function test6() {
  console.log(variableNotDeclared); 
  return true;
}

// ERROR #7: TypeError - undefined method call
function test7() {
  let obj = undefined;
  return obj.someMethod(); 
}

// ERROR #8: SyntaxError - unexpected token
function test8() {
  let validObject =  key: "value" ; 
  return validObject.key;
  s;
}

// ERROR #9: TypeError - const reassignment
function test9() {
  const constantValue = "original";
  constantValue = "changed"; 
  return constantValue;
}

// ERROR #10: TypeError - property access on undefined
function test10() {
  let arr = undefined;
  return arr.length;
}

// ERROR #11: RangeError - stack overflow (infinite recursion)
function test11() {
  function infiniteLoop(n) {
    return infiniteLoop(n + 1); 
  }
  return infiniteLoop(0);
}

// ERROR #12: TypeError - converting undefined to object
function test12() {
  let value = undefined;
  return value.toString();
}

// ERROR #13: SyntaxError - invalid JSON
function test13() {
  let invalidJSON = '{key: "value"}'; 
  return JSON.parse(invalidJSON);
}

// ERROR #14: ReferenceError - temporal dead zone
function test14() {
  console.log(hoistedVar); 
  let hoistedVar = "I exist now";
  return hoistedVar;
}

// ERROR #15: TypeError - primitive value method call
function test15() {
  let num = Number42;
  return num.valueOf();
}

// ==================== END BUGS.JS FILE ====================
