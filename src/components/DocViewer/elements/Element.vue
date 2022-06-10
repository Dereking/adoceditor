<script setup lang="ts">
import draggable from "vuedraggable";
import Element from "./Element.vue";
let drag = false;

const onMouseOver = function (e: MouseEvent) {
  // console.log("element onEleMouseOver id=", e.ele.id);
  // const rect = e.target.getBoundingClientRect(); //获取点击的dom的位置
  // //let id = e.srcElement.dataset.id;
  // this.$refs.grasper.show(window.scrollX + rect.left - 38, window.scrollY + rect.top);
  // this.$refs.grasper.setRefEleComp(e.ele);
  // this.curElement = e.ele;
  emit("onEleMouseOver", e);
};

const onMouseOut = function (e: MouseEvent) {
  // var that = this;
  // setTimeout(() => {
  //   if (!that.$refs.grasper.isActive) {
  //     that.$refs.grasper.hide();
  //   }
  // }, 300);
  emit("onEleMouseOut", e);
};

const dragOptions = function () {
  return {
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
  };
};

const props = defineProps({
  foo: String,
  children: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits({
  onEleMouseOver: {
    type: MouseEvent,
    required: false,
  },
  onEleMouseOut: {
    type: MouseEvent,
    required: false,
  },
}); // end defineEmits
</script>

<template>
  <draggable
    :tag="type"
    :component-data="{
      tag: 'div',
      type: 'transition-group',
      name: !drag ? 'flip-list' : null,
      onmouseover: onMouseOver,
    }"
    v-model="children"
    v-bind="dragOptions"
    item-key="id"
    @start="drag = true"
    @end="drag = false"
  >
    <template #item="{ element }">
      <div class="element" @mouseover="onMouseOver" @mouseout="onMouseOut">
        <i
          :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
          @click="element.fixed = !element.fixed"
          aria-hidden="true"
        ></i>
        <span class="handle">{{ element.id }} </span>- {{ element.content }}
        <Element v-if="element.children.length > 0" :children="element.children">
        </Element>
      </div>
    </template>
  </draggable>
</template>

<style scoped>
.element {
  border: 1px solid rgb(43, 25, 25);
  margin: 2px;
  padding: 3px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}
</style>
