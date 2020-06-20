<template>
  <div class = "card m-5">
    <div class = "card-header">
        <div class = "container">
        <div class = "row">
          <div class = "col">
          </div>
          <div class = "col">
            <h3>Chart.Js</h3>
          </div>
          <div class = "col">
            <router-link to = "/" class = "btn btn-info" style="margin-right: -22rem">Back to Home</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class = "card-body m-1">
        <div class = "container">
            <div class = "row">
                <div class = "col">
                    <canvas id="myChart" style="position: relative; height:80vh; width:60vw; text-align: center"></canvas>
                </div>
                <div class = "col-1">
                    <div class="separatorv"></div>
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
  </div>
</template>

<script>
import Chart from 'chart.js'
import io from 'socket.io-client'
var socket = io('http://localhost:3001');
var data1 = [0]
var data2 = [0]
var label = ['0:00']
export default {
    
    created() {
    },
    mounted() {
        var time = [];
        socket.on('time', (timeS) => {
            time = timeS;
        }) 
        socket.on('both', (received) => {
            var data = received[0]
            var data_2 = received[1]
            console.log(data)
            data2.push(data_2)
            data1.push(data)
            label.push(time)
            if (data1.length > 15) {
                data1.shift()
                label.shift()
                data2.shift()
            }
            document.getElementById('valores').innerHTML = data1
            document.getElementById('valores2').innerHTML = data2
            var ctx = document.getElementById('myChart').getContext('2d');
            const myChart2 = new Chart(ctx, {
                type: 'line', 
                data: {
                    labels: label,
                    datasets: [{
                        label: "Data 1",
                        data: data1,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.1)',
                        borderWidth: 2,
                        pointRadius: 0
                    },
                    {
                        label: "Data 2",
                        data: data2,
                        borderColor: 'blue',
                        backgroundColor: 'rgba(0,0,255,0.1)',
                        borderWidth: 2,
                        pointRadius: 0
                    }]
                },
                options: {
                    animation: {
                        duration: 0,
                        easing: 'linear'
                    },
                    legend: {
                        display: true,
                        
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            return myChart2
        })
    }
}
</script>

<style>
.separatorv {
    border-left: 1px solid gray;
    height: 18rem;
    margin-left: 2rem;
}
.separatorh {
    border-top: 1px solid gray;
    width: 34rem;
    margin-bottom: 2rem;
}
</style>