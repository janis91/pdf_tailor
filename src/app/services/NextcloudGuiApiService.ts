import { Translations } from '@a/configuration/Translations'

export class NextcloudGuiApiService {
    /**
     * Displays an error for a given message.
     * @param message The message to display.
     */
    public static displayError: (message: string) => void = (message) => {
      OC.Notification.showHtml(`<div>${Translations.TRANSLATION_TAILOR}: ${message}</div>`, { timeout: 10, type: 'error' })
    }
}
