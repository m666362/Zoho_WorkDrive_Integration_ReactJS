import { produce, setAutoFreeze } from "immer";
import create from "zustand";
import { createTrackedSelector } from "react-tracked";
import { Menuitems } from "../data/data.js";

setAutoFreeze(false);

export const immer = (config) => (set, get) =>
  config((fn) => set(produce(fn)), get);

const log = (config) => (set, get, api) =>
  config(
    (args) => {
      set(args);
    },
    get,
    api
  );

const store = (set) => ({
  menuItems: Menuitems,
  menuClicked: "Dashboard",
  setMenuClicked: (menuClicked) =>
    set((state) => {
      state.menuClicked = menuClicked;
    }),
  subMenuClicked: "",
  setSubMenuClicked: (subMenuClicked) =>
    set((state) => {
      state.subMenuClicked = subMenuClicked;
    }),
  bread: [{ name: "My Folder", id: "0fx6ef888f9bfcdb040bd9084653db3c65a8c" }],
  setRootBread: (id)=> set((state)=>{
    state.bread =  [{ name: "Base Directory", id: id}]
  }), 
  setBreadCrumbs: (folder) =>
    set((state) => {
      state.bread = [].concat(state.bread, [
        { name: folder?.attributes?.name, id: folder?.id },
      ]);
    }),
  setBreadCrumbsUrl: (folder) =>
    set((state) => {
      let my_array = [];
      for (let index = 0; index < state.bread.length; index++) {
        const element = state.bread[index];
        if (element.id != folder.id) my_array.push(element);
        else {
          my_array.push(element);
          break;
        }
      }
      state.bread = my_array;
    }),
  listView: true,
  setListView: (bool) =>
    set((state) => {
      state.listView = bool;
    }),
  apiData: {},
  setApiData: (folderId, data) =>
    set((state) => {
      state.apiData[folderId] = data;
    }),
  loading: true,
  setLoading: (bool) =>
    set((state) => {
      state.loading = bool;
    }),
  id: "",
  setId: (id) =>
    set((state) => {
      state.id = id;
    }),
  token: "",
  setToken: (data) =>
    set((state) => {
      state.token = data;
    }),
    userToken: "",
    setUserToken: (data) =>
      set((state) => {
        state.userToken = `Bearer ${data}`;
      }),
});

const useStore = create(log(immer(store)));
const useTrackedStore = createTrackedSelector(useStore);
export default useTrackedStore;
