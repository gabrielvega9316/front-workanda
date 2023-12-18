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
          <td>{{ user.name }}</td>
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
export default {
  data() {
    return {
      users: [
        { name: 'Usuario 1', email: 'usuario1@example.com' },
        { name: 'Usuario 2', email: 'usuario2@example.com' },
        // Agrega más usuarios según sea necesario
      ],
    };
  },
  methods: {
    editUser(index) {
      // Implementa la lógica para editar el usuario
      console.log('Editar usuario:', this.users[index]);
    },
    deleteUser(index) {
      // Implementa la lógica para eliminar el usuario
      console.log('Eliminar usuario:', this.users[index]);
    },
    registerUser() {
      // Implementa la lógica para registrar un nuevo usuario
      console.log('Registrar nuevo usuario');
    },
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
  min-height: 70vh; /* Mínimo 70% de la altura de la ventana */
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
