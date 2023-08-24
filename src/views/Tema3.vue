<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Instrucciones de diseño

    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema3/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Son aquellas características a tener en cuenta para el diseño de la capa de acceso a datos, siguiendo estos parámetros se asegura el acceso a la capa de datos, cumpliendo con los requerimientos de manera eficiente y segura; de esta manera se facilita el mantenimiento y los cambios. Las modificaciones se podrán atender de manera más sencilla.

    SlyderB(:datos="datosSlyder")

    
    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_3_1 3.1 Riesgos de seguridad

    .row.align-items-center
      .col-md-10.mb-4(data-aos="fade-right")
        p La capa de acceso a los datos debe estar protegida de posibles incursiones y ataques que buscan robar o dañar la información. Proteger todos los elementos que permiten las transacciones y por donde fluye la información evitando que se tenga un fácil acceso a las fuentes de datos es una necesidad. Se debe manejar, en todos los niveles y capas, unos mínimos de seguridad restringiendo el acceso a las fuentes de datos.
        p.mb-0 También reduce los procesos de ida y vuelta reiterativos, considerando la utilización de instrucciones #[em “batching”] o también conocido como manejo por lotes, dentro de una única operación de base de datos. 
      .col-md-2.mb-4(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/tema3/6.svg" style="max-width:150px;")

    .p-4.p-lg-5.bg-4(data-aos="fade-down")
      p.mb-0 Los objetivos de desempeño para el acceso a la capa de datos deben de ser tomados en cuenta durante el diseño del modelo de negocio y la interacción con los elementos que hacen parte de los procesos que se identifican en el diagrama de objetos.

    
    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_3_2 3.2  Capa de negocio

    p.mb-4(data-aos="fade") Sobre la capa de negocio se debe realizar una serie de actividades y/o consideraciones, que son relevantes para el correcto funcionamiento en la lógica de la aplicación. Estas actividades se deben realizar de manera paralela con las diseñadas y desarrolladas para el diseño de la capa de datos:

    .row.align-items-center.p-4.p-lg-5.bg-4(data-aos="fade-down")
      .col-md-9.mb-3.mb-md-0
        ul.lista-ul.fa-ul.color-acento-botones
          li
            i.fas.fa-check
            | Diseño global para la capa de negocio.
          li
            i.fas.fa-check
            | Diseño de componentes del negocio.
          li
            i.fas.fa-check
            | Componentes de flujo de trabajo.
          li
            i.fas.fa-check
            | Consideraciones de diseño.
          li
            i.fas.fa-check
            | Componentes de negocio.
          li
            i.fas.fa-check
            | Concurrencia y transacciones.
      .col-md-3.text-center
        figure
          img.mx-auto(src="@/assets/curso/temas/tema3/7.svg" style=";max-width:150px;")


    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_3_3 3.3 Diseño global para la capa de negocio

    .row
      .col-md-10.mb-4(data-aos="fade-right")
        p Es fundamental identificar las características relevantes de los usuarios sobre los cuales se enfoca la aplicación y cómo ellos van a utilizar la capa de negocio, si ha de ser con niños, personas adultas mayores, público en general, etc. 
      .col-md-2.mb-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema3/8.svg" style="max-width:150px;")

    .p-4.p-lg-5.bg-4(data-aos="fade-down")
      p.mb-0 Definir cómo se va a exponer la capa de negocio, cuáles son los requerimientos de seguridad, identificando cuáles son las necesidades y generar las estrategias de validación para la capa de negocio.


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_3_4 3.4  Diseño de componentes del negocio

    p.mb-4(data-aos="fade") Identificar y definir las reglas del negocio, generando patrones que se ajusten a los requisitos y necesidades.

    .row
      .col-md-4.mb-3
        .p-5.bg-5.h-100.sombra-1
          h3 Flujo de información
          p.mb-0 Se trata entonces de establecer la manera en que se utilizará para realizar el envío de información entre los componentes de la aplicación móvil. 
      .col-md-4.mb-3
        .p-5.bg-6.h-100.sombra-1
          h3(data-aos="fade-up" style="word-break: break-word;") Ubicación, acoplamiento e interacciones apropiadas
          p.mb-0 Se trata, además, de definir qué tipo de soporte es el apropiado para utilizar entre las transacciones, asegurando que son las adecuadas para lograr la mejor ubicación, el mejor acoplamiento, y lograr las interacciones de los componentes de negocio.
      .col-md-4.mb-3
        .p-5.bg-5.h-100.sombra-1
          h3 Formatos de datos
          p.mb-0 Elegir e identificar los formatos de los datos que serán comunes para las entidades de negocio que se interrelacionan.


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_3_5 3.5 Componentes de flujo de trabajo

    .row
      .col-md-10.mb-4(data-aos="fade-right")
        p Es clave identificar y definir el flujo de trabajo que debe ser utilizado en cada escenario. Definir, entonces, un modelo de edición estándar que permita realizar cambios sin afectar otros componentes cuando se realicen actualizaciones y mejoras. También es importante el diseño de los componentes de negocio, conociendo el flujo de trabajo para generar la sinergia necesaria en estas actividades.
      .col-md-2.mb-4(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/tema3/9.svg" )

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-4" data-aos="fade-down")
      .row.justify-content-center(titulo="Consideraciones de diseño")
        .col-lg-11.mb-4.mb-md-0
          p El diseño de la capa de negocio busca minimizar la complejidad de interconexión y flujo de datos por medio de la división de las actividades en diferentes áreas, por ejemplo, los objetos de procesamiento de información que definen el negocio, el flujo de trabajo y las relaciones entre las entidades que definen la lógica del negocio.
      .row.justify-content-center(titulo="Responsabilidades de la capa de negocio")
        .col-lg-11.mb-4.mb-md-0
          p Es importante comprender e identificar las responsabilidades de la capa de negocio en cada una de las transacciones o en cada operación, es una buena idea y muy sana usar una capa de negocio separada para el procesamiento de las reglas de negocio más complejas. 
      .row.justify-content-center(titulo="Separación adecuada de componentes")
        .col-lg-11.mb-4.mb-md-0
          p Desde luego, y después de la acción anterior, se debe evitar mezclar los diferentes tipos de componentes, impidiendo un estrecho acoplamiento y dependencia entre las capas, que podrían generar graves fallas en el correcto funcionamiento de la aplicación.

    
    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_3_6 3.6 Componentes de negocio

    .row
      .col-md-8.mb-4(data-aos="fade-right")
        p Los componentes que hacen parte fundamental del negocio se deben trabajar bajo el enfoque de módulos que permitan la reutilización y el acoplamiento, evitando la dependencia y, por consiguiente, las fallas generales.
        p Si uno de estos elementos o apartes falla, se debe contar con una alternativa que permita dar continuidad al flujo de datos sin perjudicar la operación, implementando reglas y patrones del negocio. 
        p Todos los componentes de negocio deben mostrar la funcionalidad de una manera transparente, así mismo, los servicios de datos para dar continuidad al flujo de trabajo. En resumen, se deben diseñar componentes que se puedan reutilizar y acoplar, manteniendo la estructura de las reglas de negocio.
      .col-md-4.mb-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema3/10.svg")

    
    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_3_7 3.7 Concurrencia y transacciones

    p.mb-4(data-aos="fade") Se debe optar por identificar cuál es el mejor modelo de comunicación y sincronización entre procesos. Tal modelo ha de permitir gestionar las transacciones de manera efectiva, por lo general, siempre se parte de los modelos conocidos: modelo optimista y modelo pesimista, como se ilustra a continuación.
 
    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Figura 1.] Arquitectura de App multiplataforma, con biblioteca de clases
    figure.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/tema3/11.svg" alt="Presentación de una arquitectura de un aplicación para diferentes plataformas, con biblioteca de clases portables.")

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-4")
      .row.justify-content-center(titulo="Modelo optimista")
        .col-lg-11.mb-4.mb-md-0
          p El primer modelo presenta un escenario ideal donde no se presentan bloqueos, no existe falla en la transacción de datos y las actualizaciones requieren un código de verificación, por lo general, contra una marca de tiempo para verificar que los datos no han cambiado desde que se recibieron por última vez. 
      .row.justify-content-center(titulo="Modelo pesimista")
        .col-lg-11.mb-4.mb-md-0
          p En este los datos se bloquean y no se pueden actualizar por otra operación, hasta que se libere el bloqueo. Estos dos modelos se deben alternar y ha de buscarse un equilibrio que permita solucionar cualquier inconveniente en las transacciones.
      .row.justify-content-center(titulo="Capa de negocio")
        .col-lg-11.mb-4.mb-md-0
          p Esta capa define e implementa la funcionalidad principal del sistema y se condensa la lógica del negocio, puntualizando qué es lo importante y relevante dentro del proceso de desarrollo. Por lo general, está formada por varios elementos que son comunes a casi todas las aplicaciones móviles; algunos de estos elementos se pueden reutilizar, en la mayoría de los casos se cuenta con interfaces de servicio que otros componentes y capas utilizan, por ejemplo, los patrones que algunas aplicaciones utilizan para lograr el acceso a los datos y servicios remotos y, los servicios remotos que prestan algunos terceros. Estos datos y protocolos son consumidos por la capa de negocio a través de servicios web o APIs.





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    datosSlyder: [
      {
        titulo: 'Tecnología adecuada',
        texto:
          'Es de suma importancia elegir la tecnología adecuada para el acceso a los datos. Para definir qué tecnología utilizar, lo primero que se debe plantear es qué tipo de datos se van a manipular, identificando los posibles tipos de datos y su formato. Así se puede generar una interfaz que utilice una capa de abstracción intermedia que organice el acoplamiento para la capa de datos.',
        imagen: require('@/assets/curso/temas/tema3/2.svg'),
      },
      {
        titulo: 'Componentes de interfaz',
        texto:
          'Este proceso se puede lograr por medio de la definición de componentes de interfaz, como por ejemplo: <br><br> <ul style="list-style: circle;padding: revert;"> <li>Teniendo claro la puerta de enlace con entradas y salidas conocidas, que interpreten todas las peticiones a un formato comprensible para los componentes de las capas.</li> <li>Encapsulando las funciones que permiten el acceso a los datos para que no sean asequibles fácilmente. Esta capa de acceso a datos, debe ocultar y no permitir el acceso a los detalles de las fuentes de los datos.</li> <li>Negociando y gestionando todas las conexiones y las funciones que generan las consultas.</li></ul>',
        imagen: require('@/assets/curso/temas/tema3/3.svg'),
      },
      {
        titulo: 'Interfaces abstractas',
        texto:
          'Por lo general, los procesos en los cuales se adquieren y consumen datos interactúan por medio de las interfaces abstractas que, utilizando objetos y funciones en las aplicaciones, adquieren la información en formatos personalizados y XML.  La capa principal para el acceso a los datos debe crear y gestionar todas las conexiones a todas las fuentes de datos requeridas por la aplicación.',
        imagen: require('@/assets/curso/temas/tema3/4.svg'),
      },
      {
        titulo: 'Protección de la información',
        texto:
          'Se debe seleccionar el método apropiado para el almacenamiento y protección de la información, en estas conexiones y sus transacciones, la cuales deben estar acordes con los requisitos de seguridad de las aplicaciones. La capa que permite el acceso a los datos debe capturar, manejar y administrar todas las excepciones asociadas con las fuentes de datos y las operaciones CRUD (<em>create, read, update, delete</em>), determinando cómo se van a manejar las excepciones de datos, evitando anomalías en las consultas de información y teniendo el control de todas las transacciones y operaciones realizadas.',
        imagen: require('@/assets/curso/temas/tema3/5.svg'),
      },
    ],
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
