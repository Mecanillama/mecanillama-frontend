<template>
<div>
  <menu-bar :model="navigation" class="bg-blue-300 flex">
    <template #start>
        <div class = "flex">
            <div class="m-3">
                <RouterLink to="/home-view">
                    <h1 class="font-bold">Mecanillama</h1>
                </RouterLink>
            </div>
            <div class="m-3">
                <input
                    v-model="search"
                    class="border-round p-3 px-3"
                    placeholder="Search" />
            </div>
        </div>
    </template>
    <template #end>
    <div class="m-3">
            <div class="flex align-items-center justify-content-center">
                <pv-avatar image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"  class="mr-2" size="large" shape="circle" />
                <span>User 23432</span>
            </div>
    </div>
    </template>
  </menu-bar>
  </div>
</template>

<script>

export default{
    name: 'general-header',
    data(){
        return{
            navigation:[
                { label: "Home", to: "/home-customer" },
                { label: "Appointments", to: "/appointments" },
                { label: "Favourites", to: "/favourites" },
                { label: "Notifications", to: "/notifications" },
            ]
        }
    }
}

</script>

<style>

</style>
