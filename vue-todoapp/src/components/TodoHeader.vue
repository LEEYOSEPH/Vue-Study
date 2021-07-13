<template>
  <header>
    <!-- <h1>TODO APP</h1> -->
    <h1>{{this.$store.state.headerText}}</h1>
  </header>
</template>

<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0.15rem; /* 바깥여백 */
}
</style>