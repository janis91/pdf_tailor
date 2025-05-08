<template>
  <div class="ocr-content"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ModalContent'
})
</script>

<style scoped>
.ocr-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
