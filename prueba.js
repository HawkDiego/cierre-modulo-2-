let autos = require("./autos");
function buscarAuo(placa) {
    for (let i = 0; i < autos.length; i++) {
      if (placa == autos[i].patente) {
        return autos[i];
      }
    }
};
function buscarAuto(placa) {
    let lista = autos.filter(function (elemento) {
        return elemento.patente === placa;
    });
    if (lista == false) {
        return null;
    } else {
        return lista;
    }
}

console.log(buscarAuto('JJK116'));
