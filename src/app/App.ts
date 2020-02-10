import { OcaService } from '@a/services/OcaService'
import { Translations } from '@a/configuration/Translations'
import { NextcloudGuiApiService } from '@a/services/NextcloudGuiApiService'
import { SET_SELECTED_FILES, SHOW_MODAL, CLEAR_SELECTED_FILES } from '@a/store/Store'
import { Util } from '@a/util/Util'

export class App {
  private ocaService: OcaService;

  constructor() {
    this.ocaService = new OcaService()
  }

  public init = () => {
    this.ocaService.registerFileActions(this.fileActionHandler)
    this.ocaService.registerCheckBoxEvents(this.selectedFilesActionHandler)
    // eslint-disable-next-line no-console
    console.debug('OCA.Tailor initialized')
  }

  public fileActionHandler: OCAFileActionHandler = (_something, context) => {
    const selectedFiles = Util.filterFilesWithMimeTypes([context.fileInfoModel.attributes])
    if (selectedFiles.length > 0) {
      OCA.Tailor.store.commit(SET_SELECTED_FILES, { selectedFiles })
      OCA.Tailor.store.commit(SHOW_MODAL)
    } else {
      NextcloudGuiApiService.displayError(`${Translations.TRANSLATION_TAILOR_PROCESSING_FAILED} ${Translations.TRANSLATION_MIMETYPE_NOT_SUPPORTED}`)
    }
  }

  public selectedFilesActionHandler: () => void = () => {
    const selFiles: Array<OCAFile> = Util.filterFilesWithMimeTypes(OCA.Files.App.fileList.getSelectedFiles())
    if (selFiles.length > 0) {
      this.ocaService.registerMultiSelectMenuItem(() => OCA.Tailor.store.commit(SHOW_MODAL))
      OCA.Tailor.store.commit(SET_SELECTED_FILES, { selectedFiles: selFiles })
    } else {
      this.ocaService.unregisterMultiSelectMenuItem()
      OCA.Tailor.store.commit(CLEAR_SELECTED_FILES)
    }
  }
}
