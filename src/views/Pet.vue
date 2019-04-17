<template>
<div>
  <h1> {{ animal.name }} ({{ $route.params.species }})</h1>
  <p> Age: {{ animal.age }} years old</p>
  <p> Breed: {{animal.breed }}</p>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Pet',
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'dogs',
      'cats'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id] //same as this['cats'][id]
    this.animal = animal
  }
}
</script>

<style scoped>

</style>
