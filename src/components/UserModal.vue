<template>
  <div v-if="showModal" class="custom-modal">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Formulario de Usuario</h5>
        <button type="button" class="close" @click="closeModal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <user-form :user="this.user" :mode="this.mode" @submit="handleFormSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  emits: ["modal-closed", "form-submit"],
  components: {
    UserForm,
  },
  props: {
      user: Object,
      mode: String
    },
  data() {
    return {
      showModal: true,
      modalUser: {},
      modalMode: '',
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.$emit('modal-closed');
    },
    async handleFormSubmit({ user, mode }) {
     await this.$emit('form-submit', { user , mode });
      this.closeModal()
    },
  },
};
</script>

<style scoped>
.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 50%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
}
</style>
