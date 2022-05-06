<template>
<general-header-component></general-header-component>
<div class="grid m-6 ">
    <pv-card class="col-12 md:col-6 lg:col-3">
        <template #header>
            <img src="https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style="{height: 360px; width: 340px;}" />
        </template>
        <template #title>
            Fast Car
        </template>
        <template #subtitle>
            Lima, Peru
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
        <template #footer>
            <router-link to="/mechanic-profile">
            <pv-button icon="pi pi-plus" label="See More" />
            </router-link>
        </template>   
    </pv-card>
        <pv-card class="col-12 md:col-6 lg:col-3">
        <template #header>
            <img src="https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style="{height: 360px; width: 340px;}" />
        </template>
        <template #title>
            Fast Car
        </template>
        <template #subtitle>
            Lima, Peru
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
        <template #footer>
            <router-link to="/mechanic-profile">
                <pv-button icon="pi pi-plus" label="See More" />
            </router-link>
        </template>   
    </pv-card>
    <pv-card class="col-12 md:col-6 lg:col-3">
        <template #header>
            <img src="https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style="{height: 360px; width: 340px;}" />
        </template>
        <template #title>
            Fast Car
        </template>
        <template #subtitle>
            Lima, Peru
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
        <template #footer>
            <router-link to="/mechanic-profile">
                <pv-button icon="pi pi-plus" label="See More" />
            </router-link>
        </template>   
    </pv-card>
    <pv-card class="col-12 md:col-6 lg:col-3">
        <template #header>
            <img src="https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style="{height: 360px; width: 340px;}" />
        </template>
        <template #title>
            Fast Car
        </template>
        <template #subtitle>
            Lima, Peru
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
        <template #footer>
            <router-link to="/mechanic-profile">
                <pv-button icon="pi pi-plus" label="See More" />
            </router-link>
        </template>   
    </pv-card>

    <pv-card class="col-12 md:col-6 lg:col-3">
        <template #header>
            <img src="https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style="{height: 360px; width: 340px;}" />
        </template>
        <template #title>
            Fast Car
        </template>
        <template #subtitle>
            Lima, Peru
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
        <template #footer>
            <router-link to="/mechanic-profile">
                <pv-button icon="pi pi-plus" label="See More" />
            </router-link>
        </template>   
    </pv-card>

    <pv-card class="col-12 md:col-6 lg:col-3">
        <template #header>
            <img src="https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style="{height: 360px; width: 340px;}" />
        </template>
        <template #title>
            Fast Car
        </template>
        <template #subtitle>
            Lima, Peru
        </template>
        <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
        </template>
        <template #footer>
            <router-link to="/mechanic-profile">
                <pv-button icon="pi pi-plus" label="See More" />
            </router-link>
        </template>   
    </pv-card>



</div>
</template>

<script>

import generalHeaderComponent from "../../components/general-header.component.vue"

export default {
    name: 'home-customer',
    components: {
        generalHeaderComponent
    }
}
</script>

<style>
.grid{
    grid-gap: 3rem;
    margin: 0 auto;
}

img{
    height: 340px;
}
</style>