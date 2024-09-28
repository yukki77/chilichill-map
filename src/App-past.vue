<template>
  <div class="container">
    <!-- <el-button type="primary" @click="console.log(111)">click</el-button> -->
    <img alt="加载中" id="character" src="@/assets/character.png" draggable="true">
    <img alt="加载中" id="city" onmousedown="return false;" src="@/assets/city.jpg"/>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

let offsetX, offsetY;
onMounted(() => {
  let character = document.getElementById("character");
  character.ondragstart = e => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    console.log(e.offsetX, e.offsetY);
  }
  character.ondrag = e => {
    e.preventDefault();
    character.style.left = e.clientX - offsetX + 'px';
    character.style.top = e.clientY - offsetY + 'px';
  }
  character.ondragend = e => {
    e.preventDefault();
    character.style.left = e.clientX - offsetX + 'px';
    character.style.top = e.clientY - offsetY + 'px';
  }
  let city = document.getElementById('city');
  city.ondragover = e=>{
    e.preventDefault();
  }
})
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

#character {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  width: 32px;
  height: 40px;
  z-index: 3;
}

#city {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: scale-down;
  z-index: 1;
}

.el-button {
  position: absolute;
  top: 10px;
  left: 30px;
  z-index: 2;
}

</style>
