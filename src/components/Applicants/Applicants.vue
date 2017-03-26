<template>
  <div id="applicant-page">
    <div class="flex-row">
      <div class="left-col">
        <h1 class="big-header">{{ jobName }}</h1>
        <h2>{{ company }} - {{ location }}</h2>
      </div>

      <div class="right-col">
        <div class="applicant-container">

          <ul class="applicant-list" v-if="people.length > 0">
            <router-link :to="{name: 'results', params: {peep: peep}}" v-for="peep in sortedApplicants">
              <li class="applicant"
              v-bind:class="{ high: peep.score >= 80, med: peep.score >= 64, low: peep.score >= 60}" v-if="peep.score >= filterPercent">
                <h2>{{peep.first_name}} {{peep.last_name}}</h2>
                <p class="percent"><i-count-up
                  :start="0"
                  :end="peep.score"
                  :decimals="0"
                  :duration="2"
                  :options="countUpOptions"
            ></i-count-up><span class="percent-sign">%</span></p>
              </li>
            </router-link>
          </ul>
          <div class="slider-container">
            <p>{{ filterPercent == 0 ? 'Showing All ': ('Only Show the Top '+filterPercent+'% ') }}</p>
            <input type="range" min="0" max="100" step="5" v-model="filterPercent" class="slider">
          </div>
          <div class="no-listings" v-if="people.length == 0">
            <h2>Loading...</h2>
            <h3>Just a couple seconds while we analyze your data</h3>
          </div>

        </div>
      </div>
    </div>
    
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Applicants.scss" scoped></style>

<script>
import ICountUp from 'vue-countup-v2'

export default {
  name: 'applicants',
  components: {
    ICountUp
  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  beforeMount () {
    this.fetchData()
  },
  computed: {
    sortedApplicants: function () {
      return this.people.sort(function (a, b) {
        return b.score - a.score
      })
    }
  },
  data () {
    return {
      'filterPercent': 10,
      'jobName': 'Software Engineer',
      'company': 'Amazon',
      'location': 'Seattle, Washington',
      'people': [],
      countUpOptions: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },

  methods: {
    fetchData () {
      console.log('Fetching Data')
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', 'https://e98ac212.ngrok.io/get_data')
      xhr.onload = function () {
        var response = JSON.parse(xhr.responseText)
        console.log(response)
        for (var personIndex = 0; personIndex < response.length; personIndex++) {
          var person = {}
          person.first_name = response[personIndex][0].first_name
          person.last_name = response[personIndex][1].last_name
          //  Get Score
          var sum = 0
          for (var scoreIndex = 0; scoreIndex < response[personIndex][2].pairs.length; scoreIndex++) {
            sum += response[personIndex][2].pairs[scoreIndex].scores
          }
          person.score = sum / response[personIndex][2].pairs.length

          //  Append questions
          person.pairs = response[personIndex][2].pairs

          console.log(person)
          self.people.push(person)
        }
      }

      xhr.send()
    }

  }
}
</script>
