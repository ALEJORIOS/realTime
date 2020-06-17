<template>
  <div class = "card m-5">
    <div class="card-header">
      <h1>Charts in VueJs</h1>
    </div>
    <div class = "card-body">
      This is the commmonly used chart types
      <p>
      <div class = "container">
        <div class = "row">
          <div class = "col">
            <h5>Vue trend char</h5>
          </div>
          <div class = "col-1">
            <div class = "separator"></div>
          </div>
          <div class = "col">
            <h5>Chart.js</h5>
          </div>
        </div>
        <div class = "row">
          <div class = "col">
            <router-link to = "/vue-trend-chart" class = "btn btn-info">See</router-link>
          </div>
          <div class = "col-1">
            <div class = "separator"></div>
          </div>
          <div class = "col">
            <router-link to = "/chartjs" class = "btn btn-info">Let's go</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-router"
export default {
  
  
}
</script>

<style>
  .separator {
    border-left: 1px solid gray;
    height: 3rem;
  }
</style>