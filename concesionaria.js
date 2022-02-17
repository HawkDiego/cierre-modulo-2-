let autos = require("./autos");
const concesionaria = {
  autos,
  buscarAuto(placa) {
    let lista = autos.filter(function (elemento) {
      return elemento.patente == placa;
    });
    if (lista == false) {
      return null;
    } else {
      return lista;
    }
  },
  venderAuto(placa) {
    return this.buscarAuto(placa)[0].vendido = true;
  },
  autosParaLaVenta() {
    let filter = autos.filter(function (elemento) {
      return elemento.vendido == false;
    });
    return filter;
  },
  autosNuevos(kilometraje) {
    let autosNuevos = this.autosParaLaVenta().filter(function (elemento) {
      return elemento.km <= 100;
    });
    return autosNuevos;
  },
  listaDeVentas() {
    let listaf = [0];
    let lista = autos.filter(function (elemento) {
      return elemento.vendido == true;
    });
    for (let i = 0; i < lista.length; i++) {
      listaf.push(lista[i].precio);
    }
    return listaf;
  },
  totalVentas() {
    if (concesionaria.listaDeVentas() == undefined) {
      return 0;
    } else {
      let suma = this.listaDeVentas().reduce(function (acum, elemento) {
        return acum + elemento, 0;
      });
      return suma;
    }
  },
  puedeComprar(persona, auto) {
    if (
      persona.capacidadDePagoTotal >= auto.precio &&
      persona.capacidadDePagoEnCuotas * auto.cuotas >= auto.precio
    ) {
      return true;
    } else {
      return false;
    }
  },
  autosQuePuedeComprar(persona) {
    let autosDisp = this.autosParaLaVenta();
    let lista = autosDisp.filter(function (autos) {
      return concesionaria.puedeComprar(persona, autos) === true;
    });
    return lista;
  },
};
console.log(concesionaria.venderAuto("JJK116"));
console.log(concesionaria.autosParaLaVenta());
/* console.log( */
/*   concesionaria.autosQuePuedeComprar({
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000,
  })
);
 */