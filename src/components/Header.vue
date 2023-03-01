<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-icon large color="white  darken-2" class="mr-2"> mdi-cloud </v-icon>
      Система обліку
    </div>

    <v-spacer></v-spacer>

    <AvatarMenu />
  </v-app-bar>
</template>

<script>
import AvatarMenu from "./AvatarMenu";

export default {
  components: { AvatarMenu },
};
</script>
