<template>
  <div>
    <h1>Home</h1>
    <h2>{{ title }}</h2>
    <input type="text" v-model="input" />
    <button @click="getData">클릭</button>
    <button @click="setData">reset</button>
    <select class="form-control" v-model="region" @change="chageRegion">
      <option :key="i" :value="d.v" v-for="(d, i) in options">{{ d.t }}</option>
    </select>
    <table class="table table-bordered" v-if="show">
      <tr :key="i" v-for="(d, i) in options">
        <td>{{ d.v }}</td>
        <td>{{ d.t }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "abc",
      input: "aaa",
      options: [
        {
          v: "S",
          t: "Seoul"
        },
        {
          v: "J",
          t: "Jeju"
        },
        {
          v: "B",
          t: "Busan"
        }
      ],
      region: "B",
      show: true,
    };
  },
  // 특정 데이터 모니터링했다가 변화가 있을 때마다 실행
  watch: {
    input() {
      console.log(this.input);
    }
  },
  // 메소드 정의
  methods: {
    getData() {
      console.log(this.input);
    },
    setData() {
      this.input = "123";
    },
    chageRegion() {
      console.log(this.region);
    }
  }
};
</script>
