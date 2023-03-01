<template>
  <div class="magazine-header" style="border-bottom: 1px solid black">
    <div class="d-flex justify-center" style="border-right: 1px solid black">
      {{ indStud + 1 }}
    </div>
    <div class="d-flex justify-center" style="border-right: 1px solid black">
      {{ student.name }}
    </div>

    <div
      :style="{
        'grid-template-columns': `repeat(${student.attendance.length},40px)`,
      }"
      class="month-days"
    >
      <div
        v-for="(attend, ind) in student.attendance"
        :key="attend.date + 'student_' + ind"
        :style="{
          'border-right': '1px solid black',
        }"
        class="d-flex align-center justify-center"
      >
        <div v-if="!isEdit">
          {{ attend.isPresence ? "Є" : "N/A" }}
        </div>
        <div v-if="isEdit" class="d-flex">
          <v-simple-checkbox
            color="primary"
            style="width: 15px; height: 35px"
            v-model="attend.isPresence"
          ></v-simple-checkbox>
        </div>
      </div>
    </div>

    <div class="d-flex" style="border-left: 1px solid black; margin-left: -1px">
      <div
        style="border-right: 1px solid black; width: 25px"
        class="d-flex justify-center"
      >
        {{ student.attendance.filter((attend) => attend.isPresence).length }}
      </div>
      <div
        style="border-right: 1px solid black; width: 25px"
        class="d-flex justify-center"
      >
        {{ student.attendance.filter((attend) => !attend.isPresence).length }}
      </div>
      <div
        style="border-right: 1px solid black; width: 25px"
        class="d-flex justify-center"
      >
        {{ student.missed_day.illness }}
      </div>
      <div class="d-flex justify-center" style="width: 25px">
        {{ student.missed_day.other }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    student: Object,
    indStud: Number,
    // attendance_date: Array,
    isEdit: Boolean,
  },
};
</script>
