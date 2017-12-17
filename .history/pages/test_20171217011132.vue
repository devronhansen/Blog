<template>
<div>
  <section>
    <h1>Scroll down!</h1>
  </section>

  <section v-scroll-reveal.reset>
    <h1>Tada!</h1>
  </section>
  </div>
</template>

<style>
  section {
    height: 100vh;
  }
</style>