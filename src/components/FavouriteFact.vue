<script setup lang="ts">
import { useFactsStore } from "@/stores/useFactsStore";
import {
  IonButton,
  IonIcon,
  toastController,
} from "@ionic/vue";
import { computed } from "vue";
import { star, starOutline } from "ionicons/icons";

const { addToFavourites, isFavourite } = useFactsStore();
const { fact } = defineProps({
  fact: {
    required: true,
    type: String,
  },
});

const favourite = computed(() => {
  return isFavourite(fact) ? star : starOutline;
});

const toastMessage = computed(() => {
  return isFavourite(fact) ? "Fact was added" : "Fact was removed";
});

const presentToast = async () => {
  const toast = await toastController.create({
    message: toastMessage.value,
    duration: 1500,
    position: "bottom",
  });

  await toast.present();
};
</script>

<template>
 <ion-button
      @click="addToFavourites(fact), presentToast()"
      fill="clear"
    >
      <ion-icon :icon="favourite" />
    </ion-button>
</template>
