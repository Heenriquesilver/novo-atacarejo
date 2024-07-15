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

		window.scrollTo(0, 0);
					
	},"json");
	
}

function cadastrar(){
	
	erros = "";
	validacao = "";
	
	empty("nome", "spanNome");
	empty("email", "spanEmail");
	empty("senha", "spanSenha");
	empty("confirmacao", "spanConfirmacao");
	empty("empresa", "spanEmpresa");
	
	if(erros!=""){
		$("#info").hide();
		$("#textStatusBarWarning").html(" É necessário preencher todos os campos obrigatórios!");
		$("#warning").show();
		return false;
	}
	
	verificarSenha("senha", "spanSenha", "confirmacao", "spanConfirmacao");
	
	if(validacao!=""){
		$("#info").hide();
		$("#textStatusBarWarning").html(" A senha e sua confirmação precisam ser iguais!");
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
		
		empresa	 		: $("#empresa").val(),
		nome	 		: $("#nome").val(),
		email	 		: $("#email").val(),
		senha			: $("#senha").val(),
		caracteristica	: $("#caracteristica").val(),
		foto	 		: $("#foto").val()
		
	},
	function( arrRetorno, textStatus )
	{
		
		$("#info").hide();
		$("#textStatusBar" + arrRetorno.strTexto).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
		window.scrollTo(0, 0);
					
	},"json");
	
}

function alterarSenha(){
	
	erros = "";
	validacao = "";
	
	empty("senha", "spanSenha");
	empty("confirmacao", "spanConfirmacao");
	
	if(erros!=""){
		$("#info").hide();
		$("#textStatusBarWarning").html(" É necessário preencher todos os campos obrigatórios!");
		$("#warning").show();
		return false;
	}
	
	verificarSenha("senha", "spanSenha", "confirmacao", "spanConfirmacao");
	
	if(validacao!=""){
		$("#info").hide();
		$("#textStatusBarWarning").html(" A senha e seu confirmação precisam ser iguais!");
		$("#warning").show();
		return false;
	}
	
	$("#warning").hide();
	$("#error").hide();
	$("#success").hide();
	$("#textStatusBarInfo").html(" Cadastrando...");
	$("#info").show();
	
	$.post( "xt/xt.alterar-senha.php",
	{
		
		id	 			: $("#id").val(),
		senha			: $("#senha").val()
		
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
	empty("email", "spanEmail");
	empty("caracteristica", "spanCaracteristica");
	empty("empresa", "spanEmpresa");
	
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
	
	$.post( "xt/xt.editar.php",
	{
		
		id	 			: $("#id").val(),
		empresa	 		: $("#empresa").val(),
		nome	 		: $("#nome").val(),
		email	 		: $("#email").val(),
		caracteristica	: $("#caracteristica").val(),
		foto	 		: $("#foto").val()
		
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