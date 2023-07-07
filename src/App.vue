<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav class="container pb-0 pt-5 md:py-3 justify-center text-center mx-auto ">
        <ul className="menu bg-blue-300 w-full md:menu-horizontal rounded-t-lg lg:rounded-box">
          <li class="text-center mx-auto text-white font-bold">
            <RouterLink to="/">
              Weather
            </RouterLink>
          </li>
          <li class="text-center mx-auto text-white font-bold">
            <RouterLink to="/location">
              Location
            </RouterLink>
          </li>
          <li class="text-center mx-auto text-white font-bold">
            <RouterLink to="/stopwatch">
              Stopwatch
            </RouterLink>
          </li>
          <li class="text-center mx-auto text-white font-bold">
            <RouterLink to="/photo">
              Photo
            </RouterLink>
          </li>
          <li class="text-center mx-auto text-white font-bold">
            <RouterLink to="/tictac">
              Game
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <RouterView class="mt-0 lg:mt-10"/>
</template>

<style scoped>
li a.router-link-exact-active {
  @apply text-red-600;
  @apply bg-yellow-500;
  @apply bg-opacity-10;
}
</style>
