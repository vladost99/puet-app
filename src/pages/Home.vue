<template>
  <div>
    <Header />
    <v-main class="mt-4 pr-2 pl-2">
      <SearchBar />
      <Attendance />
    </v-main>
  </div>
</template>
<script>
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
//import FormAddAttendance from "../components/FormAddAttendance";
import Attendance from "../components/Attendance";
export default {
  components: { Header, SearchBar, Attendance },
  data() {
    return {};
  },
};
</script>
