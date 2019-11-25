<template>
  <v-app id="admin-user-list"><AdminUsers :users="users" /> </v-app>
</template>

<script>
import AdminUsers from "@/components/AdminUsers";

export default {
  name: "admin-user-list",
  components: {
    AdminUsers
  },
  data() {
    return {
      users: [
        {
          name: "John",
          calories: 344
        },
        {
          name: "Tony",
          calories: 222
        }
      ]
    };
  }
};
</script>
