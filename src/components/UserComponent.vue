<template>
  <div class="user-container">
    <h2>Usuarios</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo Electrónico</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn btn-primary" @click="editUser(index)">Editar</button>
            <button class="btn btn-danger" @click="deleteUser(index)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-success" @click="registerUser">Registrar Nuevo Usuario</button>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const users = await ApiService.getUsers();
        this.users = users;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },

    editUser(index) {
      console.log('Editar usuario:', this.users[index]);
    },
    deleteUser(index) {
      console.log('Eliminar usuario:', this.users[index]);
    },
    registerUser() {
      console.log('Registrar nuevo usuario');
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.user-container {
  width: 70%;
  max-width: 100%;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 70vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

h2 {
  text-align: center;
  color: #333;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.btn {
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  margin-right: 5px;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  margin-right: 5px;
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  margin: 15px;
}
</style>
