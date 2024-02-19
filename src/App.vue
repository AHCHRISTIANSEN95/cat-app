
<script setup lang="ts">
import { IonApp, 
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import { bulb , star } from "ionicons/icons";
</script>
<template>
  <ion-app>
    <ion-tabs>	  
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/facts">
          <ion-icon :icon="bulb" />
          <ion-label>Facts</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="radio" href="/favourites">
          <ion-icon :icon="star" />
          <ion-label>Favourites</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

