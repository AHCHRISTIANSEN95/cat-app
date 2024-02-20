<script setup lang="ts">
import FavouriteFact from "@/components/FavouriteFact.vue";
import ImageBlock from "@/components/ImageBlock.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonButtons,
  IonBackButton,
  IonCol,
} from "@ionic/vue";
import { useFactsStore } from "@/stores/useFactsStore";

const { currentFact } = useFactsStore();
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Fact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="details">
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col class="ion-text-start">
              <h1 class="ion-no-margin">A cat with a fact</h1>
            </ion-col>
            <ion-col size="auto" class="ion-text-end">
              <favourite-fact :fact="currentFact" />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <image-block />
              <p>
                {{ currentFact }}
              </p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<style lang="scss">
ion-grid {
  width: 100%;
}

.details {
  display: grid;
  gap: 20px;
}
</style>
