exports.paginaInicial = (req, res) => {
    res.send('<form action="/" method="POST"> Nome do cliente <input type="text" name="nome"> <button>Ola caralho </button> </form>');
}