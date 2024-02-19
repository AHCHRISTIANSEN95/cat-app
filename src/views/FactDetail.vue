<script setup lang="ts">
import FavouriteFact from "@/components/FavouriteFact.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonImg,
} from "@ionic/vue";
import { useFactsStore } from "@/stores/useFactsStore";

const { currentFact } = useFactsStore();
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title size="large">Fact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <favourite-fact :fact="currentFact" />

        <ion-row>
          <ion-img
            src="https://placekitten.com/400/300"
            :alt="currentFact"
          ></ion-img>
        </ion-row>
        <ion-row>
          {{ currentFact }}
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
