<template>
<general-header-component></general-header-component>
        <div class="card m-4">
            <pv-carousel :value="workshops" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                <template #header>
                    <h2 class="font-bold">Recommended</h2>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://images.unsplash.com/photo-1588993986550-6ae221c7146e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=460" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.mechanic}}</h4>
                                <h6 class="mt-0 mb-3">{{slotProps.data.description}}</h6>
                                <div class="car-buttons mt-5">
                                    <router-link to="/mechanic-profile">
                                        <pv-button icon="pi pi-plus" label="See More" />
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </pv-carousel>
        </div>


                <div class="card m-4">
            <pv-carousel :value="workshops" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                <template #header>
                    <h2 class="font-bold">Near you</h2>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://images.unsplash.com/photo-1588993986550-6ae221c7146e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=460" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.mechanic}}</h4>
                                <h6 class="mt-0 mb-3">{{slotProps.data.description}}</h6>
                                <div class="car-buttons mt-5">
                                    <router-link to="/mechanic-profile">
                                        <pv-button icon="pi pi-plus" label="See More" />
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </pv-carousel>
        </div>

                <div class="card m-4">
            <pv-carousel :value="workshops" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                <template #header>
                    <h2 class="font-bold">Most Rated</h2>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="https://images.unsplash.com/photo-1588993986550-6ae221c7146e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=460" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{slotProps.data.mechanic}}</h4>
                                <h6 class="mt-0 mb-3">{{slotProps.data.description}}</h6>
                                <div class="car-buttons mt-5">
                                    <router-link to="/mechanic-profile">
                                        <pv-button icon="pi pi-plus" label="See More" />
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </pv-carousel>
        </div>
</template>

<script>

import generalHeaderComponent from "../../components/general-header.component.vue"
import {WorkshopsApiService} from '../services/workshops.service'

export default {
    name: 'home-customer',
    components: {
        generalHeaderComponent
    },
    data(){
        return{
            workshops: null,
            workshopService: null,
            responsiveOptions: [
				{
					breakpoint: '1024px',
					numVisible: 3,
					numScroll: 3
				},
				{
					breakpoint: '600px',
					numVisible: 2,
					numScroll: 2
				},
				{
					breakpoint: '480px',
					numVisible: 1,
					numScroll: 1
				}
			]
        }
    },
    created(){
        this.workshopService = new WorkshopsApiService();
        this.workshopService.getAll().then(response =>{
            this.workshops = response.data;
        });
    }
}
</script>

<style>
.product-item-content {
    border: 1px solid var(--surface-border);
    border-radius: 3px;
    margin: .2rem;
    text-align: center;
    padding: 2rem 0;
}

.product-image {
    width: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

</style>