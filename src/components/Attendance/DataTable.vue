<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Пошук"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :items-per-page="perPage"
      :headers="headers"
      :items="items"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:[`item.isPresence`]="{ item }">
        <v-simple-checkbox
          color="primary"
          v-model="item.isPresence"
        ></v-simple-checkbox>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  props: {
    items: Array,
    mode: {
      type: String,
    },
    perPage: {
      type: Number,
      default: () => 5,
    },
  },
  mounted() {
    if (this.mode === "editing") {
      this.headers = [
        {
          text: "Дата",
          align: "start",
          sortable: false,
          value: "date",
        },
        {
          text: "Присутність",
          align: "start",
          sortable: false,
          value: "isPresence",
        },
      ];
    }

    if (this.mode === "add") {
      this.headers = [
        {
          text: "ПІБ",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Присутність",
          align: "start",
          sortable: false,
          value: "isPresence",
        },
      ];
    }
  },
  data() {
    return {
      headers: [],
      search: "",
    };
  },
};
</script>
