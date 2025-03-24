<template>
  <v-data-table-virtual
    :headers="headers"
    :items="virtualJobOrders"
    height="500"
    item-value="jobOrderNumber"
    fixed-header
  ></v-data-table-virtual>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const headers = [
  { title: 'Job Order Number', align: 'start', key: 'jobOrderNumber' },
  { title: 'Laptop Model', align: 'start', key: 'laptopModel' },
  { title: 'Date Created', align: 'start', key: 'dateCreated' },
  { title: 'Current Status', align: 'start', key: 'status' },
  { title: 'Parts', align: 'start', key: 'parts' },
  { title: 'Without', align: 'start', key: 'without' } // Added 'Without' column
]

const jobOrders = [
  { jobOrderNumber: 'JO12345', laptopModel: 'Dell XPS 13', dateCreated: '2023-03-01', status: 'Under Repair', 
    parts: ['2x16GB RAM', '256GB SSD', '500GB HDD', 'Battery', 'Charger', 'Bag'], 
    without: ['Screws'] },
  
  { jobOrderNumber: 'JO12346', laptopModel: 'MacBook Pro 16', dateCreated: '2023-03-05', status: 'Completed', 
    parts: ['16GB RAM', '512GB SSD', '250GB HDD', 'Battery', 'Charger'], 
    without: ['Screws', 'Power Cable'] },

  { jobOrderNumber: 'JO12347', laptopModel: 'HP Spectre x360', dateCreated: '2023-03-10', status: 'In Progress', 
    parts: ['8GB RAM', '1TB SSD', '1TB HDD', 'Battery', 'Charger'], 
    without: ['Screws'] },

  { jobOrderNumber: 'JO12348', laptopModel: 'Lenovo ThinkPad X1', dateCreated: '2023-03-12', status: 'Under Repair', 
    parts: ['16GB RAM', '256GB SSD', '500GB HDD', 'Battery', 'Charger', 'Bag'], 
    without: ['Screws'] }
]

const virtualJobOrders = ref([])

onMounted(() => {
  fetchData()
})

function fetchData() {
  // Simulate fetching data (e.g., from an API)
  setTimeout(() => {
    virtualJobOrders.value = [...Array(500).keys()].map(i => {
      const jobOrder = { ...jobOrders[i % jobOrders.length] }
      jobOrder.jobOrderNumber = `${jobOrder.jobOrderNumber} #${i}` // Unique job order for each
      return jobOrder
    })
  }, 1000)
}

const formattedJobOrders = computed(() => virtualJobOrders.value)

</script>

<style scoped>
form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
