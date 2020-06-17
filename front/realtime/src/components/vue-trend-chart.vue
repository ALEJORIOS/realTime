<template>
  <div class = "card m-3">
    <div class = "card-header">
      <div class = "container">
        <div class = "row">
          <div class = "col">
          </div>
          <div class = "col">
            <h3>Vue Trend Chart</h3>
          </div>
          <div class = "col">
            <router-link to = "/" class = "btn btn-info" style="margin-right: -26rem">Back to Home</router-link>
          </div>
        </div>
      </div>
    </div>
      <p>
      <div class = "container">
        <div class = "row">
          <div class = "col">
            <div class = "graph" style="text-align: left">
              <TrendChart
                :datasets="[
                  {
                    data: data1,
                    smooth: true,
                    fill: true,
                    className: 'curve1'
                    
                  },
                  {
                    data: data2,
                    smooth: true,
                    fill: true,
                    className: 'curve2',
                    
                  }
                ]"
                :grid="{
                  verticalLines: true,
                  horizontalLines: true
                }"
                :labels="{
                  xLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  yLabels: 10,
                  yLabelsTextFormatter: val => Math.round(val * 100) / 100

                }"
                :interactive= false
                :min="0">
              </TrendChart>
            </div>
          </div>
          <div class = "col-1">
            <div class = "separatorv">
            </div>
          </div>
          <div class = "col">
            <h4>Values are: </h4>
            <h5 style="text-align: left">Data 1 (red):</h5>
            <p id = "valores">Data 1</p>
            <div class="separatorh"></div>
            <h5 style="text-align: left">Data 2 (blue):</h5>
            <p id = "valores2">Data 2</p>
          </div>
        </div>
      </div>
      <p>
      <h6 style="text-align: right; margin-right: 1rem;">Developed by Alejandro Ríos</h6>

  </div>
  
  
</template>

<script>
var data1 = [0, 0]
var data2 = [0, 0]
import io from 'socket.io-client'
var socket = io('http://localhost:3001');
socket.on('values', (data) => {
  data1.push(data)
  document.getElementById("valores").innerHTML = data1
  if (data1.length > 15) {
    data1.shift()
  }
})
socket.on('values2', (data) => {
  data2.push(data)
  document.getElementById("valores2").innerHTML = data2
  if (data2.length > 15) {
    data2.shift()
  }
})
export default {
   
  data() {

   return {
     data1,
     data2
    
   }
  },
  name: 'App',
  components: {
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
<style>

.graph{
  width: 30rem;
  height: 20rem;
  font-size: 12px;
  font-family: "Source Sans Pro", sans-serif;
  text-align: left;
}
.curve1 {
  stroke: red;
  stroke-width: 2;
  stroke-opacity: 0.8;

  }

.curve2{
  stroke: blue;
  stroke-width: 2;

}
.separatorv {
    border-left: 1px solid gray;
    height: 18rem;
    margin-left: 2rem;
  }
.separatorh {
  border-top: 1px solid gray;
  width: 18rem;
  margin-bottom: 2rem;
  
}
</style>

