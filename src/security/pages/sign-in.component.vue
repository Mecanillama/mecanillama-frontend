<template>
<div class="grid min-h-screen mr-0">
    <div class="col-12 md:col-6 p-0">
        <img class="w-full h-full" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980" alt="man diriving a car">
    </div>
    <div class="col-12 md:col-6 p-0 flex justify-content-center">
        <div class="flex flex-column align-items-center justify-content-center" style="max-width: 26rem;">
        <h1 class="text-center text-6xl my-7 font-bold">Welcome again!</h1>
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
        <div>
            <span class="font-semibold">Forgot password?</span>
        </div>
        <div class="text-xl flex flex-column m-3">
            <div class="field-radiobutton w-full">
                <pv-radio-button id="option1" name="user" value="home-customer" v-model="user" />
                <label for="city1">I am a driver</label>
            </div>
            <div class="field-radiobutton w-full">
                <pv-radio-button id="option2" name="user" value="home-mechanic" v-model="user" />
                <label for="city1">I am a mechanic</label>
            </div>
        </div>
        <div class="button w-full text-center my-5">
                <RouterLink to="/home-customer">
                    <pv-button class="w-full" label = "Sign In" />
                </RouterLink>
        </div>
    <div>
        <span>Don't have an account? </span>
        <a href="" class="font-semibold">Sign up!</a>
    </div>


        </div>
    </div>
</div>
</template>

<script>
export default {    
    name: 'signin',
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