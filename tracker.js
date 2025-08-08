// ==================== BUG TRACKER FILE ====================
// ==================== DO NOT MODIFY ====================
// Error tracking
let errors = {};
for (let i = 1; i <= 15; i++) {
  errors[`error${i}`] = true;
}

const errorMessages = [
  "ReferenceError: undefinedVariable is not defined",
  "TypeError: Cannot read property 'name' of null",
  "SyntaxError: Missing parenthesis",
  "RangeError: Invalid array length -5",
  "TypeError: notAFunction is not a function",
  "ReferenceError: variableNotDeclared is not defined",
  "TypeError: undefined.someMethod is not a function",
  "SyntaxError: Unexpected token }",
  "TypeError: Assignment to constant variable",
  "TypeError: Cannot read property 'length' of undefined",
  "RangeError: Maximum call stack size exceeded",
  "TypeError: Cannot convert undefined to object",
  "SyntaxError: Unexpected token in JSON at position 5",
  "ReferenceError: Cannot access variable before initialization",
  "TypeError: Cannot read property 'valueOf' of undefined",
];

const solvedMessages = [
  "✅ Variable properly declared and defined",
  "✅ Null check implemented before property access",
  "✅ Syntax corrected with proper parentheses",
  "✅ Array length validation added",
  "✅ Function existence verified before calling",
  "✅ Variable declared before use",
  "✅ Method existence checked before calling",
  "✅ Syntax error fixed - proper bracket matching",
  "✅ Const variable not reassigned",
  "✅ Undefined check added before property access",
  "✅ Recursion base case properly implemented",
  "✅ Type checking added before conversion",
  "✅ JSON syntax validated and corrected",
  "✅ Variable declared before temporal dead zone",
  "✅ Constructor called with new keyword",
];

function updateConsole() {
  const console = document.getElementById("console");
  const errorCount = Object.values(errors).filter(Boolean).length;

  console.innerHTML = "";

  Object.keys(errors).forEach((key, index) => {
    const errorDiv = document.createElement("div");
    errorDiv.className = `error-item ${errors[key] ? "error" : "solved"}`;

    const numberDiv = document.createElement("div");
    numberDiv.className = "error-number";
    numberDiv.textContent = (index + 1).toString();

    const statusDiv = document.createElement("div");
    statusDiv.className = `status ${errors[key] ? "error" : "solved"}`;

    const textDiv = document.createElement("div");
    textDiv.className = errors[key] ? "error-text" : "solved-text";
    textDiv.textContent = errors[key]
      ? errorMessages[index]
      : solvedMessages[index];

    errorDiv.appendChild(numberDiv);
    errorDiv.appendChild(statusDiv);
    errorDiv.appendChild(textDiv);
    console.appendChild(errorDiv);
  });

  const progress = document.getElementById("progress");
  progress.textContent = `Errors Remaining: ${errorCount} / 15`;
  progress.className = errorCount === 0 ? "progress complete" : "progress";

  if (errorCount === 0) {
    setTimeout(() => {
      alert("🎉 Congratulations! All errors have been fixed!");
    }, 500);
  }
}

function runTests() {
  // Test each error by calling the corresponding function from bugs.js
  for (let i = 1; i <= 15; i++) {
    try {
      // Try to call the test function
      const functionName = `test${i}`;
      if (typeof window[functionName] === "function") {
        window[functionName]();
        errors[`error${i}`] = false;
      } else {
        errors[`error${i}`] = true;
      }
    } catch (e) {
      errors[`error${i}`] = true;
    }
  }

  updateConsole();
}

function resetErrors() {
  // Reset all errors to true (broken state)
  Object.keys(errors).forEach((key) => {
    errors[key] = true;
  });
  updateConsole();
}

// Initialize the console
updateConsole();

// Auto-run tests on load after a short delay
setTimeout(runTests, 1000);
// ==================== END BUG TRACKER FILE ====================
// ==================== DO NOT MODIFY ====================
