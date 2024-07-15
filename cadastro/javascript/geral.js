function cadastrar(){

	if(!$("#termos").prop("checked")){
		alert("É necessário aceitar os termos e políticas de privacidade para continuar!");
		return false;
	} 

	erros = "";
	tipo = "";

	if($("#pessoal").prop("checked")){
		tipo = $("input[name='tipo-oferta']:checked").val();
	} 
	if($("#atacado").prop("checked")){
		tipo = $("input[name='tipo-oferta']:checked").val();
	} 
	if(tipo == "") {
		erros = "erro";
	}
	
    emptyFront("nome", "");
    emptyFront("email", "");
	emptyFront("cpf", "");
	emptyFront("telefone", "");
    emptyFront("estado", "");
	emptyFront("cidades", "");

	if(erros!=""){
		alert(" É necessário preencher todos os campos!");
		return false;
	}
	
	$.post( "xt/xt.cadastrar.php",
	{
				
		nome    	: $("#nome").val(), 
		email    	: $("#email").val(), 
		cpf  		: $("#cpf").val(), 
        telefone   	: $("#telefone").val(), 
        estado 		: $("#estado").val(), 
        cidade 		: $("#cidades").val(),
		tipo		: tipo
		
	},
	function( arrRetorno, textStatus )
	{
		
		alert(" "+arrRetorno.strMensagem);
					
	},"json");
	
}