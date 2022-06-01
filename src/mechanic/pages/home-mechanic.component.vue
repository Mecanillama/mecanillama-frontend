<template>
<general-header-component></general-header-component>
    <body>

    <div id="sup" class ="container">

        <img  src="https://alianzaautomotriz.com/wp-content/uploads/2020/02/taller-meca%CC%81nico-imagen-768x458.jpg "   >

      <div >
        <span><h1>Titulo del taller</h1>
        <p>Accumsan velit volutpat venenatis metus ultricies morbi sodales volutpat venenatis metus ultricies morbi sodales.</p>
        </span>
      </div>
    </div>

    <div>
      <h1>Upcoming</h1>
      <appointments-mechanic-component></appointments-mechanic-component>

    </div>


    </body>
</template>

<script>

import generalHeaderComponent from "../../components/general-header.component.vue";
import appointmentsMechanicComponent from "../../appointments/pages/appointments-mechanic.component.vue";
export default {
    name: 'home-mechanic',
    components: {
      generalHeaderComponent,
      appointmentsMechanicComponent

    }
}
</script>

<style>
#sup{
  display: flex;
  height: 300px;
  background: black;
  align-items: center;

}

#sup img{
  height: 95%;
  left: 10%;
  border-radius: 25px;
}
#sup div{
  display: flex;
  position: absolute;
  width: 30%;
  height: 100%;
  right: 5%;
  background: white;
  opacity: 80%;
  align-items: center;
  text-align: center;
}

</style>