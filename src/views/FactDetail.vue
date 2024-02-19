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
} from "@ionic/vue";
import { useCatFacts } from "@/composables/useCatFacts";
import { onMounted, ref } from "vue";

const facts = ref();

onMounted(async () => {
  const { catFacts } = await useCatFacts();
  facts.value = catFacts.value;
});
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
        <template v-for="fact in facts" :key="fact">
          <ion-row>
            <ion-col>
              <FactCard :cat-fact="fact" />
            </ion-col>
          </ion-row>
        </template>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
