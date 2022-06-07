<script setup lang="ts">
import { ref } from "vue";
var witdth = ref(300);
var height = ref(300);
</script>

<template>
  <div class="docViewer" ref="docViewer">
    <slot />
  </div>
</template>

<style>
.docViewer {
  display: block;
  border: 1px solid #ccc;
  height: var(--global: height);
  width: var(--global: width);
  line-height: 32px;
  border: 0;
  border-radius: 2px;
  text-align: left;
  min-width: 100px;
  font-size: 14px;
  color: #fff;
}
</style>
