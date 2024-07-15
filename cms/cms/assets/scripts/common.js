/*
 * Arquivo que irá conter todas as funções javascript não específicas
 * O uso do framework jQuery são indispensáveis para o uso deste arquivo
 */

/*
 * Função EMPTY usada para verificar campos vazios
 */
function empty(strCampo, strSpan){
	if($("#"+strCampo).val() == "" || $("#"+strCampo).val() == null)
	{
		
		$("#" + strCampo).attr("class", "inputbox errorbox");
		$("#" + strSpan).attr("class", "red");
		$("#imagemErro" + strCampo).show('slow');
		erros += "erroVazio";
		return true;
		
	}
	else
	{
		$("#" + strCampo).attr("class", "inputbox");
		$("#" + strSpan).attr("class", "");
		$("#imagemErro" + strCampo).hide('slow');
		return false;
		
	}
}

/*
 * Função EMPTY usada para verificar campos vazios
 */
function emptyFront(strCampo){
	if($("#"+strCampo).val() == "" || $("#"+strCampo).val() == null)
	{
		
		erros += "erroVazio";
		return true;
		
	}
	else
	{
		
		return false;
		
	}
}

//evitando o envio do form
$('form').submit(function(evento){
	evento.preventDefault();
})

/*
 * Selecionando todos os checkbox da listagem
 * Para isso é preciso que o select que fará essa função tenha o ID selectAll
 */
/*$('#selectAll').click(function() {
	if(this.checked == true){
		$("input[type=checkbox]").each(function() { 
			this.checked = true; 
		});
	} else {
		$("input[type=checkbox]").each(function() { 
			this.checked = false; 
		});
	}
});*/	

/*
 * Função MASK usada para formatar expressões numéricas
 * EX: data, CPF, telefone, etc...
 */
function mask(objeto, evt, mask){

	var LetrasU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var LetrasL = 'abcdefghijklmnopqrstuvwxyz';

	var Letras  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

	var Numeros = '0123456789';

	var Fixos  = '().-:/ ';

	var Charset = " !\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_/`´abcdefghijklmnopqrstuvwxyz{|}~";

	

	evt = (evt) ? evt : (window.event) ? window.event : "";

	var value = objeto.value;

	if (evt) {

	 var ntecla = (evt.which) ? evt.which : evt.keyCode;

	 tecla = Charset.substr(ntecla - 32, 1);

	 if (ntecla < 32) return true;

	

	 var tamanho = value.length;

	 if (tamanho >= mask.length) return false;

	

	 var pos = mask.substr(tamanho,1);

	 while (Fixos.indexOf(pos) != -1) {

	  value += pos;

	  tamanho = value.length;

	  if (tamanho >= mask.length) return false;

	  pos = mask.substr(tamanho,1);

	 }

	

	 switch (pos) {

	   case '#' : if (Numeros.indexOf(tecla) == -1) return false; break;

	   case 'A' : if (LetrasU.indexOf(tecla) == -1) return false; break;

	   case 'a' : if (LetrasL.indexOf(tecla) == -1) return false; break;

	   case 'Z' : if (Letras.indexOf(tecla) == -1) return false; break;

	   case '*' : objeto.value = value; return true; break;

	   default : return false; break;

	 }

	}

	objeto.value = value;

	return true;

}

/*
 * Função CHECK_DATE usada verificação de datas válidas
 */

function check_date(date) {

   var err = 0

   string = date

   var valid = "0123456789/"

   var ok = "yes";

   var temp;

   for (var i=0; i< string.length; i++) {

     temp = "" + string.substring(i, i+1);

     if (valid.indexOf(temp) == "-1") err = 1;

   }

   if (string.length != 10) err=1

   b = string.substring(3, 5)		// month

   c = string.substring(2, 3)		// '/'

   d = string.substring(0, 2)		// day 

   e = string.substring(5, 6)		// '/'

   f = string.substring(6, 10)	// year

   if (b<1 || b>12) err = 1

   if (c != '/') err = 1

   if (d<1 || d>31) err = 1

   if (e != '/') err = 1

   if (f<1850 || f>2050) err = 1

   if (b==4 || b==6 || b==9 || b==11){

     if (d==31) err=1

   }

   if (b==2){

     var g=parseInt(f/4)

     if (isNaN(g)) {

         err=1 

     }

     if (d>29) err=1

     if (d==29 && ((f/4)!=parseInt(f/4))) err=1

   }

   if (err==1) {

    return false;

   }

   else {

   	//alert("Data correta");

    return true;

   }

}

/*
 * Função para fechar a barra de status do CMS
 */

function closeStatusBar(id) {
	$("#"+id).hide('slow');
}

/*
 * Arquivo que irá conter todas as funções javascript não específicas
 * O uso do framework jQuery são indispensáveis para o uso deste arquivo
 */

/*
 * Função verificarSenha usada para verificar se as senhas digitadas são iguais
 */
function verificarSenha(senha, spanSenha, confirmacao, spanConfirmacao){
	if($("#"+senha).val() != $("#"+confirmacao).val())
	{
		
		$("#" + senha).attr("class", "inputbox errorbox");
		$("#" + spanSenha).attr("class", "red");
		$("#imagemErro" + senha).show('slow');
		$("#" + confirmacao).attr("class", "inputbox errorbox");
		$("#" + spanConfirmacao).attr("class", "red");
		$("#imagemErro" + confirmacao).show('slow');
		validacao += "erroVazio";
		return true;
		
	}
	else
	{
		$("#" + senha).attr("class", "inputbox");
		$("#" + spanSenha).attr("class", "");
		$("#imagemErro" + senha).hide('slow');
		$("#" + confirmacao).attr("class", "inputbox");
		$("#" + spanConfirmacao).attr("class", "");
		$("#imagemErro" + confirmacao).hide('slow');
		validacao = "";
		return false;
		
	}
}