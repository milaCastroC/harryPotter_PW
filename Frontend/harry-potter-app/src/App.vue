<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img
      alt="Harry potter logo logo"
      class="logo"
      src="@/assets/harry-potter-logo.png"
      max-width="125"
      height="300"
    />

    <div class="wrapper">
 
      <nav>
        <RouterLink to="/">Nosotros</RouterLink>
        <RouterLink to="/characters">Characters</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  padding-top: 50px;
  flex-direction: column;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #bb2c2c;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }



  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
