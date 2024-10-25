// console.log("Hey..🫤")


// JavaScript Variables -> Variables are containers for storing values.
//var


// var firstName =  "Devanshu"
// var firstName = 1234
// firstName = "Manny"
// console.log(firstName)

// {
//     var firstName = "Daisy"
// }

// console.log(firstName)




//let

// let lastName = "Kumawat"
// // let lastName = "Manny"
// lastName = "Sharma"
// console.log(lastName)

// {
//     let lastName = "Sharma"
// }

// console.log(lastName)

//const

// const age = 16
// // const age = 78
// age = 89
// console.log(age)

// {
//     const age = 78
// }

// console.log(age)




// let a = 56
// console.log(a)

// let userName = "MAnny"
// let 123test = "5678"
// let User_name = "Kizie"
// let &Test = "dfghjk"
// let _name = "Manny"


// let firstName = "Manny"
// let age = 56


//String:


// let firstName = "Manny"
// let lastName = 'Sharma'
// let age = `56`

// console.log("Value:- "+firstName + "    " + "Type:- "+typeof(firstName))
// console.log(`Value :- ${lastName} Type     :- ${typeof(lastName)} `)
// console.log(typeof(age))

//Number:

// let age = 56
// console.log(`Value :- ${age} Type:- ${typeof(age)}`)

// let task = 67.987
// console.log(`Value :- ${task} Type:- ${typeof(task)}`)



//Boolean:

// let x = 78
// let y = 79

// console.log(x==y)

// let isMarried = true
// console.log(`Is_Married :- ${isMarried} Type:- ${typeof(isMarried)}`)


//Array:

// let myArray = ["Manny",67,true,"Sharma"]
// console.log(myArray)

//keys           0      1   2      3     
// const isArrayValue = myArray[3]
// console.log(myArray[2])
// console.log(isArrayValue)

// console.log(`Type of Array :- ${typeof(myArray)}`)

// const myArray1 = new Array("Manny",67,98,56,false)

// console.log(myArray1)


// let a;
// // a = 16
// console.log(a)

// const myArray = ["manny",67,true]

// //     index       0     1    2 

// console.log(myArray)
// console.log(myArray[1] + " Type :- "+typeof(myArray[1]))

// console.log(myArray[2] + " Type :- "+typeof(myArray[2]))


// new Array()



// const studentObj = {
//     studentName:"Devanshu",
//     studentRoll_no:45,
//     studentSection:"C"
// }

// console.log(studentObj + " Type :- "+ typeof(studentObj))


// // console.log(studentObj.studentRoll_no)
// // console.log(studentObj.studentName)

// const {studentName,studentRoll_no,studentSection} =  studentObj

// console.log(studentName)
// console.log(studentRoll_no)




// let test = 20+6

// console.log(test)

// let x = "dfgh"
// let y = ""

// console.log(x+y)

// let x = "dfghj"
// let y = 5

// console.log(x-y)

// let x = "dfghj"/2
// console.log(x)


// let x = "7"*5
// console.log(x)


// let test = 12345678976543 %8

// console.log(test)


// let x = 12
// x++
// console.log(x)
// x--
// console.log(x)

// let x = "67"
// let y = 67

// console.log(x==y)
// console.log(x===y)


// let age = 18

// if(age>=18){
//     console.log("Yes")
// }

// else if(age<18){
//     console.log("No")
// }

// else{
//     console.log("Else Part")
// }


//Check if a number is odd or even
 
const prompt = require ("prompt-sync")()

// let number = prompt("Enter number..")

// if(number%2 == 0){
//     console.log("Number is even..😍")
// }else{
//     console.log("Number is Odd..🫤")
// }

// package.json = npm init -y
// npm i/install prompt-sync
// require("")


/**
user input = ""
Devanshu = Dev
Dev = Devanshu
Kizie = Manny
Mannny = Kizie
 */


// const user_input = prompt("Enter Name :- ")
// // console.log(user_input + " Type :- " + typeof(user_input))

// if(user_input=="Devanshu"){
//     console.log("Dev")
// }
// else if(user_input=="Dev"){
//     console.log("Devanshu")
// }
// else if(user_input=="Manny"){
//     console.log("Kizie")
// }
// else if(user_input =="Kizie"){
//     console.log("Manny")
// }
// else{
//     console.log("Invalid Input")
// }




/*
Let create simple calculator
    Addition 
    Subtraction
    Multiplication
    Division
*/



// let firstNum = parseInt(prompt("Enter First Number :- "))
// let secondNum = parseInt(prompt("Enter Second Num :- "))
// let opretor = prompt("Enter (+,/,-,*)")

// let output;

// if(opretor=="+"){
//     output = firstNum+secondNum
// }

// else if(opretor == "-"){
//     output = firstNum-secondNum
// }

// else if(opretor == "*"){
//     output = firstNum * secondNum
// }

// else if(opretor == "/"){
//     output = firstNum / secondNum
// }

// console.log(`${firstNum} ${opretor} ${secondNum} = ${output}`)


/**
 Loan Prediction
 job _type (input)    
        government / business / private
        if job_type government
            take salary input and if salary is greater than 50k
                print You can apply for loan
                otherwise print you can not apply for loan
        if job_type business than
            yearly turnover input 
            if turnover greater than 20lakh than
                print you can apply for loan
            other wise 
                print you can not apply for loan
        if job_type private
            no loan available for you
 */


// let job_type = prompt("Enter Job_Type (government / business / private) :- ")

// if(job_type == "government"){
//     let salary = parseInt(prompt("Enter Your Monthly Salary :- "))
//     if(salary>=50000){
//         console.log("You can apply for loan")
//     }else{
//         console.log("You can not apply for loan")
//     }
// }

// else if(job_type == "business"){
//     let salary = parseInt(prompt ("Enter Your yearly turnover :- "))
//     if(salary>=2000000){
//         console.log("You can apply for loan")
//     }else{
//         console.log("You can not apply for loan")
//     }
// }

// else if(job_type == "private"){
//     console.log("No loan available for you")
// }
// else{
//     console.log("Invalid Input ")
// }

// let user1 = prompt.hide("Enter Number (1-30) :- ")
// let user2 = prompt ("Enter Guess Number user1 :- ")

// if(user1==user2){
//     console.log("Yaahooo... You Won..😍")
// }else{
//     console.log("Better Luck next time...🫤")
// }


// item - Pizza
// price - 100
// quantity- 5
// discount- 10%
// gst- 20%

// const item = prompt ("Enter Item here :- ")
// const price = parseFloat(prompt("Enter Price Here :- "))
// const quantity = prompt("Enter Quantity :- ")
// let  discount = 10
// let gst = 20

// const Bill = price * quantity
// const Bill_discount = Bill * discount/100
// const Total_bill = Bill-Bill_discount
// const Bill_gst = Total_bill * gst/100
// const final_bill = Total_bill + Bill_gst

// console.log(` Item :- ${item}`)
// console.log(`Item Price :- ${price}`)
// console.log(`Item Quantity :- ${quantity}`)
// console.log(`Bill :- ${Bill}`)
// console.log(`Discount :- ${Bill_discount}`)
// console.log(`Total-Bill :- ${Total_bill}`)
// console.log(`Bill-Gst :- ${Bill_gst}`)
// console.log(`Final Bill :- ${final_bill}`)
// console.log(`You have to pay ${final_bill}₹  for ${quantity}-${item}`)


let height = prompt("Enter Height (Short/Long) :- ")

if(height == "short"){
    let squeak = prompt ("Can not squeak / can squeak (yes/no) :-  ")
    if(squeak == "yes"){
        console.log("Might be a rat")
    }else if(squeak == "no"){
        console.log("Might be a squirrel")
    }else{
        console.log("Invalid Input")
    }
}
else if(height == "long"){
    let neck = prompt("Enter neck (short/long) :- ")
    if(neck=="short"){
        let nose = prompt("Enter Nose (Short/long) :- ")
        if(nose == "short"){
            let stay = prompt("Enter where stay (land/water) :- ")
            if(stay == "land"){
                console.log("Might be a rhinoceros")
            }
            else if(stay == "water"){
                console.log("Might be a hippo")
            }else{
                console.log("Invalid Input")
            }

        }else if(nose == "long"){
            console.log("Might be an elephant")
        }else{
            console.log("Invalid Input")
        }
    }else if(neck=="long"){
        console.log("Might be a giraffe")
    }else{
        console.log("Invalid Input")
    }
}else{
    console.log("Invalid input")
}
            










