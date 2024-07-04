---
layout: post
title:  "Primer Blog con jekyll"
desc: "我的第一篇jekyll博客"
keywords: "jekyll,blog,first"
date: 2015-01-08
categories: [LIFE]
tags: [native]
icon: fa-bookmark-o
---

Esto es una recopilacion de las posibilidade con jekyll me servira como Cheatsheet


esto es un parrafo normalito no hay que añadir elemento especiales ni nada

un ejemplo de codigo va con tres comillas inclinadas como esta `	
	
```
ejemplo de codigo
```
	
## Cabecera de tipo h2 (H1 Esta reservado para los titulos del post)##
``` 
<!-- este es un titulo h2 -->
## Cabecera de tipo h2##
```

### Cabecera de tipo h3 ###
``` 
<!-- este es un titulo h3 -->
### Cabecera de tipo h3###
```

#### Cabecera de tipo h4 ####
``` 
<!-- este es un titulo h4 -->
#### Cabecera de tipo h4####
```


## [Un Enlace](http://oteroweb.com.ve) tambien podemos usar un literal(que es un enlace que usa su mismo texto A big ass literal link <http://oteroweb.com.ve/> ##
```
[Un Enlace](http://oteroweb.com.ve) tambien podemos usar un literal(que es un enlace que usa su mismo texto A big ass literal link <http://oteroweb.com.ve/>	
```

![Mensaje Alternativo]({{ site.baseurl }}static/img/landing/jekyll.png "titulo de la imagen")
ejemplo de imagen que esta localizado en carpeta indicas la carpeta con la siguiente sintaxis {: .miclase }
```
![Mensaje Alternativo]({{ site.baseurl }}static/img/landing/jekyll.png "titulo de la imagen"){: .miclase }
```

* Lista ordenada
- Sintaxis alternativa
+ Sintaxis alternativa 2
  - sintaxis  

```
* Lista ordenada
- Sintaxis alternativa
+ Sintaxis alternativa 2
  - sintaxis  

```
1. una
2. lista
3. ordenada

```
1. una
2. lista
3. ordenada
```

Formateo de textos en su misma linea:

 - _cursiva_
 - **negrita**
 - `codigo()`

```
 _cursiva_
 **negrita**
 `codigo()`  
```

```
> citas
>> Citas anidadas
```
> citas
>> Citas anidadas

Usa dos espacios  
Para crear un  
quiebre de linea  
```
Usa dos espacios  
Para crear un  
quiebre de linea  
```

Finalmente se pueden hacer de dos formas las lineas horizontales



----
****
```
----
****
```

posible solucion img[alt=Flowers] { float: right; }
