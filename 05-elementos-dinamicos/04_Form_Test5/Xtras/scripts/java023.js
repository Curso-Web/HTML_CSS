function Minusculas()
{
Control = document.getElementById('Correo');
Control.value = Control.value.toLowerCase( );
//No recibimos ni devolvemos nada porque jugamos con el mismo objeto a travÃ©s del puntero Control
}

function Correo()
{
//window es el objeto del que parten todos los demas y es innecesario ponerlo
//window.document.forms[0].Correo.value.indexOf('@') serÃ­a el formulario 0, el primero y Ãºnico que tenemos
if(window.document.forms.encuesta.Correo.value.indexOf('@')<0)
	{
	alert('Correo incorrecto '+document.forms.encuesta.Correo.value);
	Error(document.forms.encuesta.Correo);
	return false;
	}
else
	{
	//Actualizar(document.forms.encuesta.Correo);
	return true;
	}
}

function Datos()
{
if( !Correo() || !Clave() || !Nombre() || !Fecha() )
	return false;
else
	return true;
}

function Clave()
{
with (window.document.forms.encuesta)
/*con este with nos ahorramos poner la ruta completa de los elementos de nuestro fomulario encuesta
  habrÃ­a que poner todo a lo que abarque entre llaves {} sino solo vale para el siguiente elemento
  en nuestro caso afecta a Clave2 porque esta concatenado por los if ... else*/
if (   Clave1.value=='' )
	{
	alert('No se ha introducido la Clave');
	Error(document.forms.encuesta.Clave1);
	return false;
	}
else
	{
	//Actualizar(document.forms.encuesta.Clave1);
 	if ( Clave1.value != Clave2.value )
		{
		alert('Las claves deben ser iguales;');
		Error(document.forms.encuesta.Clave2);
		return false;
		}
 	else
		{
		//Actualizar(document.forms.encuesta.Clave2);
		return true;
		}
	}
}

function Nombre()
{
with (window.document.forms.encuesta)
if (Nombre.value=='')
	{
	alert('No se ha introducido el Nombre');
	Error(document.forms.encuesta.Nombre);
	return false;
	}
else
	{
	//Actualizar(document.forms.encuesta.Nombre);
	if (Apellido1.value=='')
		{
		alert('No se ha introducido el Apellido1');
		Error(document.forms.encuesta.Apellido1);
		return false;
		}
	else
		{
		//Actualizar(document.forms.encuesta.Apellido1);
		if (Apellido2.value=='')
			{
			alert('No se ha introducido el Apellido2');
			Error(document.forms.encuesta.Apellido2);
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

function Fecha()
{
with (window.document.forms.encuesta)
	if ( Numero( parseInt(dia.value), parseInt(mes.value), parseInt(anio.value) ) && 
						Comprobar(dia.value,mes.value,anio.value) )
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
			Error(dia);
			Error(mes);
			Error(anio);
			return false;
			}
		}	
}

function Comprobar (dd,mm,aa)
{
var array_meses=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
if(Bisiesto(aa))
	array_meses[1]=29;
// Lo anterior deberÃ­a ir con el if final para comprobar el dÃ­a 
// y la funciÃ³n bisiesto solo deberÃ­a llamarla si el mes es 2 if(mm==2 && bisiesto(aa))
if (!Anio(aa))
	return false;
else
	if (!Mes(mm))
		return false;
	else
		if(dd>array_meses[mm-1] || dd<=0)
			return false;
		else
			return true;
}

function Numero (d,m,a)
{
if ( isNaN(d) || isNaN(m) || isNaN(a) )
	return false;
else
	return true;
}

function Bisiesto(aa)
{
return ((aa%4==0 && aa%100!=0) || aa%400==0);
}

function Mes (mm)
{
return (mm > 0 && mm < 13);
}

function Anio (aa)
{
return (aa >= 1900 && aa <= 2100)
}

function PrimeraMayuscula(Objeto_this)
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

function Activar (Ele1, Ele2)
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

function Asignaturas(Elemento)
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

function Aficion()
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

function Error(Elemento)
{
with (window.document.forms.encuesta)
	{
	Elemento.style.color='silver';
	Elemento.style.backgroundColor='green';
	Elemento.focus();
	}
}

function Actualizar(Elemento)
{
//vuelve a cambiar los colores del elemento de error a los originales
with (window.document.forms.encuesta)
	{
	Elemento.style.color='black';
	Elemento.style.backgroundColor='white';	
	}
}

function Prueba()
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
//			alert("Elemento nÂº "+i+' de tipo type='+elements[i].type);
			}		
		}
	}
}

function FechaActual()
{
var aDias = new Array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','S&aacute;bado');
var aMeses=new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre',
						'Octubre','Noviembre','Diciembre');
//Creamos una nueva instancia del objeto Date del cual su valor es la fecha y hora actual
var dFecha=new Date();
//Para obtener el aÃ±o utilizamos el mÃ©todo getYear():
var anio = dFecha.getYear();
if (navigator.appName=='Netscape')
	anio+=1900;
//getDay() devuelve 0 para domingo y asÃ­ sucesivamente
var diaSem = dFecha.getDay();
//getDate() devuleve el dÃ­a del mes
var diaMes = dFecha.getDate();
//getMonth() devuelve 0 para enero
var mes = dFecha.getMonth();
document.write('Hoy es '+aDias[diaSem]+' dÃ­a '+diaMes+' de '+aMeses[mes]+' del aÃ±o '+anio);

//Creamos nuestra propia instancia del objeto Date (aÃ±o,mes,dia,hora,minuto,segundo)
var fechaPropia = new Date (1975, 6, 18, 11, 40, 0);
var anio = fechaPropia.getYear();
if (navigator.appName=='Netscape')
	anio+=1900;
//igual que en el caso anterior si el navegador es firefox hemos de sumarle 1900 para que de el aÃ±o correcto
document.write('<br>La fecha dada es '+aDias[fechaPropia.getDay()]+' dÃ­a '+fechaPropia.getDate()+' de '+aMeses[fechaPropia.getMonth()]+' del aÃ±o '+anio);

//Creamos minuto para operar en milisegundos
var minuto=60*1000;
var hora=minuto*60;
var dia=hora*24;
var semana=dia*7;
//getTime() nos devuelve los milisegundos de una instancia del objeto Date
var fechaMili=dFecha.getTime();
//sumamos una semana a la fecha actual en milisegundos
fechaMili+=semana;
//setTime() nos devuelve una fecha si le pasamos una cantidad de milisegundos
dFecha.setTime(fechaMili);
anio = dFecha.getYear();
if (navigator.appName=='Netscape')
	anio+=1900;
document.write('<br>Dentro de una semana serÃ¡ '+aDias[dFecha.getDay()]+' dÃ­a '+dFecha.getDate()+' de '+aMeses[dFecha.getMonth()]+' del aÃ±o '+anio);
}