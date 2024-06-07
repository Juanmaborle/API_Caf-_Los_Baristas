

const Nombre = document.querySelector("[name=Nombre]");
const Apellido = document.querySelector("[name=Apellido]");
const CorreoElectronico = document.querySelector("[name=CorreoElectronico]");
const NumeroDeDni = document.querySelector("[name=NumeroDeDni]");
const Telefono = document.querySelector("[name=Telefono]");

const validateEmptyField =  (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = message;
    
    
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    

    }

}
 
const validateEmailformat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Por favor ingrese un email valido";
    
    
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
}
}
Nombre.addEventListener("blur", (e) => validateEmptyField("Escribe tu nombre", e));
Apellido.addEventListener("blur", (e) => validateEmptyField("Escribe tu apellido", e));
CorreoElectronico.addEventListener("blur", (e) => validateEmptyField("Escribe tu correo", e));
NumeroDeDni.addEventListener("blur", (e) => validateEmptyField("Escribe tu DNI", e));
Telefono.addEventListener("blur", (e) => validateEmptyField("Escribe tu telefono", e));
CorreoElectronico.addEventListener("input", validateEmailformat);