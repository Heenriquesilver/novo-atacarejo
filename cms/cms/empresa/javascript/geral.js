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
			$("#textStatusBar" + arrRetorno.strTexto).html(" "+arrRetorno.strMensagem);
			$("#" + arrRetorno.strTipo).show();
			
		}
					
	},"json");
	
}

function cadastrar(){
	
	erros = "";
	
	empty("nome", "spanNome");
	empty("email", "spanEmail");
	empty("telefone", "spanTelefone");
	empty("cnpj", "spanCnpj");
	
	if(erros!=""){
		$("#info").hide();
		$("#textStatusBarWarning").html(" É necessário preencher todos os campos obrigatórios!");
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
		
		nome	 	: $("#nome").val(),
		email	 	: $("#email").val(),
		telefone	: $("#telefone").val(),
		cnpj	 	: $("#cnpj").val(),
		cep	 		: $("#cep").val(),
		endereco	: $("#endereco").val(),
		bairro	 	: $("#bairro").val(),
		cidade	 	: $("#cidade").val(),
		estado	 	: $("#estado").val()
		
	},
	function( arrRetorno, textStatus )
	{
		
		$("#info").hide();
		$("#textStatusBar" + arrRetorno.strTexto).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
					
	},"json");
	
}

function editar(){
	
	erros = "";
	
	empty("nome", "spanNome");
	empty("email", "spanEmail");
	empty("telefone", "spanTelefone");
	empty("cnpj", "spanCnpj");
	
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
		
		id	 		: $("#id").val(),
		nome	 	: $("#nome").val(),
		email	 	: $("#email").val(),
		telefone	: $("#telefone").val(),
		cnpj	 	: $("#cnpj").val(),
		cep	 		: $("#cep").val(),
		endereco	: $("#endereco").val(),
		bairro	 	: $("#bairro").val(),
		cidade	 	: $("#cidade").val(),
		estado	 	: $("#estado").val(),
		site	 	: $("#site").val()
		
	},
	function( arrRetorno, textStatus )
	{
		
		$("#info").hide();
		$("#textStatusBar" + arrRetorno.strTexto).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
					
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
		$("#textStatusBar" + arrRetorno.strTexto).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
					
	},"json");
}

function buscarEndereco(cep){

	$("#logradouro").val("Carregando...");
	$("#numero").val("Carregando...");
    $("#complemento").val("Carregando...");
    $("#bairro").val("Carregando...");
    $("#cidade").val("Carregando...");
    $("#estado").val("Carregando...");


	var cep = cep.replace(/\D/g, '');

	$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

        if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("#logradouro").val(dados.logradouro).attr('disabled',false);
            $("#numero").val("").attr('disabled',false);
            $("#complemento").val("").attr('disabled',false);
            $("#bairro").val(dados.bairro).attr('disabled',false);
            $("#cidade").val(dados.localidade).attr('disabled',false);
            $("#estado").val(dados.uf).attr('disabled',false);
        } //end if.
        else {
            $("#logradouro").val("").attr('disabled',false);
            $("#numero").val("").attr('disabled',false);
            $("#complemento").val("").attr('disabled',false);
		    $("#bairro").val("").attr('disabled',false);
		    $("#cidade").val("").attr('disabled',false);
		    $("#estado").val("").attr('disabled',false);

        }
    });
	
}