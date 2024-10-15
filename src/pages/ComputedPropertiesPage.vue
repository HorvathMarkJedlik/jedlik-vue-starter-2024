<script setup lang='ts'>
import { ref, computed } from 'vue';

const szamlalo = ref(0);

const duplaSzamlaloProp = computed(() => szamlalo.value * 2);

const vnev = ref('Horvath');
const knev = ref('Mark');

const nev = computed({
    
    get() {
        if(knev.value == ''){
            return vnev.value;
        }else return `${vnev.value} ${knev.value}`;
    },
    set(newValue) {
        if(newValue.indexOf(' ') === -1){
            return;
        }else{
            const nevTomb = newValue.split(' ');
            vnev.value = nevTomb[0];
            knev.value = nevTomb[1];
        }

    },
    
});

function duplaSzamlaloFgv(): number {
    return szamlalo.value *2;
}
</script>

<template>
<q-page class="column flex-center" >
    <h2>Számláló: {{ szamlalo }}</h2>
    <h2>Dupla számláló függvény: {{ duplaSzamlaloFgv() }}</h2>
    <h2>Dupla számláló propertyvel: {{ duplaSzamlaloProp }}</h2>
    <q-btn color="primary" glossy label="Növel" no-caps @click="szamlalo++" ></q-btn>
    <h2>Teljes név:{{ nev }}</h2>
    <h2>Vezetéknév:{{ vnev }}</h2>
    <h2>Keresztnév: {{ knev }} </h2>
    <q-input v-model="nev" clearable label="Név" outlined rounded ></q-input>
</q-page>
</template>

<style lang='scss' scoped>
    h2{
        margin: 5px;
    }
</style>
