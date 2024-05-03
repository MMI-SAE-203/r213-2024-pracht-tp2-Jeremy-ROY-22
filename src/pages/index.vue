<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface MaisonRecord {
  adresse: string;
  collectionId: string;
  collectionName: string;
  created: string;
  favori: boolean;
  id: string;
  images: string;
  nbChambres: number;
  nbSdb: number;
  nomMaison: string;
  prix: number;
  surface: number;
  updated: string;
}
const maisonsListe: MaisonRecord[] = [
    {
      "adresse": "12 rue des cerisiers, 25420, Bart",
      "collectionId": "xbh0ohpeyzkcjt1",
      "collectionName": "maison",
      "created": "2024-04-11 12:02:16.819Z",
      "favori": true,
      "id": "fy0gsuv405ipwrn",
      "images": "lotus_design_n_print_8q_nu_r1l_iv_k_unsplash_TAndesW0CS.jpg",
      "nbChambres": 3,
      "nbSdb": 2,
      "nomMaison": "Maison 1",
      "prix": 230500,
      "surface": 250,
      "updated": "2024-04-11 12:04:25.262Z"
    },
    {
      "adresse": "1 rue des sapins, 25200, Montbéliard",
      "collectionId": "xbh0ohpeyzkcjt1",
      "collectionName": "maison",
      "created": "2024-04-11 12:04:02.401Z",
      "favori": false,
      "id": "1is9hkymtwmfzn0",
      "images": "naomi_hebert_mp0bga_s_d1c_unsplash_SrBMwX2c7J.jpg",
      "nbChambres": 2,
      "nbSdb": 1,
      "nomMaison": "Maison 2",
      "prix": 150000,
      "surface": 120,
      "updated": "2024-04-11 12:06:16.058Z"
    },
    {
      "adresse": "3 impasse safran, Chamonix",
      "collectionId": "xbh0ohpeyzkcjt1",
      "collectionName": "maison",
      "created": "2024-04-11 12:07:45.130Z",
      "favori": true,
      "id": "4ahxmecrhnlvhll",
      "images": "kenny_eliason_m_gzx2_mopr_s_unsplash_cU8kKHs5Gr.jpg",
      "nbChambres": 5,
      "nbSdb": 3,
      "nomMaison": "maison 3",
      "prix": 570000,
      "surface": 475,
      "updated": "2024-04-11 12:07:45.130Z"
    },
    {
      "adresse": "3 impasse flemme, vannes",
      "collectionId": "xbh0ohpeyzkcjt1",
      "collectionName": "maison",
      "created": "2024-05-03 12:39:51.164Z",
      "favori": false,
      "id": "t6ti1ljy4wkucmd",
      "images": "",
      "nbChambres": 2,
      "nbSdb": 1,
      "nomMaison": "maison 4",
      "prix": 150000,
      "surface": 78,
      "updated": "2024-05-03 12:39:51.164Z"
    },
    {
      "adresse": "3 rue des pouilleux, hesse",
      "collectionId": "xbh0ohpeyzkcjt1",
      "collectionName": "maison",
      "created": "2024-05-03 12:40:55.607Z",
      "favori": false,
      "id": "040ghlze5isdm9e",
      "images": "",
      "nbChambres": 3,
      "nbSdb": 1,
      "nomMaison": "maison 5",
      "prix": 120000,
      "surface": 93,
      "updated": "2024-05-03 12:40:55.607Z"
    }
  ] 
  console.log(maisonsListe);
  
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
