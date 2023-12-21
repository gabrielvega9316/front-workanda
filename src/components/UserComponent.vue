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
            <button class="btn btn-primary" @click="openModal('edit', user)">Editar</button>
            <button class="btn btn-danger" @click="deleteUser(index)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-success" @click="openModal('register')">Registrar Nuevo Usuario</button>
    <user-modal 
      v-if="isModalVisible" 
      @form-submit="handleFormSubmit" 
      @modal-closed="handleModalClosed" 
      :user="modalUser" 
      :mode="modalMode" 
    />

    <button class="btn btn-warning" @click="logout">Cerrar Sesión</button>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue';
import ApiService from '@/services/ApiService';
import UserModal from '@/components/UserModal.vue';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useRouter } from 'vue-router';

export default {
  components: {
    UserModal
  },
  setup() {
    const users = ref([]);
    const isModalVisible = ref(false);
    const modalMode = ref(null);
    const modalUser = ref(null);

    const openModal = (mode, user) => {
      isModalVisible.value = true;
      modalMode.value = mode;
      modalUser.value = mode === 'edit' ? { ...user } : null;
    };

    const handleModalClosed = () => {
      isModalVisible.value = false;
      modalMode.value = null;
      modalUser.value = null;
    };

    const handleFormSubmit = async () => {
      await fetchUsers();
      isModalVisible.value = false;
    };

    const fetchUsers = async () => {
      try {
        const fetchedUsers = await ApiService.getUsers();
        users.value = fetchedUsers;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const deleteUser = async (index) => {
      const userId = users.value[index].id;
      try {
        const result = await Swal.fire({
          title: '¿Estás seguro?',
          text: '¡No podrás revertir esto!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, elimínalo'
        });

        if (result.isConfirmed) {
          await ApiService.deleteUser(userId);
          await fetchUsers();
          Swal.fire('Eliminado', 'El usuario ha sido eliminado.', 'success');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire('Error', 'Hubo un error al eliminar el usuario.', 'error');
      }
    };

    onMounted(() => {
      fetchUsers();
    });

    watchEffect(() => {
    });

    const router = useRouter();

    const logout = () => {
      localStorage.removeItem('token');
      router.push('/login');
    };

    return {
      users,
      isModalVisible,
      modalMode,
      modalUser,
      openModal,
      handleModalClosed,
      handleFormSubmit,
      deleteUser,
      logout
    };
  }
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
