<script setup>
import { onMounted } from "vue";
import { artworksService } from "../services/ArtworksService";
import Pop from "../utils/Pop";


onMounted(() => {
  getArtwork()
})

async function getArtwork(){
  try {
await artworksService.getArtwork()
  }
  catch (error){
    console.error(error);
    Pop.error('Could not get artwork', error);
  }
}

</script>

<template>
  Images go here
</template>

<style scoped lang="scss"></style>
