

function verif(){
    const errorNom = document.querySelector("#error-nom");
    const errorEmail = document.querySelector("#error-email");
    const errormessage = document.querySelector("#error-message");
    const errorPrenom = document.querySelector("#error-prenom");

    errorEmail.style.display = "none";
    errorNom.style.display = "none";
    errormessage.style.display = "none";
    errorPrenom.style.display ="none";
    //const de form et de submit qui manque//
    const form = document.querySelector("#formulaire")
    const submit = document.querySelector("#sub")
    const prenom = document.querySelector("#firstname").value;
    const nom = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    const validPrenom = prenom.length >= 1;
    const validNom = nom.length >= 1;
    const validEmail = /[@]/.test(email) && /[.]/.test(email);
    const validmessage = message.trim().length > 0;

    let ok = true;

    formulaire.addEventListener('submit', function(event) {                    
        event.preventDefault();
        validText();
       });

    if(!validEmail){
        errorEmail.style.display = "block";
        ok = false;
    }
   
    if(!validNom){
        errorNom.style.display = "block";
        ok = false;
    }
    if(!validmessage){
        errormessage.style.display = "block";
        ok = false;
    }
    if(!validPrenom){
        errorPrenom.style.display = "block";
        ok = false;
    }
    return ok;

}
