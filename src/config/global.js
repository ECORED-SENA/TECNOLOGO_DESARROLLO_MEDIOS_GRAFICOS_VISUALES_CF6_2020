export default {
  global: {
    componenteFormativo: 'Imagen y captura',
    descripcionCurso:
      'Las nuevas tecnologías han proporcionado nuevos lenguajes y a su vez, una representación del mundo que rodea a las personas. La imagen digital es una de esas herramientas que en su construcción va cambiando y reelaborándose desde lenguajes propios. Conocer los campos que intervienen en la formación de la imagen da el poder de interpretar cómo se están llevando los procesos de construcción de imagen. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Imagen',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de imagen y formatos (extensiones de archivo)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Resolución, tamaño y dimensión',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Modos y profundidad de color',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Optimización y compresión de imágenes',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Dispositivos de captura y salida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación y características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Funcionamiento y operación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Captura fotográfica análoga y digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción: definición e historia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Usos y aplicaciones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Concepto y operación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Medición y exposición',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Composición',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Wilmer Andrés Peña Carvaja',
        cargo: 'Instructor',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Correctora de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Meléndez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Adobe. (2020). Acerca de las dimensiones en píxeles y la resolución de la imagen impresa.',
      link:
        'https://helpx.adobe.com/es/photoshop/using/image-size-resolution.html',
    },
    {
      referencia: 'Amador, P. (s.f.). La imagen fotográfica y su lectura.',
      link: 'https://core.ac.uk/download/pdf/30042969.pdf',
    },
    {
      referencia:
        'Barros, J. (2020). Fotografía: tamaño de imagen, resolución y tamaño físico.',
      link:
        'https://perio.unlp.edu.ar/catedras/iddi/wp-content/uploads/sites/125/2020/05/Fotograf%C3%ADa.-Tama%C3%B1o-de-imagen-resoluci%C3%B3n-y-tama%C3%B1o-f%C3%ADsico.pdf',
    },
    {
      referencia:
        'Berger, J. (2015). Para entender la fotografía. Editorial Gustavo Gili.',
    },
    {
      referencia: 'Definición de. (2020). Impulso.',
      link:
        'https://definicion.de/impulso/#:~:text=Los%20impulsos%20el%C3%A9ctricos%20son%20variaciones,fisioterapia%2C%20m%C3%A1s%20precisamente%20la%20electroestimulaci%C3%B3n.',
    },
    {
      referencia:
        'Fernández, F. (2020). Cómo funciona el sensor de una cámara digital.',
      link:
        'https://quecamarareflex.com/como-funciona-el-sensor-de-una-camara-digital/',
    },
    {
      referencia: 'Lexico. (2020). Oxidación.',
      link: 'https://www.lexico.com/es/definicion/oxidacion',
    },
    {
      referencia: 'Máxima, J. (2020). Historia de la fotografía.',
      link:
        'https://www.caracteristicas.co/historia-de-la-fotografia/#ixzz6em73BDMA',
    },
    {
      referencia: 'Real Academia Española (RAE). (2020). Sigla.',
      link: 'https://dle.rae.es/sigla',
    },
    {
      referencia: 'Sociedad Fotográfica de Málaga. (2020). Haluros de plata.',
      link:
        'https://www.sfm.org.es/glosario/h#:~:text=El%20revelador%20transforma%20en%20plata,la%20acci%C3%B3n%20de%20la%20luz.&text=Al%20procesar%20%C3%A9sta%20con%20una,n%C3%BAmero%20de%20part%C3%ADculas%20se%20crear%C3%A1n.',
    },
    {
      referencia: 'Zerbst, C. (2008). Introducción a la fotografía digital.',
      link:
        'https://www.uv.mx/personal/lenunez/files/2013/06/INICIACION-A-LA-FOTOGRAFIA-DIGITAL-DeCamaras.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Haluros de plata:',
      significado:
        'El revelador transforma en plata metálica la imagen latente generada en estos compuestos por la acción de la luz” (Sociedad Fotográfica de Málaga, 2020).',
    },
    {
      termino: 'Impulsos eléctricos:',
      significado:
        'Son variaciones en la intensidad o en la tensión de una corriente de tipo pulsatorio, y suelen durar tan sólo unos microsegundos y mostrar una onda angulosa” (Definición de Impulso, 2020).',
    },
    {
      termino: 'Oxidación:',
      significado:
        '“Fenómeno químico en virtud del cual se transforma un cuerpo o un compuesto por la acción de un oxidante, que hace que en dicho cuerpo o compuesto aumente la cantidad de oxígeno y disminuya el número de electrones de alguno de los átomos” (Léxico, 2020).',
    },
    {
      termino: 'Siglas:',
      significado:
        '“Abreviación gráfica formada por el conjunto de letras iniciales de una expresión compleja” (RAE, 2020).',
    },
  ],
  complementario: [
    {
      texto: 'Amador, P. (s.f.). La imagen fotográfica y su lectura.',
      tipo: 'PDF',
      link: 'https://core.ac.uk/download/pdf/30042969.pdf',
    },
    {
      texto: 'Zerbst, C. (2008). Introducción a la fotografía digital.',
      tipo: 'Libro',
      link:
        'https://www.uv.mx/personal/lenunez/files/2013/06/INICIACION-A-LA-FOTOGRAFIA-DIGITAL-DeCamaras.pdf',
    },
  ],
}
