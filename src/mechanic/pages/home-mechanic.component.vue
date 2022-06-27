<template>
  <mechanic-header-component></mechanic-header-component>

  <div class ="container">
    <div id="sup" class="container">
      <img
        src="https://images.unsplash.com/photo-1588993986550-6ae221c7146e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=460"
      />
      <div>
        <span>
          <h1 class="mb-1">Formula I</h1>
          <p class="m-1">
            This is a family-owned and operated business that has been proudly serving the community since 1999.  These repairs can range from minor and major mechanical repairs, to tires and wheel alignment, to check engine light diagnosis and repairs, to state safety inspections, as well as your scheduled maintenance needs.
          </p>
          <router-link to="">
            <pv-button id="button" label="Edit" />
          </router-link>
        </span>
      </div>
    </div>
    <div>
      <appointments-mechanic-component></appointments-mechanic-component>
    </div>
  </div>

</template>


<script>
import MechanicHeaderComponent from "../../components/mechanic-header.component.vue";
import appointmentsMechanicComponent from "../../appointments/pages/appointments-mechanic.component.vue";
import { MechanicsProfileApiService } from "../services/mechanics-api.service";
export default {
  name: "home-mechanic",
  components: {
    MechanicHeaderComponent,
    appointmentsMechanicComponent,
  },
  data() {
    return {
      mechanic: null,
      mechanicUserService: null,
    };
  },
  created() {
    this.mechanicUserService = new MechanicsProfileApiService();
    this.mechanicUserService.getById("1").then((response) => {
      this.mechanic = response.data;
    });
  },
};
</script>

<style>
#sup {
  display: flex;
  height: 300px;
  background: black;
  align-items: center;
}
#sup img {
  height: 95%;
  left: 10%;
  border-radius: 25px;
}
#sup div {
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
#button {
  width: 70%;
}
</style>