<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonsFavori } from '@/backend'
//import type { MaisonRecord } from '@/types'


const maisonsListe = await pb.collection('maison').getFullList()
console.log(maisonsListe);

const maisonsFav = await allMaisonsFavori()
</script>

<template>
  <h1 class="text-2xl">Bonjour monde ! la liste de toutes les offres du site dans /src/pages/offres/index.vue</h1>
  <ul>
    <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
      <RouterLink :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }" class="text-red-400 hover:text-red-600">
        {{ uneMaison.nomMaison }}
      </RouterLink>
    </li>
  </ul>
  <h2>
    <MaisonCard v-for="uneMaison in maisonsFav" :key="uneMaison.id" v-bind="uneMaison" />
  </h2>
</template>
