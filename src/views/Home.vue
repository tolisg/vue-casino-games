<template>
  <div>
    <!-- NavBar component -->
    <nav-bar
      :selected-category="selectedCategory"
      @select-category="selectCategory"
    />
    <!-- Loader component -->
    <loading-bar
      v-if="loading"
      :msg="message"
    />
    <div
      v-if="!loading"
      class="container"
    >
      <div
        v-if="!!filteredGames.length"
        class="row"
      >
        <card-game
          v-for="item in filteredGames"
          :key="item.id"
          :game="item"
          :jackpot-amount="getJackpot(item.id)"
          :selected-category="selectedCategory"
          class="col-fifths"
        />
      </div>
      <div
        v-else
        class="row"
      >
        <div class="col">
          <h2 class="text-center">
            No games found, please try another category
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import loadingBar from '@/components/loadingBar.vue';
import navBar from '@/components/navBar.vue';
import cardGame from '@/components/cardGame.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: { loadingBar, navBar, cardGame },
  data() {
    return {
      loading: false,
      selectedCategory: 'new',
      message: 'Fetching data, please wait...'
    };
  },
  computed: {
    ...mapState(['games', 'jackpots']),
    filteredGames() {
      const games = this.games.filter((o) => {
        if (o.categories.includes(this.selectedCategory)) {
          return o;
        }
      });
      // console.log(games);
      return games;
    }
  },
  async created() {
    // Show loader until fetching complete
    this.loading = true;
    // Fetch games
    await this.loadGames();
    // Fetch jackpots amounts
    await this.loadJackpots();
    this.loading = false;
    // Refresh jackpots amount every 10 seconds
    setInterval(async () => {
      await this.loadJackpots();
    }, 10000);
  },
  beforeDestroy() {
    clearInterval();
  },
  methods: {
    ...mapActions(['getGamesActions', 'getJackpotsActions']),
    async loadGames() {
      await this.getGamesActions();
    },
    async loadJackpots() {
      await this.getJackpotsActions();
      // console.log('jackpots', this.jackpots);
    },
    selectCategory(value) {
      this.selectedCategory = value;
      // console.log(value);
    },
    getJackpot(id) {
      // Find if game has jackpot amount return the amount
      const hasJackpot = this.jackpots.filter((o) => o.game === id);
      if (hasJackpot.length) {
        return hasJackpot[0].amount;
      }
      // Else return 0
      return 0;
    }
  },
};
</script>
