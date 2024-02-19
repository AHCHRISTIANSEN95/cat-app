<script setup lang="ts">
import router from "@/router";
import { Fact } from "@/interfaces/catfacts";
import FavouriteFact from "@/components/FavouriteFact.vue";
import { useFactsStore } from "@/stores/useFactsStore";
import { IonCard, IonCardHeader, IonCardSubtitle, IonButton } from "@ionic/vue";
import { PropType, computed } from "vue";

const { setCurrentFact } = useFactsStore();
const { catFact } = defineProps({
  catFact: {
    required: true,
    type: Object as PropType<Fact>,
  },
});

const factShort = computed(() => {
  return (
    catFact?.fact.slice(0, 50) +
    (catFact?.length && catFact.length > 50 ? "..." : "")
  );
});

const selectFact = () => {
  setCurrentFact(catFact.fact);
  router.push("/fact");
};
</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle> {{ factShort }} </ion-card-subtitle>
    </ion-card-header>
    <ion-button @click="selectFact()" fill="clear">See fact</ion-button>
    <favourite-fact :fact="catFact.fact" />
  </ion-card>
</template>

<style lang="scss">
.fact-card {
  width: 100%;
}
</style>
