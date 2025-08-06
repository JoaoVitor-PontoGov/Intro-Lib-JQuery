$(function () {
	let id = 0;
	$("#botao").click(function () {
		if ($("#novoContato").val() !== "") {
			id++;
			var li = $("<li style='display:none'  id='" + id + "'>&rarr; " + $("#novoContato").val() + "  <button onclick=\"excluir(" + id + ")\">X</button></li>");
			$("#lista").append(li);
			li.fadeIn("fast");
			atualizar();

		} else {
			alert("Contato vazio");
		}


	})

	$("#lista").on("click", "li", function () {
		$(this).toggleClass("selecionado");
	})

	$("#vizuLista").click(function () {
		$("#lista").slideToggle("fast", function () {
			const aberto = $(this).is(":visible");
			$("#vizuLista").text(aberto ? "Fechar lista <" : "Vizualizar lista >");
		});
	});

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

function atualizar() {
	var itens = $("#lista li");

	itens.sort(function (a, b) {
		return $(a).text().localeCompare($(b).text())
	});

	$("#lista li").remove();
	$("#lista").append(itens);
}