<script setup lang="ts">
import FactCard from "@/components/FactCard.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
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
        <ion-title size="large">Cat Facts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <template v-for="fact in catFacts" :key="fact">
          <ion-row>
            <ion-col>
              <FactCard :cat-fact="fact" />
            </ion-col>
          </ion-row>
        </template>
      </ion-grid>
      <ion-infinite-scroll @ionInfinite="ionInfinite">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>
