//3.3

const button33 = document.getElementById("33task");
button33.onclick = function () {
        alert("Press ok");
        document.write('Hello, world!');
}

//3.4

function displayInput(text) {
        if(text != '' && text != null)
            alert(text)
        else
            alert("You didnt write anything good")
}

const button34 = document.getElementById("34task");
button34.onclick = function () {
    const userText = prompt("Write some:");
    displayInput(userText);
}

//3.5

const button35 = document.getElementById("35task");
button35.onmouseover = function () {
    const userText = prompt("Write some:");
    displayInput(userText);
}

//3.6

function plussNum() {
    const num1 = Number(prompt("Type first num:"));
    const num2 = Number(prompt("Type sec num:"));
    
    const res = num1 + num2;
    alert(num1+"+"+num2+"="+res);
}

const button36 = document.getElementById("36task");
button36.onclick = function () {
    plussNum();
}

//3.7

function maxNum() {
    const num1 = Number(prompt("Type first num:"));
    const num2 = Number(prompt("Type sec num:"));
    
    if(num1 > num2)
        alert("Max num is: "+num1);
    else
        alert("Max num is: "+num2);
}

const button37 = document.getElementById("37task");
button37.onclick = function () {
    maxNum();
}

//3.8

function monthNameByNum() {
    const monthnum = Number(prompt("Type month num:"));
    
    if(0<monthnum && monthnum<=3)
        alert("Vesna");
    else if(3<monthnum && monthnum<=6)
        alert("Lito");
    else if(6<monthnum && monthnum<=9)
        alert("Osin`");
    else if(9<monthnum && monthnum<=12)
        alert("Zyma");
    else
        alert("There is no such month");
}

const button38 = document.getElementById("38task");
button38.onclick = function () {
    monthNameByNum();
}

//3.9

const button39 = document.getElementById("39task");
button39.onclick = function () {
    const input = confirm("Ok or cancel");

    if (input) {
        alert("ok");
    } else {
        alert("cancel");
    }
}

//3.10

function Students() {
    const studNum = Number(prompt("Type students num:"));
    let name;
    document.write("<ol> ");
    for (i = 1; i < studNum+1; i++){
            name = prompt("Type student "+i+" name and surname: ");
            document.write("<li> "+name+" </li>");
        }
        ocument.write(" </ol>");
}

const button310 = document.getElementById("310task");
button310.onclick = function () {
    Students();
}

//3.11

const button311 = document.getElementById("311task");
button311.onmouseover = function () {
    let name = prompt("Type student surname: ");
    document.write("<ol> ");
        while (name){
            document.write("<li> "+name+" </li>");
            name = prompt("Type student name: ");
        }
        document.write(" </ol>");
}

//3.12

const button312 = document.getElementById("312task");
button312.onclick = function () {
    let num = 11;
    document.write("<table border= solid 1px> ");
    for (i = 1; i < num; i++){
        document.write("<tr> ");
        for (y = 1; y < num; y++){
            document.write("<td> "+i*y+" </td>");
    }
    document.write("</tr> ");
}
    ocument.write(" </table>");
}