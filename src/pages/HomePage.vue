<script setup>
import { computed, onMounted } from "vue";
import { artworksService } from "../services/ArtworksService";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import ArtworkCard from "../components/ArtworkCard.vue";

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
  <section class="container-fluid">
    <div class="art-box">
      <ArtworkCard v-for="artwork in artworks" :key="artwork.id" :artwork="artwork" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.art-box {
  columns: 18rem;
  gap: 1rem;
  counter-reset: grid;
}
</style>
