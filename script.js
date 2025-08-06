$(function () {
	let id = 0;
	$("#botao").click(function () {
		if ($("#novoContato").val() !== "") {
			id++;
			var li = $("<li style='display:none'  id='" + id + "'>&rarr; " + $("#novoContato").val() + "  <button onclick=\"excluir(" + id + ")\">X</button></li>");
			$("#lista").append(li);
			li.fadeIn("fast");
		} else {
			alert("Contato vazio");
		}

	})

	$("#lista").on("click", "li", function () {
		$(this).toggleClass("selecionado");
	})

	$("#vizuLista").click(function () {
		$("#lista").slideToggle("fast");
	})

	$("#pesquisar").click(function () {
		if ($("#buscaContato").val() !== "") {
			$("#lista li").hide();

			$("#lista li").filter(function () {
				return $(this).text().toLowerCase().indexOf($("#buscaContato").val().toLowerCase()) > -1;
			}).show();
		} else {
			$("#lista li").show();
		}
	})

})

function excluir(id) {
	$("li#" + id).fadeOut("fast", function () {
		$(this).remove();
	});
}
