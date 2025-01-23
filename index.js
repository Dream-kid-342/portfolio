var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mumoenock@gmail.com",
        Password : "kinyanjui",
        To : 'mumoenock342@gmail.com',
        From : document.getElementById('email').value,
        Subject : "This is the subject",
        Body : document.getElementById('message').value
    }).then(
      message => alert("SUCCESS!!")
    )
}