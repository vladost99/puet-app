<template>
  <div class="d-flex justify-space-around">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div class="align-center">
          <span class="mr-2">{{ user.name }}</span>
          <v-avatar v-bind="attrs" v-on="on" color="#002e5e" size="46">{{
            user.name[0]
          }}</v-avatar>
        </div>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [{ title: "Статистика" }, { title: "Вийти" }],
    };
  },
  computed: {
    ...mapGetters({
      user: "user/user",
    }),
  },
};
</script>
