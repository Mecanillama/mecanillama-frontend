<template>
  <general-header-component></general-header-component>
  <div>
    <div  id= "card1" class="card">
      <h5>Default</h5>
      <TabMenu :model="items" />
      <router-view/>
    </div>
  </div>
</template>

<script>

import generalHeaderComponent from "../../components/general-header.component.vue";


export default {
  name: 'mechanic-edit-profile',
  components: {
    generalHeaderComponent,
  },
  data() {
    return {
      active: 3,
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          to: '/mechanic/edit-profile/edit'
        },
        {
          label: 'Prices',
          icon: 'pi pi-fw pi-money-bill',
          to: '/mechanic/edit-profile/prices'
        },
        {
          label: 'Contact',
          icon: 'pi pi-fw pi-users',
          to: '/mechanic/edit-profile/contacts'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep(.pr-content) {
  padding: 2rem 1rem;
  background: yellow;
  height: 200px;
}
#card1{
  width: 100%;
  background: #e98b2f;
}
</style>