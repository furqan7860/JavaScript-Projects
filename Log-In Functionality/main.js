// window.addEventListener('load', () => {

//     const button = document.querySelector('#btn1');
//     const addMoreButton = document.querySelector('#add-more');
//     const Name = document.getElementById('fname');
//     const LastName = document.getElementById('lname');
//     const Email = document.getElementById('email');

//     button.addEventListener('click', (e) => {
//       e.preventDefault();

//       console.log(Name.value);
//       console.log(LastName.value);
//       console.log(Email.value);



//       if (Name.value =="" || LastName.value =="" || Email.value =="") {
//         alert("Please fill out all fields properly!");
//         return;
//       }  else {
//         alert("Your Form has been submitted");
//       }


//     })


//     addMoreButton.addEventListener('click', (e) => {
//         e.preventDefault();

//         document.getElementById('main-div').style.height= "40rem";


//         const label = document.createElement("label");
//         label.setAttribute("for", "f1name");
//          label.innerHTML = "First Name:";

//     const input = document.createElement("input");
//     input.setAttribute("id", "f1name");
//     input.setAttribute("type", "text");

//     document.getElementById('forms').appendChild(label);
//     document.getElementById('forms').appendChild(input);

//     const label1 = document.createElement("label");
//         label1.setAttribute("for", "l1name");
//          label1.innerHTML = " <br><br> Last Name: ";

//     const input1 = document.createElement("input");
//     input1.setAttribute("id", "l1name");
//     input1.setAttribute("type", "text");

//     document.getElementById('forms').appendChild(label1);
//     document.getElementById('forms').appendChild(input1);
//     const label2 = document.createElement("label");
//         label2.setAttribute("for", "username");
//          label2.innerHTML = "<br><br>Email Address: ";

//     const input2 = document.createElement("input");
//     input2.setAttribute("id", "email1");
//     input2.setAttribute("type", "text");

//     document.getElementById('forms').appendChild(label2);
//     document.getElementById('forms').appendChild(input2);

//     const para1 = document.createElement("br");
//      document.getElementById('forms').appendChild(para1);
//      const para2 = document.createElement("br");
//      document.getElementById('forms').appendChild(para2);

//     const btn = document.createElement("button");
//     btn.innerHTML='Delete';
//     btn.style.backgroundColor="rgb(0 0 0)" ;
//     btn.style.width="5rem" ;

//     btn.style.marginLeft="6rem";
//     btn.style.color="white";

//     document.getElementById('forms').appendChild(btn);

//     const para3 = document.createElement("br");
//     document.getElementById('forms').appendChild(para3);
//     const para4 = document.createElement("br");
//     document.getElementById('forms').appendChild(para4);






//       })

//     })




window.addEventListener('load', () => {



  const addMoreButton = document.querySelector('#add-more');
  const button = document.querySelector('#btn1');
  const form = document.getElementById("forms");
  console.log(form);
  const Name = document.getElementById('fname');
  const LastName = document.getElementById('lname');
  const Email = document.getElementById('email');
  const mainDiv = document.getElementById('main-div');

  const fields = document.querySelector(".field-1");
  const submit = document.getElementById('btn2');

  console.log(submit);



  let currentHeight = mainDiv.offsetHeight;
  console.log(fields);
  console.log(button);
  console.log(addMoreButton);
  console.log(Name);
  console.log(LastName);
  console.log(Email);
  console.log(mainDiv);
  console.log(currentHeight);







  button.addEventListener('click', (e) => {



    console.log(Name.value);
    console.log(LastName.value);
    console.log(Email.value);

    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (Name.value === "" || LastName.value === "" || Email.value === "") {

      alert("Please fill out all fields properly!");

      e.preventDefault();
      Name.value = "";
      LastName.value = "";
      Email.value = "";
      return;
    }
    else if (!Email.value.match(validRegex)) {
      e.preventDefault();
      alert("Please write email in appropraite format");

      Email.value = "";
      return;
    }
    else {
      e.preventDefault();
      Name.setAttribute("readonly", "readonly");
      LastName.setAttribute("readonly", "readonly");
      Email.setAttribute("readonly", "readonly");
      alert("Your input has been saved");
    }

  });



  submit.addEventListener('click', (e) => {




    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (Name.value === "" || LastName.value === "" || Email.value === "") {

      alert("Please fill out all fields properly!");

      e.preventDefault();
      Name.value = "";
      LastName.value = "";
      Email.value = "";
      return;
    }
    else if (!Email.value.match(validRegex)) {
      e.preventDefault();
      alert("Please write email in appropraite format");

      Email.value = "";
      return;
    }
    else {
      location.reload();

      document.write("<h1> Wow! You have been Succesfully registered now</h1>");
    }


  });






  let class_name = 2;

  let addMoreClicks = 0;

  addMoreButton.addEventListener('click', (e) => {
    e.preventDefault();





    addMoreClicks++;
    console.log(addMoreClicks);

    if (addMoreClicks == 1) {
      submit.style.visibility = "hidden";
    }


    if (addMoreClicks >= 3) {
      // disable the button
      addMoreButton.disabled = true;

      alert("Sorry you couldn't add more Fields");

      // or remove the event listener
      addMoreButton.removeEventListener('click');

    }
    if (addMoreClicks == 1) {

      alert("You could add one more input fields");
    }
    if (addMoreClicks == 2) {
      alert("Now You will not add more input fields after this");
    }




    currentHeight += 200;
    mainDiv.style.height = `${currentHeight}px`;


    const div = document.createElement("div");
    div.setAttribute("id", "field-" + class_name);

    const div1 = document.createElement("div");
    div1.setAttribute("id", "2nd-form-" + class_name);
    form.appendChild(div);
    div.appendChild(div1);
    document.getElementById('forms').appendChild(div);

    const check = document.getElementById("field-" + class_name);
    const check1 = document.getElementById("2nd-form-" + class_name);

    console.log(check);

    console.log(check1);

    const label = document.createElement("label");
    label.setAttribute("for", "f1name");
    label.innerHTML = "First Name: ";

    const input = document.createElement("input");
    input.setAttribute("id", "f1name" + class_name);
    input.setAttribute("type", "text");
    input.placeholder = "First Name";

    div1.appendChild(label);
    div1.appendChild(input);




    const label1 = document.createElement("label");
    label1.setAttribute("for", "l1name");
    label1.innerHTML = " <br><br> Last Name: ";

    const input1 = document.createElement("input");
    input1.setAttribute("id", "l1name" + class_name);
    input1.setAttribute("type", "text");

    input1.placeholder = "Last Name"

    div1.appendChild(label1);
    div1.appendChild(input1);

    const label2 = document.createElement("label");
    label2.setAttribute("for", "email");
    label2.innerHTML = "<br><br>Email Address: ";

    const input2 = document.createElement("input");
    input2.setAttribute("id", "email1" + class_name);
    input2.setAttribute("type", "text");
    input2.placeholder = "Email Address ";
    div1.appendChild(label2);
    div1.appendChild(input2);


    const para1 = document.createElement("br");
    div1.appendChild(para1);
    const para2 = document.createElement("br");
    div1.appendChild(para2);



    const div3 = document.createElement("div");
    div3.setAttribute("id", "2nd-form-btn" + class_name);

    div1.appendChild(div3);

    const btn = document.createElement("button");
    btn.setAttribute("id", "bt-2" + class_name)
    btn.innerHTML = 'Delete';
    btn.style.backgroundColor = "rgb(0 0 0)";
    btn.style.width = "5rem";

    btn.style.marginLeft = "6rem";
    btn.style.color = "white";
    div3.appendChild(btn);

    const btn1 = document.createElement("button");
    btn1.setAttribute("id", "bt-3" + class_name)
    btn1.innerHTML = 'Save';
    btn1.style.backgroundColor = "darkred";
    btn1.style.width = "5rem";

    btn1.style.marginLeft = "1rem";
    btn1.style.color = "white";
    div3.appendChild(btn1);

    const btn2 = document.createElement("button");
    btn2.setAttribute("id", "bt-4" + class_name)
    btn2.innerHTML = 'Submit Form';
    btn2.style.backgroundColor = "darkred";
    btn2.style.width = "8rem";
    btn2.marginLeft = "4rem";


    btn2.style.height = "2rem";

    btn2.style.marginLeft = "5rem";
    btn2.style.color = "white";


    div3.appendChild(btn2);


    const tell = document.getElementById("bt-42");
    const tell2 = document.getElementById("bt-22");
   
    console.log(tell);

    if (class_name == 3) {
      tell.style.visibility = "hidden";
      tell2.style.visibility = "hidden";

      
      
    }
    
   

    class_name++


    const para3 = document.createElement("br");
    div3.appendChild(para3);
    const para4 = document.createElement("br");
    div3.appendChild(para4);
    

    btn1.addEventListener('click', (e) => {


      e.preventDefault();

      console.log(input.value);
      console.log(input1.value);
      console.log(input2.value);

      var validReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (input.value === "" || input1.value === "" || input2.value === "") {

        alert("Please fill out all fields properly!");

        e.preventDefault();
        input.value = "";
        input1.value = "";
        input2.value = "";
        return;
      }
      else if (!input2.value.match(validReg)) {
        e.preventDefault();
        alert("Please write email in appropraite format");

        input2.value = "";
        return;
      }
      else {
        input.setAttribute("readonly", "readonly");
        input1.setAttribute("readonly", "readonly");
        input2.setAttribute("readonly", "readonly");
        alert("Your input has been saved");
      }


      

    });

    let submitbutton = 0;

    
const ec= document.getElementById("email12");
let ef= ec.value;
    btn2.addEventListener('click', (e) => {
      e.preventDefault();
      submitbutton++;

      
      let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      console.log(submitbutton);
      let valid = true;

      if (Name.value === "" || LastName.value === "" || Email.value === "" || input.value === "" || input1.value === "" || input2.value === "") {
        alert("Please fill out all fields properly!");
        valid = false;
        submitbutton = 0;
        console.log(submitbutton);

      }
      else if (!input2.value.match(validRegex) || !Email.value.match(validRegex)) {
        alert("Please write email in appropriate format");
        valid = false;
        submitbutton = 0;
        console.log(submitbutton);

      }

      else if (Email.value == input2.value || input2.value==ef || Email.value==ef) {
        alert("Sorry Your Email ID should be Unique");
        valid = false;
        submitbutton = 0;
        console.log(submitbutton);


      }




      if (valid && submitbutton == 1) {


        document.write("<h1>Wow ! You have been registered Succesfully</h1>");
       form.submit();

      }
    });







    const btndel = btn;


    btndel.addEventListener('click', (e) => {

      e.preventDefault();
      addMoreClicks--;
      class_name--;


      if (addMoreClicks == 0) {
        submit.style.visibility = "visible";
      }

      if (class_name == 3) {
        tell.style.visibility = "visible";
        tell2.style.visibility = "visible";

      }


      div.remove();



      currentHeight -= 200;
      mainDiv.style.height = `${currentHeight}px`;








    });


  });


})







