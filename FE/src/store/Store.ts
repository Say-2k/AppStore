import { configure } from "mobx";
import React from "react";
import AppStore from "./AppStore";
import HomeStore from "./HomeStore";
import CatalogStore from "./CatalogStore";
import ProductStore from "./ProductStore";

configure({
  useProxies: "ifavailable",
  enforceActions: "never",
});

class Store {
  constructor() {
    this.appStore = new AppStore();
    this.homeStore = new HomeStore(this.appStore);
    this.catalogStore = new CatalogStore(this.appStore);
    this.productStore = new ProductStore(this.appStore);
  }

  appStore: AppStore;

  homeStore: HomeStore;

  catalogStore: CatalogStore;

  productStore: ProductStore;
}

export const store = new Store();

export const storeContext = React.createContext<Store>(store);

export const useStore = () => React.useContext(storeContext);
