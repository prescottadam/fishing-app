<template>
  <div id="app">
    <h1>Fishing Spots</h1>
    <ul>
      <li v-for="spot in spots" :key="spot.id" @click="showDetails(spot)">
        {{ spot.name }}
      </li>
    </ul>
    <div v-if="selectedSpot">
      <h2>{{ selectedSpot.name }}</h2>
      <p>Location: {{ selectedSpot.location }}</p>
      <p>Description: {{ selectedSpot.description }}</p>
    </div>
    <input v-model="newSpotName" placeholder="New spot name">
    <input v-model="newSpotLocation" placeholder="Location">
    <input v-model="newSpotDescription" placeholder="Description">
    <button @click="addSpot">Add Spot</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spots: [
        { id: 1, name: 'Lakeview', location: 'Lake Tahoe', description: 'Great for trout fishing' },
        { id: 2, name: 'Sunset Bay', location: 'Pacific Coast', description: 'Ideal for deep sea fishing' },
        { id: 3, name: 'River Run', location: 'Amazon River', description: 'Known for piranhas and catfish' }
      ],
      selectedSpot: null,
      newSpotName: '',
      newSpotLocation: '',
      newSpotDescription: ''
    };
  },
  methods: {
    showDetails(spot) {
      this.selectedSpot = spot;
    },
    addSpot() {
      const newSpot = {
        id: this.spots.length + 1,
        name: this.newSpotName,
        location: this.newSpotLocation,
        description: this.newSpotDescription
      };
      this.spots.push(newSpot);
      this.newSpotName = '';
      this.newSpotLocation = '';
      this.newSpotDescription = '';
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
