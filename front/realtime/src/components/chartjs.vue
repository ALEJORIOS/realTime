<template>
  <div>
      <h1>Hello world!</h1>
  </div>
</template>

<script>

import io from 'socket.io-client'
var socket = io('http://localhost:3001');

export default {
    created() {
        var dataReceived
        socket.on('values',(dataReceived))

        console.log(dataReceived)
    }
}
</script>

<style>

</style>