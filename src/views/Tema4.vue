<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          | 4
      .h3 Composición
    .row
      .col-lg-7
        p.mb-4  La composición fotográfica es todo aquello que se dice va a ir dentro del cuadro fotográfico. Es finamente, la elección de qué elementos se van a tener en cuenta y harán parte de la fotografía. La imagen fotográfica tiene unos límites o una frontera y es el marco; dentro del que se debe elegir la composición.
      .col-lg-5
        figure
          img(src='@/assets/curso/t4-i1.jpg', alt='mujer haciendo un cuadrado con dedos pulgar e indice en ambas manos')
    

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
