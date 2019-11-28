<template>
    <div class="container">
        <v-simple-table id="admin-list">
            <thead>
                <tr>
                    <th class="text-left">이름</th>
                    <th class="text-left">이메일</th>
                    <th class="text-left"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.name">
                    <td width="40%">{{ user.username }}</td>
                    <td width="40%">{{ user.email }}</td>
                    <!-- <td>
            <v-btn text outlined color="success">수정</v-btn>
          </td> -->
                    <td>
                        <v-btn
                            text
                            outlined
                            color="error"
                            :value="user.id"
                            @click="deleteUser"
                            >삭제</v-btn
                        >
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "admin-users",
    props: {
        users: Array
    },
    methods: {
        deleteUser(e) {
            const token = this.$session.get("jwt");
            const options = {
                headers: { Authorization: `JWT ${token}` }
            };
            axios
                .post(
                    `http://localhost:8000/api/v1/accounts/${
                        e.target.closest("button").value
                    }/delete/`,
                    {},
                    options
                )
                .then(res => this.$emit("userDeleted"));
        }
    }
};
</script>

<style></style>
