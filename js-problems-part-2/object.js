/*
------------------------------------------------------------------------------------------
problem-1 Accessing Properties:
Given an object student with properties name, age, and grade, write code to display the student’s name and grade.
------------------------------------------------------------------------------------------
*/

const student = {
    name:"Mahbuba",
    age:28,
    grade:'A+'
}

//one way to access property
// const age = student.age
// const name = student.name

//another way to access property
const age = student["age"]
const name = student["name"]

//set property
student['location'] = 'USA'

console.log(age,name);
console.log(student);



/*
------------------------------------------------------------------------------------------
problem-2 Updating Properties:
An object book has properties title and price.
Change the price and display the updated object.
------------------------------------------------------------------------------------------
*/

const book = {
    title:'Deep dive in to javascript',
    price : 234
}

const updatedPrice = book['price'] = 345

console.log(book);



/*Level 2: 





/*
------------------------------------------------------------------------------------------
problem-3 Objects with Methods:
Simple Method:
Create an object calculator with a method add(a, b) that returns the sum.
------------------------------------------------------------------------------------------
*/

const calculator = {
    brand:'xyz',
    name:'abc',
    sum(a,b) {
      return a+b
    }
}

console.log(calculator.sum(2,2));




/*
------------------------------------------------------------------------------------------
problem-4 Object Action:
Create an object dog with a property name and a method bark() that prints "Woof!".
Using this / self
------------------------------------------------------------------------------------------
*/

const dog = {
    name : 'Abc',
    bark(){
       console.log('Woof');
    }
}

dog.bark()




/*
------------------------------------------------------------------------------------------
problem-5 Create an object person with properties name and age.
Add a method introduce() that prints:
"Hi, my name is ___ and I am ___ years old." 
------------------------------------------------------------------------------------------
*/


const person = {
    name : "mahi",
    age : 23,
    introduce(){
        console.log(`Hi, my name is ${this.name}___ and I am _${this.age}__ years old.` );
    }
}

person.introduce()









/*
------------------------------------------------------------------------------------------
problem-6 Real-World Scenarios
Bank Account
Create an object bankAccount with:ownerName,balance,Method deposit(amount)
Method withdraw(amount) (only if enough balance) 
------------------------------------------------------------------------------------------
*/


const bankAccount = {
    ownerName:"ABC",
    balance:10000,
    deposit(amount){
      this.balance += amount
      return this.balance
    
    },

    withdraw(amount){
       if(this.balance > amount){
      return  this.balance -= amount
       
    }
    else{
        return 'balance is not enough for withdraw'
    }
    }
}

//     console.log(bankAccount.deposit(0));
//   console.log(bankAccount.deposit(3000));
 console.log(bankAccount.withdraw(2000));
  console.log(bankAccount.deposit(3000));



  /*
------------------------------------------------------------------------------------------
problem-7 // 📦 Level 3: 
 Rectangle Object
 Create an object rectangle with length and width.
 Add methods to calculate:
Area
Perimeter

------------------------------------------------------------------------------------------
*/


const rectangle = {
    length : 34,
    width : 67,

    area(){
     return this.length * this.width
    },
    perimeter(){
        return 2*(this.length + this.width)
    }
}

 console.log(rectangle.area());
console.log(rectangle.perimeter());