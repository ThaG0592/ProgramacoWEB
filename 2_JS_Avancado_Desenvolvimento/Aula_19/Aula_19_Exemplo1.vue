<!-- Botao.vue -->
<template>
    <button @click="onClick">{{ texto }}</button>
  </template>
  
  <script>
  export default {
    props: ['texto', 'onClick']
  };
  </script>
  
  <!-- Contador.vue -->
  <template>
    <div>
      <p>Contagem: {{ contagem }}</p>
      <Botao texto="Aumentar" :onClick="aumentar" />
      <Botao texto="Diminuir" :onClick="diminuir" />
    </div>
  </template>
  
  <script>
  import Botao from './Botao.vue';
  
  export default {
    components: { Botao },
    data() {
      return {
        contagem: 0
      };
    },
    methods: {
      aumentar() {
        this.contagem++;
      },
      diminuir() {
        this.contagem--;
      }
    }
  };
  </script>
  