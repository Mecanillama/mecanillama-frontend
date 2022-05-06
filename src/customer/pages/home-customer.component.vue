<template>
    <header-component></header-component>
    <h1>HERE GOES THE HOME PAGE OF THE DRIVER</h1>
    <HomeView/>
</template>

<script>
import toolbarCustomer from "./toolbar-customer.component.vue"
import headerComponent from './components/header.component.vue';
import HomeView from './views/HomeView.vue';

export default {
    name: 'home-customer',
    components: {
        toolbarCustomer,
        headerComponent,
        HomeView
    }
}
</script>

<style>

</style>