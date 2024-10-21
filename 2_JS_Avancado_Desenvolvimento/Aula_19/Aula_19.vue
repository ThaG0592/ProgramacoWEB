<template>
    <div>
      <p>Contagem: {{ contagem }}</p>
      <button @click="aumentarContagem">Aumentar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contagem: 0
      };
    },
    methods: {
      aumentarContagem() {
        this.contagem++;
      }
    }
  };
  </script>
  