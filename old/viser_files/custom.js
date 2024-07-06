$(function(){
	// carousel
	$('#software').carousel({
		interval:10000
	})
	$('.carousel .item').each(function(){
		var next=$(this).next();
		if (!next.length){
			next=$(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));
		if (next.next().length > 0){
			next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
		} else{
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});
	// scroll
	var $window=$(window),
	$document=$(document),
	transitionSupported=typeof document.body.style.transitionProperty==='string',
		scrollTime=1; // scroll time in seconds
		$('a[href*=\\#]:not([href=\\#])').on("click",function(e){
			var target,
			avail,
			scroll,
			deltaScroll;
			if (location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'') && location.hostname==this.hostname){
				target=$(this.hash);
				target=target.length ? target :$("[id="+this.hash.slice(1)+"]");
				if (target.length){
					avail=$document.height() - $window.height();
					if (avail > 0){
						scroll=target.offset().top;
						if (scroll > avail){
							scroll=avail;
						}
					} else{
						scroll=0;
					}
					deltaScroll=$window.scrollTop() - scroll;
				if (!deltaScroll){
					return;
				}
				e.preventDefault();
				if (transitionSupported){
					$("html").css({
						"margin-top":deltaScroll+"px",
						"transition":scrollTime+"s ease-in-out"
					}).data("transitioning",scroll);
				} else{
					$("html,body").stop(true,true)
					.animate({
						scrollTop:scroll+'px'
					},scrollTime * 1000);
					return;
				}
			}
		}
	});
	if (transitionSupported){
		$("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd",function(e){
			var $this=$(this),
				scroll=$this.data("transitioning");
			if (e.target===e.currentTarget && scroll !=null){
				$this.removeAttr("style").data("transitioning",null);
				$("html,body").scrollTop(scroll);
			}
		});
	}
	// Planes
	$('#plans-submit').click(function(event){
		var r=document.getElementsByName("planhosting"),
			planhosting=-1,
			valor;
		for(var i=0; i < r.length; i++){
			if(r[i].checked){
				planhosting=i;
				valor=r[i].value;
			}
		}
		if (planhosting==-1){
		event.preventDefault();
			swal("Oops...","Para continuar debe seleccionar el plan de su preferencia","error");
		} else{
			//this.submit();
		}
	});
	// Contacto
	$('#form-submit').click(function(event){
		event.preventDefault();
		var formData=$('#contactForm').serialize(),
		userName=document.getElementById('name'),
		userEmail=document.getElementById('email'),
		userMessage=document.getElementById('message'),
		sendButton=document.getElementById('form-submit');
		if (userName.value===''){
			swal("Oops","Debe indicarnos su nombre...","error");
			console.log('Error en nombre');
		} else if (userEmail.value===''){
			swal("Oops","Debe indicarnos un correo de contacto...","error");
			console.log('Error en email');
		} else if (userMessage.value===''){
			swal("Oops","Debe incluir su mensaje...","error");
			console.log('Error en mensaje');
		} else{
			$.ajax({
				type:'POST',
				url:$('#contactForm').attr('action'),
				data:formData,
				success:function(data){
					swal("¡Perfecto!","Su mensaje se ha enviado correctamente","success");
					sendButton.disabled=true;
					console.log('Ok!');
				},
				error:function(){
					swal("Oops","Algo salió mal... Intente enviar su mensaje más tarde.","error");
					console.log('Error');
					sendButton.disabled=false;
				}
			});
		}
	});
	// Compras
	$('#buyForm').on('submit',function(event){
		event.preventDefault();
		var formData=$('#buyForm').serialize(),
		userName=document.getElementById('name'),
		userEmail=document.getElementById('email'),
		sendButton=document.getElementById('buy-submit'),
		r=document.getElementsByName('pago'),
		pago=-1,
		valor;
		for(var i=0; i < r.length; i++){
			if(r[i].checked){
				pago=i;
				valor=r[i].value;
			}
		}
		console.log(formData);
		if (userName.value===''){
			swal("Oops","Debe indicarnos su nombre...","error");
			console.log('Error en nombre');
		} else if (userEmail.value===''){
			swal("Oops","Debe indicarnos un correo de contacto...","error");
			console.log('Error en email');
		} else if (pago==-1){
			swal("Oops","Debe seleccionar un ciclo de facturación","error");
		} else{
			$.ajax({
				type:'POST',
				url:$('#buyForm').attr('action'),
				data:formData,
				success:function(data){
					swal({
							title:"¡Perfecto!",
							text:"Su mensaje se ha enviado correctamente haga click en continuar",
							type:"success",
							showCancelButton:false,
							confirmButtonText:"continuar"
						},function(){
						// Redirect the user
						window.location.href='https://host.viserproject.com';
					});
					sendButton.disabled=true;
					console.log('Ok!');
				},
				error:function(err){
					swal("Oops","Algo salió mal... Intente enviar su mensaje más tarde.","error");
					console.log('Error');
					sendButton.disabled=false;
				}
			});
		}
	});
});
(function(e){"use strict";var b=function(a,d,c){return 1===arguments.length?b.get(a):b.set(a,d,c)};b._document=document;b._navigator=navigator;b.defaults={path:"/"};b.get=function(a){b._cachedDocumentCookie!==b._document.cookie&&b._renewCache();return b._cache[a]};b.set=function(a,d,c){c=b._getExtendedOptions(c);c.expires=b._getExpiresDate(d===e?-1:c.expires);b._document.cookie=b._generateCookieString(a,d,c);return b};b.expire=function(a,d){return b.set(a,e,d)};b._getExtendedOptions=function(a){return{path:a&&a.path||b.defaults.path,domain:a&&a.domain||b.defaults.domain,expires:a&&a.expires||b.defaults.expires,secure:a&&a.secure!==e?a.secure:b.defaults.secure}};b._isValidDate=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())};b._getExpiresDate=function(a,d){d=d||new Date;switch(typeof a){case"number":a=new Date(d.getTime()+1E3*a);break;case"string":a=new Date(a)}if(a&&!b._isValidDate(a))throw Error("`expires` parameter cannot be converted to a valid Date instance");return a};b._generateCookieString=function(a,b,c){a=a.replace(/[^#$&+\^`|]/g,encodeURIComponent);a=a.replace(/\(/g,"%28").replace(/\)/g,"%29");b=(b+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);c=c||{};a=a+"="+b+(c.path?";path="+c.path:"");a+=c.domain?";domain="+c.domain:"";a+=c.expires?";expires="+c.expires.toUTCString():"";return a+=c.secure?";secure":""};b._getCookieObjectFromString=function(a){var d={};a=a?a.split("; "):[];for(var c=0;c<a.length;c++){var f=b._getKeyValuePairFromCookieString(a[c]);d[f.key]===e&&(d[f.key]=f.value)}return d};b._getKeyValuePairFromCookieString=function(a){var b=a.indexOf("="),b=0>b?a.length:b;return{key:decodeURIComponent(a.substr(0,b)),value:decodeURIComponent(a.substr(b+1))}};b._renewCache=function(){b._cache=b._getCookieObjectFromString(b._document.cookie);b._cachedDocumentCookie=b._document.cookie};b._areEnabled=function(){var a="1"===b.set("js.js",1).get("js.js");b.expire("js.js");return a};b.enabled=b._areEnabled();"function"===typeof define&&define.amd?define(function(){return b}):"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports.Cookies=b):window.Cookies=b})();(function($,w){$.extend({jsMalditasCookies:function(opciones){var configuracion={cookie:"aceptocookies",classContenedorAviso:"contcookies",mensaje:"Este sitio,como la mayoría,usa cookies. Si sigues navegando entendemos que acepta la <a href=\"/index.php\">Políticas de Uso</a>.",mensajeAceptar:"Aceptar",esperaScroll:15000,expires:63072000}
if(!Cookies.enabled){configuracion.mensaje="Este sitio usa Cookies y en tu navegador estan desactivadas. Acti­valas por favor.";}
jQuery.extend(configuracion,opciones);if(Cookies.get(configuracion.cookie)!="aceptadas"){setTimeout(function(){w.on("scroll",manejadorScroll);},configuracion.esperaScroll);function manejadorScroll(e){console.log("scroll:",w.scrollTop());cerrarAviso();}
function cerrarAviso(){contAviso.slideUp(1000);w.off("scroll",manejadorScroll);}
var contAviso=$("<div>").addClass(configuracion.classContenedorAviso).html(configuracion.mensaje+" <a href=\"#\" class=\"cookiesaceptar\">"+configuracion.mensajeAceptar+"</a>").appendTo("body");var enlace=contAviso.find("a.cookiesaceptar").on("click",function(e){e.preventDefault();cerrarAviso();Cookies.set(configuracion.cookie,'aceptadas',{expires:configuracion.expires});});}
return this;}});})(jQuery,jQuery(window));$(function(){jQuery.jsMalditasCookies();});
