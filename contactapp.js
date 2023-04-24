const fname =document.getElementById('fname')
const email =document.getElementById('email')
const massage =document.getElementById('massage')
const submit =document.getElementById('sumbit')

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>Full Name: </h1>${fname.value}
    <br>
    <h1>Email: </h1>${email.value}
    <br>
    <h1>Massage: </h1>${massage.value}
    `;

    Email.send({
        SecureToken : "c1cf74d0-7e5b-4c0b-bd81-ddf51138c1f7",
        To : 'cs.foodcloudpos@gmail.com', 
        From : email.value,
        Subject : "" + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
});