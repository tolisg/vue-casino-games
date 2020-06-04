<template>
  <div>
    <div class="games-card">
      <!-- New Ribbon -->
      <div
        v-if="game.categories.includes('new') && selectedCategory !=='new'"
        class="ribbon ribbon-top-right ribbon-new"
      >
        <span>New</span>
      </div>
      <!-- Top ribbon -->
      <div
        v-else-if="game.categories.includes('top') && selectedCategory !=='top'"
        class="ribbon ribbon-top-right ribbon-top"
      >
        <span>Top</span>
      </div>
      <!-- Jackpot amount -->
      <div
        v-if="jackpotAmount > 0"
        class="jackpot-container"
      >
        <span class="jackpot-amount">{{ jackpotAmount | toCurrency }}</span>
      </div>
      <!-- Game image -->
      <img
        v-show="imageLoaded"
        :src="game.image"
        :alt="game.name"
        @load="imageLoaded = true"
      >
      <!-- Image container until game image loads or image fallback could be and a div -->
      <img
        v-show="!imageLoaded"
        src="@/assets/img/logo.png"
        :alt="game.name"
      >
      <!-- Play image button -->
      <div
        class="play-button"
        @click="playGame(game.name)"
      >
        <img
          src="../assets/img/play-button.png"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    toCurrency(value) {
      if (typeof value !== 'number') {
        return value;
      }
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
      });
      return formatter.format(value);
    }
  },
  props: {
    game: {
      type: Object,
      required: true
    },
    jackpotAmount: {
      type: Number,
      default: 0
    },
    selectedCategory: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      imageLoaded: false
    };
  },
  methods: {
    playGame(name) {
      console.log(`Play ${name} game`);
    }
  },
};
</script>
