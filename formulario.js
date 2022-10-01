const btnempezar = document.getElementById('btnempezar');
cargarEventos();
function cargarEventos()
{
    //btnempezar.addEventListener('click',verificar);
    document.getElementById("btnempezar").addEventListener("click", verificar);


}
function verificar(e)
{
    	e.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let edad = document.getElementById('edad').value;
        let email = document.getElementById('email').value;
        let cuenta = document.getElementById('cuenta').value;
        console.log(nombre);
        console.log(edad);
        console.log(email);
        console.log(cuenta);
        /*if(nombre==='' || edad === '' || email === '')
        {
            Swal.fire(
                {
                    type: 'error',  
                    tittle: 'Oops',
                    text: 'ingrese todos los campos requeridos',
                    showConfirmButton: false,
                    timer: 1000
                }
            )

        }*/
}