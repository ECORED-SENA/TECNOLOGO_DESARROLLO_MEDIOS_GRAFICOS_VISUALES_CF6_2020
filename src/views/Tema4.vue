<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Composición
    .row
      .col-lg-7
        p.mb-4  La composición fotográfica es todo aquello que se dice va a ir dentro del cuadro fotográfico. Es finamente, la elección de qué elementos se van a tener en cuenta y harán parte de la fotografía. La imagen fotográfica tiene unos límites o una frontera y es el marco; dentro del que se debe elegir la composición.
      .col-lg-5
        figure
          img(src='@/assets/curso/t4-i1.jpg', alt='mujer haciendo un cuadrado con dedos pulgar e indice en ambas manos')
    br
    br
    #t_4_1.titulo-segundo
      h2 4.1  Planos y ángulos
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MG7pkow8_q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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

<style lang="sass" scoped>
.h70  {height: 70px}
.p-l-0 {padding-left: 0px !important}
.color-acento-contenido{ background-color: #FFEDD3; color:#000}
.tarjeta.color-acento-contenido *{ color: #12263F}
.tarjeta-Avatar-b > div{ padding-left: 7%}
</style>
