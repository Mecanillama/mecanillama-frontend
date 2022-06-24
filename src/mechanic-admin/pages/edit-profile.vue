<template>
  <MechanicHeaderComponent></MechanicHeaderComponent>
  <div>
    <div id="card1" class="card">
      <h5>Default</h5>
      <pv-button
        id="edit"
        align="right"
        icon="pi pi-pencil"
        class="p-button-rounded p-button-success mr-2"
        @click="editProduct(slotProps.data)"
      />
      <!--<div class="field">
        <label for="name">Name</label>
        <InputText
          id="name"
          v-model.trim="name"
          required="true"
          autofocus
          :class="{ 'p-invalid': submitted && !product.name }"
        />
        <small class="p-error" v-if="submitted && !product.name"
          >Name is required.</small
        >
      </div>
      <div class="field">
        <label for="description">Description</label>
        <Textarea
          id="description"
          v-model="product.description"
          required="true"
          rows="3"
          cols="20"
        />
      </div>-->
    </div>
  </div>
</template>

<script>
import MechanicHeaderComponent from "../../components/mechanic-header.component.vue";
export default {
  name: "mechanic-edit-profile",
  components: {
    MechanicHeaderComponent,
  },
  data() {
    return {
      active: 3,
    };
  },
};
</script>

<style scoped lang="scss">
::v-deep(.pr-content) {
  padding: 2rem 1rem;
  background: yellow;
  height: 200px;
}
#card1 {
  width: 100%;
  background: #e98b2f;
}

#edit {
  border: 1px solid #fafafa;
  left: 90%;
}
</style>
