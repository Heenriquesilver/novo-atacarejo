function listar(offset){

	$("#warning").hide();
	$("#error").hide();
	$("#success").hide();
	$("#textStatusBarInfo").html(" Listando...");
	$("#info").show();

	$.post( "xt/xt.listar.php",
	{

		offset			: offset

	},
	function( arrRetorno, textStatus )
	{

		if(arrRetorno.strTipo=='success'){
		
			$("#info").hide();
			$("#feedback").html(arrRetorno.strHtml);
			
		} else {
			
			$("#info").hide();
			$("#textStatusBar" + arrRetorno.strTipo).html(" "+arrRetorno.strMensagem);
			$("#" + arrRetorno.strTipo).show();
			window.scrollTo(0, 0);
			
		}

	},"json");

}

function ordenar() {

    $("#warning").hide();
    $("#error").hide();
    $("#success").hide();
    $("#textStatusBarInfo").html(" Ordenando...");
    $("#info").show();

    categoria = "";

    $("input[id=id]").each(

        function () {

            if ($(this).val() != "") {

                categoria += $(this).val() + "#!!#";

            }

        }

    );

    $.post("xt/xt.ordenar.php",
        {

            categoria: categoria

        },
        function (arrRetorno, textStatus) {

            if (arrRetorno.strTipo == 'success') {

                $("#info").hide();
                $("#feedback").html(arrRetorno.strHtml);

            } else {

                $("#info").hide();
                $("#textStatusBar" + arrRetorno.strTipo).html(" " + arrRetorno.strMensagem);
                $("#" + arrRetorno.strTipo).show();

            }

			window.scrollTo(0, 0);

        }, "json");

}


function cadastrar(){

	erros = "";

	empty("nome");

	if(erros!=""){
		$("#info").hide();
		$("#textStatusBarWarning").html(" É necessário preencher todos os campos corretamente!");
		$("#warning").show();
		return false;
	}
	
	$("#warning").hide();
	$("#error").hide();
	$("#success").hide();
	$("#textStatusBarInfo").html(" Cadastrando...");
	$("#info").show();

	$.post( "xt/xt.cadastrar.php",
	{

		nome	: $("#nome").val()

	},
	function( arrRetorno, textStatus )
	{

		$("#info").hide();
		$("#textStatusBar" + arrRetorno.strTipo).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
		window.scrollTo(0, 0);

	},"json");

}

function editar(){

	erros = "";

	empty("nome");

	if(erros!=""){
		$("#textStatusBar").html(" É necessário preencher todos os campos corretamente!");
		$("#warning").show();
		return false;
	}
	
	$("#warning").hide();
	$("#error").hide();
	$("#success").hide();
	$("#textStatusBarInfo").html(" Editando...");
	$("#info").show();

	$.post( "xt/xt.editar.php",
	{

		id	 	: $("#id").val(),
		nome	: $("#nome").val()

	},
	function( arrRetorno, textStatus )
	{

		$("#info").hide();
		$("#textStatusBar" + arrRetorno.strTipo).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
		window.scrollTo(0, 0);

	},"json");

}

function alterarStatus(id, status){

	$("#warning").hide();
	$("#error").hide();
	$("#success").hide();
	if(status==1){
		$("#textStatusBarInfo").html(" Ativando...");
	}
	if(status==0){
		$("#textStatusBarInfo").html(" Desativando...");
	}
	if(status==2){
		$("#textStatusBarInfo").html(" Apagando...");
	}
	$("#info").show();

	$.post( "xt/xt.status.php",
	{

		id 		: id,
		status	: status

	},
	function( arrRetorno, textStatus )
	{

		listar($("#intOffset").val());
		$("#info").hide();
		$("#textStatusBar" + arrRetorno.strTipo).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
		window.scrollTo(0, 0);
		

	},"json");
}