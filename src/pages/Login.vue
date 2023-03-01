<template>
  <v-container class="grey lighten-3" fluid fill-height>
    <v-card class="mt-4 mx-auto text-center hidden-sm-only" min-width="400">
      <v-card-text>
        <v-card
          class="v-card--offset mx-auto"
          color="primary"
          elevation="4"
          dark
        >
          <v-card-text class="headline white--text">Авторизація</v-card-text>
        </v-card>
      </v-card-text>
      <v-form @submit.prevent="submit">
        <v-card-text>
          <v-text-field
            label="Ім'я користувача (логін)"
            name="username"
            type="text"
            v-model="email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Пароль"
            name="password"
          ></v-text-field>

          <v-btn type="submit" color="primary"> Вхід </v-btn>
        </v-card-text>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      login: "user/login",
    }),
    submit() {
      this.login();
      this.$router.push("/");
    },
  },
};
</script>
