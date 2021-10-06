function validateFields(){
    var valid = false;
    var contInvalid = 0;
    var fields = ["nome", "email", "cep", "mensagem"];
    for(var i=0; i < fields.length; i++){
        if(!validateBlank(fields[i]) || validateEspecific(fields[i])){
            feedback(fields[i], "red");
            valid = false;
            contInvalid += 1;
        }
        else{
            feedback(fields[i], "green");
        }
    }

    if(contInvalid > 0){
        return false;
    }else{
        alert("Sua mensagem foi enviada!");
        return true;
        
    }

}

function validateBlank(fieldName){
    var field = document.getElementById(fieldName);
    if(field.value == ""){
        return false;
    }else{
        return true;
    }
}

function validateEspecific(fieldName){
    var field = document.getElementById(fieldName);
    if(fieldName == "cep"){
        return (field.value.length == 10);
    }
}

function feedback(fieldName, color){
    var field = document.getElementById(fieldName);
    field.style.borderColor = color;
    

}