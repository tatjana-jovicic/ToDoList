import { create } from "zustand";

const useNotificationStore = create((set) => ({
  isOpen: false,
  text: "",
  severity: "",
  setNotification: (isOpen, text, severity) => set({ isOpen, text, severity }),
  setClose: () => set({ isOpen: false, text: "", severity: "" }),
}));

export default useNotificationStore;
