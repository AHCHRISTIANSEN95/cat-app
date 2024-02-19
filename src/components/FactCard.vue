<script setup lang="ts">
import { Fact } from "@/interfaces/catfacts";
import router from "@/router";
import { IonCard, IonCardHeader, IonCardSubtitle, IonButton } from "@ionic/vue";
import { PropType, computed } from "vue";
import { star, starOutline } from "ionicons/icons";

const { catFact } = defineProps({
  catFact: Object as PropType<Fact>,
});

const fact = computed(() => {
  return catFact?.fact.slice(0, 50) + (catFact?.length && catFact.length> 50 ? "..." : "");
});

const selectFact = () => {
  router.push('/facts/details');
}
</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle> {{ fact }} </ion-card-subtitle>
    </ion-card-header>
    <ion-button @click="selectFact()" fill="solid">See fact</ion-button>
    <ion-button @click="addToFavourites()" fill="outline"> 
        <ion-icon :icon="starOutline" />
        <ion-label>Add to favourites</ion-label>
    </ion-button>
  </ion-card>
</template>

<style lang="scss">
.fact-card {
  width: 100%;
}
</style>
