<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          | 3
      .h3 Captura fotográfica análoga y digital
    .row.mb-5
      .col-lg-7
        p.mb-3  La captura de la imagen en las 
          span.text-bold cámaras fotográficas análoga y digital es diferente. 
          | Ya que la cámara análoga utiliza un rollo fotográfico sensible a la luz que ingresa por el lente y la imagen latente queda impresa por la oxidación de la emulsión adherida al rollo fotográfico. Esa oxidación se da por un proceso químico dado por la luz y los haluros de plata dispuestos en el rollo, que posteriormente debe ser revelada e impresa en papel para poder apreciar la imagen como resultado de la toma fotográfica.
        p.mb-3  Por su parte, la cámara digital utiliza un sensor digital que está formado por millones de células fotosensibles, donde se transforma la luz en impulsos electrónicos creando digitalmente la imagen. Al tomarse una fotografía cada celda del sensor analiza la luz que le llega del exterior por el lente; de esta manera 
          span.text-bold la fotografía digital es más fácil, práctica y editable.
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i1.jpg', alt='imagen de cámara análoga con rollo fotográfico')
    .row.mb-5
      .col-lg-12
        figure
          img(src='@/assets/curso/t3-i2.svg', alt='ilustración del proceso de captura análoga de fotos')
    br
    br
    #t_3_1.titulo-segundo
      .h4 3.1  Introducción: definición e historia
    .row.mb-5
      .col-lg-7
        p.mb-3  Definir la fotografía es asumirla como arte sumada con la técnica. Es decir, elegir el mejor escenario para obtener imágenes duraderas debido a la acción de la luz en los diferentes formatos de captura de imágenes. Ellos pueden ser análogos o digitales. 
        p.mb-4  Querer hablar de la historia de la fotografía es un tema largo y ancho en la historia de la humanidad. Por ello, es preciso mencionar que el deseo del hombre por representar la realidad no lo detuvo hasta que la simplificó con el manejo y poder de la luz sobre un dispositivo tangible como la cámara fotográfica. Al referirse a que el tema puede ser largo tanto de ancho como de largo figurativamente, hace referencia a que el proceso de captura de imagen también fue una invención del dispositivo que permitiera esta realidad. 
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i3.svg', alt='ilustración de la cámara oscura')
    .row.mb-5
      .col-lg-12
        figure
          img(src='@/assets/curso/t4-i4.svg', alt='Linea de tiempo de la historia de la fotografía')
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p
            span.text-bold Nota: 
            | para conocer en mayor detalle la historia de la fotografía con sus principales exponentes. se sugiere consultar el documento “Historia de la fotografía: un recorrido por los principales referentes fotográficos y su influencia posterior” escrito por la autora Yessica Espinosa. 
    
    br
    br
    #t_3_2.titulo-segundo
      .h4 3.2 Usos y aplicaciones
    .row.mb-5
      .col-lg-7
        p.mb-3  El uso de la fotografía fue creado para la representación de la realidad desde su creación y hasta hoy día, la fotografía ha construido una necesidad comunicativa importante en la humanidad. Por ello, se debe pensar que no solo es una herramienta que permite reflejar y eternizar diferentes momentos de la vida, también es una herramienta de comunicación directa, con un lenguaje universal que es el de la imagen y que en su práctica y utilidad es de todos.
        p.mb-3  La digitalización de la imagen en los avances tecnológicos, ha puesto a que la fotografía sea cada vez más utilizada de manera doméstica y de entretenimiento. Pero hay otras utilidades de la misma con carácter científico completamente académico, que sirve para la construcción del conocimiento. También ha sido utilizada por la publicidad para sus proyectos publicitarios. Denotando con ello, que la práctica fotográfica es amplia, alta y creciente. 
        p.mb-3  Dentro de estos usos y aplicaciones hay diversos tipos de fotografías, cada una de ellas con su desarrollo y producción completamente particular y específico buscan dar la mejor comunicación a su público de interés. Encontrándose las siguientes:

      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i5.jpg', alt='Mujer tomando una fotografía tomando foto a un plato de comida')
    
    SlyderB.mb-5(:datos="datosSlyder1")

    br
    br
    #t_3_3.titulo-segundo
      .h4 3.3 Concepto y operación
    .row.mb-5
      .col-lg-7
        p.mb-4  El concepto fotográfico es un requerimiento que lo da, la necesidad comunicativa de la fotografía y su público; es decir, qué desea comunicar el fotógrafo con la imagen. Como se vio anteriormente, cada aplicación fotográfica tiene su contexto, personajes y situaciones; y la manera en cómo se consigue esa representación de la realidad hecha fotografía, será responsabilidad del fotógrafo para ubicarse en el lugar, momento y hora adecuada para cada una de los diferentes conceptos fotográficos. 

      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i10.jpg', alt='Hombre con mano derecha levantada en la cima de una montaña')
      
    .h5 Cámaras y sus componentes
    p.mb-5 Los principales componentes de una cámara fotográfica son los siguientes:
    SlyderB.mb-5(:datos="datosSlyder2")
    
    .row.mb-5
      .col-lg-7
        .h5 Lentes y objetivos
        p.mb-3 Los lentes y objetivos son parte fundamental para la buena calidad de las fotografías, si bien la cámara será la que opera y captura la imagen, el lente es quien recoge y dirige. La luz debe llegar al sensor, de manera que su construcción y el material de cristal con el que se está elaborado, más la amplitud del diafragma, incidan en el resultado final de la fotografía. Lo anterior se establece desde las cámaras DSRL, que tienen cuerpo independiente, lo cual se da porque tienen lentes intercambiables que se utilizan según la necesidad de la toma fotográfica y propuesta artística. Existen cámaras compactas que tienen su lente fijo y que no habrá manera de proponer artísticamente alteraciones en la imagen final capturada; como si es posible con lentes intercambiables.
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i17.jpg', alt='representación de la longitud focal y sus angulos de visión')
    .row.justify-content-center.mb-5
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-5
          p
            span.text-bold Los lentes fotográficos son herramientas fundamentales para la imagen final, 
            |  tanto como expresión creativa como para la practicidad de la toma fotográfica. La amplia gama de lentes a disposición hace posible que todas las necesidades y exigencias fotográficas sean posibles. Es importante mencionar que los diferentes lentes tienen diversos ángulos de toma fotográfica. Todos los lentes se miden en mm (28 mm, 50 mm) y cada uno de ellos tiene su ángulo y amplitud de toma. Cada color en la siguiente imagen, representa un ángulo de toma según su valor de en mm.  
        figure
          img(src='@/assets/curso/t3-i17.svg', alt='representación de la longitud focal y sus angulos de visión')
    .h5 Tipos de lentes
    SlyderB.mb-5(:datos="datosSlyder3")

    
    .h5 Iluminación
    p.mb-5 La iluminación en fotografía es la materia prima, sin ella no podrá ser posible que la cámara fotográfica registre una imagen. Se debe recordar que es el sensor de la cámara fotográfica el que recoge la luz que llega del exterior. Cuando se hace referencia a la iluminación en fotografía, se debe tener en cuenta las fuentes lumínicas. Para estos asuntos fotográficos se tendrán en cuenta dos: 
    .row.mb-5.justify-content-center 
      .col-lg-5
        span.text-bold.mb-4  1. La luz natural
        figure
          img(src='@/assets/curso/t3-i22.jpg', alt='Cámara enfocando un paisaje')
          figcaption.no-bg  Producida por los rayos de sol.
      .col-lg-5
        span.text-bold.mb-4  2. La luz artificial
        figure
          img(src='@/assets/curso/t3-i23.jpg', alt='Cámara enfocando objetos en una habitación')
          figcaption.no-bg  Producida por fuentes lumínicas artificiales.
    p.mb-5 Cualquiera de las dos serán determinantes para la construcción de la imagen en la cámara fotográfica, pues sin presencia de luz no habrá información suficiente para que el sensor la convierta en imagen. El trabajar con fuente de iluminación natural es más complicado que con luz artificial, pues se debe considerar que es una luz que está presente a determinadas horas en el día, además de la existencia de nubes, las cuales cambian las condiciones lumínicas; lo que finalmente hará no controlar nunca la luz natural. Por supuesto, es una luz que se tiene presente en el día y para la generalidad de tomas fotográficas funciona haciendo un buen uso de ella. Pero en fotografías más estrictas como la publicitaria, hace falta adicionar a las condiciones de luz natural, unas luces artificiales que potencien la escena a fotografiar.
    .row.mb-5
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4
          p Por otra parte,
            span.text-bold la iluminación artificial es una luz que se puede controlar, 
            | poner, quitar o alterar; lo cual hace que favorezca por sus múltiples maneras de iluminar el escenario. En el universo de las luces artificiales, cualquiera se puede utilizar para la fotografía; aunque hay por supuesto muchas dedicadas y especializadas para fotografía, pero desde una vela hasta un bombillo de poste de luz, puede favorecer la toma fotográfica.  

      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i24.jpg', alt='hombre tomando fotografias con set de luminación artificial')
    .h5 Sensibilidad (Norma ISO)
    p.mb-3  La sensibilidad hace referencia a la posibilidad electrónica que tiene la cámara fotográfica de utilizar la luz que desde el exterior llega al sensor. Este es un mecanismo integrado en la cámara que se denomina ISO (International Organization for Standardization), el cual tiene valores referentes desde 100 hasta 16000 según modelos de cámaras y autonomías de la misma.
    .row.mb-5
      .col-md-7
        p.mb-3  Lo que significa que, en condiciones normales de luz para la toma fotográfica, sus valores pueden ser de 100 hasta 500 ISO. Pero si en la toma fotográfica, su escenografía no cuenta con la suficiente iluminación, tendrá que de manera autónoma darle o programar valores mayores (700-16000 ISO) a la cámara para que desde su sistema integrado electrónico le otorgue luz y la fotografía final tenga buen resultado.
        p.mb-3  Todo este proceso es electrónico y debe indicarle a la cámara desde el menú y hay que tener en cuenta que entre más valor de ISO se utilice la imagen final tendrá lo que en fotografía se llama “grano”. Lo cual es una textura similar a granos perceptibles en la fotografía que no van a incidir en la nitidez del mismo, pero si en la percepción de textura en la imagen. Esto como resultado de la utilización de un ISO alto, ya que, entre más ISO, más textura granulada tendrá la imagen final.

      .col-md-5
        figure
          img(src='@/assets/curso/t3-i25.jpg', alt='detalle del boton ISO en camara fotográfica ')
    figure.mb-5
          img(src='@/assets/curso/t3-i27.svg', alt='representación de guía de sensibilidad del sensor')
    br
    br
    #t_3_4.titulo-segundo
      .h4 3.4 Medición y exposición
    .row.mb-5
      .col-lg-7 
        p.mb-3  La medición y exposición fotográfica está sometida a dispositivos electrónicos en su mayoría externos y hace referencia a valores adecuados que se deben manejar en la cámara para obtener una buena toma fotográfica. Estos valores los dará un exposímetro que hará lectura de la cantidad de luz que llega a el sensor. Como se ha dicho, la fotografía es el manejo y utilización de la luz y para ello, la cámara tiene unos dispositivos que sirven para detener el exceso de luz y ausencia de la misma. Estos mecanismos son el diafragma y el obturador, anteriormente mencionados. 
        p.mb-3  Debe haber un equilibrio en valores asignados para cada mecanismo que hará que la toma fotográfica sea adecuada, pues un ingreso de mucha luz al sensor hará que la fotografía tenga una sobreexposición y se verá negra, debido que llega mucha luz y satura el sensor. O lo contrario, una subexposición que será una fotografía blanca por la ausencia de luz en el sensor. Habiendo dicho esto, la medición se hace desde un exposímetro externo que asumirá la cantidad de luz que le llega al sensor de la cámara, indicándole en su pantalla digital del exposímetro qué valor de diafragma y obturador debe manejar la cámara.
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i28.jpg', alt='detalle del boton de selección de parametros de exposición')
    
    .h5 Prioridad de apertura o velocidad
    p.mb-5  Este punto se refiere a la velocidad en que se mueve el obturador, que es un mecanismo de cortinillas ubicadas horizontalmente frente al sensor. Su movimiento permite la entrada de la luz que ya ha pasado por el diagrama al sensor y ese tiempo de duración de luz que está llegando al sensor, será la que asumirá el sensor y transformará en electricidad para construir electrónicamente la imagen.
    .cajon.color-acento-contenido.p-4.mb-5
      p Como se ha mencionado, el obturador y su apertura permiten la toma fotográfica, pero también tendrá valores de velocidad de apertura para buscar un control de luz y permitir tener un comportamiento específico de lo que ocurre en dicha. Es decir, 
        span.text-bold  poder a altas velocidades (500-1000) 
        | de utilización del obturador, hacer lo que en fotografía se le conoce como 
        span.text-bold congelados a los elementos en movimiento.
    .row.mb-5.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i29.jpg', alt='fotografia de polvo de harina en el aire')
          figcaption.no-bg  
            span.text-bold  Fotografía con alta velocidad en obturación
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i30.jpg', alt='fotografia gotas de agua salpicando')
          figcaption.no-bg  
            span.text-bold  Fotografía con alta velocidad en obturación
    .cajon.color-acento-contenido.p-4.mb-5
      p También, por 
        span.text-bold  el manejo de la velocidad lenta (1 o 2 segundos) en obturación,
        | se pueden hacer efectos fotográficos de barrido y de movimiento de objetos, permitiendo tener efectos en la imagen creativos y vistosos.
    .row.mb-4.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i31.jpg', alt='fotografia de polvo de harina en el aire')
          figcaption.no-bg  
            span.text-bold  Fotografía con velocidad lenta en obturación
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i32.jpg', alt='fotografia de polvo de harina en el aire')
          figcaption.no-bg  
            span.text-bold  Fotografía con velocidad lenta en obturación



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder2: [
      {
        titulo: 'El visor',
        texto:
          'Es por donde la mirada observa y encuadra la toma fotográfica. En sí, se debe interpretar qué ve la cámara fotográfica.',
        imagen: require('@/assets/curso/t3-i10-1.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El objetivo',
        texto:
          'Es el lente del cuerpo de la cámara, es por donde entra la luz a la cámara para que el sensor registre de manera correcta la imagen latente dada por la luz. Lo que el lente proporciona y genera en la cámara es darle diferentes perspectivas en la imagen fotográfica.',
        imagen: require('@/assets/curso/t3-i11.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El sensor',
        texto:
          'Componente principal dentro de muchos que intervienen en la buena calidad de la toma fotográfica. Es el encargado de capturar la luz y convertirla en corriente eléctrica para generar una imagen digital.',
        imagen: require('@/assets/curso/t3-i12.jpg'),
        //--leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El diafragma',
        texto:
          'Son las cortinillas encargadas con sus movimientos físicos de cerrar y abrir según sea la indicación realizada por el operador de la cámara, lo que permitirán mayor o menor cantidad de luz hacia el sensor según la necesidad de la toma fotográfica, como resultado de la iluminación presente de la escena. También su apertura del diafragma hará que la nitidez de la imagen se amplíe.',
        imagen: require('@/assets/curso/t3-i13.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El obturador',
        texto:
          'Son cortinillas encargadas de bloquear la luz al sensor. Su movimiento permite el ingreso de la luz del exterior por el lente, lo que hace que al sensor registrar la luz para convertirla en imagen digital. Este proceso ya está antecedido por el funcionamiento del diafragma, por lo tanto, el obturador finalmente hará posible en la fotografía, que ese instante de la realidad quede plasmando y pueda quedar registrado en la cámara fotográfica.',
        imagen: require('@/assets/curso/t3-i14.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'La pantalla',
        texto:
          'Se le conoce como Display y es el encargado de permitir al fotógrafo visualizar la imagen que la cámara está asumiendo por el lente. En las cámaras actuales es la que permite visualizar también el menú y los parámetros configuración de la cámara. Se debe tener en cuenta que su utilización va a agotar de manera amplia la batería del cuerpo de la cámara.',
        imagen: require('@/assets/curso/t3-i15.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Los botones y diales de control',
        texto:
          'Son los diferentes mecanismos físicos que harán que la cámara fotográfica opere de manera específica, según sea la necesidad del fotógrafo. Cada botón tiene una función específica y haciendo referencia al dial, este es la perilla superior donde según su posición respecto al indicador, da una función determinada para el manejo de la cámara.',
        imagen: require('@/assets/curso/t3-i16.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder1: [
      {
        titulo: 'Fotografía publicitaria',
        texto:
          'Su característica es darle importancia al producto comercial, es ahí donde focaliza toda su atención escénica; es decir, en decoración y puesta en escena en la producción técnica: nitidez, encuadre o angulación. Este uso de la fotografía es de un amplio lenguaje, con infinitas propuestas en la utilización de espacios, personajes, artículos, decorados; pero con un máximo de preocupación por una muy buena calidad de imagen fotográfica final.',
        imagen: require('@/assets/curso/t3-i6.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fotografía documental',
        texto:
          'Busca el relatar algún aspecto de la vida, procura encontrar un diálogo de significación entre los acontecimientos y el relato visual propuesto en la fotografía. Es una fotografía en sitio; es decir, necesita desarrollarse en el lugar como escenario propio de la fotografía documental.',
        imagen: require('@/assets/curso/t3-i7.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fotografía paisajística',
        texto:
          'Busca exaltar la belleza natural del paisaje, la mayoría de las fotografías son tomadas en planos generales y deben ser en exterior. Como condición esencial de toda fotografía es necesario tener una muy buena iluminación. Aquí hay que decir que el trabajo fotográfico con luz natural puede dificultar el buen registro fotográfico.',
        imagen: require('@/assets/curso/t3-i8.jpg'),
        //--leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fotografía científica',
        texto:
          'Fotográficamente es un recurso fundamental para la documentación de los procesos científicos que se realcen. Sirve como documento y archivo y es muy importante, ya que conforma una base de datos catalogable.',
        imagen: require('@/assets/curso/t3-i8-1.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fotografía artística',
        texto:
          'Es una fotografía que permite una apreciación única de la realidad al fotógrafo. El valor artístico y expresivo son los más fuertes soportes para esta clase de fotografías, ya que una fotografía puede no tener en cuenta las reglas de composición fotográfica, debido a que su carácter artístico le proporciona esta libertad narrativa.',
        imagen: require('@/assets/curso/t3-i9.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder3: [
      {
        titulo: 'Gran angular 18 mm – 28 mm',
        texto:
          'El gran angular es un lente de una utilización muy específica, ya que altera la imagen y cambia la forma de los objetos de manera que los desproporciona. Igualmente, por esas condiciones mencionadas sirve para generar interés artístico y funcionalmente se puede tener buenas tomas en lugares estrechos.',
        imagen: require('@/assets/curso/t3-i17-1.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Lente angular 35 mm',
        texto:
          'El lente angular va desde 35mm hasta 45 mm. Como se puede ver en la siguiente imagen, alterar las formas de los cuerpos fotografiados, tiene también una utilidad muy específica.',
        imagen: require('@/assets/curso/t3-i18.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Lente normal 50 mm',
        texto:
          'Es el lente de preferencia y es un ángulo de toma normal. Es importante mencionar que, para todos los lentes intercambiables, su apertura en diafragma incide en la cantidad de luz que va a llegar al sensor. Estas lentillas del diafragma existen en el lente, por lo que entre más apertura el lente será más costoso.',
        imagen: require('@/assets/curso/t3-i19.jpg'),
        //--leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Teleobjetivo 100 mm',
        texto:
          'Este es un tipo de lente que permite registros fotográficos a una amplia distancia. Por su extensión y construcción física deben ser de amplio diafragma, de ser así sería demasiado opaco como se le denomina fotográficamente hablando a lentes con baja apertura de diafragma.',
        imagen: require('@/assets/curso/t3-i20.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Teleobjetivo 500 mm',
        texto:
          'Esta clase de objetivos son de un alto valor económico, por lo que su utilización será para fotógrafos especialistas en determinadas tomas, como avistamiento de aves, deportivas, entre otras. Su construcción es de un material de color blanco para no tener inconvenientes con la dilatación de sus materiales en contacto prolongado con el sol, pues es un lente para tomar fotografías en exteriores.',
        imagen: require('@/assets/curso/t3-i21.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.h70  {heigh: 70px}
.p-l-0 {padding-left: 0px !important}
.color-acento-contenido{ background-color: #FFEDD3; color:#000}
.tarjeta.color-acento-contenido *{ color: #12263F}
</style>
