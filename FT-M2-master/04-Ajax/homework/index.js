var address = "http://localhost:5000/amigos/";

// Mostrar amigos
$("#boton").click(function () {
  $.get(address, function (data) {
    if ($("#lista").children().length > 0) $("li").remove();

    for (const i of data) {
      // document.createElement('li');
      $(`<li>${i.name}</li>`).appendTo("#lista");
    }
  });
});

// Buscar amigo
$('#search').click(function () {
    $.get(address + $('#input').val(), function (data) {
        $('#amigo').html(data.name)
    });
});


$('#delete').click(function () {
    $.ajax({
        url: address + $('#inputDelete').val(),
        type: 'DELETE',
        success: function (data) {
            $('#success').html('Tu amigo fue borrado exitosamente')
        }
    })
})