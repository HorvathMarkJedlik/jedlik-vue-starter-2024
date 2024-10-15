import { api } from '../boot/axios';
import { defineStore } from 'pinia';
import { Loading } from 'quasar';

// Interface for Application
export interface IApp {
  showNewDialog: boolean;
  filter: string;
  documents: Array<any>;
  counter: number;
}

interface IStore {
  app: IApp;
}

export const useStore = defineStore({
  id: 'Store',
  state: (): IStore => ({
    app: {
      documents: [],
      filter: '',
      showNewDialog: false,
      counter: 127
    },
  }),
  getters: {},
  actions: {
    async GetAllDocuments(): Promise<void> {
      Loading.show();
      this.app.documents = [];
      api
        .get('/documents')
        .then((res) => {
          Loading.hide();
          if (res?.data) {
            this.app.documents = res.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  // all "state" data is stored in browser session store:
  persist: {
    enabled: true,
  },
});
