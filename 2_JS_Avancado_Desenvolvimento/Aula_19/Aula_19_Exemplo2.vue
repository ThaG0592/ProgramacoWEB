<!-- Formulario.vue -->
<template>
    <div>
      <input v-model="nome" placeholder="Digite seu nome" />
      <button @click="aoEnviarNome">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nome: ''
      };
    },
    methods: {
      aoEnviarNome() {
        this.$emit('enviar-nome', this.nome);
      }
    }
  };
  </script>
  
  <!-- Perfil.vue -->
  <template>
    <p>Bem-vindo, {{ nome }}!</p>
  </template>
  
  <script>
  export default {
    props: ['nome']
  };
  </script>
  
  <!-- App.vue -->
  <template>
    <div>
      <Formulario @enviar-nome="definirNome" />
      <Perfil v-if="nome" :nome="nome" />
    </div>
  </template>
  
  <script>
  import Formulario from './Formulario.vue';
  import Perfil from './Perfil.vue';
  
  export default {
    components: { Formulario, Perfil },
    data() {
      return {
        nome: ''
      };
    },
    methods: {
      definirNome(nome) {
        this.nome = nome;
      }
    }
  };
  </script>
  