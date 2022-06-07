<template>
  <button class="button"><slot /></button>
</template>

<style lang="scss">
.button {
  display: block;
  height: 32px;
  line-height: 32px;
  border: 0;
  border-radius: 2px;
  text-align: center;
  min-width: 100px;
  font-size: 14px;
  color: #fff;
  background: #0abcaa;
}
</style>
