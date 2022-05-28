<template>
    <general-header-component></general-header-component>
    <p>{{getUserName()}}</p>
</template>

<script>
import generalHeaderComponent from "../../components/general-header.component.vue";
import AuthService from '../../security/services/auth.service.js'

export default {
  name: "customer-profile",
  components: {
    generalHeaderComponent,
  },
  methods: {
      getUserName(){
        const user=JSON.parse(AuthService.getCurrentUser());
        return user.email;
      }
  }
}

</script>

<style>

</style>