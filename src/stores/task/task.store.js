import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [
    {
      id: 1,
      title: "Hello world!",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Hello world 2!",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Hello world 3!",
      isCompleted: false,
    },
  ],
  addItemToList: (newItem) =>
    set((state) => ({
      tasks: [...state.tasks, newItem],
    })),
  removeTaskFromList: (itemId) =>
    set((state) => ({
      tasks: state.tasks.filter((item) => item.id !== itemId),
    })),
}));
