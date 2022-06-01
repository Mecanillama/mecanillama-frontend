<template>
  <body>
  <edit-profile></edit-profile>
  <div class=" app-content">
    <h5>Contacts Component Content</h5>
  </div>
  </body>

</template>

<script>
import editProfile from "../../mechanic-admin/pages/edit-profile.vue";

export default {
  name: 'contacts-mechanic',
  components: {
    editProfile,
  },

}
</script>