<!-- Material Design Icons: https://materialdesignicons.com/ -->
<!-- Material icons: https://mui.com/material-ui/material-icons/ -->

<script setup lang="ts">
import { ref } from 'vue';

let showMenuBar = ref(true);
let showLeftDrawer = ref(true);

// onMounted(() => {
// ...
// });
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="hHh LpR fFf">
      <!-- Header: -->
      <q-header v-model="showMenuBar" class="text-left bg-blue-5" elevated reveal>
        <!-- Menu bar: -->
        <q-toolbar>
          <q-btn dense flat icon="menu" round @click="showLeftDrawer = !showLeftDrawer" />
        </q-toolbar>
      </q-header>

      <!-- Left drawer: -->
      <q-drawer v-model="showLeftDrawer" bordered :breakpoint="600" :width="250">
        <q-scroll-area class="fit bg-blue-1">
          <q-btn
            align="left"
            class="full-width no-margin"
            :class="{ active: $route.path === '/' }"
            flat
            icon="mdi-home-plus"
            label="Home"
            no-caps
            to="/"
          />
          <q-btn
            align="left"
            class="full-width no-margin"
            :class="{ active: $route.path === '/template' }"
            flat
            icon="mdi-fruit-pear"
            label="Template Syntax"
            no-caps
            to="/template"
          />
          <q-btn
            align="left"
            class="full-width no-margin"
            :class="{ active: $route.path === '/reactive' }"
            flat
            icon="mdi-refresh-auto"
            label="Reactive System"
            no-caps
            to="/reactive"
          />
          <q-btn
            align="left"
            class="full-width no-margin"
            :class="{ active: $route.path === '/computed' }"
            flat
            icon="mdi-calculator"
            label="Computed Properties"
            no-caps
            to="/computed"
          />
        </q-scroll-area>
      </q-drawer>

      <!-- Main container (DON'T DELETE!) -->
      <q-page-container id="container">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style>
.active {
  background-color: #44a5f1;
  color: yellow;
}
</style>
