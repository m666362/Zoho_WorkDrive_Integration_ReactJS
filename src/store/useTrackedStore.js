import { produce, setAutoFreeze } from "immer";
import create from "zustand";
import { createTrackedSelector } from "react-tracked";
import { Menuitems } from "../data/data.js";
import { SettingsSharp } from "@material-ui/icons";

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
  setRootBread: (id) =>
    set((state) => {
      state.bread = [{ name: "Base Directory", id: id }];
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
  settingData: {},
  pasteOpen: false,
  setPasteOpen: (bool)=> set((state)=>{
    state.pasteOpen = bool
  }),
  setInitializeData: (settings) =>
    set((state) => {
      let tempData = {};
      settings.forEach((setting) => {
        tempData[setting?.settingId] = {
          rootFolderId: setting?.rootFolderId,
          name: setting?.Name,
          userAccessToken: setting?.userAccessToken,
          breadCrumbs: [],
          previousData: {},
          listView: true,
        };
      });
      state.settingData = tempData;
      console.log({ tempData: state.settingData });
    }),
  setApiSettingData: (settingId, folder, apiData) =>
    set((state) => {
      let folderId = folder?.id?folder?.id:folder;
      let tempData = {
        ...state.settingData,
        [settingId]: {
          ...state.settingData?.[settingId],
          previousData: {
            ...state.settingData?.[settingId]?.previousData,
            [folderId]: [...apiData],
          },
          breadCrumbs: [].concat(state.settingData?.[settingId]?.breadCrumbs, [
            {
              name: folder?.attributes?.name
                ? folder.attributes.name
                : "My Folder",
              id: folderId,
            },
          ]),
        },
      };

      state.settingData = tempData
      console.log({ apiSetsData: state.settingData });
    }),
  setBreadCrumbsSettingData: (settingId, folder) =>
    set((state) => {
      let my_array = [];
      for (
        let i = 0;
        i < state.settingData?.[settingId].breadCrumbs.length - 1;
        i++
      ) {
        const element = state.settingData?.[settingId].breadCrumbs?.[i];
        if (element.id != folder.id) my_array.push(element);
        else {
          my_array.push(element);
          break;
        }
      }
      state.settingData = {
        ...state.settingData,
        [settingId]: {
          ...state.settingData?.[settingId],
          breadCrumbs: my_array,
        },
      };
    }),
  setViewSettingData: (settingId, bool) =>
    set((state) => {
      console.log({
        settingId,
        bool,
      });
      state.settingData = {
        ...state.settingData,
        [settingId]: {
          ...state.settingData?.[settingId],
          listView: bool,
        },
      };
    }),
  setAddItemSettingData: (settingId, folder, apiData) =>
    set((state) => {
      let folderId = folder?.id ?? folder;
      state.settingData = {
        ...state.settingData,
        [settingId]: {
          ...state.settingData?.[settingId],
          previousData: {
            ...state.settingData?.[settingId]?.previousData,
            [folderId]: apiData,
          },
        },
      };
    }),
});

const useStore = create(log(immer(store)));
const useTrackedStore = createTrackedSelector(useStore);
export default useTrackedStore;
