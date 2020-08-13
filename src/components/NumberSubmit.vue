<template>
  <view>
    <input
      v-model="number"
      type="number"
      class="input"
    >
    <button @tap="addNumber">
      Add new number
    </button>
    <button @tap="addCount">
      点击增加count
    </button>
  </view>
</template>

<script>
export default {
  name: "NumberSubmit",
  data() {
    return {
      number: 0
    };
  },
  methods: {
    addNumber() {
      this.$store.dispatch("addNumber", Number(this.number));
    },
    addCount() {
      this.$store.dispatch("addCount");
    }
  }
};
</script>

<style>
.input {
  border: 1px solid lightgray;
  margin: 10px;
}
</style>
