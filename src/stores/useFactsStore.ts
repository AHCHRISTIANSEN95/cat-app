import { defineStore } from "pinia";
import { ref, watch } from "vue";

const LOCAL_STORAGE_KEY_FAVOURITES = "favourites";
const LOCAL_STORAGE_KEY_CURRENT_FACT = "current-fact";

export const useFactsStore = defineStore("favourites", () => {
  const favouriteFacts = ref<string[]>([]);
  const currentFact = ref("");

  const favouritesLocal = localStorage.getItem(LOCAL_STORAGE_KEY_FAVOURITES);
  const currentLocalFact = localStorage.getItem(LOCAL_STORAGE_KEY_CURRENT_FACT);

  if (favouritesLocal) favouriteFacts.value = JSON.parse(favouritesLocal);
  if (currentLocalFact) currentFact.value = JSON.parse(currentLocalFact);

  const addToFavourites = (fact: string) => {
    favouriteFacts.value.includes(fact)
      ? removeFact(fact)
      : favouriteFacts.value.push(fact);
  };

  const removeFact = (fact: string) => {
    const index = favouriteFacts.value.findIndex((item) => item === fact);
    favouriteFacts.value.splice(index, 1);
  };

  const isFavourite = (fact: string) => {
    return favouriteFacts.value.includes(fact);
  };

  const setCurrentFact = (fact: string) => {
    currentFact.value = fact;
  };

  watch(
    favouriteFacts,
    () => {
      localStorage.setItem(LOCAL_STORAGE_KEY_FAVOURITES, JSON.stringify(favouriteFacts.value));
    },
    { deep: true }
  );

  watch(
    currentFact,
    () => {
      localStorage.setItem(LOCAL_STORAGE_KEY_CURRENT_FACT, JSON.stringify(currentFact.value));
    },
    { deep: true }
  );

  return {
    favouriteFacts,
    currentFact,
    addToFavourites,
    isFavourite,
    setCurrentFact,
  };
});
