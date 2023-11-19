$("document").ready(function() {
  $("#forcar").hide();
  $("#btncep").click(function() {
    $("#forcar").show();
    let cep = $("#cep").val();
    console.log("CEP: " + cep);
    let link = ("https://brasilapi.com.br/api/cep/v2/{cep}".replace("{cep}", cep));
    $.get(link, function(data, status) {
      console.log(data);
      $("#rua").val(data.street);
      $("#bairro").val(data.neighborhood);
      $("#cidade").val(data.city);
      $("#estado").val(data.state);
    });
  });
  $("#btncod").click(function() {
    console.log("ok");
    let cod = $("#cod").val();
    console.log("cod: " + cod);
    let linkcar = ("https://brasilapi.com.br/api/fipe/preco/v1/{codigoFipe}".replace("{codigoFipe}", cod));
    $.get(linkcar, function(data, status) {
      console.log(data);

      $("#valor").val(data[0].valor);
      $("#marca").val(data[0].marca);
      $("#ano").val(data[0].anoModelo);
      $("#modelo").val(data[0].modelo);

    });
  });


});