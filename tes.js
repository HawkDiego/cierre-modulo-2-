let autos = require("./autos");
const concesionaria = {
  autos,
  buscarAuto: function (placa) {
    for (let i = 0; i < autos.length; i++) {
      if (placa == autos[i].patente) {
        return autos[i];
      } 
    }
  },
  venderAuto: function (placa) {
    return this.buscarAuto(placa).vendido = true;
       
  }
};


console.log(concesionaria.venderAuto("JJK116"));
console.log(concesionaria.buscarAuto("JJK116"))