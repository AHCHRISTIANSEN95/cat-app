<script setup lang="ts">
import FactCard from "@/components/FactCard.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  InfiniteScrollCustomEvent,
} from "@ionic/vue";
import { useCatFacts } from "@/composables/useCatFacts";
import { onMounted, ref } from "vue";
const { catFacts, fetchCatFacts } = useCatFacts();
const page = ref(1);

onMounted(async () => {
  await fetchCatFacts(page.value);
});

const ionInfinite = async (ev: InfiniteScrollCustomEvent) => {
  page.value++;
  await fetchCatFacts(page.value);
  setTimeout(() => ev.target.complete(), 500);
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cat Facts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="fact-list">
        <template v-for="fact in catFacts" :key="fact">
          <FactCard :cat-fact="fact" />
        </template>
      </div>
      <ion-infinite-scroll @ionInfinite="ionInfinite">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<style lang="scss">
.fact-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 1rem 0;
}
</style>
