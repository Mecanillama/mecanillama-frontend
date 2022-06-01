<template>
  <body>
  <edit-profile></edit-profile>
  <div class="TabMenu-edit">
    <h5>edit Component Content</h5>
  </div>
  </body>

</template>

<script>
import editProfile from "../../mechanic-admin/pages/edit-profile.vue";

export default {
  name: 'edit-mechanic',
  components: {
    editProfile,
  },

}
</script>