<template>
  <general-header-component></general-header-component>
    <div class="mechanic-profile">
        <div class="flex">
            <img  style="{height: auto; width: auto;}" class="w-3 m-6 " src="https://i.imgur.com/94P70vI.jpeg" alt="car">
            <div class="w-9 content m-6 flex-column mx-8">
            <h1>Fast Car</h1>
            <p> Have you heard about our Car Service Plan? There are three easy ways to help you pay for your car service including 
            Drive Now Pay Later. Click here to find out more!</p>
            <pv-button label = "Make an appointment" class = "p-button-rounded p-button-sm m-3 " />
            </div>
        </div>
        <div class="description m-6">
            <h2>About us</h2>
            <p>Simply send us a message to find more information and book online today</p>
            <br>
            <p>Looking to book a car service or MOT? Fast Car has hundreds of professional car service centres and MOT testing stations
            located all over the UK, from London to Manchester, Birmingham and Glasgow, so you'll be sure to find a garage near you.</p>
        </div>
        <div class="reviews flex flex-column m-6">
            <h2>Reviews</h2>
            <pv-card class="col-12">
                <template #title>
                    4.6
                    <span class="">
                        <i class="pi pi-star-fill"></i>
                        <i class="pi pi-star-fill"></i>
                        <i class="pi pi-star-fill"></i>
                        <i class="pi pi-star-fill"></i>
                    </span>
                </template>
                <template #subtitle>
                    Pedro Perez
                </template>
                <template #content>
                    <p>Totally recommended! Customer service was great, and my car has been amazing since I had it checked in this mechanic workshop</p>
                </template> 
        </pv-card>

        <pv-card class="col-12">
                <template #title>
                    4.6
                    <span class="">
                        <i class="pi pi-star-fill"></i>
                        <i class="pi pi-star-fill"></i>
                        <i class="pi pi-star-fill"></i>
                        <i class="pi pi-star-fill"></i>
                    </span>
                </template>
                <template #subtitle>
                    Pedro Perez
                </template>
                <template #content>
                    <p>Totally recommended! Customer service was great, and my car has been amazing since I had it checked in this mechanic workshop</p>
                </template> 
        </pv-card>

        <pv-card class="col-12">
                <template #title>
                    4.6
                    <span class="">
                        <i class="pi pi-star-fill"></i>
                        <i class="pi pi-star-fill"></i>
                        <i class="pi pi-star-fill"></i>
                        <i class="pi pi-star-fill"></i>
                    </span>
                </template>
                <template #subtitle>
                    Pedro Perez
                </template>
                <template #content>
                    <p>Totally recommended! Customer service was great, and my car has been amazing since I had it checked in this mechanic workshop</p>
                </template> 
        </pv-card>
        </div>
    </div>



</template>

<script>
import generalHeaderComponent from "../../components/general-header.component.vue"

export default {
    name: 'mechanic-profile',
    components: {
        generalHeaderComponent
    }
}
</script>

<style>
.pi-star-fill{
    color: yellow;
    padding: 10px;
    font-size: 1.5rem;
}

</style>
