function contato(){

	$(".contato_button").attr("disabled", true);

	erros = "";
		
    emptyFront("nome");
    emptyFront("email");
	emptyFront("assunto");
	emptyFront("telefone");
    emptyFront("mensagem");

	if(erros!=""){
		alert(" É necessário preencher todos os campos!");
		$(".contato_button").attr("disabled", false);
		return false;
	}
	
	$.post( "xt/xt.contato.php",
	{
				
		nome    	: $("#nome").val(), 
		email    	: $("#email").val(), 
		assunto  	: $("#assunto").val(), 
        telefone   	: $("#telefone").val(), 
        mensagem 	: $("#mensagem").val()
		
	},
	function( arrRetorno, textStatus )
	{
		
		$(".contato_button").attr("disabled", false);
		alert(" "+arrRetorno.strMensagem);
					
	},"json");
	
}

function trabalheConosco(){

	$(".contato_button").attr("enabled", true);

	erros = "";
		
    emptyFront("nome-trabalhe");
    emptyFront("email-trabalhe");
	emptyFront("telefone-trabalhe");
    emptyFront("estado-trabalhe");
	emptyFront("cidade-trabalhe");
	emptyFront("funcao-trabalhe");
	emptyFront("arquivo-trabalhe");

	if(erros!=""){
		alert(" É necessário preencher todos os campos!");
		$(".contato_button").attr("disabled", false);
		return false;
	}
	
	$.post( "xt/xt.trabalhe-conosco.php",
	{
				
		nome    	: $("#nome-trabalhe").val(), 
		email    	: $("#email-trabalhe").val(), 
        telefone   	: $("#telefone-trabalhe").val(), 
        estado	 	: $("#estado-trabalhe").val(), 
        cidade	 	: $("#cidade-trabalhe").val(), 
        funcao	 	: $("#funcao-trabalhe").val(), 
        arquivo 	: $("#arquivo-trabalhe").val(), 
        loja	 	: $("#loja-trabalhe").val()
		
	},
	function( arrRetorno, textStatus )
	{
	
		$(".contato_button").attr("disabled", false);	
		alert(" "+arrRetorno.strMensagem);
					
	},"json");
	
}