<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Arquitectura de la aplicación móvil híbrida

    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema2/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Para realizar una aplicación móvil híbrida se debe contar con una arquitectura que permita comprender e integrar cada uno de los elementos necesarios para realizar los procesos; por lo general se usa el modelo de tres capas para la arquitectura de #[em software] para aplicaciones móviles. Estas capas se pueden dividir y trabajar con otras subcapas, según la complejidad y robustez del aplicativo, estas son: la capa de presentación, la capa de aplicación o capa de negocio y la capa de datos.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-4" data-aos="fade-down")
      .row.justify-content-center(titulo="Componentes de la capa de datos")
        .col-lg-11.mb-4.mb-md-0
          p El componente de la lógica de datos permite visualizar de manera más clara los contenedores de información y sus relaciones, concentrando la funcionalidad de este proceso que permite el acceso a los datos, generando una estructura que hará que la aplicación sea más fácil de diseñar, configurar y mantener a largo plazo.

      .row.justify-content-center(titulo="Componentes de ayuda o servicios")
        .col-lg-11.mb-4.mb-md-0
          p Las tareas para acceder a los datos demandan mantener una lógica general y estandarizada que debe ser implementada en los componentes que, por lo general, se encuentran separados, pero mantienen una identidad, que permite simplificar la complejidad de los componentes y su integración, minimizando la cantidad de código a mantener. Estos componentes son las librerías especializadas y las rutinas planificadas para mejorar e incrementar el rendimiento en el acceso a los datos, reducir el tiempo de desarrollo y la cantidad de requerimientos de componentes lógicos.

      .row.justify-content-center(titulo="Parámetros de diseño de capa de acceso a datos")
        .col-lg-11.mb-4.mb-md-0
          p Un correcto diseño de la capa de datos reduce el tiempo de desarrollo y permite un fácil mantenimiento de la misma después de que la aplicación se encuentre desarrollada. Por lo general, es fundamental trabajar con el diagrama de clases y el diagrama de objetos UML, para lograr la claridad en lo que se busca realizar (Korth y Sudarshan, 2006).

      .row.justify-content-center(titulo="Diseño global de la capa de acceso a datos")
        .col-lg-11.mb-4.mb-md-0
          p Identificar y determinar las fuentes de datos y el acceso a ellos, definiendo cómo se realizará la conexión para la recolección y presentación de los datos, generando estrategias que permitan evitar los errores o contar con un plan de contingencia, si es necesario.

      .row.justify-content-center(titulo="Diseño de componentes de acceso a datos")
        .col-lg-11.mb-4.mb-md-0
          p Definir los patrones de diseño y los métodos de acceso a utilizar para cada fuente de datos, definiendo, enumerando y clasificando los componentes necesarios para simplificar el acceso a los datos.

      .row.justify-content-center(titulo="Diseño de componentes de ayuda o servicios")
        .col-lg-11.mb-4.mb-md-0
          p Centralizar la información con el fin de reutilizarla, identificar librerías y elementos que permitan la reutilización de los datos de manera eficiente y segura, implementar procedimientos para generar un buen control de acceso a los datos y realizar pruebas en cada uno de los elementos utilizados, identificando y creando  mecanismos de ayuda para suplir problemas más frecuentes, como por ejemplo los #[em strings] de conexión, la comprobación y  autenticación de las fuentes de datos, el monitoreo de los servicios y excepciones particulares en los diferentes procesos.

      .row.justify-content-center(titulo="Agentes de servicio")
        .col-lg-11.mb-4.mb-md-0
          p Se emplean cuando un componente de negocio lo provee un servicio o un servidor externo; estos servicios externos son, por lo general, ofrecidos por un tercero, por ejemplo, la conexión a correos electrónicos y el almacenamiento de la información que contienen los mensajes; se almacenan de manera remota y por esa razón se necesitará crear un código que administre el protocolo de comunicación con ese servicio. Los protocolos de servicios controlan la petición y la integración, logrando mejorar el rendimiento y la fiabilidad en los procesos. 
          p El agente de servicio determina cómo este será utilizado en la aplicación; se debe determinar cuál es la herramienta más apropiada para utilizar y referenciar el servicio. Por lo general, esto crea unos canales de comunicación que forman los contratos o la negociación entre los servicios.





</template>

<script>
export default {
  name: 'Tema2',
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
