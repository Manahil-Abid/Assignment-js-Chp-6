//// ASSIGNMENT // 6


//write a program to take a number in a variable do the required arthemetic to display the following result in your browser.

// let a = 10;
// document.write("The value of a is =",a,"<br>","<br>","<br>");
// document.write("The value of ++a is" ,11,"<br>");
// document.write("Now the value of a is " ,++a,"<br>","<br>","<br>");
// document.write("The value of ++a is" ,11,"<br>");
// document.write("Now the value of a is " ,++a,"<br>","<br>","<br>");
// document.write("The value of --a is" ,11,"<br>");
// document.write("Now the value of a is " ,--a,"<br>","<br>","<br>");
// document.write("The value of a-- is" ,11,"<br>");
// document.write("Now the value of a is " ,--a,"<br>");

//What will be the output in variables a, b & result after execution of the following script: 
//var a = 2, b = 1; var result = --a - --b + ++b + b--; 
//Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b; 
//--a - --b + ++b + b--; 

// let a = 2, b = 1;
// document.write("The output of --a = ", --a , "<br>"); // 1
// document.write("The output of --a - --b is ", --a - --b , "<br>"); // 0
// document.write (" The output of --a - --b + ++b " , --a - --b + ++b , "<br>"); //0 
// document.write (" The output of --a - --b + ++b + b-- " , --a - --b + ++b + b-- , "<br>"); // -1


//3. Write a program that takes input a name from user & greet the user. 
// let greeting = " Asalamo Aliakum ";
// let userName = prompt (" Enter Your Name ");
// let combinedArray = greeting.concat(userName);
// document.write(combinedArray);

/*Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.*/ 
// Prompt the user to enter a number

// let num = prompt("Enter a number to get its multiplication table:");
// if (num === "" || num === null) {
//    num = 5;
// }
// for (let i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// let sub1 = prompt("Enter 1st subject name");
// let sub2 = prompt("Enter 2nd subject name");
// let sub3 = prompt("Enter 3rd subject name");

// // b) Total marks for each subject is 100, store it in another variable.
// let totalMarks = 100;

// // c) Take obtained marks for first subject from user and store them in different variable.
// let obtMarks1 = parseInt(prompt("Enter your 1st subject obtained marks?"));
// let obtMarks2 = parseInt(prompt("Enter your 2nd subject obtained marks?"));
// let obtMarks3 = parseInt(prompt("Enter your 3rd subject obtained marks?"));

// // e) Now calculate total marks and percentage and show the result in browser like this.
// let totalObtainedMarks = obtMarks1 + obtMarks2 + obtMarks3;
// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Display the results in the browser
// document.write("<h2>Results</h2>");
// document.write(sub1 + " " + totalMarks + " " + obtMarks1 + "<br>");
// document.write(sub2 + " " + totalMarks + " " + obtMarks2 + "<br>");
// document.write(sub3 + " " + totalMarks + " " + obtMarks3 + "<br>");
// document.write("Total Marks: " + (totalMarks * 3) + " Total Obtained Marks: " + totalObtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
