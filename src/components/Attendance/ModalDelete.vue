<template>
  <v-dialog v-model="dialog" scrollable width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" class="mr-2" dark v-bind="attrs" v-on="on">
        Видалити дні відвідуваності
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Видалення днів відвідуваності </v-card-title>
      <v-divider></v-divider>

      <v-card-text style="height: 400px">
        <v-select
          v-model="dates"
          :items="attendance_date"
          attach
          chips
          label="Дати"
          multiple
        ></v-select>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Відмінити
        </v-btn>
        <v-btn
          color="blue darken-1"
          :disabled="dates.length === 0"
          text
          @click="save"
          >Видалити</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    attendance_date: Array,
    saveDelete: Function,
  },
  data() {
    return {
      dialog: false,
      dates: [],
    };
  },

  watch: {
    dialog() {
      this.dates = [];
    },
  },
  methods: {
    save() {
      this.saveDelete(this.dates);
      this.dialog = false;
    },
  },
};
</script>
