<script setup>
import { computed, onMounted } from "vue";
import { artworksService } from "../services/ArtworksService";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";

const artworks = computed(() => AppState.artworks)


onMounted(() => {
  getArtwork()
})

async function getArtwork() {
  try {
    await artworksService.getArtwork()
  }
  catch (error) {
    logger.error(error)
    Pop.error('Could not get artwork', error);
  }
}

</script>

<template>
  <section v-for="artwork in artworks" :key="artwork.id" class="container-fluid">
    Art Here
    <ArtworkCard :artwork="artwork" />
  </section>
</template>

<style scoped lang="scss"></style>
