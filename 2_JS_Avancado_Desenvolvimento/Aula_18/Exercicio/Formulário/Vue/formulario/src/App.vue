<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <button type="submit">Submit</button>
    </form>

    <div v-if="submitted">
      <h3>Submitted Data:</h3>
      <p>Name: {{ name }}</p>
      <p>Email: {{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
