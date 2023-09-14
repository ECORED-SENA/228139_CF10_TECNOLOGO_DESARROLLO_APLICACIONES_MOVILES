<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Flujos de navegación en app multiplataforma

    .bloque-texto-a.color-primario.p-4(data-aos="fade")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema1/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p El flujo de navegación de una aplicación hace referencia a la sucesión de acciones requeridas para la navegación del usuario en una aplicación móvil.
            p.mt-3 #[strong El objetivo del diseño del flujo de navegación para una app es buscar que esta sea eficiente y fácil de usar.]

    
    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_1_1 1.1 Flujos de navegación por usuario

    p(data-aos="fade") El flujo de navegación define la interacción que se tendrá con la aplicación, precisando cada uno de los roles o grupos de usuarios, personalizando la interfaz basados en el proceso de negocio.
    p.mb-4(data-aos="fade") #[strong Se pueden definir varias categorías de flujos de navegación:]

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario(tipo="n" data-aos="fade-down")
          .row
            .col-md-9.mb-4.mb-md-0
              h4 Global
              p Todo usuario tiene acceso a este flujo de navegación sin restricciones. 
            .col-md-3
              img(src='@/assets/curso/temas/tema1/2.svg', alt='')
          .row
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema1/3.svg', alt='')
            .col-md-9
              h4 Rol
              p Este flujo de navegación, está definido por el perfil del usuario, el cual permitirá o restringirá el acceso, según los permisos o privilegios que este posea. Por ejemplo, el flujo de navegación de un usuario administrador.
          .row
            .col-md-9.mb-4.mb-md-0
              h4 Grupo
              p Este flujo de navegación no se da por el rol, sino por el grupo al cual pertenece, y permite realizar actividades diferentes o tener restricciones, según las características del grupo.
            .col-md-3
              img(src='@/assets/curso/temas/tema1/4.svg', alt='')


    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2#t_1_2 1.2 Flujos de navegación según sistema operativo

    p.mb-4(data-aos="fade") Los flujos de navegación deben contar con una estructura sencilla e intuitiva que se familiarice con los antecedentes de las aplicaciones que se utilizan sobre ese sistema operativo a trabajar y, si es el caso trabajar sobre varios S.O., se debe adaptar y facilitar la navegación y, experiencia al usuario.

    .bloque-texto-a.color-primario.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center.justify-content-around
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema1/5.svg" alt="")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Todo el recorrido y navegación del usuario debe tener características previsibles, coherentes y sencillas, independientemente de la navegación que se utilice; gran parte del éxito de la aplicación móvil recae sobre estos tipos de detalles.  Si la aplicación no cuenta con un flujo de desplazamiento sencillo, los usuarios simplemente no la utilizarán por complicada o inapropiada.

    h3(data-aos="fade") Flujo de navegación en Android
    p.mb-4(data-aos="fade")  Desde sus primeras versiones, la navegación en Android se realizó por medio de un patrón o comportamiento nombrado como “hacia adentro, hacia atrás y hacia arriba”. Esta navegación se caracteriza porque cuenta con dos botones #[em “up”] y #[em “back”]: arriba y atrás, como se muestra a continuación.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-7
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 1.] Flujo de navegación en Android
        figure
          img(src="@/assets/curso/temas/tema1/fig1.png" alt="Imagen que presenta el flujo de navegación en Android.")

    .tarjeta-avatar-b.mb-4(data-aos="fade-down")
        .tarjeta-avatar-b__img
          .bg-2.p-4.p-lg-5.tarjeta.ms-lg-3
            figure.m-auto.text-center
              img(src='@/assets/curso/temas/tema1/7.svg' alt='' style="width:150px; display:inline;")
        .tarjeta.tarjeta--azul.bg-3
          .p-5
            h4 #[em Up]
            p.mb-0 Por lo general, se encuentra en la parte superior o inferior izquierda y permite retroceder en la navegación, en un orden jerárquico establecido. La navegación permite replegarse de manera escalonada hacia el inicio o hacia la pantalla principal de la aplicación móvil.

    .tarjeta-avatar-b.mb-5(data-aos="fade-down")
        .tarjeta-avatar-b__img
          .bg-2.p-4.p-lg-5.tarjeta.ms-lg-3
            figure.m-auto.text-center
              img(src='@/assets/curso/temas/tema1/8.svg' alt='' style="width:100px; display:inline;")
        .tarjeta.tarjeta--azul.bg-3
          .p-5
            h4 #[em Back]
            p.mb-0 Este botón deshace ordenadamente la navegación que se ha ejecutado, restableciendo y ubicando al usuario, de nuevo en la pantalla de navegación de la que proviene.

    h3(data-aos="fade") Flujo de navegación en sistema operativo iOS
    p(data-aos="fade") En este sistema operativo se encuentran tres estilos de navegación bien definidos que se adaptan y ajustan a la estructura de las aplicaciones, como se muestra a continuación.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-7
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 2.] Flujo de navegación en iOS
        figure
          img(src="@/assets/curso/temas/tema1/fig2.png" alt="Imagen que presenta el flujo de navegación en iOS.")
          figcaption.mt-2  Nota. Tomado de ejercicio práctico de descargas en app #[em store].

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-9.m-auto.p-5.caja_flotante_rosada.bg-3
        h4 Navegación jerárquica
        p.mb-0 Se organiza de manera descendente o ascendente para mostrar la información y los elementos que componen la aplicación, por ejemplo Facebook. La navegación con estructura jerárquica permite a los usuarios elegir la pantalla de navegación y realizar un recorrido hasta llegar a su destino o realizar la actividad. Si desea realizar otra actividad, debe retroceder o iniciar desde cero, regresando hasta la pantalla de inicio de la aplicación. Un ejemplo de estas aplicaciones que manejan esta estructura es el correo y la opción de configuración del sistema operativo.
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-9.m-auto.p-5.caja_flotante_rosada.bg-3
        h4 Navegación plana
        p.mb-0 La información está organizada para visualizarse y tener acceso a ella por medio de desplazamientos laterales de izquierda a derecha. La navegación con estructura plana permite la navegación desplazándose de una categoría a otra directamente y se cuenta con una pantalla principal que presenta todas las categorías de manera centralizada, como ejemplo se puede ver el funcionamiento de la app #[em store].
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9.m-auto.p-5.caja_flotante_rosada.bg-3
        h4 Navegación contenida
        p.mb-0 Esta navegación combina las dos anteriores, la jerárquica y la plana.

    h3(data-aos="fade") Navegación en Windows phone
    p(data-aos="fade") La navegación en este sistema operativo busca asemejar el funcionamiento de los sistemas operativos implementados en los computadores, ofreciendo una barra de estado o barra de navegación, ubicada en la parte inferior. Permite la interacción sencilla del usuario y recibe actualizaciones de información constantemente, mostrando diferentes notificaciones, como se muestra a continuación.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-7
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 3.] Figura 3.	Navegación en Windows phone
        figure
          img(src="@/assets/curso/temas/tema1/10.svg" alt="Imagen que presenta la navegación en Windows phone.")
          figcaption.mt-1 http://catedraocampo.com.ar/diferencias-de-flujos-de-navegacion-en-apps-multiplatforma/

    
    .tarjeta-avatar-b.mb-4(data-aos="fade-down")
      .tarjeta-avatar-b__img
        .bg-2.p-4.p-lg-5.tarjeta.ms-lg-3
          figure.m-auto.text-center
          img(src='@/assets/curso/temas/tema1/11.svg' alt='' style="width:100px;display:inline;")
      .tarjeta.tarjeta--azul.bg-3
        .p-5
          h4 La barra de estados
          p.mb-0 Se encuentra ubicada en la parte superior y ofrece la posibilidad de cambiar sus propiedades; puede estar visible o replegarse, ocultándose mientras no es utilizada o solicitada; por lo general, se manipula y visualiza para indicar el proceso de algunas actividades que están en progreso.

    .tarjeta-avatar-b(data-aos="fade-down")
      .tarjeta-avatar-b__img
        .bg-2.p-4.p-lg-5.tarjeta.ms-lg-3
          figure.m-auto.text-center
          img(src='@/assets/curso/temas/tema1/12.svg' alt='' style="width:100px;display:inline;")
      .tarjeta.tarjeta--azul.bg-3
        .p-5
          h4 Barra de aplicaciones
          p.mb-0 Esta barra se asemeja a la barra del sistema operativo de Windows, permite ubicar y visualizar de manera sencilla los elementos habituales. También permite generar un acceso rápido a las aplicaciones más utilizadas, incluyendo un menú con los ejecutables más usados o relevantes; su ubicación se puede orientar de manera horizontal o vertical, por esa razón, las aplicaciones desarrolladas deben estar estructuradas, pensando en esta posibilidad de cambio de orientación.




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
