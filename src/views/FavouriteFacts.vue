<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useFactsStore } from "@/stores/useFactsStore";

const { favouriteFacts } = useFactsStore();

</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title size="large">Your Favourite Facts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <template v-for="fact in favouriteFacts">
          {{ fact }}
      </template>
    </ion-content>
  </ion-page>
</template>