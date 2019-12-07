import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Session } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0
  makeBold(value) {
    console.log(value)
    console.log("Bold clicked")
    document.getElementById("answer").innerHTML = '';
    let selectedText = window.getSelection().toString().bold();
    var h = document.createElement("b");
    console.log(h);
    var t = document.createTextNode(window.getSelection().toString());
    console.log(t);
    h.appendChild(t);
    // let str = document.getElementById("textAreaa").innerHTML;
    let str = value
    console.log("str", str);
    let ssplit = str.split(window.getSelection().toString());
    console.log("ssplit", ssplit)
    $('#answer').append(ssplit[0]);
    $('#answer').append(h);
    $('#answer').append(ssplit[1]);
  }


  makeItalic(value) {
    console.log(value)
    console.log("Make Italic")
    document.getElementById("answer").innerHTML = '';
    let selectedText = window.getSelection().toString().bold();
    var h = document.createElement("i");
    console.log(h);
    var t = document.createTextNode(window.getSelection().toString());
    console.log(t);
    h.appendChild(t);
    // let str = document.getElementById("textAreaa").innerHTML;
    let str = value;
    console.log("str", str);
    let ssplit = str.split(window.getSelection().toString());
    console.log("ssplit", ssplit)
    $('#answer').append(ssplit[0]);
    $('#answer').append(h);
    $('#answer').append(ssplit[1]);

  }

  makeUnderline(value) {
    console.log(value)
    console.log("Make underline")
    document.getElementById("answer").innerHTML = '';
    document.getElementById("underlineDiv").innerHTML = '';
    let selectedText = window.getSelection().toString().bold();
    var h = document.createElement("span");
    h.id = 'under';
    h.className = 'under'
    console.log(h);
    var t = document.createTextNode(window.getSelection().toString());
    console.log(t);
    h.appendChild(t);
    $('#underlineDiv').append(h);
    // let str = document.getElementById("textAreaa").innerHTML;
    let str = value;
    console.log("str", str);
    let ssplit = str.split(window.getSelection().toString());
    document.getElementById('')
    console.log("ssplit", ssplit)
    console.log(document.getElementById('underlineDiv'))
    document.getElementById('underlineDiv').style.textDecoration = "underline";
    let z = document.getElementById('under').style.textDecoration = "underline"
    $('#answer').append(ssplit[0]);
    $('#answer').append(document.getElementById('underlineDiv').innerHTML);
    $('#answer').append(ssplit[1]);

  }

  makeRed(value) {
    console.log(value)
    console.log("Bold clicked")
    document.getElementById("answer").innerHTML = '';
    var h = document.createElement("span");
    console.log(h);
    let ss = window.getSelection().toString().fontcolor("red");
    console.log("ss", ss);
    // let str = document.getElementById("textAreaa").innerHTML;
    let str = value;
    console.log("str", str);
    let ssplit = str.split(window.getSelection().toString());
    console.log("ssplit", ssplit)
    $('#answer').append(ssplit[0]);
    $('#answer').append(ss);
    $('#answer').append(ssplit[1]);
  }

  makeBlue(value) {
    console.log(value)
    console.log("Bold clicked")
    document.getElementById("answer").innerHTML = '';
    var h = document.createElement("span");
    console.log(h);
    let ss = window.getSelection().toString().fontcolor("blue");
    console.log("ss", ss);
    // let str = document.getElementById("textAreaa").innerHTML;
    let str = value;
    console.log("str", str);
    let ssplit = str.split(window.getSelection().toString());
    console.log("ssplit", ssplit)
    $('#answer').append(ssplit[0]);
    $('#answer').append(ss);
    $('#answer').append(ssplit[1]);
  }

  makeYellow(value) {
    console.log(value)
    console.log("Bold clicked")
    document.getElementById("answer").innerHTML = '';
    var h = document.createElement("span");
    console.log(h);
    let ss = window.getSelection().toString().fontcolor("yellow");
    console.log("ss", ss);
    // let str = document.getElementById("textAreaa").innerHTML;
    let str = value;
    console.log("str", str);
    let ssplit = str.split(window.getSelection().toString());
    console.log("ssplit", ssplit)
    $('#answer').append(ssplit[0]);
    $('#answer').append(ss);
    $('#answer').append(ssplit[1]);
  }

  makeBlack(value) {
    console.log(value)
    console.log("Bold clicked")
    document.getElementById("answer").innerHTML = '';
    var h = document.createElement("span");
    console.log(h);
    let ss = window.getSelection().toString().fontcolor("black");
    console.log("ss", ss);
    // let str = document.getElementById("textAreaa").innerHTML;
    let str = value;
    console.log("str", str);
    let ssplit = str.split(window.getSelection().toString());
    console.log("ssplit", ssplit)
    $('#answer').append(ssplit[0]);
    $('#answer').append(ss);
    $('#answer').append(ssplit[1]);
  }

  clickOnComment(value) {
    console.log(value);
    sessionStorage.setItem(`comment[${this.count}]`, value);
    this.count++;
  }
}
