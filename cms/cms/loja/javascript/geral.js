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
			window.scrollTo(0, 0);
			
		}
					
	},"json");
	
}

function cadastrar(){
	
	erros = "";
	
    empty("nome", "spanNome");
    empty("cep", "spanCep");
    empty("logradouro", "spanLogradouro");
	empty("numero", "spanNumero");
    empty("bairro", "spanBairro");
	empty("cidade", "spanCidade");
    empty("estado", "spanEstado");
    empty("horario", "spanHorario");
	empty("telefone", "spanTelefone");
	empty("whatsapp", "spanWhatsapp");
    empty("wavarejo", "spanWavarejo");
	empty("waatacado", "spanWaatacado");
    empty("mapa", "spanMapa");
	empty("imagem", "spanImagem");

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
				
		nome        : $("#nome").val(), 
        cep   	 	: $("#cep").val(), 
        logradouro  : $("#logradouro").val(), 
		numero  	: $("#numero").val(), 
		complemento : $("#complemento").val(), 
        referencia  : $("#referencia").val(), 
        bairro   	: $("#bairro").val(), 
		cidade  	: $("#cidade").val(), 
		estado      : $("#estado").val(), 
        horario   	: $("#horario").val(), 
		telefone   	: $("#telefone").val(), 
		whatsapp   	: $("#whatsapp").val(), 
        wavarejo   	: $("#wavarejo").val(), 
		waatacado  	: $("#waatacado").val(), 
		mapa        : $("#mapa").val(), 
        latitude   	: $("#latitude").val(), 
        longitude   : $("#longitude").val(), 
        imagem   	: $("#imagem").val()
		
	},
	function( arrRetorno, textStatus )
	{
		
		$("#info").hide();
		$("#textStatusBar" + arrRetorno.strTexto).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
		window.scrollTo(0, 0);
					
	},"json");
	
}

function editar(){
	
	erros = "";
	
    empty("nome", "spanNome");
    empty("cep", "spanCep");
    empty("logradouro", "spanLogradouro");
	empty("numero", "spanNumero");
    empty("bairro", "spanBairro");
	empty("cidade", "spanCidade");
    empty("estado", "spanEstado");
    empty("horario", "spanHorario");
	empty("telefone", "spanTelefone");
	empty("whatsapp", "spanWhatsapp");
    empty("wavarejo", "spanWavarejo");
	empty("waatacado", "spanWaatacado");
    empty("mapa", "spanMapa");
	empty("imagem", "spanImagem");
	
	if(erros!=""){
		$("#info").hide();
		$("#textStatusBarWarning").html(" É necessário preencher todos os campos obrigatórios!");
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
        nome        : $("#nome").val(), 
        cep   	 	: $("#cep").val(), 
        logradouro  : $("#logradouro").val(), 
		numero  	: $("#numero").val(), 
		complemento : $("#complemento").val(), 
        referencia  : $("#referencia").val(), 
        bairro   	: $("#bairro").val(), 
		cidade  	: $("#cidade").val(), 
		estado      : $("#estado").val(), 
        horario   	: $("#horario").val(), 
		telefone   	: $("#telefone").val(), 
		whatsapp   	: $("#whatsapp").val(), 
        wavarejo   	: $("#wavarejo").val(), 
		waatacado  	: $("#waatacado").val(), 
		mapa        : $("#mapa").val(), 
        latitude   	: $("#latitude").val(), 
        longitude   : $("#longitude").val(), 
        imagem   	: $("#imagem").val()
		
	},
	function( arrRetorno, textStatus )
	{
		
		$("#info").hide();
		$("#textStatusBar" + arrRetorno.strTexto).html(" "+arrRetorno.strMensagem);
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
		$("#textStatusBar" + arrRetorno.strTexto).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
		window.scrollTo(0, 0);
					
	},"json");
}

function buscarEndereco(cep){

	$("#logradouro").val("Carregando...");
	$("#numero").val("Carregando...");
    $("#complemento").val("Carregando...");
	$("#referencia").val("Carregando...");
    $("#bairro").val("Carregando...");
    $("#cidade").val("Carregando...");
    $("#estado").val("Carregando...");


	var cep = cep.replace(/\D/g, '');

	$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

        if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("#logradouro").val(dados.logradouro).attr('disabled',true);
            $("#numero").val("").attr('disabled',false);
            $("#complemento").val("").attr('disabled',false);
			$("#referencia").val("").attr('disabled',false);
            $("#bairro").val(dados.bairro).attr('disabled',true);
            $("#cidade").val(dados.localidade).attr('disabled',true);  
            $("#estado").val(dados.uf).attr('disabled',true);
        } //end if.
        else {
            $("#logradouro").val("").attr('disabled',false);
            $("#numero").val("").attr('disabled',false);
            $("#complemento").val("").attr('disabled',false);
			$("#referencia").val("").attr('disabled',false);
		    $("#bairro").val("").attr('disabled',false);
		    $("#cidade").val("").attr('disabled',false);
		    $("#estado").val("").attr('disabled',false);

        }
    });
	
}