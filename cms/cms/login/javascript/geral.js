function logar(){
	
	$.post( "xt/xt.login.php",
	{
		
		email			: $("#email").val(),
		senha			: $("#senha").val()
		
	},
	function( arrRetorno, textStatus )
	{
		
		if(arrRetorno.strTipo=='success'){
		
			window.location='../loja/';
			
		} else {
			
			alert(arrRetorno.strMensagem);
			
		}
					
	},"json");
	
}

function recuperar(){
	
	$.post( "xt/xt.recuperar.php",
	{
		
		email			: $("#email").val()
		
	},
	function( arrRetorno, textStatus )
	{
		
		if(arrRetorno.strTipo=='success'){
		
			window.location='../login/';
			
		} else {
			
			alert(arrRetorno.strMensagem);
			
		}
					
	},"json");
	
}