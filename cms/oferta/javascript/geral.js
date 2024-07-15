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
	
    empty("tipo", "spanTipo");
    empty("loja", "spanLoja");
	empty("nome", "spanNome");
	empty("inicio", "spanInicio");
	empty("fim", "spanFim");
	empty("imagem", "spanImagem");
    empty("arquivo", "spanArquivo");

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
				
		nome    : $("#nome").val(), 
		inicio  : $("#inicio").val(), 
		fim    	: $("#fim").val(), 
		loja    : $("#loja").val(), 
		imagem  : $("#imagem").val(), 
        tipo   	: $("#tipo").val(), 
        arquivo : $("#arquivo").val()
		
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
	
    empty("tipo", "spanTipo");
    empty("loja", "spanLoja");
	empty("nome", "spanNome");
	empty("inicio", "spanInicio");
	empty("fim", "spanFim");
	empty("imagem", "spanImagem");
    empty("arquivo", "spanArquivo");
	
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
		
		id	 	: $("#id").val(),
        nome    : $("#nome").val(), 
		inicio  : $("#inicio").val(), 
		fim    	: $("#fim").val(), 
		loja    : $("#loja").val(), 
		imagem  : $("#imagem").val(), 
        tipo   	: $("#tipo").val(), 
        arquivo : $("#arquivo").val()
		
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