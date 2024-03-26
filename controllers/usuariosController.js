function crearCuenta(req, res){
    res.render("crear-cuenta", {
      nombrePagina: "Crear tu Cuenta",
      paginaInterna: true
    });
}
export{
    crearCuenta
}