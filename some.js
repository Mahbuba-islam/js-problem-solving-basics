const numbers = [2, 12,8,6]

const hasOddNumber = numbers.some(n => n % 2 !== 0)

console.log(hasOddNumber);

const currentUser = ["user", "editor"]

const featureAccessRoles = ["admin", "manager", "user"]

const canAccess = currentUser.some(u => featureAccessRoles.includes(u))

console.log(canAccess);


//**some()**  
    // - Problem: Check if an array contains any negative numbers using `some()`.  
    // - Example Input: `[5, -2, 10]` → Output: `true`.
