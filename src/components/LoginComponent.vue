<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      ApiService.login(this.username, this.password)
        .then((response) => {
          console.log('Login successful:', response);
          const token = response.token;
          localStorage.setItem('token', token);
          // Puedes manejar la respuesta y redirigir al usuario según tus necesidades
          this.$router.push('/user');
        })
        .catch((error) => {
          console.error('Login failed:', error);
          // Puedes manejar el error, mostrar un mensaje al usuario, etc.
        });
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Aumenté el valor del sombreado */
  background-color: #fff;
}

h2 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}

input {
  padding-right: 0px;
  padding-bottom: 7px;
  padding-top: 7px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button {
  padding: 10px; /* Aumenté el valor del padding */
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
