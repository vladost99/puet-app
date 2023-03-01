<template>
  <div class="d-flex flex-column pb-5">
    <div class="d-flex justify-end mb-3">
      <ModalEditing
        v-if="attendance_date.length > 0"
        :saveEdit="saveEdit"
        :students="students"
      />
      <ModalDelete
        :attendance_date="attendance_date"
        v-if="attendance_date.length > 0"
        :saveDelete="saveDelete"
      />
      <ModalAdd
        :addAttendance="addAttendance"
        :attendance_date="attendance_date"
        :studentNames="studentNames"
      />
    </div>
    <div
      class="d-flex flex-column"
      style="border: 1px solid black; border-bottom: none"
    >
      <Header :attendance_date="attendance_date" />

      <StudentRow
        :isEdit="false"
        :indStud="ind"
        v-for="(student, ind) in students"
        :key="student.name"
        :student="student"
      />
    </div>

    <!-- <div class="text-center mt-2">
      <v-pagination
        v-model="page"
        :length="studentsWithPages.count"
        circle
      ></v-pagination>
    </div> -->
  </div>
</template>
<script>
import Header from "./Header.vue";
import ModalAdd from "./ModalAdd.vue";
import StudentRow from "./StudentRow.vue";
import ModalEditing from "./ModalEditing.vue";
import ModalDelete from "./ModalDelete.vue";
//import { chunkArray } from "../../utils/generalFuncs";
export default {
  components: { Header, StudentRow, ModalAdd, ModalEditing, ModalDelete },
  data() {
    return {
      attendance_date: [],
      students: [],
      studentNames: [
        "Elijah Wilson",
        "Sophia Miller",
        "William Jackson",
        "Ethan Johnson",
        "Jacob Martinez",
        "Jacob Hernandez",
        "Liam Miller",
        "Ethan Wilson",
        "Mason Thomas",
        "Isabella Davis",
        "James Miller",
        "Elijah Gonzalez",
        "Elijah Smith",
        "Sophia Martinez",
        "Evelyn Jones",
        "Mia Gonzalez",
        "Charlotte Williams",
        "Emma Perez",
        "Charlotte Davis",
        "James Martinez",
      ],
      page: 1,
    };
  },

  computed: {
    //for perPAge
    // studentsWithPages() {
    //   const chunkDates = chunkArray(this.attendance_date, 30);
    //   console.log(chunkDates);
    //   let students = [...this.students];
    //   students = students.map((student) => {
    //     const newObj = { ...student };
    //     const chunkAttendance = chunkArray(newObj.attendance, 30);
    //     newObj.attendance = chunkAttendance[this.page] || newObj.attendance;
    //     return newObj;
    //   });
    //   return {
    //     count: chunkDates.length,
    //     attendance_date: chunkDates[this.page] || this.attendance_date,
    //     students: students,
    //   };
    // },
  },
  mounted() {
    // this.students = this.studentNames.map((name) => ({
    //   name,
    //   attendance: [],
    //   missed_day: {
    //     visited: 0,
    //     miss: 0,
    //     illness: 0,
    //     other: 0,
    //   },
    // }));
    this.generateData(20, false);
  },

  methods: {
    saveEdit(user) {
      this.students = this.students.map((student) => {
        if (student.name === user.name) {
          return user;
        }

        return student;
      });
    },
    saveDelete(dates) {
      dates.forEach((date) => {
        this.attendance_date = this.attendance_date.filter(
          (att_date) => att_date !== date
        );
        this.students = this.students.map((student) => {
          let newObj = { ...student };

          newObj.attendance = newObj.attendance.filter(
            (attend) => attend.date !== date
          );

          return newObj;
        });
      });
    },
    addAttendance(date, arrStudents) {
      this.attendance_date.push(date);
      this.students = this.students.map((student) => {
        let find = arrStudents.find((s) => s.name === student.name);

        if (find) {
          const newStudent = { ...student };
          newStudent.attendance.push({ date, isPresence: find.isPresence });
        }

        return student;
      });
    },
    generateData(countDays, hideStudentes = false) {
      const studentNames = [...this.studentNames];

      let startDate = `2023.02.`;

      const dates = [];

      for (let i = 1; i <= countDays; i++) {
        dates.push(`${startDate}${i < 10 ? `0${i}` : i}`);
      }

      const presenceArr = [true, false];

      let students = studentNames.map((name) => {
        return {
          name,
          attendance: dates.map((date) => ({
            date,
            isPresence:
              presenceArr[Math.floor(Math.random() * presenceArr.length)],
          })),
          missed_day: {
            visited: 3,
            miss: 2,
            illness: 1,
            other: 0,
          },
        };
      });

      this.attendance_date = dates;
      this.students = hideStudentes ? [] : students;
    },
  },
};
</script>

<style>
.vertical {
  writing-mode: vertical-lr;
}
.magazine-header {
  display: grid;
  grid-template-columns: 25px 180px 1fr 100px;
}

.month-days {
  height: 100%;
  display: grid;
  overflow-x: auto;
}

.rotate {
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
</style>
