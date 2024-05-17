<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonsFavori } from '@/backend'
  
  const maisonsFav = await allMaisonsFavori()
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <h2>
    <MaisonCard v-for="uneMaison in maisonsFav" :key="uneMaison.id" v-bind="uneMaison"/>
  </h2>
</template>
