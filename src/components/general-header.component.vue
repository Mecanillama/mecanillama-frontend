<template>
<div>
  <menu-bar :model="navigation" class="bg-cyan-200 flex ">
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
    </template >
  </menu-bar>
  </div>
</template>

<script>

export default{
    name: 'general-header',
    data(){
        return{
            navigation:[
                { label: "Home", to: "/" },
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