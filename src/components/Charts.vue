<template>
  <div class="container">
    <Line v-if="loaded" :chart-data="chartData" />
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

import { bitcoinService } from "../services/bitCoin.service.js";
export default {
  name: "LineChart",
  components: { Line },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ["1", "2", "3"],
        datasets: [
          {
            backgroundColor: "#212121",
            data: null,
            label: "my ass",
          },
        ],
      },
      price: null,
    };
  },
  async created() {
    this.loaded = false;

    try {
      const data = await bitcoinService.getBitcoinPrice();
      console.log(data.data.values);
      this.chartData.datasets[0].data = data.data.values.map((value) => {
        return value.y;
      });
      this.loaded = true;
      console.log(this.chartData);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
</style>