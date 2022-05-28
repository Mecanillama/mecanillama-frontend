<template>
<div class="grid min-h-screen mr-0">
    <div class="col-12 md:col-6 p-0">
        <img class="w-full h-full" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980" alt="man diriving a car">
    </div>
    <div class="col-12 md:col-6 p-0 flex justify-content-center">
        <div class="flex flex-column align-items-center justify-content-center" style="max-width: 26rem;">
        <h1 class="text-center text-6xl my-7 font-bold">Join us!</h1>
        <div class="m-3 text-center">
            <div class="px-3">
                <span class="p-float-label">
                    <pv-input-text />
                    <label for="username">Username</label>
                </span>
            </div>
        </div>

        <div class="m-3 text-center">
            <div class="px-3">
                <span class="p-float-label">
                    <pv-input-text type="password" />
                    <label for="password">Password</label>
                </span>
            </div>
        </div>
        <div class="button w-full text-center my-5">
                <RouterLink to="/home-customer">
                    <pv-button class="w-full" label = "Sign Up" />
                </RouterLink>
        </div>
    <div>
        <span>Already have an account? </span>
        <a href="/sign-in" class="font-semibold">Sign in!</a>
    </div>


        </div>
    </div>
</div>
</template>

<script>
export default {    
    name: 'signup',
    data(){
        return{
            user:null,
            value:null
        }
    },
    methods: {
        
    }
}
</script>

<style>

.grid{
    grid-gap:0 !important;
}
</style>