import { CatFactsApiResponse, Fact } from "@/interfaces/catfacts";
import { ref } from "vue";

export const useCatFacts = () => {
    const catFacts = ref<Fact[] >([]);

    const fetchCatFacts = async (page: number) => {
        try {
            const response = await fetch(`https://catfact.ninja/facts?page=${page}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData: CatFactsApiResponse = await response.json();
            
            return catFacts.value.push(...responseData.data);
        } catch (error) {
            console.error('Error fetching cat facts:', error);
            return [];
        }
    }

    return {
        catFacts,
        fetchCatFacts,
    }
}