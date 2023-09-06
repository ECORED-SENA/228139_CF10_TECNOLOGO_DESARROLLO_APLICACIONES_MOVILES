<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Las API

    p.mb-4(data-aos="fade") Lo invitamos a ver el siguiente video, para conocer qué son las API.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/PGp2lUy_u8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Las API

    
    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_4_1 4.1 Historia de las API

    p.mb-4(data-aos="fade") Las API surgieron en los primeros días de la informática, mucho antes que la computadora personal; en esa época una API normalmente se usaba como biblioteca para los sistemas operativos.

    .row
      .col-md-8.mb-4(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Alojamiento") Casi siempre estaban habilitadas localmente en los sistemas en los que operaban.
          p(numero="2" titulo="Intercomunicación") Sin embargo, en algunas ocasiones pasaban mensajes entre las computadoras centrales.
          p(numero="3" titulo="Expansión") Después de casi 30 años, las API se expandieron más allá de los entornos locales. 
          p(numero="4" titulo="Integración remota") A principios del año 2000 ya eran una tecnología importante para la integración remota de datos.
      .col-md-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema4/1.svg")


    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_4_2 4.2 Tipos de API según sus permisos

    p.mb-4(data-aos="fade") El uso de una API implica diferentes modelos de permisos y, así mismo, las API son clasificadas según dichos permisos, así:

    .row(data-aos="fade-down")
      .col-md-4.mb-3
        .tarjeta-numerada.color-acento-botones.p-4.p-lg-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4 Privadas
          p.mb-0 Estas API solo se usan internamente, son creadas por las empresas para su uso doméstico teniendo el control total sobre ellas.
      .col-md-4.mb-3
        .tarjeta-numerada.color-primario.p-4.p-lg-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h4 #[em Partners]
          p.mb-0 Estas API son desarrolladas por algunas empresas y son distribuidas por #[em partners] que tienen permisos especiales para vender estos servicios empresariales, ofreciendo ingresos adicionales a la empresa y a los distribuidores autorizados.
      .col-md-4.mb-3
        .tarjeta-numerada.color-secundario.p-4.p-lg-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4 Públicas
          p.mb-0 Todos tienen acceso a las API, así que otras empresas pueden desarrollar una API para generar una interacción entre ellas y así convertirse en una fuente de innovaciones, prestando un servicio libre de restricciones. Esto permite que terceros desarrollen aplicaciones que interactúan con las API públicas.


    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_4_3 4.3 ¿Por qué son importantes las API?

    p.mb-4(data-aos="fade") Si se cuenta con una API no será necesario crear desde cero un servicio, como ejemplo, se puede tomar un sistema de pagos. Es posible integrar a una aplicación una API de un servicio de pago ya existente, por ejemplo, PayPal; cuando se suministra la información de una tarjeta, la aplicación utiliza una API para compartir la información y enviar esos datos de forma remota a otro programa que verificará y validará la información.

    .cajon.color-primario.p-4.p-lg-5(data-aos="fade-down")
      p.mb-0 Una vez se verifica la información se retornará una respuesta a la aplicación, indicando si los datos son válidos; esta pasarela de pago suministra un servicio muy complejo de desarrollar, que requiere altos niveles de seguridad que pueden ser aviados, al utilizar esta API que permite la integración y utilización de este servicio.

    
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_4_4 4.4 Tipos de API según su función

    p.mb-4(data-aos="fade") El funcionamiento de las API se establece sobre protocolos o sobre arquitecturas. Conózcalos a continuación.

    figure.mb-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/tema4/2.svg")

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.bg-7.p-4(titulo="SOAP")
        h4 SOAP
        p Fue un protocolo muy utilizado que, paulatinamente, se ha venido convirtiendo en obsoleto. SOAP (Protocolo de Acceso a Objetos Simples) permitió la estandarización del cambio de información y datos; las API diseñadas con SOAP usaron formato XML para el diseño de sus mensajes y transacciones, recibían solicitudes a través de HTTP o SMTP.      
      .tarjeta.bg-7.p-4(titulo="Estandarización del lenguaje")
        h4 Estandarización del lenguaje
        p Con SOAP se facilita el proceso de comunicación estandarizando el lenguaje, reglas y políticas definidas, entre aplicaciones que funcionan en entornos distintos o están escritas en lenguajes diferentes, pero logran compartir la información.
      .tarjeta.bg-7.p-4(titulo="Entornos descentralizados")
        h4 Entornos descentralizados
        p El protocolo SOAP se caracteriza por ser liviano y se utiliza, primordialmente, para realizar un intercambio de información en entornos descentralizados; con frecuencia se suele asociar SOAP con el lenguaje de descripción de servicios web UDDI y WSDL.
      .tarjeta.bg-7.p-4(titulo="REST")
        h4 REST
        p Por otra parte, está REST, que no es un protocolo sino una arquitectura, es la de mayor uso en la actualidad. Los denominados #[em Restful] son derivaciones de la arquitectura REST.
      .tarjeta.bg-7.p-4(titulo="Arquitecturas locales y remotas")
        h4 Arquitecturas locales y remotas
        p Existen por su parte arquitecturas locales, aquellas en las que la aplicación se comunica con la API que se encuentra en el mismo ambiente o dispositivo y las arquitecturas remotas, aquellas en las que la aplicación necesita consumir una API, ubicada o alojada en servidores remotos y es necesario contar con un servicio de conexión de datos o Internet para acceder al servicio.

    h3.mb-4(data-aos="fade") API de servicios web o remotas

    p(data-aos="fade") Estos servicios permiten que las aplicaciones conectadas se comuniquen, utilizando el protocolo HTTP que es, básicamente, un conjunto de reglas definidas entre cliente-servidor, para realizar el intercambio de información. Este es el principio fundamental que permite que las API remotas logren establecer una comunicación entre aplicaciones de distintas ubicaciones.
    p(data-aos="fade") Los formatos más comunes de envío de datos son: Json, XML y texto plano.
    p.mb-4(data-aos="fade") Para ampliar la información, lo invitamos a ver el video 
      b ¿Qué es una API? – La mejor explicación en español
      |, el cual se encuentra en el material complementario.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-4" data-aos="fade-down")
      .row.justify-content-center(titulo="Estándares web")
        .col-lg-11.mb-4.mb-md-0
          p En su gran mayoría las API están desarrolladas bajo los estándares web. Se debe comprender que no todas las API remotas se pueden considerar como API web, pero sí se concluye que todas las API web son remotas. Usan el protocolo de transferencia de información HTTP para solicitar mensajes y proporcionar una definición de la estructura de los mensajes de respuesta.
      .row.justify-content-center(titulo="Formatos válidos y adaptables")
        .col-lg-11.mb-4.mb-md-0
          p En particular, los mensajes de respuesta se transforman tomando la forma de un archivo XML o JSON, que son los formatos válidos y los que mejor se adaptan al momento de presentar los datos y la información, de una manera fácil de comprender y manipular para otras aplicaciones.
      .row.justify-content-center(titulo="XML")
        .col-lg-11.mb-4.mb-md-0
          p #[em Extensible Markup Language], este metalenguaje permite definir lenguajes de marcas desarrollado por el World Wide Web #[em Consortium] utilizado para almacenar datos en forma legible.
      .row.justify-content-center(titulo="JSON")
        .col-lg-11.mb-4.mb-md-0
          p #[em Javascript Object Notation] es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML se considera un formato independiente del lenguaje, es el más utilizado, hoy en día, por su fácil manejo.
      .row.justify-content-center(titulo="Texto plano")
        .col-lg-11.mb-4.mb-md-0
          p #[em Plain text] son aquellos archivos formados exclusivamente por texto, solo caracteres, sin ningún formato, es decir, no requieren ser interpretados para leerse.

    h3(data-aos="fade") API de código fuente
    p.mb-4(data-aos="fade") Ofrece librerías de objetos, se usan con frecuencia para el desarrollo de una aplicación compuesta, que toma recursos y datos de varias fuentes remotas.

    figure.mb-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/tema4/5.svg")

    .cajon.color-primario.p-4.p-lg-5.mb-5(data-aos="fade-down")
      p.mb-0 Las llamadas de estos servicios se ejecutan de acuerdo con los estándares del entorno de la aplicación, como por ejemplo .NET o J2EE.

    h3(data-aos="fade") API heredadas
    p.mb-4(data-aos="fade") Se utilizan en la integración de interfaces de aplicaciones que usan reglas y protocolos de comunicación. Estas API se utilizan integrando elementos de #[em hardware], usando protocolos de objetos remotos, por medio de archivos planos, integrando interfaces de sistemas operativos.

    .row.align-items-center.mb-5
      .col-md-10(data-aos="fade-right")
        .p-4.p-lg-5.bg-3.mb-3
          h4 CORBA
          p.mb-0 Uno de los ejemplos que permite comprender su funcionamiento es la API heredada CORBA (COMMON #[em Object Request Broker Architecture]).
        .p-4.p-lg-5.bg-3.mb-3
          h4 OMG
          p.mb-0 Es un estándar definido por el grupo de gestión de objetos (OMG) que permite el funcionamiento conjunto de componentes de #[em software] escritos en distintos lenguajes informáticos y que se ejecutan en distintos sistemas.
        .p-4.p-lg-5.bg-3.mb-3
          h4 Asociación por medio de #[em token]
          p.mb-0 Estos tipos de objetos CORBA pueden recibir muchas llamadas y repeticiones de acceso, pero el tipo de objeto del cliente no cambia, cada instancia del tipo de objeto del cliente se asocia por medio de un #[em token] a sus datos.
      .col-md-2(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/tema4/6.svg")

    h3(data-aos="fade") API de producción
    p.mb-4(data-aos="fade") Son fundamentales porque manejan la lógica comercial de las aplicaciones. Una vez desarrollada la app, esta debe recibir datos reales y es, en este momento, cuando la API de producción permite realizar esta actividad de generación de información real.

    .cajon.color-primario.p-4.p-lg-5.mb-5(data-aos="fade-down")
      p Se utiliza como un servidor que permite realizar la incisión de datos en la aplicación, permitiendo la activación de los servicios y la realización de actualizaciones de datos. 
      p.mb-0 Estas API de producción no deben devolver datos a los usuarios que no estén autorizados en visualizar la información; tampoco debe permitir la actualización de la información que no debe ser modificada. Deben ser rápidas porque son las responsables de manejar, en el mundo real, todo el tráfico de la aplicación.

    h3(data-aos="fade") API de desarrollo
    p.mb-4(data-aos="fade") También conocidas como API falsas, son utilizadas para realizar presentaciones previas al cliente demostrando el funcionamiento de la aplicación, antes de salir a producción. El objetivo de este tipo de API es realizar las pruebas de #[em Frontend] y #[em Backend], continuar con el desarrollo, aunque no existan bases de datos o datos reales, como se muestra en la siguiente figura.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 2.] Tipos de API
        figure
          img(src="@/assets/curso/temas/tema4/fig2.svg" alt="Mapa conceptual que presenta los tipos de API.")
          figcaption.mt-2 https://ceroideas.es/tipos-de-api-según-su-funcion-y-tecnologia/ 

    .cajon.color-primario.p-4.p-lg-5(data-aos="fade-down")
      p.mb-0 Las API de desarrollo generalmente no guardan, ni alojan datos en una base de datos, lo que se debe hacer es guardar todo en la memoria de manera temporal mientras se realizan las pruebas. Las API web que trabajan con las limitaciones de la arquitectura REST se conocen como las API de #[em RESTFUL]. Una API web de #[em RESTFUL] no cuenta con ningún estándar oficial que genere unas reglas para su desarrollo y utilización (Fielding, 2000).

    
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_4_5 4.5 Arquitectura cliente-servidor REST

    p(data-aos="fade") La arquitectura REST se compone de tres elementos: los clientes, los servidores y los recursos. De esta manera, se administran las solicitudes con HTTP; los servicios web #[em RESTFUL] son un grupo de parámetros que están ajustados bajo los principios de la arquitectura de transferencia de estado representacional (REST).
    p.mb-4(data-aos="fade") Los elementos de REST esencialmente utilizan la arquitectura cliente/servidor, basados en el protocolo de trasferencia HTTP, que admite la ejecución de los indicadores de recursos universales (URI).

    figure.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/tema4/8.svg")

    p.mb-4(data-aos="fade") WSDL (#[em Web Services Description Language]) es un formato del #[em Extensible Markup Language] que se usa para detallar servicios web, es un lenguaje de programación fundamentado en XML y su principio fundamental es detallar servicios web. Cuando se está programando una API y se solicita información a una API REST el servidor responde, generalmente, la solicitud con un código o códigos preestablecidos; estos son algunos de los principales:

    .px-lg-5.p-4.bg-4
      ul.lista-ul
        li
          p.mb-0 #[i.fas.fa-check(style="color: #FFA726;")] #[strong 2xx:] que la petición se ha procesado correctamente.
        li
          p.mb-0 #[i.fas.fa-check(style="color: #FFA726;")] #[strong 3xx:] señala qué se debe redireccionar, indicando la realización de una acción adicional para completar la petición.
        li
          p.mb-0 #[i.fas.fa-check(style="color: #FFA726;")] #[strong 4xx:] marca una solicitud inválida, se genera cuando se realizan peticiones a recursos inexistentes o no autorizados.
        li
          p.mb-0 #[i.fas.fa-check(style="color: #FFA726;")] #[strong 5xx:] indica fallas o errores relacionados directamente con el servidor.

    
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_4_6 4.6 Métodos HTTP usados en las APIs

    p(data-aos="fade") Los métodos HTTP permiten la interacción con la información de la API, esto es equivalente al CRUD de las bases de datos. #[em Get] es el método que realiza la solicitud de información, #[em post] expide la nueva información registrada actualizando los datos, #[em put] permite la actualización de los datos cuando se realiza el cambio relevante en la información y #[em delete] realiza la eliminación de recursos.
    p.mb-4(data-aos="fade") #[strong Finalmente, algunas características a tener en cuenta cuando se utiliza la arquitectura #[em RESTFUL] son:]

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario(tipo="l" data-aos="fade-down")
          .row
            .col-md-12.mb-4.mb-md-0
              h4 Arquitectura cliente-servidor
              p La arquitectura REST administra las solicitudes realizadas por HTTP, estas solicitudes pueden provenir de los clientes, servidores y recursos.
          .row
            .col-md-12.mb-4.mb-md-0
              h4 Sin estado
              p El contenido de los clientes no se almacena en el servidor entre las solicitudes, sino que la información sobre el estado de la sesión se queda en el cliente. En su lugar, la información sobre el estado de la sesión está en posesión del cliente.
          .row
            .col-md-12.mb-4.mb-md-0
              h4 Capacidad de caché
              p El almacenamiento en caché puede eliminar la necesidad de algunas interacciones cliente-servidor.
          .row
            .col-md-12.mb-4.mb-md-0
              h4 Sistema en capas
              p Las interacciones cliente-servidor pueden estar mediadas por capas adicionales, que pueden ofrecer otras funciones como el equilibrio de carga, los cachés compartidos o la seguridad. Estas capas pueden ofrecer funcionalidades adicionales como equilibrio de carga, cachés compartidos o seguridad.
          .row
            .col-md-12.mb-4.mb-md-0
              h4 Código de demanda
              p Los servidores pueden extender las funciones de un cliente, transfiriendo un código ejecutable.
          .row
            .col-md-12.mb-4.mb-md-0
              h4 Interfaz uniforme
              p Esta limitación es fundamental para el diseño de las API de #[em RESTFUL] e incluye 4 aspectos: identificación de recursos, administración de recursos, mensajes autodescriptivos e hipermedios.
          .row
            .col-md-12.mb-4.mb-md-0
              h4 Identificación de recursos en las solicitudes
              p Los recursos se identifican en las solicitudes y se separan de las representaciones que se devuelven al cliente.
        


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
