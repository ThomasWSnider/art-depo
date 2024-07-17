<script setup>
import { Artwork } from '../models/Artwork.js';
import { artworksService } from "../services/ArtworksService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

defineProps({ artwork: Artwork })

// async function admireArtwork() {
//   try {
//     await artworksService.admireArtwork()
//   }
//   catch (error) {
//     logger.error(error)
//     Pop.error(`Couldn't admire artwork`);
//   }
// }
</script>


<template>


  <div class="item selectable postion-relative">
    <img class="img-fluid" :src="artwork.imgUrl" :alt="artwork.description">
    <!-- <button @click="admireArtwork()" class="btn btn-light admire-btn position-absolute"><i
        class="mdi mdi-thumb-up-outline"></i></button> -->
  </div>

</template>


<style lang="scss" scoped>
.item {
  padding: 1rem;
  border-radius: 0.75rem;
}

.admire-btn {
  top: 15px;
  right: 15px;
}
</style>