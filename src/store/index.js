import Vue from 'vue';
import Vuex from 'vuex';
import dataService from '@/shared/dataServices';

import { GET_GAMES, GET_JACKPOT_GAMES } from './mutation-types';

Vue.use(Vuex);

const state = () => ({
  games: [],
  jackpots: []
});

const mutations = {
  [GET_GAMES](state, games) {
    state.games = games;
  },
  [GET_JACKPOT_GAMES](state, jackpots) {
    state.jackpots = jackpots;
  }
};

const actions = {
  async getGamesActions({ commit }) {
    const games = await dataService.getGames();
    commit(GET_GAMES, games);
  },
  async getJackpotsActions({ commit }) {
    const jackpots = await dataService.getJackpots();
    commit(GET_JACKPOT_GAMES, jackpots);
  }
};

const getters = {};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});
