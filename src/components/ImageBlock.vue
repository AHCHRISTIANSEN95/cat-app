<script setup lang="ts">
import { IonImg, IonSpinner } from "@ionic/vue";
import { ref } from "vue";

const imageUrl = ref("https://cataas.com/cat#" + new Date().getTime());
const imageHasLoaded = ref(false);
</script>

<template>
  <div class="image-block">
    <ion-img
      class="image-block__image"
      @ion-img-did-load="imageHasLoaded = true"
      :src="imageUrl"
      alt="Random Cat From Cataas"
    ></ion-img>
    <ion-spinner
      class="image-block__spinner"
      v-if="!imageHasLoaded"
    ></ion-spinner>
  </div>
</template>

<style lang="scss">
.image-block {
  position: relative;

  &__spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>
