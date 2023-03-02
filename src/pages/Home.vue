<template>
  <div>
    <Header />
    <v-main class="mt-4 pr-2 pl-2">
      <SearchBar />
      <Attendance v-if="mode === 'teacher'" />
      <Calendar v-if="mode === 'student'" />
    </v-main>
  </div>
</template>
<script>
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Attendance from "../components/Attendance";
import Calendar from "../components/Calendar";
export default {
  components: { Header, SearchBar, Attendance, Calendar },
  data() {
    return {
      mode: "teacher",
    };
  },
};
</script>
