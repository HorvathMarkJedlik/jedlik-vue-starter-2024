<script setup lang="ts">
import { ref, reactive } from 'vue';

import {useStore} from '../stores/store';
const s = useStore();


let notReactive: number = 0;
let reactiveVariable = ref(0);
// reaktív változó típusának a megadása: 
// let reactive: Ref<number> = ref(0)

const reactiveObject = reactive({
  name: 'Vue 3',
  version: 3,
  isAwesome: true,
});

interface IReactiveObjektum{
  name: string;
  version: number;
  isAwesome: boolean;
}

const TypesReactiveObject: IReactiveObjektum = reactive({
  name: 'Vue 3',
  version: 3,
  isAwesome: true,
})

function IncreaseNotReactive() {
  notReactive++;
}

function IncreaseReactive() {
  reactiveVariable.value++;
  reactiveObject.version++;
  TypesReactiveObject.version++;
  s.app.counter++;
}


</script>

<template>
  <q-page>
    <h2>Nem reaktív változó: {{ notReactive }}</h2>
    <h2>Reaktív változó: {{ reactiveVariable}}</h2>

    <h2>Reaktív obejktum: {{ reactiveObject.version }}</h2>

    <h2>Típusos Reaktív obejktum: {{ TypesReactiveObject.version }}</h2>

    <h2>Pinia store: {{ s.app.counter }}</h2>

    <q-btn color="primary" glossy label="Változó növelés" no-caps @click="IncreaseNotReactive()" />
    <q-btn color="primary" glossy label="Változó növelés" no-caps @click="IncreaseReactive()" />
  </q-page>
</template>

<style lang="scss" scoped></style>
