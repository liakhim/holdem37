<template>
  <div class="home">
    <div class="p-2">
      <button @click="theme = 'blue'"
              class="btn btn-primary mx-2">Blue theme</button>
      <button @click="theme = 'green'"
              class="btn btn-success mx-2">Green theme</button>
    </div>
    <GameTable :theme="theme"
               :key="theme">
      <div class="cards">
        <CardItem v-for="(item) in getBoard"
                  :size="'middle'"
                  :highlight-mode-prop="false"
                  :item-data="item"
                  :key="item.id"
        />
      </div>
    </GameTable>
  </div>
</template>

<script>
import GameTable from '@/components/GameTable.vue'
import CardItem from '../components/CardItem'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    GameTable,
    CardItem
  },
  data () {
    return {
      theme: 'green'
    }
  },
  computed: {
    ...mapGetters('a', ['getHand', 'getDeck', 'getBoard', 'getChosenCards', 'combinationCheck'])
  },
  methods: {
    ...mapActions('a', ['setDeckAction', 'test']),
    ...mapMutations('a', ['moveToTable', 'chooseCards', 'setBoard']),
    dealFlop () {
      this.chooseCards(3)
      for (let i = 0; i < this.getChosenCards.length; i++) {
        this.setBoard(this.getChosenCards[i])
      }
    },
    dealRiver () {
      console.log('river')
      this.chooseCards(1)
      this.setBoard(this.getChosenCards[0])
    },
    dealTurn () {
      console.log('turn')
      this.chooseCards(1)
      this.setBoard(this.getChosenCards[0])
    }
  },
  created () {
    this.dealFlop()
    setTimeout(() => {
      this.dealRiver()
    }, 1000)
    setTimeout(() => {
      this.dealTurn()
    }, 2000)
    // this.$store.dispatch('table/setDeckAction')
    // this.setDeckAction({ id: 0, suit: 0, value: 2, location: 'inDeck', highlighted: false })
  }
}
</script>
