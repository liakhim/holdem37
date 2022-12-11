<template>
  <div class="home">
    <GameTable/>
  </div>
</template>

<script>
// @ is an alias to /src
//  import HelloWorld from '@/components/HelloWorld.vue'
import GameTable from '@/components/GameTable.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    GameTable
  }
}
</script>
