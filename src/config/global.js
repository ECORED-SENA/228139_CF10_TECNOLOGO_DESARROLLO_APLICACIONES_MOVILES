export default {
  global: {
    componenteFormativo: 'Construcción de la aplicación móvil',
    descripcionCurso:
      'Mediante este componente el aprendiz se afianzará en el desarrollo de aplicaciones móviles híbridas, sumando elementos clave para el correcto desempeño y funcionalidad, flujo de navegación e información, componentes gráficos e informativos de la app, entre otros. Identificará recursos externos e internos de uso, definiendo las API necesarias e integrables, todo ello, en concordancia con su modelo de negocio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Flujos de navegación en app multiplataforma',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Flujos de navegación por usuario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Flujos de navegación según sistema operativo',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Arquitectura de la aplicación móvil híbrida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Instrucciones de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Riesgos de seguridad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Capa de negocio',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diseño global para la capa de negocio',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Diseño de componentes del negocio',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Componentes de flujo de trabajo',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Componentes de negocio',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Concurrencia y transacciones',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Las API',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Historia de las API',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de API según sus permisos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: '¿Por qué son importantes las API?',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Tipos de API según su función',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Arquitectura cliente-servidor REST',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Métodos HTTP usados en las API',
            hash: 't_4_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228139_CF10_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '4. Las API',
      referencia:
        'Vásquez, G. (2020). <em>NativeScript Vue introducción – creando apps móviles nativas con Vue.js</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kkCDDYpp4pg&t=1726s',
    },
    {
      tema: '4. Las API',
      referencia:
        'Bravent IT consulting company. (2019). <em>Webinar – Desarrollando apps móviles con NativeScript</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qN0hwVAPA0A',
    },
    {
      tema: '4. Las API',
      referencia:
        'EDteam. (2019). <em>¿Qué es una API? – La mejor explicación en español</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u2Ms34GE14U&t=307s',
    },
    {
      tema: '4. Las API',
      referencia:
        'Nari, A. (2019). <em>Cómo consumir una API desde NativeScript</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UtKZtMkIe08',
    },
  ],
  glosario: [
    {
      termino: 'Comandos “Batching”',
      significado:
        'Esto es lo que se denomina procesamiento por lotes o <em>batching</em>. Consiste en dedicar un período de tiempo a realizar tareas similares o que requieren los mismos recursos.',
    },
    {
      termino: 'CRUD',
      significado:
        'Es el acrónimo de (<em>Create, Read, Update and Delete</em>) que traduce “crear, leer, actualizar y borrar”, por lo general se utiliza en las actividades básicas  realizadas sobre una base de datos.',
    },
    {
      termino: '<em>Partner</em>',
      significado:
        'Es la relación que se constituye entre dos o más empresas para obtener un mutuo beneficio. Por lo general, existe una empresa proveedora y otra que actúa como comercializadora o distribuidora de los servicios/productos.',
    },
    {
      termino: '<em>String</em> de conexión',
      significado:
        'Se define como una cadena que se compone del código necesario para acceder a una fuente de datos (habitualmente a motor de base de datos) y poder realizar una conexión segura.',
    },
    {
      termino: 'W3C',
      significado:
        'Se define como un consorcio internacional que trabaja en el desarrollo de estándares Web, buscando mantener la idea básica de la World Wide Web.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ainoa, L. (2014). Introducción al desarrollo de aplicaciones para Android. ICB Editores.',
    },
    {
      referencia:
        'Fielding, R. (2000).  <em>Architectural styles and the design of network -based software architectures. Dissertations Publishing</em>. ',
      link:
        'https://www.proquest.com/openview/fc2d064044b971dda476dfb429a2b344/1?pq-origsite=gscholar&cbl=18750&diss=y',
    },
    {
      referencia:
        'Manticore Insane Apps. (2019). Servicios REST HTTP en nativescript. Manticore-labs. ',
      link:
        'https://manticore-labs.com/2019/03/01/servicios-rest-http-en-nativescript/ ',
    },
    {
      referencia:
        'Nolasco, J. (2019). Desarrollo de aplicaciones con Android. Ra-Ma.',
    },
    {
      referencia:
        'Paredes, M. (2015). Programación multimedia y dispositivos móviles. Ra-Ma.',
    },
    {
      referencia:
        'Raboy, N. (2015). Realizar solicitudes HTTP en una aplicación móvil NativeScript [Web log post]. Blogspot.',
      link:
        'https://www.thepolyglotdeveloper.com/2015/11/make-http-requests-in-a-nativescript-mobile-application/ ',
    },
    {
      referencia:
        'Raboy, N. (2016). Trabajar con datos RESTFUL en Angular 2 y NativeScript [Web log post]. Blogspot. ',
      link:
        'https://www.telerik.com/blogs/working-with-restful-data-in-angular-2-and-nativescript ',
    },
    {
      referencia:
        'Raboy, N. (2018). Realizar solicitudes HTTP a servicios web remotos en una aplicación NativeScript-Vue [Web log post]. Blogspot. ',
      link:
        'https://blog.nativescript.org/make-http-requests-to-remote-web-services-in-a-nativescript-vue-app/index.html',
    },
    {
      referencia:
        'Serna, S. (2015). Diseño de interfaces en aplicaciones móviles. Ra-Ma.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilson Andrés Cuervo Nieto',
          cargo: 'Instructor',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
