<template>
  <v-dialog v-model="dialog" scrollable width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title
        >Запит на редагування {{ selectedEvent.name }} за
        {{ selectedEvent.start }}</v-card-title
      >
      <v-divider></v-divider>

      <v-card-text>
        <v-select
          v-model="reason_absent"
          :items="optionsAbstent"
          label="Причина відсутності"
        ></v-select>
        <v-textarea
          name="input-7-1"
          label="Опис причини"
          v-model="value"
          small
        ></v-textarea>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Відмінити
        </v-btn>
        <v-btn color="blue darken-1" :disabled="!value" text @click="save"
          >Відправити запит</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    selectedEvent: Object,
  },
  data() {
    return {
      dialog: false,
      value: "",
      reason_absent: "",
      optionsAbstent: [
        { text: "Через хворобу", value: "illess" },
        { text: "Інші причини", value: "others" },
      ],
    };
  },

  watch: {
    dialog() {
      this.value = "";
      this.reason_absent = "";
    },
  },
  methods: {
    save() {
      this.dialog = false;
    },
  },
};
</script>
