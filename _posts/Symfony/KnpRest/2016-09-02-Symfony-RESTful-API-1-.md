---
layout: post
title:  "Primeros pasos Symfony RESTful API Tutorial"
desc: "Los primeros pasos en el curso de knp university sobre la creacion de API RESTful"
keywords: "php,symfony,api, apirest, restfull"
date: 2016-09-02
categories: [PHP]
tags: [php,symfony,api, apirest, restfull, framework]
icon: fa-bookmark-o
---

## Creando un api Rest Full##

Lo primero es instalar symfony en este caso vamos a usar la version 2.8

depeniendo de tu sistema operativo 

```
# Linux and macOS systems
$ sudo mkdir -p /usr/local/bin
$ sudo curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony
$ sudo chmod a+x /usr/local/bin/symfony

# Windows systems
c:\> php -r "readfile('https://symfony.com/installer');" > symfony

```

en el caso de windows en la carpeta donde ejecutaste el comando 

ejecutas 

```
php symfony new rest1 2.8

```


![Symfonyrest]({{ site.baseurl }}images/symfony_rest1_1.png "titulo de la imagen")

Esperemos que se baje y le indicamos los parametros en 

_Nota: los valores entre corchetes son los valores que usará symfony en caso de que no le coloques ningun valor_

Creo un nuevo controllador con el comando
```
php app/console generate:controller
```


le indico en que bundle y como se llamara en este caso subcarpeta appBundle/api:programmer

![Symfonyrest]({{ site.baseurl }}images/symfony_rest1_2.png "titulo de la imagen")


Agrego  el siguiente codigo 

```
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
```
app_web:
    resource: "@AppBundle/Controller/Web"
    type:     annotation
app_api:
    resource: "@AppBundle/Controller/Api"
    type:     annotation
```


ejecuto en consola el comando 

```
composer require guzzlehttp/guzzle

```

_Nota: estoy siguiendo la clase indicada por eso instalo guzzle, prefiero postman por su facilidad de uso el cual fue recomendado por el colega <https://github.com/aasanchez>_

creamos un archivo en tu proyecto raiz llamado testing.php

