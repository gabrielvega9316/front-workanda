<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Nombre:</label>
          <input v-model="localUser.username" type="text" class="form-control custom-form-control" id="username" required>
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input v-model="localUser.email" type="email" class="form-control custom-form-control" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input v-model="localUser.password" type="password" class="form-control custom-form-control" id="password" required v-bind:disabled="mode === 'edit'" />
        </div>
        <button type="submit" class="btn btn-primary custom-btn">{{ mode === 'edit' ? 'Editar' : 'Registrar' }}</button>
      </form>
    </div>
</template>
  
  <script>
  import ApiService from '@/services/ApiService';
  import { useToast } from 'vue-toast-notification';
  import 'vue-toast-notification/dist/theme-sugar.css';

  export default {
    emits: ["submit"],
    props: {
      user: Object,
      mode: String
    },
    data() {
    return {
      localUser: { ...this.user } 
    };
    },
    watch: {
      user: {
        immediate: true,
        handler(newValue) {
          this.localUser = { ...newValue };
        }
        },
},
    methods: {
      async  submitForm() {
        try {
        if (this.mode === 'edit') {
          const response = await ApiService.updateUser(this.localUser);
          const $toast = useToast();
          $toast.success(response.message, {
            position: 'top',
          });
        } else {
          const response = await ApiService.registerUser(this.localUser);
          const $toast = useToast();
          $toast.success(response.message, {
          position: 'top'
          })
        }
        
        this.$emit('submit', { user: this.localUser, mode: this.mode });
      } catch (error) {
        const $toast = useToast();
        $toast.error(error.response.data.error, {
          position: 'top'
          })
      }
      }
    }
  }
  </script>
  
  <style scoped>
  .custom-btn {
    margin: 20px;
  }

  .custom-form-control{
    margin-bottom: 20px;
  }
  </style>
  