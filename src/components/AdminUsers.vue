<template>
  <div class="container">
    <v-simple-table id="admin-list">
      <thead>
        <tr>
          <th class="text-left">이름</th>
          <th class="text-left">칼로리</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.name">
          <td width="40%">{{ user.name }}</td>
          <td width="40%">{{ user.calories }}</td>
          <td>
            <v-btn text color="success">수정</v-btn>
            <v-btn text color="error">삭제</v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "admin-users",
  props: {
    users: []
  }
};
</script>

<style></style>
