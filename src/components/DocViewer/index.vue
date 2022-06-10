<script setup lang="ts">
import { ref } from "vue";
import DocElementType from "../DocViewer/DocElementType";
import { AdvDocument } from "./AdvDocument";
import Element from "./elements/Element.vue";
var witdth = ref(600);
var height = ref(500);

var doc: AdvDocument = new AdvDocument();

for (let i = 0; i < 10; i++) {
  let el = doc.addElement(DocElementType.ET_TEXT, "text" + i);
  if (i % 2 == 0) {
    el.addElement(DocElementType.ET_TEXT, "   child " + i + ".1");
    el.addElement(DocElementType.ET_TEXT, "   child " + i + ".2");
  }
}

const onMouseOver = function (e: MouseEvent) {
  console.log("element onEleMouseOver id=", e.ele.id);
  const rect = e.target.getBoundingClientRect(); //获取点击的dom的位置
  //let id = e.srcElement.dataset.id;
  // this.$refs.grasper.show(window.scrollX + rect.left - 38, window.scrollY + rect.top);
  // this.$refs.grasper.setRefEleComp(e.ele);
  // this.curElement = e.ele;
};
const onEleMouseOut = function (e: MouseEvent) {
  // var that = this;
  // setTimeout(() => {
  //   if (!that.$refs.grasper.isActive) {
  //     that.$refs.grasper.hide();
  //   }
  // }, 300);
};
</script>

<template>
  <div class="handle">mi</div>
  <div class="docViewer" ref="docViewer">
    <Element
      v-bind="doc"
      @onEleMouseOut="onEleMouseOut"
      @onEleMouseOver="onEleMouseOver"
    ></Element>
  </div>
</template>

<style>
.docViewer {
  border: 1px solid rgb(43, 25, 25);
  height: 500px;
  width: 600px;
  overflow: scroll;

  border-radius: 2px;
  text-align: left;
  min-width: 100px;
  font-size: 14px;
  padding: 10px;
}

.handle {
  /* border: 1px solid rgb(43, 25, 25); */
}
</style>
