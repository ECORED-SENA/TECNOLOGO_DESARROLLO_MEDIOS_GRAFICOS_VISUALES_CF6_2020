<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          | 2
      .h3 Dispositivos de captura y salida
    p.mb-5 La digitalización no solo llegó con la inmediatez, lo hizo también con un lenguaje, su estructura y su funcionamiento. Los distintos dispositivos que intervienen en la construcción de la imagen digital, exponen una necesidad de entender cómo en su recepción y cómo se comportan en su circulación. 

    #t_2_1.titulo-segundo
      .h4 2.1  Clasificación y características
    
    p.mb-4 De manera general, los dispositivos denominados de captura son aquellos que permiten de una u otra forma convertir la información (luz o imagen) en información digital; es decir, en números binarios. Cuando se habla de dispositivos de captura de imagen se debe mencionar que están compuestos por sensores ópticos que captan la intensidad de la luz que les llega y la convierten en números. Estos son:
    .row.justify-content-center
      .col-lg-12
        .tarjeta-Avatar-b.mb-5.align-items-center
          img.h70(src='@/assets/curso/t2-i1.svg' alt='icono representando un escaner')
          .tarjeta.color-acento-contenido.op20
            .p-4.p-l-0
              .h5 El escáner: 
              p Es el dispositivo de captura de imágenes más tradicional, el cual se encarga de convertir una fotografía de un papel, imagen de revista o libro, a información que se puede interpretar y manejar en un computador. En la actualidad los escáneres pueden emplear 16 bits para cuantificar los niveles de cada sensor, por lo que cada píxel va codificado en 48 bits (16 bits x 3 sensores).
    .row.justify-content-center
      .col-lg-12
        .tarjeta-Avatar-b.mb-5.align-items-center
          img.h70(src='@/assets/curso/t2-i2.svg' alt='icono representando un escaner')
          .tarjeta.color-acento-contenido.op20
            .p-4.p-l-0
              .h5 Cámaras digitales: 
              p Son dispositivos que son muy versátiles y permiten capturar imágenes sin tener que pasar por películas o procesos químicos y escaneos. De igual manera, la información lumínica llega directamente al sensor por medio de su lente, por lo que no habrá ninguna interrupción dando como resultado final una buena captura de señales lumínicas. El funcionamiento de una cámara digital es idéntico al de una cámara análoga de película.
    .row.justify-content-center.mb-5
      .col-lg-12
        .tarjeta-Avatar-b.mb-5.align-items-center
          img.h70(src='@/assets/curso/t2-i3.svg' alt='icono representando teléfonos móviles con cámara')
          .tarjeta.color-acento-contenido.op20
            .p-4.p-l-0
              .h5 Teléfonos móviles con cámara:
              p las cámaras fotográficas digitales incorporadas en los teléfonos móviles, por lo general no son de muy buena calidad. Su mayor limitación es la falta de resolución y el tipo de óptica que utilizan, comportándose como una cámara integrada a un dispositivo móvil. También constan de un sensor que transforma la información lumínica en señales electrónicas para la construcción de la imagen digital.
    br
    br
    #t_2_2.titulo-segundo
      .h4 2.2 Funcionamiento y operación
    .row.mb-4 
      .col-lg-7
        p.mb-4  El escáner es un dispositivo que digitaliza imágenes planas convirtiéndolas en imágenes digitales. Se debe considerar que estas imágenes pueden ser fotográficas o textos y que la digitalización se produce en principio por la lámpara que ilumina el papel, el cual se va a escanear, para que luego el sensor sea el encargado de capturar la luz y convertirla en impulsos eléctricos, mismos que por las diferentes intensidades de luz, son convertidos a números para ser transmitidos al computador. Estos dispositivos actualmente son completamente digitales y su operación se ejecuta desde la pulsación de botones que generan las órdenes de ejecución.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-3
            span.text-bold Es importante saber 
            | que las cámaras digitales fotográficas son dispositivos de captura de imagen fija, portátiles, confiables y cada día más prácticas en su manejo y utilización. Se debe considerar que el mercado es variado y tiene como consecuencia que se jerarquicen por gamas. Dentro de las posibilidades de adquisición de un dispositivo fotográfico se debe de tener en cuenta las necesidades de su labor; pues será ese el factor decisivo para determinar qué dispositivo adquirir según su utilidad.

      .col-lg-5 
        figure
          img(src='@/assets/curso/t2-i4.jpg', alt='Fotografias de un escéner y una cámara fotográfica')

    
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema2',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.h70  {height: 70px}
.p-l-0 {padding-left: 0px !important}
.color-acento-contenido{ background-color: #FFEDD3; color:#000}
.tarjeta.color-acento-contenido *{ color: #12263F}
.tarjeta-Avatar-b > div{ padding-left: 7%}
</style>
