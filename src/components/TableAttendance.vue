<template>
  <div>
    <div class="d-flex justify-end mb-3">
      <v-btn color="primary">Обновити</v-btn>
    </div>
    <v-data-table :headers="headers" :items="items" class="elevation-1">
      <template v-slot:item.isPresent="{ item }">
        <v-simple-checkbox v-model="item.isPresent"></v-simple-checkbox>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      headers: [
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
          value: "isPresent",
        },
        {
          text: "Дата",
          align: "start",
          sortable: false,
          value: "date",
        },
        {
          text: "Дисципліна",
          align: "start",
          sortable: false,
          value: "discipline",
        },
        {
          text: "Група",
          align: "start",
          sortable: false,
          value: "group",
        },
      ],
    };
  },
};
</script>
