<template>
  <div class="min-h-screen flex items-center justify-center text-center text-black">
    <div class="bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-3xl font-bold mb-4">Tic Tac Toe</h1>
      
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(cell, index) in cells" :key="index" @click="makeMove(index)" class="bg-gray-100 p-12 text-center cursor-pointer">
          <span v-if="cell === 'X'" class="text-4xl flex justify-center items-center h-full">X</span>
          <span v-else-if="cell === 'O'" class="text-4xl flex justify-center items-center h-full">O</span>
        </div>
      </div>
      
      <button @click="resetGame" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Reset Game
      </button>
      
      <div v-if="winner" class="mt-4 text-2xl font-bold">
        Winner: {{ winner }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cells: Array(9).fill(""),
      currentPlayer: "X",
      winner: null,
    };
  },
  methods: {
    makeMove(index) {
      if (this.cells[index] === "" && !this.winner) {
        this.cells.splice(index, 1, this.currentPlayer);
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        
        if (
          this.cells[a] !== "" &&
          this.cells[a] === this.cells[b] &&
          this.cells[a] === this.cells[c]
        ) {
          this.winner = this.cells[a];
          break;
        }
      }
    },
    resetGame() {
      this.cells = Array(9).fill("");
      this.currentPlayer = "X";
      this.winner = null;
    },
  },
};
</script>

<style>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
