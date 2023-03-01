<template>
  <div class="d-flex flex-column">
    <div
      v-if="isOpenForm === false && dataTable === false"
      class="d-flex flex-column align-center"
    >
      <h3>За цей день не має відвідуваності</h3>
      <v-btn @click="isOpenForm = true" depressed color="primary"
        >Додати відвідуваность студентів
      </v-btn>
    </div>
    <v-card v-if="isOpenForm" class="mx-auto mt-4">
      <v-card-text>
        <p class="text-h5 text--primary">
          Додати присутність студентів за {{ search_data.date }}
        </p>
      </v-card-text>

      <v-card class="ma-2 my-2">
        <v-card-text class="pb-0">
          <p style="margin: 0">Список студентів</p>
        </v-card-text>
        <div class="d-flex justify-end align-center">
          <v-btn
            @click="save"
            :disabled="selectedStudents.length === 0"
            color="success"
          >
            Сохранити
          </v-btn>
          <v-btn
            @click="addOrRemoveAll"
            :color="
              studentList.length !== selectedStudents.length
                ? 'primary'
                : 'error'
            "
            class="ma-2 white--text"
          >
            {{
              studentList.length !== selectedStudents.length
                ? "Додати всіх"
                : "Видалити всіх"
            }}
          </v-btn>
        </div>
        <v-row class="ma-2">
          <v-col
            cols="2"
            :key="studentInd"
            v-for="(studentName, studentInd) in studentList"
          >
            <v-checkbox
              v-model="selectedStudents"
              :label="studentName"
              :value="studentName"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-card>
    </v-card>

    <TableAttendanceVue :items="arrItems" v-if="dataTable" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import TableAttendanceVue from "./TableAttendance.vue";
export default {
  components: { TableAttendanceVue },
  data() {
    return {
      isOpenForm: false,
      selectedStudents: [],
      dataTable: false,
      arrItems: [],
    };
  },
  computed: {
    ...mapGetters({
      studentList: "students/studentList",
      search_data: "search/search_data",
    }),
  },
  methods: {
    addOrRemoveAll() {
      if (this.studentList.length === this.selectedStudents.length) {
        this.selectedStudents = [];
        return;
      }
      this.selectedStudents = [...this.studentList];
    },
    save() {
      this.isOpenForm = false;

      this.studentList.forEach((studName) => {
        const obj = {
          name: studName,
          isPresent: this.selectedStudents.includes(studName),
          date: new Date().toString(),
          discipline: "Дисципліна 1",
          group: "Група 1",
        };
        this.arrItems.push(obj);
      });

      this.selectedStudents = [];
      this.dataTable = true;
    },
  },
};
</script>
