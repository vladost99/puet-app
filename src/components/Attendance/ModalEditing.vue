<template>
  <v-dialog v-model="dialog" scrollable width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" class="mr-2" dark v-bind="attrs" v-on="on">
        Редагувати
      </v-btn>
    </template>
    <v-card>
      <v-card-title> Редагування відвідуваності </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <div class="d-flex align-center">
          <div class="mr-3">Студент:</div>
          <AutoCompleteSelect
            :items="students.map((stud) => ({ text: stud.name, value: stud }))"
            :model="selectedStudent"
            :label="'Виберіть студента'"
            :disabled="false"
            v-on:save="selectedStudent = JSON.parse(JSON.stringify($event))"
          />
        </div>

        <div v-if="selectedStudent">
          <DataTable mode="editing" :items="selectedStudent.attendance" />
        </div>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Відмінити
        </v-btn>
        <v-btn
          :disabled="!selectedStudent"
          color="blue darken-1"
          text
          @click="save"
        >
          Змінити</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AutoCompleteSelect from "../AutoCompleteSelect.vue";
import DataTable from "./DataTable.vue";
export default {
  components: { AutoCompleteSelect, DataTable },
  props: {
    students: Array,
    saveEdit: Function,
  },
  data() {
    return {
      dialog: false,
      selectedStudent: null,
    };
  },

  watch: {
    dialog() {
      this.selectedStudent = null;
    },
  },
  methods: {
    save() {
      this.saveEdit(this.selectedStudent);
      this.dialog = false;
    },
  },
};
</script>
