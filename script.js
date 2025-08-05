$(function () {
	let id = 0;
	$("#botao").click(function () {
		if ($("#novoContato").val() !== "") {
			id++;
			$("#lista").append("<li id='" + id + "'>" + $("#novoContato").val() + "  <button onclick=\"excluir(" + id + ")\">X</button> </li>")
		}
	})

	$("#lista").on("click", "li", function () {
		$(this).toggleClass("selecionado");
	})

})

function excluir(id) {
	$("li#" + id).remove();
}
