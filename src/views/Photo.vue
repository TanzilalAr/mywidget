<template>
  <div class="container mx-auto bg-blue-300 p-10 rounded-lg text-center">
    <h1 class="text-center font-bold text-3xl pb-5 text-black">Walpaper</h1>
      <div class="flex items-center justify-center">
        <img :src="currentImage" class="w-80 h-160">
      </div>
      <button @click="changeImage" class="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
          Change
        </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "../img/1.jpg",
        "../img/2.jpg",
        "../img/3.jpg",
        "../img/4.jpg",
        "../img/5.jpg"
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    changeImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

<style>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
