function home(req, res) {
    res.render("home", {
      nombrePagina: "Inicio",
      paginaInterna: false
    });
}

export { home };
