<template>
  <v-row class="align-center justify-center">
    <v-col cols="6" class="flex">
      <v-row>
        <v-col>
          <AutoCompleteSelect
            :model="search_data.discipline"
            :items="itemsDiscipline"
            :label="'Дисципліна'"
            :disabled="loading"
            v-on:save="search_data.discipline = $event"
        /></v-col>
        <v-col cols>
          <AutoCompleteSelect
            :model="search_data.group"
            :items="itemsGroups"
            :disabled="loading"
            v-on:save="search_data.group = $event"
            :label="'Група'"
        /></v-col>
        <v-col cols="1"
          ><v-btn
            :loading="loading"
            :disabled="loading"
            color="primary"
            class="ma-2 white--text"
            @click="search"
          >
            <v-icon dark> mdi-magnify </v-icon>
          </v-btn></v-col
        >
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import AutoCompleteSelect from "./AutoCompleteSelect";
import { mapMutations } from "vuex";
export default {
  components: { AutoCompleteSelect },
  data() {
    return {
      loading: false,
      itemsDiscipline: [
        { text: "Дисципліна 1", value: "subject1" },
        { text: "Дисципліна 2", value: "subject2" },
        { text: "Дисципліна 3", value: "subject3" },
      ],
      itemsGroups: [
        { text: "Група 1", value: "group1" },
        { text: "Група 2", value: "group2" },
        { text: "Група 3", value: "group3" },
      ],
      menu: false,
      search_data: {
        group: "",
        discipline: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      },
    };
  },
  methods: {
    ...mapMutations({
      setSearchData: "search/setSearchData",
    }),
    search() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 300);
      this.setSearchData(this.search_data);
    },
  },
};
</script>
