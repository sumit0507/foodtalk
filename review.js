
shownotes();

// if a user leave a comment then add it to  the localstorage
var addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {

    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
noteobj.splice(1,0,addtxt.value);
    // noteobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    addtxt.value = "";
    console.log(noteobj);
    shownotes();
});
// show element form localstorage
function shownotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
        
    }
    else {
        noteobj = JSON.parse(notes);
    }

    let html = "";
    noteobj.forEach(function (element, index) {

        html +=`
        
        <div class="card">
            <h5 class="card_title>Review ${index + 1}</h5>
            <p class="card_text> ${element}</p>
           
            <button href="#"  id ="${index}"  onClick="deletecomment(this.id)" class="delbtn">Deleted</button>
        </div>`;


    });

    let notesElm = document.getElementById("notes");
    if (noteobj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Customer Review and View`;
    }

}
//   comment comment
function deletecomment(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    } else {
        noteObj = JSON.parse(notes);
    }

    noteobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    shownotes();
}

// contact us
document.querySelector('.contact-form').addEventListener("submit",submitForm);
function submitForm(e){
    e.preventDefault();
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let mobile = document.querySelector('.phone').value;
    let message = document.querySelector(".message").value;
    document.querySelector(".contact-form").reset();
    sendEmail(name,email,mobile,message);
    console.log(name,email,mobile,message);
}






function sendEmail(name,email,mobile ,message) {
    
    
       

       
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sumit8750048601@gmail.com",
      Password: "cnowooywvxmmhwgs",
      To: `${email}`,
      From: "sumit8750048601@gmail.com",
      Subject: "new mail form javascript"+name,
      Body:` Name:${name} <br/> Email:${email} <br/> Mobile:${mobile} <br/> Message:${message}`,
    })
      .then((message)=> alert("mail sent succesfully"))
          
              
        
       
} 

