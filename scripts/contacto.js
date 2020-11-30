/* El script parte cuando la página está lista */ 
$(document).ready(function(){
    
	/* Variables de error */ 
	var nameErrorIsDisplayed = false; 
	var lastNameErrorIsDisplayed = false;
	var emailErrorIsDisplayed = false; 
	var addressErrorIsDisplayed = false; 
	var contactPhoneErrorIsDisplayed = false; 
	var secondaryPhoneErrorIsDisplayed = false;
	var questionErrorIsDisplayed = false; 
	
	/* Funciones de evento que operan cuando el campo correspondiente
	   pierde el foco */ 
	   
	/* Nombres */ 
	$("#name").focusout(function(){	
	    /* Paso 1: Chequear si el campo de nombres no esta vacío */ 
		if ($("#name").val() != "") {
		    /* Paso 2: Chequear si el campo de apellidos se llenó de espacios en blanco */ 
		    if (isThisFieldWithOnlyWhiteSpaces($("#name").val()) != 0) {
			    /*   El campo de nombres no esta vacío y no está lleno de espacios en blanco 
				     Exito: Se cumplieron los pasos 1 y 2 */ 
				$("#formgroup-name").removeClass("has-error");
			    $("#formgroup-name").addClass("has-success");
			    $("#formname-status").html("");
			    $("#formname-status").append("<span class='glyphicon glyphicon-ok form-control-feedback'></span>");
			    $("#formname-error").html("");
			    nameErrorIsDisplayed = false;
			}
			else {
			    if (nameErrorIsDisplayed == true) {
				   /* Error: Campo de nombres lleno de espacios en blanco, 
					  cuando ya hay un error  */ 
				   $("#formname-error").html("");
				   $("#formname-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			    } else {
			       /* Error: Campo de nombres lleno de espacios en blanco, 
					  cuando no hay un error desplegado */ 
			       $("#formgroup-name").removeClass("has-success");
			       $("#formgroup-name").addClass("has-error");
			       $("#formname-status").html("");
			       $("#formname-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			       $("#formname-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			       nameErrorIsDisplayed = true;
			   }
			}
			
		} else {    
		    if (nameErrorIsDisplayed == true ) {
			   /* Error: Campo de nombres vacío, 
				  cuando ya hay un error puesto  */ 
			   $("#formname-error").html("");
			   $("#formname-error").append("Este campo no puede estar vacío");
			} else {
			   /* Error: Campo de nombres vacío, 
				  cuando no hay un error desplegado  */ 
			   $("#formgroup-name").removeClass("has-success");
			   $("#formgroup-name").addClass("has-error");
			   $("#formname-status").html("");
			   $("#formname-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			   $("#formname-error").append("Este campo no puede estar vacío");
			   nameErrorIsDisplayed = true; 
			}
		}
	});
	
	/* Apellidos */ 
	$("#lastname").focusout(function(){	
	    /* Paso 1: Chequear si el campo de apellidos no esta vacío */ 
		if ($("#lastname").val() != "") {
		    /* Paso 2: Chequear si el campo de apellidos se llenó de espacios en blanco */ 
		    if (isThisFieldWithOnlyWhiteSpaces($("#lastname").val()) != 0) {
			    /*   El campo de apellidos no esta vacío y no está lleno de espacios en blanco 
				     Exito: Se cumplieron los pasos 1 y 2 */ 
				$("#formgroup-lastname").removeClass("has-error");
			    $("#formgroup-lastname").addClass("has-success");
			    $("#formlastname-status").html("");
			    $("#formlastname-status").append("<span class='glyphicon glyphicon-ok form-control-feedback'></span>");
			    $("#formlastname-error").html("");
			    lastNameErrorIsDisplayed = false;
			}
			else {
				/* Error: Campo de apellidos lleno de espacios en blanco, 
				   cuando ya hay un error  */ 
			    if (lastNameErrorIsDisplayed == true) {
				   $("#formlastname-error").html("");
				   $("#formlastname-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			    } else {
			       /* Error: Campo de apellidos lleno de espacios en blanco, 
					  cuando no hay un error desplegado */ 
			       $("#formgroup-lastname").removeClass("has-success");
			       $("#formgroup-lastname").addClass("has-error");
			       $("#formlastname-status").html("");
			       $("#formlastname-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			       $("#formlastname-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			       lastNameErrorIsDisplayed = true;
			   }
			}	
		} else {  
		    if (lastNameErrorIsDisplayed == true ) {
			   /* Error: Campo de apellidos vacío, 
				  cuando ya hay un error  */ 
			   $("#formlastname-error").html("");
			   $("#formlastname-error").append("Este campo no puede estar vacío");
			} else {
			   /* Error: Campo de apellidos vacío, 
				  cuando no hay un error desplegado  */ 
			   $("#formgroup-lastname").removeClass("has-success");
			   $("#formgroup-lastname").addClass("has-error");
			   $("#formlastname-status").html("");
			   $("#formlastname-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			   $("#formlastname-error").append("Este campo no puede estar vacío");
			   lastNameErrorIsDisplayed = true; 
			}
		}
	});
	
	
	/* Email */  
	$("#email").focusout(function(){
	    /* Paso 1: Chequear si el campo de email no está vacío */
		if($("#email").val() != "") {
		    /* Paso 2: Chequear si el campo de email se llenó de espacios en blanco */
		    if (isThisFieldWithOnlyWhiteSpaces($("#email").val()) != 0) {
		        /* Paso 3: Chequear si el email escrito es válido */ 
		        if (isEmailValid($("#email").val())) {
			       /* El campo de Email no esta vacío ni con espacios en blanco, y el Email escrito es válido
				      Éxito: Se han cumplido los pasos 1, 2 y 3*/ 
			       $("#formgroup-email").removeClass("has-error");
			       $("#formgroup-email").addClass("has-success");
			       $("#formemail-status").html("");
			       $("#formemail-status").append("<span class='glyphicon glyphicon-ok form-control-feedback'></span>");
			       $("#formemail-error").html("");	
			       emailErrorIsDisplayed = false;
			    } else {
			       /* Error: Dirección de Email no válida, 
					  cuando ya hay un error  */ 
			       if (emailErrorIsDisplayed == true) {
				       $("#formemail-error").html("");
				       $("#formemail-error").append("Esta dirección de email no es válida");
			       } else {
			           /* Error: Dirección de Email vacío, 
						  cuando no hay un error desplegado */ 
			           $("#formgroup-email").removeClass("has-success");
			           $("#formgroup-email").addClass("has-error");
			           $("#formemail-status").html("");
			           $("#formemail-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			           $("#formemail-error").append("Esta dirección de email no es válida");
			           emailErrorIsDisplayed = true;
			        }
			    }	 
			} else {
			    /* Error: Campo de Email lleno de espacios en blanco, 
				   cuando ya hay un error  */ 
			       if (emailErrorIsDisplayed == true) {
				       $("#formemail-error").html("");
				       $("#formemail-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			       } else {
			           /* Error: Campo de Email lleno de espacios en blanco, 
						  cuando no hay un error desplegado */ 
			           $("#formgroup-email").removeClass("has-success");
			           $("#formgroup-email").addClass("has-error");
			           $("#formemail-status").html("");
			           $("#formemail-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			           $("#formemail-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			           emailErrorIsDisplayed = true;
			        }
			}
		} else {
		   if (emailErrorIsDisplayed == true) {
		      /* Error: Campo de Email vacío, 
				 cuando no hay un error */ 
		      $("#formemail-error").html("");
			  $("#formemail-error").append("Este campo no puede estar vacío ni puede tener solo espacios en blanco");
		   } else {
		      /* Error: Campo de Email vacío, 
				 cuando ya hay un error desplegado */ 
		      $("#formgroup-email").removeClass("has-success");
			  $("#formgroup-email").addClass("has-error");
			  $("#formemail-status").html("");
			  $("#formemail-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			  $("#formemail-error").append("Este campo no puede estar vacío ni tener solo espacios en blanco");
			  emailErrorIsDisplayed = true;
		   }
		}
	});
	
	/* Dirección */ 
	$("#address").focusout(function(){
	     /* Paso 1: Chequear si el campo de dirección no esta vacío */
		 if($("#address").val() != "") {
		    /* Paso 2: Chequear si el campo de dirección está lleno de espacios en blanco */
		    if (isThisFieldWithOnlyWhiteSpaces($("#address").val()) != 0) {
		       /*  El campo de dirección no está vacío ni está lleno de espacios en blanco
				   Éxito: Se han cumplido los pasos 1 y 2 */ 
		       $("#formgroup-address").removeClass("has-error");
			   $("#formgroup-address").addClass("has-success");
			   $("#formaddress-status").html("");
			   $("#formaddress-status").append("<span class='glyphicon glyphicon-ok form-control-feedback'></span>");
			   $("#formaddress-error").html("");	
			   addressErrorIsDisplayed = false; 
			} else {
			    if (addressErrorIsDisplayed == true) {
				   /* Error: Campo de apellidos lleno de espacios en blanco, 
					  cuando ya hay un error */ 
				   $("#formaddress-error").html("");
				   $("#formaddress-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			    } else {
			       /* Error: Campo de apellidos lleno de espacios en blanco, 
					  cuando no hay un error desplegado */ 
			       $("#formgroup-address").removeClass("has-success");
			       $("#formgroup-address").addClass("has-error");
			       $("#formaddress-status").html("");
			       $("#formaddress-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			       $("#formaddress-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			       addressErrorIsDisplayed = true;
			   }
			}
		 } else {
			   if (addressErrorIsDisplayed == true) {
			      /* Error: Campo de Dirección vacío, 
					 cuando ya hay un error */
			      $("#formaddress-error").html("");
				  $("#formaddress-error").append("Este campo no puede estar vacío");
		       } else {  
			      /* Error: Campo de Dirección vacío, 
					 cuando no hay un error desplegado */ 
			      $("#formgroup-address").removeClass("has-success");
			      $("#formgroup-address").addClass("has-error");
			      $("#formaddress-status").html("");
			      $("#formaddress-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			      $("#formaddress-error").append("Este campo no puede estar vacío");
			      addressErrorIsDisplayed = true;
			   }   
		 }
	});
		
	/* Teléfono de contacto principal */ 
	$("#contactnumber1").focusout(function(){
	     /* Paso 1: Chequear si el campo de Teléfono de contacto principal no esta vacío */ 
		 if($("#contactnumber1").val() != "") {
		     /* Paso 2: Chequear si el campo de Teléfono de contacto principal no está lleno de espacios en blanco */ 
		     if (isThisFieldWithOnlyWhiteSpaces($("#contactnumber1").val()) != 0) {
		         /*  El campo de Teléfono de contacto principal no está vacío ni está lleno de espacios en blanco
					 Éxito: Se han cumplido los pasos 1 y 2 */ 
		         $("#formgroup-contactphone").removeClass("has-error");
			     $("#formgroup-contactphone").addClass("has-success");
			     $("#formcontactphone-status").html("");
			     $("#formcontactphone-status").append("<span class='glyphicon glyphicon-ok form-control-feedback'></span>");
			     $("#formcontactphone-error").html("");	
			     contactPhoneErrorIsDisplayed = false; 
			 } else {
			    if (contactPhoneErrorIsDisplayed == true) {
				   /* Error: Campo de Teléfono de contacto principal
					  lleno de espacios en blanco, cuando ya hay un error */ 
				   $("#formcontactphone-error").html("");
				   $("#formcontactphone-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			    } else {
			       /* Error: Campo de Teléfono de contacto principal 
					  lleno de espacios en blanco, cuando no hay un error desplegado */ 
			       $("#formgroup-contactphone").removeClass("has-success");
			       $("#formgroup-contactphone").addClass("has-error");
			       $("#formcontactphone-status").html("");
			       $("#formcontactphone-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			       $("#formcontactphone-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			       contactPhoneErrorIsDisplayed = true;
			    }
			 }	   
	     } else {
			   if (contactPhoneErrorIsDisplayed == true) {
			      /* Error: Campo de Teléfono de contacto principal vacío, 
					 cuando ya hay un error */ 
			      $("#formcontactphone-error").html("");
				  $("#formcontactphone-error").append("Este campo no puede estar vacío");
		       } else {
			      /* Error: Campo de Teléfono de contacto principal vacío, 
					 cuando no hay un error desplegado */ 
			      $("#formgroup-contactphone").removeClass("has-success");
			      $("#formgroup-contactphone").addClass("has-error");
			      $("#formcontactphone-status").html("");
			      $("#formcontactphone-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			      $("#formcontactphone-error").append("Este campo no puede estar vacío");
			      contactPhoneErrorIsDisplayed = true;
			   }   
		 }
	});

	/* Teléfono de contacto secundario */ 
	$("#contactnumber2").focusout(function(){
		if ($("#contactnumber2").val() != "") {
		   if (isThisFieldWithOnlyWhiteSpaces($("#contactnumber2").val()) != 0) {
		       /* Éxito: Campo de Teléfono de contacto secundario no vacío */  
		       $("#formgroup-secondaryphone").removeClass("has-error");
		       $("#formgroup-secondaryphone").addClass("has-success");
		       $("#formsecondaryphone-status").html("");
		       $("#formsecondaryphone-status").append("<span class='glyphicon glyphicon-ok form-control-feedback'></span>");
		       $("#formsecondaryphone-error").html("");
		       secondaryPhoneErrorIsDisplayed = false; 
		   } else {
		       if (secondaryPhoneErrorIsDisplayed == true) {
				   /* Error: Campo de Teléfono de contacto secundario 
					  lleno de espacios en blanco, cuando ya hay un error */ 
				   $("#formsecondaryphone-error").html("");
				   $("#formsecondaryphone-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			    } else {
			       /* Error: Campo de Teléfono de contacto secundario 
					  lleno de espacios en blanco, cuando no hay un error desplegado */ 
			       $("#formgroup-secondaryphone").removeClass("has-success");
			       $("#formgroup-secondaryphone").addClass("has-error");
			       $("#formsecondaryphone-status").html("");
			       $("#formsecondaryphone-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			       $("#formsecondaryphone-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			       secondaryPhoneErrorIsDisplayed = true;
			    }
		   }   
		} else {
		   if (secondaryPhoneErrorIsDisplayed == true) {
		       /* Error: Campo de Teléfono de contacto secundario vacío, 
				  cuando ya hay un error */ 
		       $("#formsecondaryphone-error").html("");
			   $("#formsecondaryphone-error").append("Este campo no puede estar vacío");
		   } else {
		       /* Error: Campo de Teléfono de contacto secundario vacío, 
				  cuando no hay un error desplegado */ 
		       $("#formgroup-secondaryphone").removeClass("has-success");
			   $("#formgroup-secondaryphone").addClass("has-error");
			   $("#formsecondaryphone-status").html("");
			   $("#formsecondaryphone-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			   $("#formsecondaryphone-error").append("Este campo no puede estar vacío");
			   secondaryPhoneErrorIsDisplayed = true; 
		   }
		}
	});
	
	/* Consulta */ 
	$("#question").focusout(function(){
	     /* Paso 1: Chequear si el campo de Consulta no esta vacío */ 
		 if($("#question").val() != "") {
		       /* Paso 2: Chequear si el campo de Consulta no tiene espacios en blanco */ 
		       if (isThisFieldWithOnlyWhiteSpaces($("#question").val()) != 0) {
		           /*  El campo de Consulta no esta vacío ni tiene espacios en blanco 
					   Éxito: Se han cumplido los pasos 1 y 2 */
		           $("#formgroup-question").removeClass("has-error");
			       $("#formgroup-question").addClass("has-success");
			       $("#formquestion-status").html("");
			       $("#formquestion-status").append("<span class='glyphicon glyphicon-ok form-control-feedback'></span>");
			       $("#formquestion-error").html("");	
			       questionErrorIsDisplayed = false; 
		       } else {
			       if (questionErrorIsDisplayed == true) {
				      /* Error: Campo de Consulta lleno de espacios en blanco, 
						 cuando ya hay un error */ 
				      $("#formquestion-error").html("");
				      $("#formquestion-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			       } else {
			          /* Error: Campo de Consulta lleno de espacios en blanco, 
						 cuando no hay un error desplegado */ 
			          $("#formgroup-question").removeClass("has-success");
			          $("#formgroup-question").addClass("has-error");
			          $("#formquestion-status").html("");
			          $("#formquestion-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			          $("#formquestion-error").append("Este campo no se puede llenar solamente con espacios en blanco");
			          questionErrorIsDisplayed = true;
			       }
			   }
			} else {
			   if (questionErrorIsDisplayed == true) {
			      /* Error: Campo de Consulta vacío, 
					 cuando ya hay un error */ 
			      $("#formquestion-error").html("");
			      $("#formquestion-error").append("Este campo no puede estar vacío");
		       } else {
			      /* Error: Campo de Consulta vacío, 
					 cuando no hay un error desplegado */ 
			      $("#formgroup-question").removeClass("has-success");
			      $("#formgroup-question").addClass("has-error");
			      $("#formquestion-status").html("");
			      $("#formquestion-status").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
			      $("#formquestion-error").append("Este campo no puede estar vacío");
			      questionErrorIsDisplayed = true;
			   }  
			}
	});
	
	/* Funciones auxiliares */ 
	
	/* Función para chequear la validez del email escrito 
	   mediante una expresión regular */ 
	function isEmailValid(emailAddress) {
       var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
       return pattern.test(emailAddress);
    };
		
	/* Función para chequear si un campo se ha llenado con espacios en blanco, 
		por medio de una expresión regular */ 	
	function isThisFieldWithOnlyWhiteSpaces(string) {
		var pattern = /^\s+$/;
		var result = string.search(pattern);
		return result; 
	}	
		
});