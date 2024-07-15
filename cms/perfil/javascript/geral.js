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
	modulo = "";
	
	empty("nome", "spanNome");
	
	$("input[@id=modulo][checked]").each(
			
		function(){
			
			if($(this).val()!=""){
			
				modulo	+= $(this).val() + "#!!#";
				
			}
			
		}
	
	)
	
	modulo	= modulo.substr(0,modulo.length -4);
	
	if(modulo == "" || modulo == null)
	{
		
		$("#spanModulo").attr("class", "red");
		erros += "erroVazio";
		
	}
	else
	{
		$("#spanModulo").attr("class", "");
		erros = "";
		
	}
	
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
		
		nome	 	: $("#nome").val(),
		modulo	 	: modulo
		
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
	modulo = "";
	
	empty("nome", "spanNome");
	
	$("input[@id=modulo][checked]").each(
			
		function(){
			
			if($(this).val()!=""){
			
				modulo	+= $(this).val() + "#!!#";
				
			}
			
		}
	
	)
	
	modulo	= modulo.substr(0,modulo.length -4);
	
	if(modulo == "" || modulo == null)
	{
		
		$("#spanModulo").attr("class", "red");
		erros += "erroVazio";
		
	}
	else
	{
		$("#spanModulo").attr("class", "");
		erros = "";
		
	}
	
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
	
	$.post( "xt/xt.editar.php",
	{
		
		id	 		: $("#id").val(),
		nome	 	: $("#nome").val(),
		modulo	 	: modulo
		
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