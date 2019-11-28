<template>
    <v-app app id="admin-user-list">
        <AdminUsers :users="users" @userDeleted="getUsers" />
    </v-app>
</template>

<script>
import axios from "axios";
import AdminUsers from "@/components/AdminUsers";

export default {
    name: "admin-user-list",
    components: {
        AdminUsers
    },
    data() {
        return {
            users: []
        };
    },
    methods: {
        getUsers() {
            const token = this.$session.get("jwt");
            const options = {
                headers: { Authorization: `JWT ${token}` }
            };
            axios
                .get("http://localhost:8000/api/v1/accounts/admin/", options)
                .then(res => (this.users = res.data));
        }
    },
    mounted() {
        this.$emit("loggedIn");
        this.getUsers();
    }
};
</script>
