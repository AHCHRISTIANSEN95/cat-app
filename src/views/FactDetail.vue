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
  IonButtons,
  IonBackButton,
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
      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="details">
              <favourite-fact :fact="currentFact" />
              <ion-img
                class="details__image"
                src="https://cataas.com/cat"
                alt="Random Cat From Cataas"
              ></ion-img>

              {{ currentFact }}
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<style lang="scss">
.details {
  display: grid;
  gap: 20px;

  &__image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>
