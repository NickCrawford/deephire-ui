<template>
  <div id="results-page">
    <div class="flex-row">
      <div class="left-col">
        <!-- <p class="back-button">Back</p> -->
        <h1 class="big-header">{{ first_name || 'Results'}} {{ last_name }}</h1>
        <div class="flex-row">
          <div>
            <p>Average<br>Culture Fit:</p>
            <h2><i-count-up
              :start="0"
              :end="avg_score"
              :decimals="0"
              :duration="2"
              :options="countUpOptions"
              ></i-count-up><span class="percent-sign">%</span></h2>
          </div>
          <polygraph :stats="stats"></polygraph>
        </div>
      </div>

      <div class="right-col">
        <div class="results-container">
          <ul class="question-list">
            <li v-for="pair in pairs" class="question">
              <div class="text-content">
                <h2>{{ pair.employeer_questions }}</h2>
                <h3>{{ pair.answers }}</h3>
              </div>
              <div class="percent-container">
                <p class="percent">{{ Math.ceil(pair.scores) }}<span class="percent-sign">%</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Results.scss" scoped></style>

<script>
import ICountUp from 'vue-countup-v2'
import Polygraph from '@/components/Polygraph/Polygraph'

export default {
  name: 'results',
  components: {
    ICountUp,
    Polygraph
  },
  data () {
    return {
      peep: this.$route.params.peep,
      first_name: this.$route.params.peep.first_name,
      last_name: this.$route.params.peep.last_name,
      avg_score: this.$route.params.peep.score,
      pairs: this.$route.params.peep.pairs,
      countUpOptions: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
      stats: [
        { label: 'Anger', value: this.$route.params.peep.pairs[0].emotions.anger / 1.0 * 200 },
        { label: 'Joy', value: this.$route.params.peep.pairs[0].emotions.joy / 1.0 * 200 },
        { label: 'Fear', value: this.$route.params.peep.pairs[0].emotions.fear / 1.0 * 200 },
        { label: 'Sadness', value: this.$route.params.peep.pairs[0].emotions.sadness / 1.0 * 200 },
        { label: 'Disgust', value: this.$route.params.peep.pairs[0].emotions.disgust / 1.0 * 200 }
      ]
    }
  }
}
</script>
