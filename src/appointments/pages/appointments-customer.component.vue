<template>
    <general-header-component></general-header-component>
        <div>
            <pv-toolbar class="mb-4">
                <template #start>
                <pv-button
                    label="New"
                    icon="pi pi-plus"
                    class="p-button-success mr-2"
                    @click="openNew" />
                <pv-button
                    label="Delete"
                    icon="pi pi-trash"
                    class="p-button-danger"
                    :disabled="!selectedJobOffers || !selectedJobOffers.length"
                    @click="confirmDeleteSelected" />
                </template>

                <template #end>
                <pv-button
                    label="Export"
                    icon="pi pi-upload"
                    class="p-button-help"
                    @click="exportToCSV($event)" />
                </template>
            </pv-toolbar>


        </div>
</template>

<script>

import generalHeaderComponent from "../../components/general-header.component.vue"

export default {
    name: 'appointments-customer',
    components: {
        generalHeaderComponent
    }
}
</script>

<style>

</style>