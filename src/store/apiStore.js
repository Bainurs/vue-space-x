import { defineStore } from "pinia";
import axios from "../api/axios";

export const useApiStore = defineStore('api', {
    state: () => ({
        data: {},
        error: null,
        loading: false,
    }),
    actions: {
        async fetchData(key, url) {
            this.loading = true;
            try {
                const response = await axios.get(url);
                this.data[key] = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    },
});