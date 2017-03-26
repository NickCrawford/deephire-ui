import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/Hello'
import Jobs from '@/components/Jobs/Jobs'
import Applicants from '@/components/Applicants/Applicants'
import Results from '@/components/Results/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    },
    {
      path: '/job/:jobId',
      name: 'applicants',
      component: Applicants
    },
    {
      path: '/results',
      name: 'results',
      component: Results,
      props: true
    }
  ]
})
