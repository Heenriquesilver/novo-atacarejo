function cadastrar(){
	
	erros = "";
	
    empty("imagemOferta", "spanImagemOferta");

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
				
		imagem   : $("#imagemOferta").val()
		
	},
	function( arrRetorno, textStatus )
	{
		
		$("#info").hide();
		$("#textStatusBar" + arrRetorno.strTexto).html(" "+arrRetorno.strMensagem);
		$("#" + arrRetorno.strTipo).show();
		window.scrollTo(0, 0);
					
	},"json");
	
}
