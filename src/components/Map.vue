<template>
  <div class="map">
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <div>
        <h1>Tambon coordinates</h1>
        <p>
          {{ tambonCoordinates.lat }} Latitude ,
          {{ tambonCoordinates.lng , }} Longtitude
        </p>
      </div>
      <div>
        <h1>Mark coordinates</h1>
        <p>
          {{ markCoordinates.lat }} Latitude ,
          {{ markCoordinates.lng , }} Longtitude
        </p>
      </div>
    </div>

    <GmapMap
      :center="tambonCoordinates"
      :zoom="15"
      style="width: 720px; height: 480px; margin: 32px auto"
      ref="mapRef"
      @click="mark"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tambonCoordinates: {
        lat: 13.79974,
        lng: 100.588236,
      },
      markCoordinates: {
        lat: 0,
        lng: 0,
      },
      map: null,
      markers: [],
    };
  },
  name: "Map",
  props: {
    msg: String,
  },
  mounted() {
    //add map to data object
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  methods: {
    mark(event) {
      this.markCoordinates.lat = event.latLng.lat();
      this.markCoordinates.lng = event.latLng.lng();

      this.markers = [
        { position: { lat: event.latLng.lat(), lng: event.latLng.lng() } },
      ];

      console.log(event.latLng.lat());
      console.log(event.latLng.lng());
    },
  },
};
</script>

<style scoped></style>
