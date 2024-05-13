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
  dialog: {
    isOpen: false,
    item: null,
  },
  addTaskToList: (newTask) =>
    set((state) => ({
      tasks: [...state.tasks, newTask],
    })),
  removeTaskFromList: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  markTodoCompleted: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),
  editTodo: (id, updatedTodo) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTodo } : task
      ),
    })),
  setDialog: (isOpen, item) => set({ dialog: { isOpen, item } }),
}));

export default useTaskStore;
