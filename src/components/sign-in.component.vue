<template>
<div class="m-3 my-8 flex flex-column align-items-center justify-content-center">
    <h1 class="text-center ">Sign In</h1>
    <div class="m-3 text-center">
        <div class="px-3">
            <span class="p-inputgroup-addon inline">
                <i class="pi pi-user"></i>
            </span>
            <pv-input-text placeholder="Username" class="" />
        </div>
    </div>

        <div class="m-3 text-center">
        <div class="px-3">
            <span class="p-inputgroup-addon inline">
                <i class="pi pi-lock"></i>
            </span>
            <pv-input-text placeholder="Password" class="" type="password" />
        </div>
    </div>
        <div class="button">
            <RouterLink to="/home-customer">
                <pv-button label = "Iniciar sesion" class = "p-button-rounded p-button-lg w-full" />
            </RouterLink>
      </div>
</div>
</template>

<script>
export default {    
    name: 'signin'
}
</script>

<style>

</style>