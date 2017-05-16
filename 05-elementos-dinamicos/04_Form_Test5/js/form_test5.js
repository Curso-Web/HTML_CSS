/**********************************************************
Funciones "externas" invocadas desde el formulario
en el proceso de validación

***********************************************************/
function validaDatos()
{
if( !validaCorreo() || !validaClave() || !validaNombre() || !validaFecha() )
	return false;
else
	return true;
//alert("Función validaDatos concluida");
}

function actualizarColor(Elemento)
{
//vuelve a cambiar los colores del elemento de error a los originales
with (window.document.forms.encuesta)
	{
	Elemento.style.color='black';
	Elemento.style.backgroundColor='white';	
	}
}

/**********************************************************
Funciones "internas" invocadas por otras funciones 
en el proceso de validación

***********************************************************/

function validaCorreo()
{
//window es el objeto del que parten todos los demas y es innecesario ponerlo
//window.document.forms[0].Correo.value.indexOf('@') serÃ­a el formulario 0, el primero y Ãºnico que tenemos
if(window.document.forms.encuesta.Correo.value.indexOf('@')<0)
	{
	alert('Correo incorrecto '+document.forms.encuesta.Correo.value);
	errorValidando(document.forms.encuesta.Correo);
	return false;
	}
else
	{
	//Actualizar(document.forms.encuesta.Correo);
	return true;
	}
}

function validaClave()
{
/*with (window.document.forms.encuesta)
con este with nos ahorramos poner la ruta completa de los elementos
  de nuestro fomulario encuesta  habrÃ­a que poner todo a lo que abarque entre llaves {}
   sino solo vale para el siguiente elemento
  en nuestro caso afecta a Clave2 porque esta concatenado por los if ... else*/
if (   Clave1.value=='' )
	{
	alert('No se ha introducido la Clave');
	errorValidando(document.forms.encuesta.Clave1);
	return false;
	}
else
	{
	//Actualizar(document.forms.encuesta.Clave1);
 	if ( Clave1.value != Clave2.value )
		{
		alert('Las claves deben ser iguales;');
		errorValidando(document.forms.encuesta.Clave2);
		return false;
		}
 	else
		{
		//Actualizar(document.forms.encuesta.Clave2);
		return true;
		}
	}
}

function validaNombre()
{
// with (window.document.forms.encuesta)
if (Nombre.value=='')
	{
	alert('No se ha introducido el Nombre');
	errorValidando(document.forms.encuesta.Nombre);
	return false;
	}
else
	{
	//Actualizar(document.forms.encuesta.Nombre);
	if (Apellido1.value=='')
		{
		alert('No se ha introducido el Apellido1');
		errorValidando(document.forms.encuesta.Apellido1);
		return false;
		}
	else
		{
		//Actualizar(document.forms.encuesta.Apellido1);
		if (Apellido2.value=='')
			{
			alert('No se ha introducido el Apellido2');
			errorValidando(document.forms.encuesta.Apellido2);
			return false;
			}
		else
			{
			//Actualizar(document.forms.encuesta.Apellido2);
			return true;
			}
		}
	}
}

function validaFecha()
{
with (window.document.forms.encuesta)
	if ( esNumero( parseInt(dia.value), parseInt(mes.value), parseInt(anio.value) ) && 
						comprobarFechas(dia.value,mes.value,anio.value) )
		{
		with (window.document.forms.encuesta)
			{
			//Actualizar(dia);
			//Actualizar(mes);
			//Actualizar(anio);
			return true;
			}
		}
	else
		{
		alert('Fecha incorrecta');
		with (window.document.forms.encuesta)
			{
			errorValidando(dia);
			errorValidando(mes);
			errorValidando(anio);
			return false;
			}
		}	
}

function comprobarFechas (dd,mm,aa)
{
var array_meses=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
if(esBisiesto(aa))
	array_meses[1]=29;
// Lo anterior deberÃ­a ir con el if final para comprobar el dÃ­a 
// y la funciÃ³n bisiesto solo deberÃ­a llamarla si el mes es 2 if(mm==2 && bisiesto(aa))
if (!esAnio(aa))
	return false;
else
	if (!esMes(mm))
		return false;
	else
		if(dd>array_meses[mm-1] || dd<=0)
			return false;
		else
			return true;
}

function esNumero (d,m,a)
{
if ( isNaN(d) || isNaN(m) || isNaN(a) )
	return false;
else
	return true;
}

function esBisiesto(aa)
{
return ((aa%4==0 && aa%100!=0) || aa%400==0);
}

function esMes (mm)
{
return (mm > 0 && mm < 13);
}

function esAnio (aa)
{
return (aa >= 1900 && aa <= 2100);
}

function errorValidando(Elemento)
{
//with (window.document.forms.encuesta)
	{
	Elemento.style.color='silver';
	Elemento.style.backgroundColor='green';
	Elemento.focus();
	}
}

/*************************************************************
Funciones "externas" invocadas desde el formulario
en procesos automáticos relacionados con el formato de los campos
o el almacenamiento de los datos

* ***********************************************************/

//cambia el correo electrónico todo a minúsculas
function todoMinusculas(oControl)
{
Control.value = Control.value.toLowerCase( );
//No recibimos ni devolvemos nada porque jugamos con el mismo objeto a través del puntero Control
}


//cambia a mayuscula la primera letra en nombres y apellidos
function primeraMayuscula(Objeto_this)
{
var Cadena = new String ();
Cadena = Objeto_this.value;
//Ahora viene la funcion tal y como estaba en el ejercicio 22
var Frase = Cadena.charAt(0).toUpperCase();
for(i=1; i<Cadena.length; i++)
	if(Cadena.charAt(i-1)!=' ')
		Frase+=Cadena.charAt(i).toLowerCase();
	else
		Frase+=Cadena.charAt(i).toUpperCase();
//Y volvemos a pasarle la Cadena reconstruida al objeto this que recibiamos como su atributo value
Objeto_this.value = Frase;
}

//cambia el contenido de la lista con las asignaturas correspondientes a cada curso
function asignaturas(Elemento)
{
//Elemento es una string con el nombre puesto que recibimos objeto.value
with (window.document.forms.encuesta)
	{
	if(Elemento=='web')
		{
//Materias es un array y por tanto utilizamos la misma sintaxis que en C para manejarlo
//DeberÃ­a coger igual comillas dobles que simples para cadenas de caracteres
		Materias[0].text='HTML';
		Materias[0].value=1;
		Materias[1].text="CSS";
		Materias[1].value=2;
		Materias[2].text='JavaScrip';
		Materias[2].value=3;
		Materias[3].text="PHP";
		Materias[3].value=4;
		Materias[4].text="PHP Avanzado";
		Materias[4].value=5;
		}	
	if(Elemento=='sistemas')
		{
		Materias[0].text='Shell Scripts';
		Materias[0].value=5;
		Materias[1].text="Linux C";
		Materias[1].value=6;
		Materias[2].text='MySQL';
		Materias[2].value=7;
		Materias[3].text="Servidores";
		Materias[3].value=8;
		}	
	if(Elemento=='objeto')
		{
		Materias[0].text='Lenguaje C';
		Materias[0].value=9;
		Materias[1].text="C++";
		Materias[1].value=10;
		Materias[2].text='Java';
		Materias[2].value=11;
		Materias[3].text="Basic";
		Materias[3].value=12;
		}	
	}
}

// el elemento del formulario encuesta tiene un input hidden de name ="aficion";
// en pa propiedad value de ese elemento almacenamos las aficiones pulsadas
function recopilaAficiones()
{
with (window.document.forms.encuesta)
	{
	aficion.value='';
	if(Musica.checked==true)
		aficion.value+='M';
	if(Viajar.checked==true)
		aficion.value+='V';
	if(Pintura.checked==true)
		aficion.value+='P';
	if(Foto.checked==true)
		aficion.value+='F';
	if(Cine.checked==true)
		aficion.value+='C';
	if(Lectura.checked==true)
		aficion.value+='L';
	if(Deporte.checked==true)
		aficion.value+='D';
	if(Baile.checked==true)
		aficion.value+='B';
	}
}

//genera al final del formulario la fecha en que este se esta rellenando
function fechaActual(sLugar) {
	var aDias = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'S&aacute;bado');
	var aMeses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
	//Creamos una nueva instancia del objeto Date del cual su valor es la fecha y hora actual
	var dFecha = new Date();
	//Para obtener el aÃ±o utilizamos el mÃ©todo getYear():
	var anio = dFecha.getYear() + 1900;
	//getDay() devuelve 0 para domingo y asÃ­ sucesivamente
	var diaSem = dFecha.getDay();
	//getDate() devuleve el dÃ­a del mes
	var diaMes = dFecha.getDate();
	//getMonth() devuelve 0 para enero
	var mes = dFecha.getMonth();
	return ('En ' + sLugar + ', el ' + aDias[diaSem] + ' día ' + diaMes + ' de ' + aMeses[mes] + ' del año ' + anio);
}

/*
function prueba()
{
with (window.document.forms.encuesta)
	{
	alert('Elementos totales del formulario '+length);
	for (i=0;i<length;i++)
		{
		if (elements[i].type!=undefined)
			{
			elements[i].style.backgroundColor='yellow';
			//Probamos comillas dobles y simples en la misma linea y es indiferente
			//alert("Elemento nÂº "+i+' de tipo type='+elements[i].type);
			}		
		}
	}
}

function activar (Ele1, Ele2)
{
if (Ele1.value.length > 0 )
	{
	Ele2.disabled=false;
	Ele2.focus();
//El metodo focus lo que hace es llevar el cursor a este elemento, a execepciÃ³n del intrÃ­nseco que es Ele1
	}
else
	{
	Ele2.disabled=true;
	Ele2.value='';
	with (window.document.forms.encuesta)
	if (Ele2==Apellido1)
	//hemos preguntado por el atributo o propiedad name del objeto, a ver si es Apellido1, lo coge asÃ­ por sintaxis
		{
		Apellido2.value='';
		Apellido2.disabled=true;			
		}
	}
}
*/


