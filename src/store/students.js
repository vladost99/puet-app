export default {
  namespaced: true,
  state: () => ({
    studentList: [
      "Elijah Wilson",
      "Sophia Miller",
      "William Jackson",
      "Ethan Johnson",
      "Jacob Martinez",
      "Jacob Hernandez",
      "Liam Miller",
      "Ethan Wilson",
      "Mason Thomas",
      "Isabella Davis",
      "James Miller",
      "Elijah Gonzalez",
      "Elijah Smith",
      "Sophia Martinez",
      "Evelyn Jones",
      "Mia Gonzalez",
      "Charlotte Williams",
      "Emma Perez",
      "Charlotte Davis",
      "James Martinez",
    ],
  }),
  getters: {
    studentList(state) {
      return state.studentList;
    },
  },
};
