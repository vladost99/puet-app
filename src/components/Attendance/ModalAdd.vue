<template>
  <v-dialog v-model="dialog" scrollable width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> Додати </v-btn>
    </template>
    <v-card>
      <v-card-title>Додавання відвідуваності</v-card-title>
      <v-divider></v-divider>

      <div class="ma-2 ml-5 d-flex align-center justify-space-between">
        <div style="width: 300px">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Дата"
                prepend-icon="mdi-calendar"
                readonly
                color="primary"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              color="primary"
              v-model="date"
              :allowed-dates="allowedDates"
              @input="menu = false"
            ></v-date-picker>
          </v-menu>
        </div>

        <v-btn
          @click="selectedAll"
          :color="!selectedAllStudents ? 'primary' : 'error'"
          >{{ !selectedAllStudents ? "Вибрати всіх" : "Видалити всіх" }}</v-btn
        >
      </div>

      <v-card-text class="mt-4" style="max-height: 600px">
        <DataTable :perPage="-1" mode="add" :items="students" />
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Відмінити
        </v-btn>
        <v-btn color="blue darken-1" :disabled="!date" text @click="save">
          Додати</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DataTable from "./DataTable.vue";
export default {
  components: { DataTable },
  props: {
    studentNames: Array,
    attendance_date: Array,
    addAttendance: Function,
  },
  data() {
    return {
      dialog: false,
      menu: false,
      date: "",
      students: [],
    };
  },

  mounted() {
    this.students = this.studentNames.map((name) => ({
      name,
      isPresence: false,
    }));
  },

  computed: {
    selectedAllStudents() {
      if (
        this.students.filter((el) => el.isPresence === true).length ===
        this.students.length
      ) {
        return true;
      }

      return false;
    },
  },

  watch: {
    dialog() {
      if (this.dialog === false) {
        this.students = this.students.map((el) => ({
          ...el,
          isPresence: false,
        }));
        this.date = "";
      }
    },
  },

  methods: {
    save() {
      this.addAttendance(this.date.replaceAll("-", "."), this.students);
      this.dialog = false;
    },
    allowedDates(value) {
      let newValue = value.replaceAll("-", ".");
      if (this.attendance_date.length === 0) return true;

      return this.attendance_date.find((attDate) => attDate === newValue)
        ? false
        : true;
    },
    selectedAll() {
      if (
        this.students.filter((el) => el.isPresence === true).length ===
        this.students.length
      ) {
        this.students = this.students.map((el) => ({
          ...el,
          isPresence: false,
        }));
      } else {
        this.students = this.students.map((el) => ({
          ...el,
          isPresence: true,
        }));
      }
    },
  },
};
</script>
