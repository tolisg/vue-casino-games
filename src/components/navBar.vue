<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarNavDropdown"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav">
        <!-- Loop categories and show navBar -->
        <li
          v-for="(item, index) in categories"
          :key="index"
          :class="['nav-item', item.value === selectedCategory && 'active']"
        >
          <a
            class="nav-link"
            href="javascript:;"
            @click="selectCategory(item.value)"
          >{{ item.text }}</a>
        </li>
        <!-- Other category -->
        <li class="nav-item dropdown">
          <a
            id="navbarDropdownMenuLink"
            class="nav-link"
            href="javascript:;"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Other
          </a>
          <div
            class="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              :class="['dropdown-item', 'ball' === selectedCategory && 'active']"
              href="javascript:;"
              @click="selectCategory('ball')"
            >Ball</a>
            <a
              :class="['dropdown-item', 'virtual' === selectedCategory && 'active']"
              href="javascript:;"
              @click="selectCategory('virtual')"
            >Virtual</a>
            <a
              :class="['dropdown-item', 'fun' === selectedCategory && 'active']"
              href="javascript:;"
              @click="selectCategory('fun')"
            >Fun</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    selectedCategory: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      categories: [
        {
          value: 'top',
          text: 'Top Games'
        },
        {
          value: 'new',
          text: 'New Games'
        },
        {
          value: 'slots',
          text: 'Slots'
        },
        {
          value: 'jackpots',
          text: 'Jackpots'
        },
        {
          value: 'blackjack',
          text: 'Blackjack'
        },
        {
          value: 'roulette',
          text: 'Roulette'
        },
        {
          value: 'table',
          text: 'Table'
        },
        {
          value: 'poker',
          text: 'Poker'
        },
        // {
        //   value: 'other',
        //   text: 'Other',
        //   hasDropDown: true
        // },
      ]
    };
  },
  methods: {
    selectCategory(value) {
      this.$emit('select-category', value);
    }
  },
};
</script>
