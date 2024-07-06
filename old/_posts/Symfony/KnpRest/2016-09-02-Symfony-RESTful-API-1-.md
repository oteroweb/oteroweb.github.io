---
layout: post
title:  "Primeros pasos Symfony RESTful API Tutorial"
desc: "Los primeros pasos en el curso de knp university sobre la creacion de API RESTful"
keywords: "php,symfony,api, apirest, restful"
date: 2016-09-02
categories: [PHP]
tags: [php,symfony,api, apirest, restfull, framework]
icon: fa-bookmark-o
---

## Creando un api Rest Ful##

Lo primero es instalar symfony en este caso vamos a usar la version 2.8

depeniendo de tu sistema operativo 

``` bash
# Linux and macOS systems
$ sudo mkdir -p /usr/local/bin
$ sudo curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony
$ sudo chmod a+x /usr/local/bin/symfony

# Windows systems
c:\> php -r "readfile('https://symfony.com/installer');" > symfony

```

en el caso de windows en la carpeta donde ejecutaste el comando 

ejecutas 

``` bash
php symfony new rest1 2.8

```


![Symfonyrest]({{ site.baseurl }}images/symfony_rest1_1.png "titulo de la imagen")

Esperemos que se baje y le indicamos los parametros en 

_Nota: los valores entre corchetes son los valores que usará symfony en caso de que no le coloques ningun valor_

Creo un nuevo controllador con el comando
``` bash
php app/console generate:controller
```


le indico en que bundle y como se llamara en este caso subcarpeta appBundle/api:programmer

![Symfonyrest]({{ site.baseurl }}images/symfony_rest1_2.png "titulo de la imagen")


Agrego  el siguiente codigo 

``` php
<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route; //para poder usar el parametro ruta arriba de la funcion en los comentarios


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;  //para poder usar el parametro metodo arriba de la funcion en los comentarios

use Symfony\Component\HttpFoundation\Response;
// para poder usar la funcion response para retornar el string

class Api\ProgrammerController extends Controller
{

     /**
     * @Route("/api/programmers")
     * @Method("POST")
     */
    public function newAction()
    {
        return new Response('Let\'s do this!');

    }


}

```
Agrego las lineas app/config/routing.yml


``` yaml
app_web:
    resource: "@AppBundle/Controller/Web"
    type:     annotation
app_api:
    resource: "@AppBundle/Controller/Api"
    type:     annotation

```


ejecuto en consola el comando para agregar guzzle y poder probar el api

``` bash
composer require guzzlehttp/guzzle

```

_Nota: estoy siguiendo el tutorial y en el usan guzzle, por eso lo instalo, prefiero postman por su facilidad de uso el cual fue recomendado por el colega <https://github.com/aasanchez>_

creamos un archivo en tu proyecto raiz llamado testing.php


ya solo nos queda agregar 

crear un archivo en la carpeta raiz llamado testing.php

con el siguiente codigo

``` php
<?php 
require __DIR__.'/vendor/autoload.php';
 
$client = new \GuzzleHttp\Client();
url
$res = $client->request('POST', 'http://localhost:8000/api/programmers', [
    // 'auth' => ['user', 'pass']
]);
echo $res->getBody();


 ?>
```

abrimos la consola y ejecutamos en la carpeta raiz del proyecto  `php testing.php`

nos retornará lo siguiente

![Symfonyrest]({{ site.baseurl }}images/symfony_rest1_3.png "titulo de la imagen")

hemos terminado la primera clases vamos  por la segunda :)
`Nota: el codigo se encuentra en este repositorio` 
<https://github.com/oteroweb/PracticesSymfonyRestKNPU/tree/master/rest1>
