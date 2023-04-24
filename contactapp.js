

function sendEmail(){

    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('massage').value;

    console.log("Clicked")

    let ebody = `
        <b>Full Name: </b>${fname};
        <br>    
        <b>Email: </b>${email};
        <br>
        <b>Message: </b>${message};
    `;

    Email.send({
        SecureToken : "c1cf74d0-7e5b-4c0b-bd81-ddf51138c1f7",
        To : 'cs.foodcloudpos@gmail.com', 
        From : 'cs.foodcloudpos@gmail.com',
        Subject : "Cloud POS problem report from " + email,
        Body : ebody
    }).then(function() {
        alert('Email sent successfully!');
    });
}