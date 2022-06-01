<template>
  <general-header-component></general-header-component>
  <appointments-mechanic-component></appointments-mechanic-component>
  <body>

  </body>

</template>

<script>
import generalHeaderComponent from "../../components/general-header.component.vue";
import appointmentsMechanicComponent from "../../appointments/pages/appointments-mechanic.component.vue";

export default {
  name: 'ejemplo',
  components: {
    appointmentsMechanicComponent,
    generalHeaderComponent

  }
}
</script>

<style >

</style>