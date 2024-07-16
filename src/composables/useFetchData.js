import { onMounted } from "vue";
import { useApiStore } from "../store/apiStore";

export function useFetchData() {
    const apiStore = useApiStore();

    const getData = async (key, url) => {
        if (!apiStore.data[key]) {
            await apiStore.fetchData(key, url);
        }
    };

    return { apiStore, getData };
}