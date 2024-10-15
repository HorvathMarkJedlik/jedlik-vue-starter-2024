<script setup lang="ts">
import { ref } from 'vue';

let fruit = ref('Kört'); // ref() használata a reaktivitás érdekében
function felkialtojelHozzad() {
  fruit.value += '!'; // .value szükséges a ref használatakor
}
</script>

<template>
  <q-page>
    <h1>Szeretem a: {{ fruit + "-ét" }}</h1>
    <q-btn color="primary" glossy label="Hozzáad" no-caps  @click="felkialtojelHozzad()" />
    <h4 class="active">Ez a címsor active osztályba van sorolva</h4>
  </q-page>
</template>

<style lang="scss" scoped></style>
