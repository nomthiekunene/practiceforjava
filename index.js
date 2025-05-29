// this is my first javascript code!
  let name = "Nomthandazo";
  console.log(name);
    let age = 25;
    console.log(age);
  let isStudent = true;
    console.log(isStudent);
    let hobbies = ["reading", "coding", "hiking"];  
    console.log(hobbies);
    let city = "Victoria Falls";
    console.log(city);

    let number = 97;
    if (number%2 === 0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
    let person = {
        name: "Nomthandazo",
        age: 25,
        isStudent: true,
        city: "Victoria Falls",
    };
    console.log(person.name);
    console.log(person.age);
    console.log(person.isStudent);  
    console.log(person.city);
    function greet(name) {
      console.log("Hello " + name + "!");
    
    }
    greet('Gerald')
    greet('Nomthandazo')
    let fruits = ["apple", "banana", "cherry"]; {
        console.log(fruits[0]);
        console.log(fruits[2]);
    }
    let username = "Nomthandazo";
    let password = "password123";
    if (username === "Nomthandazo" && password === "password123") {
        console.log("Login successful!");
    } else {
        console.log("Login failed. Please check your username and password.");
    }
    for(let i=1; i<=10; i++) {
      console.log (i);
    }
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }


