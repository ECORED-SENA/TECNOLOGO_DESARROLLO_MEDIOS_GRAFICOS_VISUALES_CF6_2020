<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Imagen

    p.mb-5 La digitalización de la imagen, requiere de una comprensión en su construcción y elaboración de la misma. Si bien son procesos electrónicos, se debe entender qué sucede, cómo se procesa y cómo se expresa en su interior para poder interpretarlo desde el exterior; es decir, entender la imagen que sobre el dispositivo electrónico aparece.

    #t_1_1.titulo-segundo
      h2 1.1  Definición y características
    .row.mb-5(data-aos="fade-up")
      .col-lg-7
        p.mb-3 La imagen digital, está representada por impulsos electrónicos cuyo lenguaje es binario. Cuando se habla del lenguaje binario propio de los sistemas digitales, se hace referencia a que ese lenguaje se representa en números (1 y 0). Mismo lenguaje que tienen los pixeles y los bits que son la suma de esos pixeles y construyen una retícula de bits, los cuales son los encargados de darle una buena, regular o mala calidad a la imagen digital.
        p.mb-3 Ahora bien, este lenguaje digital de retícula de bits permite múltiples recursos en usos, almacenamiento y manipulación en el aspecto final en la imagen digital. Lo que hace de la misma un recurso favorable para su utilización en muchos contextos laborales, sociales, culturales y del entretenimiento.
        p.mb-3 Las características en la imagen digital son determinantes para la calidad de la misma. Parámetros como 
          span.text-bold profundidad de color, modos de color, tamaño de la imagen y resolución 
          | son factores que inciden directamente en 
          span.text-bold calidad de la imagen digital. 
      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/t1-i1.jpg', alt='Rostro de Mujer sonriendo con efecto difuminado')
    
    br
    #t_1_2.titulo-segundo
      h2 1.2  Tipos de imagen y formatos (extensiones de archivo)
    p.mb-3  La digitalización de la imagen, la utilización de los diferentes dispositivos de almacenamiento y la circulación, hacen que los tipos de imágenes tengan diferencias significativas en su matriz. En las imágenes fotográficas digitales su matriz es una retícula de pixeles que se asume como un mapa de bits; la suma de pixeles para la construcción de la imagen latente. 
    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-lg-8
        figure.mb-5
              img(src='@/assets/curso/t1-i2.jpg', alt='imagen de rosas con un efecto pixelado')
    p.mb-4  Esta categoría de imágenes que su matriz es un mapa de bits, tiene los siguientes formatos de archivos que son los más conocidos: 
      span.text-bold JPG, PNG, TIF, BMP Y RAW. 
      | Formatos donde cada uno tiene diferente capacidad de contener cierta cantidad de bits según su utilidad y circulación; es decir, visualización.

    p.mb-4.text-bold  Para mayor ampliación del contenido se puede consultar:
    .row.mb-5
      .col-lg-5
        a.anexo.mb-3.mb-lg-0(href="http://www.revista.unam.mx/vol.6/num5/art50/may_art50.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              span.text-bold Enlace web. 
              | Formatos de imagen digital - Revista Digital Universitaria
    .row
      .col-lg-7(data-aos="fade-left")
        p.mb-3  Otros tipos de imágenes son la vectoriales, las cuales tienen como construcción de matriz trazos geométricos con una línea, color, grosor y relleno. Su configuración es matemática, por lo que permite manipular las propiedades del objeto, ya que su redimensión se configura por líneas, puntos y curvas sin tener intervención de la resolución del monitor, de manera que nunca perderá nitidez en las pantallas digitales. Los formatos de archivo de imágenes vectoriales son: 
          span.text-bold  EPS, SVG, PDF, DXF.

      .col-lg-5(data-aos="fade-right")
        figure.mb-5
          img(src='@/assets/curso/t1-i3.jpg', alt='imagen vectorial representando edificaciones de la ciudad')
    br
    br  
    #t_1_3.titulo-segundo
      h2 1.3  Resolución, tamaño y dimensión
    p.mb-4(data-aos="fade-up")  Al tener en cuenta la resolución de una imagen, se hace referencia al grado de detalle que tiene la imagen digital; en otras palabras, a la calidad de la misma. Si se recuerda, la imagen digital se construye de la suma de pixeles; es decir; una retícula de mapa de bits. Pero esos pixeles deben ocupar un área determinada, un área establecida digitalmente hablando (lo que ocupa un área determinada por los límites propios de la imagen).
    .row.justify-content-center.mb-5
      .col-lg-5
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-bold Lo anterior quiere decir que entre más pixeles tenga una imagen mayor será su nitidez; en palabras técnicas se asume como PPP = pixeles por pulgadas. Lo cual indica que entre más pixeles por pulgada contenga la fotografía va a tener mejor nitidez la imagen. Un ejemplo de ello es la siguiente fotografía, donde se puede apreciar dos imágenes idénticas en tamaño, pero con una diferencia significativa en el PPP. Denotando que una imagen (72 PPP) tiene más pixeles que la otra (300 PPP).
      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/t1-i4.jpg', alt='comparativo de resolucion de imágenes- izquierda:baja resolucion - derecha:alta resolución')
    .h5 Tamaño de la imagen
    p.mb-5  La imagen digital tiene una ventaja sobre otros tipos de imagen análoga como la pintura y el dibujo y es que puede cambiar su tamaño desde su archivo y dimensión original. Pero la ampliación de la fotografía estará determinada por la resolución con que se toma la fotografía. Cabe recordar que, entre más pixeles por pulgada, mejor será la calidad de la imagen, dando posibilidad de ampliar por escala la imagen fotográfica sin perder calidad en el proceso.
    .row.justify-content-center
      .col-lg-5(data-aos="fade-right")
        figure.mb-5
          img(src='@/assets/curso/t1-i5.jpg', alt='fotografia: calle y petalos de rosa')
          figcaption.no-bg Fotografía digital de 1024×683 pixeles
      .col-lg-5(data-aos="fade-left")
        figure.mb-5
          img(src='@/assets/curso/t1-i6.jpg', alt='fotografia: calle y petalos de rosa- con efecto desenfocado')
          figcaption.no-bg Fotografía digital de 256x171 pixeles
    p.mb-5  La amplitud o tamaño de la imagen es directamente proporcional al número de <b>PPP (número de pixeles) por pulgada</b> que se encuentre en ella. Al cambiar de tamaño una imagen digital los pixeles se estiran dejando su <b>yuxtaposición</b> del uno sobre el otro para colocarse uno junto al otro; lo cual hace que la imagen en amplitud se extienda, pero por tener muchos pixeles la calidad sigue siendo buena.
    br
    br
    #t_1_4.titulo-segundo
      h2 1.4  Modos y profundidad de color
    p.mb-5(data-aos="fade-up")  Hablar sobre la profundad de color, es hacer referencia al número de bits que necesita una imagen para codificar y guardar la información de color de cada pixel en una imagen digital. Por tal, se va a representar que cada pixel tiene unos valores (a x b x c) donde a y b son el alto y ancho de un pixel y c su profundidad, reflejándose de la siguiente manera:
    .row.justify-content-center.text-center
      .col-lg-3
        figure.mb-5
          img(src='@/assets/curso/t1-i7.svg', alt='Cubo de colores representando la produndidad de color')
    p.mb-5  Ahora bien, un bit es una posición de memoria que puede tener como valor 0 o 1. Por lo tanto, se utiliza 1-bit para imágenes en blanco/negro, sin grises (0=color negro, 1= color blanco). Cuanto mayor sea la profundidad de color en bits, la imagen dispondrá de una paleta de colores más amplia. 
      span.text-bold 2-bits = 4 colores, 3-bits = 8 colores, ..., 8-bits = 256 colores, ..., 24-bits = 16.7 millones de colores.
    .row.justify-content-center.mb-5
      .col-lg-4
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p.text-bold 1-bit = 2 colores <br> 2-bit = 4 colores  <br> 8-bit = 256 colores  <br>  24-bit= 16,7 millones de colores
    .h6.mb-4 Los modos de color
    .row.mb-4(data-aos="fade-up")
      .col-lg-7
        p.mb-3  El color en la imagen digital se refiere a qué cantidad de datos asume un píxel para establecer su color. Se debe recordar que un píxel no solo tiene alto x ancho; también tiene una profundidad y desde ahí se puede interpretar que, dentro del píxel hay un contenedor que permite llenar de color. Datos que son reinterpretados por una pantalla de computador otorgándole color a la imagen digital.
        p.mb-3  Cuando se hace referencia a los modos de color para ser visto desde una pantalla de cualquier dispositivo electrónico, como lo sería una pantalla de computador, tablet, teléfono móvil, en fin, cualquier equipo que tenga la capacidad de proyectar imágenes a color; se denominan 
          span.text-bold RGB,
          | siglas de 
          span.text-bold  Red, Green, Blue. 
          | Lo que quiere decir que el rojo, verde y azul son colores básicos en estas retículas digitales (pantallas), que una vez sus cargas electrónicas son combinadas toman otros colores ampliando la gama tonal.
        p.mb-3  Cuando se hace referencia al modo de color de una imagen que va a ser impresa sea una fotografía o cualquier otro tipo, se conoce como 
          span.text-bold CMYK 
          | y corresponde a los colores 
          span.text-bold  Cian, Magenta, Yellow, Black. 
          | Este modo de color debe saberse que está vinculado con la impresión y será esto lo que defina el modo CMYK.
        p.mb-3  No se debe pasar por alto que los modos de color RGB y CMYK, tanto en la imagen digital como en la impresa, tienen en su configuración tono, luminosidad y saturación (HLS) que darán contrastes y diferencias entre los colores. Dando como resultado lo siguiente:
      
      .col-lg-5(data-aos="fade-left")   
        figure.mb-5
          img(src='@/assets/curso/t1-i8.svg', alt='representacion: modos de color RGB - CMYK')
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Modo monocromático")
        .row.justify-content-center.p-5
          .col-md-5
            figure
              img(src='@/assets/curso/t1-i9.jpg', alt='Imagen de casa esquinera en modo monocromático')
          .col-md-5.mb-4.mb-md-0
            p Corresponde a una profundidad de color de 1 bit. La imagen está formada por 
              span.text-bold píxeles blancos o píxeles negros puros. 
              | (0=color negro, 1= color blanco).
       
          
              
      .py-3.py-md-4(titulo="Modo escala de grises")
        .row.justify-content-center.p-5
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t1-i10.jpg', alt='Imagen de casa esquinera en modo escala de grises')
          .col-md-5
            p Este modo de color maneja el canal negro y permite
              span.text-bold 256 tonos de gris entre el blanco puro y negro puro. (8 bits).
          
      .py-3.py-md-4(titulo="Color indexado")
        .row.justify-content-center.p-5
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t1-i11.jpg', alt='Imagen de casa esquinera en modo escala de grises')
          .col-md-5
            p El color indexado solo usa 
              span.text-bold un canal de color (8 bits), 
              | mientras que RGB utiliza 3 (rojo, verde y azul) y el CMYK 4 (cian, magenta, amarillo y negro), esto hace que 
              span.text-bold se reduzca mucho las posibilidades de edición de las imágenes en esta modalidad, 
              | perdiendo calidad la imagen.

      .py-3.py-md-4(titulo="Modo RGB")
        .row.justify-content-center.p-5
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t1-i12.jpg', alt='Imagen de casa esquinera en modo RGB')
          .col-md-5.align-item-center
            p El modo RGB se forma por combinación de tres canales, cada uno de ellos corresponde a un color primario: 
              span.text-bold Red (rojo), Green (verde), y Blue (azul). 
              | Se debe asumir que se le asigna un valor de intensidad a cada color que oscila entre 0 y 255. 
              span.text-bold De esta combinación surgen hasta 16,7 millones de colores. Ejemplo: el valor G:255, B:0, R:0, dará como resultado “verde puro”.         
        
      .py-3.py-md-4(titulo="Modo CMYK")
        .row.justify-content-center.p-5
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t1-i13.jpg', alt='Imagen de casa esquinera en modo CMYK')
          .col-md-5.align-item-center
            p Cuando se hace referencia al modo CMYK debe tenerse en cuenta que son valores dados  
              span.text-bold para impresión de la imagen digital.  
              | Ahora bien, digitalmente se comprenden como 
              span.text-bold la combinación de cuatro canales: Cyan (Cian), Magent (Magenta), Yellow (Amarillo) y Black (Negro).         
        
      .py-3.py-md-4(titulo="Modo HSB")
        .row.justify-content-center.p-5
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t1-i14.jpg', alt='Imagen de casa esquinera en modo HSB')
          .col-md-5.align-item-center
            p.mb-3 Lo que corresponde Modo HSB: 
              span.text-bold es decir, Hue (tono), Saturation (saturación) y Brightness (brillo). 
              | Cada uno de estos parámetros deben entenderse que están dentro de cada color en la imagen digital.  
            p.mb-3
              span.text-bold El tono (Hue) 
              | es el valor del color: rojo, azul, verde y así cada diferente color. 
              span.text-bold Saturación (Saturation) 
              | se refiere a la pureza que cada color tiene y que va del 0% al 100% respectivamente. 
              span.text-bold Brillo (Brightness)  
              | da referencia a la intensidad de luz en cada color, entendiéndose como la cantidad de negro o blanco que contiene cada color en la imagen digital y que es representada en 
              span.text-bold  valores de entre 0 (negro) y 100 (blanco).
    br
    br
    #t_1_5.titulo-segundo
      h2 1.5  Optimización y compresión de imágenes
    p.mb-5(data-aos="fade-up")  Cuando se habla de la optimización de la imagen, se hace referencia a disminuir el tamaño del archivo (imagen digital). Cuando su uso es online se puede descargar rápidamente y de manera efectiva, esto se hace mediante procesos electrónicos con el uso de un plugin o script. Este proceso se puede denominar “compresión de la imagen” y las principales extensiones son:
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-5(data-aos="flip-down")
          .tarjeta-avatar-b__img
            img.h60(src='@/assets/curso/t1-i15.svg' alt='icono de formato JPGE')
          .tarjeta.color-acento-contenido
            .p-4
              .h4 JPGE (Joint Photographis Experts Group)
              p Este es un formato muy flexible que permite almacenar imágenes con bajo peso y con poca pérdida de información. Utiliza una distribución de 24 bits/pixel con lo cual cada imagen puede contener 16.777.216 colores.

        .tarjeta-avatar-b.mb-5(data-aos="flip-down")
          .tarjeta-avatar-b__img
            img.h60(src='@/assets/curso/t1-i16.svg' alt='icono de formato JPGE')
          .tarjeta.color-acento-contenido
            .p-4
              .h4 GIF (Graphic Interchange Format)
              p Su característica principal y diferencial es que permite transparencias en el fondo y puede ser animado. Su distribución es de 8 bits/pixel con lo cual tiene la capacidad de tener 256 colores.

        .tarjeta-avatar-b.mb-5(data-aos="flip-down")
          .tarjeta-avatar-b__img
            img.h60(src='@/assets/curso/t1-i17.svg' alt='icono de formato JPGE')
          .tarjeta.color-acento-contenido
            .p-4
              .h4 PNG (Portable Network Graphic)
              p Este es el formato de mayor utilización para la web y su mayor característica es la gran calidad y alta compresión.

        

  
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

<style lang="sass" scoped>
.w50  {width: 50px!important; min-width:50px; max-width:50px}
.h60 {height: 60px}
.p-l-0 {padding-left: 0px !important}
.color-acento-contenido{ background-color: #FFEDD3; color:#000}
.tarjeta.color-acento-contenido *{ color: #12263F}
</style>
