import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useFactsStore = defineStore("favourites", () => {
  const favouriteFacts = ref<string[]>([]);
  const currentFact = ref("");

  const favourites = localStorage.getItem("favourites");
  if (favourites) favouriteFacts.value = JSON.parse(favourites);

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
      localStorage.setItem("favourites", JSON.stringify(favouriteFacts.value));
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
