<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción

    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="Texto que describa la imagen")
      
    
    p.mb-5 Las nuevas tecnologías han proporcionado nuevos lenguajes y a su vez, una representación del mundo que rodea a las personas. La imagen digital es una de esas herramientas que en su construcción va cambiando y reelaborándose desde lenguajes propios. Conocer los campos que intervienen en la formación de la imagen da el poder de interpretar cómo se están llevando los procesos de construcción de imagen.  

   


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
