<script setup>
import { Artwork } from '../models/Artwork.js';

defineProps({ artwork: Artwork })
</script>


<template>
  <div class="row">
    <div class="col-3">
      <div class="card">
        <img :src="artwork.imgUrl" :alt="artwork.description">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>