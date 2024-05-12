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
  completedCount: 0,
  addItemToList: (newItem) =>
    set((state) => ({
      tasks: [...state.tasks, newItem],
    })),
  removeTaskFromList: (itemId) =>
    set((state) => ({
      tasks: state.tasks.filter((item) => item.id !== itemId),
      completedCount: state.tasks.find(
        (item) => item.id === itemId && item.isCompleted
      )
        ? state.completedCount - 1
        : state.completedCount,
    })),
  setCompletedCount: (count) => set({ completedCount: count }),
  setTasks: (newTasks) => set({ tasks: newTasks }),
}));
