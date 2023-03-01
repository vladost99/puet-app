<template>
  <div class="magazine-header" style="border-bottom: 1px solid black">
    <div
      class="d-flex align-center flex-column justify-center"
      style="border-right: 1px solid black"
    >
      <div
        class="d-flex align-center justify-center mb-4"
        style="transform: rotate(-90deg)"
      >
        з<code style="padding: 3px">/</code>п
      </div>
      <div
        class="d-flex align-center justify-center ml-1"
        style="transform: rotate(-90deg)"
      >
        №
      </div>
    </div>
    <div
      class="d-flex justify-center align-center flex-column"
      style="border-right: 1px solid black"
    >
      <div>Прізвище,</div>
      <div>ім'я студента</div>
    </div>
    <div
      class="d-flex flex-column"
      style="border-right: 1px solid black; overflow-y: auto"
    >
      <h4
        class="d-flex justify-center pa-3"
        style="border-bottom: 1px solid black"
      >
        Облік відвідування занять группи (Група-1)
      </h4>
      <h4
        style="border-bottom: 1px solid black"
        class="d-flex justify-center pa-5"
      >
        Рік, Місяць, день
      </h4>
      <div
        :style="{
          'grid-template-columns': `repeat(${attendance_date.length}, 40px)`,
        }"
        class="month-days"
      >
        <div
          v-for="date in attendance_date"
          :key="date"
          :style="{
            'border-right': '1px solid black',
          }"
          class="d-flex align-center justify-center"
        >
          <div class="rotate">
            {{ date }}
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column">
      <h5 style="border-bottom: 1px solid black" class="pa-2">
        Розподіл пропущенних днів
      </h5>
      <div class="miss-days" style="height: 140px">
        <div
          class="d-flex align-center flex-column justify-center"
          style="border-right: 1px solid black"
        >
          <div class="d-flex justify-center">
            <div class="rotate">Відвідано</div>
          </div>
        </div>
        <div
          class="d-flex align-center flex-column justify-center"
          style="border-right: 1px solid black"
        >
          <div class="d-flex justify-center">
            <div class="rotate">Пропущено</div>
          </div>
        </div>
        <div
          class="d-flex align-center flex-column justify-center"
          style="border-right: 1px solid black"
        >
          <div class="d-flex justify-center">
            <div class="rotate">Через&nbsp;хворобу</div>
          </div>
        </div>
        <div class="d-flex align-center flex-column justify-center">
          <div class="d-flex justify-center">
            <div class="rotate">Інші&nbsp;причини</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    attendance_date: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
.miss-days {
  display: grid;
  grid-template-columns: repeat(4, 25px);
}
</style>
