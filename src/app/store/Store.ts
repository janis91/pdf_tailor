import { StoreOptions } from 'vuex'

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const SET_PROCESSING = 'SET_PROCESSING'
const SET_FINISHED = 'SET_FINISHED'
export const STOP_PROCESS_AND_RESET_MODAL_STATE = 'STOP_PROCESS_AND_RESET_MODAL_STATE'
export const SET_SELECTED_FILES = 'SET_SELECTED_FILES'
export const CLEAR_SELECTED_FILES = 'CLEAR_SELECTED_FILES'

interface Page {
  number: number;
  file: OCAFile;
}

export interface State {
  selectedFiles: OCAFile[];
  selectedPages: Page[];
  showModal: boolean;
  processing: boolean;
}

export default {
  strict: true,
  state: {
    selectedFiles: [],
    selectedPages: [],
    showModal: false,
    processing: false
  },
  mutations: {
    [SHOW_MODAL](state) {
      state.showModal = true
    },
    [HIDE_MODAL](state) {
      state.showModal = false
    },
    [SET_PROCESSING](state) {
      state.processing = true
    },
    [SET_FINISHED](state) {
      state.processing = false
    },
    [SET_SELECTED_FILES](state, payload: { selectedFiles: OCAFile[] }) {
      state.selectedFiles = payload.selectedFiles
    },
    [CLEAR_SELECTED_FILES](state) {
      state.selectedFiles = []
    }
  },
  actions: {
    [STOP_PROCESS_AND_RESET_MODAL_STATE]({ commit }) {
      commit(SET_FINISHED)
      commit(HIDE_MODAL)
    }
  }
} as StoreOptions<State>
