<template>
  <div id="job-page">
    <div class="flex-row">
      <div class="left-col">
        <h1 class="big-header">My Jobs</h1>
        <p>Here's a list of your current job postings.<br>Choose one to view its applicants.</p>
      </div>

      <div class="right-col">
        <div class="job-container">

          <ul class="job-list" v-if="jobList.length > 0">
            <router-link v-for="listing in jobList" :to="/job/+ listing.id">
              <li class="job">
                <h2>{{ listing.title }}</h2>
                <p class="company">{{ listing.company }}</p> | <p class="location">{{ listing.location }}</p>
              </li>
            </router-link>
          </ul>

          <div class="no-listings" v-if="jobList.length == 0">
            <h2>Uh oh!</h2>
            <h3>No jobs have been posted yet! :(</h3>
            <a class="button">Add One</a>
          </div>

        </div>
      </div>
    </div>
    
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Jobs.scss" lang="scss" scoped></style>

<script>
export default {
  name: 'jobs',

  data () {
    return {

      jobList: [
        {
          'title': 'Software Engineer',
          'company': 'Amazon',
          'location': 'Seattle, Washington',
          'id': 0
        },
        {
          'title': 'Android Developer',
          'company': 'Google',
          'location': 'Mountain View, California',
          'id': 1
        },
        {
          'title': 'iOS Swift Developer',
          'company': 'Apple',
          'location': 'Cupertino, California',
          'id': 1
        }
      ]

    }
  }
}
</script>
