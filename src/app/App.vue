<template>
  <div id="tailor-view">
    <modal v-if="show" @close="closeModal" :can-close="canClose" :title="title">
      <modal-content class="modal__content"></modal-content>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Modal } from '@nextcloud/vue/dist/Components/Modal'
import { HIDE_MODAL } from '@a/store/Store'
import { Translations } from '@a/configuration/Translations'
import ModalContent from '@a/components/ModalContent.vue'

export default Vue.extend({
  name: 'App',
  components: { Modal, ModalContent },
  computed: {
    show(): boolean {
      return this.$store.state.showModal
    },
    title(): string {
      return `${Translations.TRANSLATION_TAILOR}: ${Translations.TRANSLATION_FILE_FILES(this.$store.state.selectedFiles.length)}`
    },
    canClose(): boolean {
      return !this.$store.state.processing
    }
  },
  methods: {
    closeModal(): void {
      this.$store.commit(HIDE_MODAL)
    }
  }
})
</script>

<style>
.icon-tailor {
    background-image: url('../img/icon/tailor.svg');
}
.dark .icon-tailor {
    filter: invert(100%);
}
</style>

<style scoped>
.modal__content {
  width: 100%;
  max-width: 900px;
  margin: 15px 15px;
  min-height: 50vh;
  max-height: 80%;
}
</style>
