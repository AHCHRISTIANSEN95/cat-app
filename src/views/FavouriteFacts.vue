<script setup lang="ts">
import FavouriteFact from "@/components/FavouriteFact.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
} from "@ionic/vue";
import { useFactsStore } from "@/stores/useFactsStore";

const { favouriteFacts } = useFactsStore();
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Favourites</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <template v-if="favouriteFacts.length > 0">
        <ion-list>
          <ion-list-header>
            <h1>My Favourites</h1>
          </ion-list-header>
          <template v-for="fact in favouriteFacts" :key="fact">
            <ion-item>
              <ion-label>{{ fact }}</ion-label>
              <favourite-fact :fact="fact" />
            </ion-item>
          </template>
        </ion-list>
      </template>
      <template v-else>
        <ion-title>No Favourites</ion-title>
      </template>
    </ion-content>
  </ion-page>
</template>
