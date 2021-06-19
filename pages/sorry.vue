<template>
  <div id="stop" class="stop">
    <p />
  </div>
</template>

<script>
export default {
  layout: 'blank'
}
</script>

<style lang="less" scoped>
#stop {
  background: #f93462;
  width: 100%;
  height: 100%;
  position: fixed;
  img {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: -webkit-translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
