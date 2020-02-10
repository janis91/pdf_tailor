export class Translations {
  public static TRANSLATION_TAILOR: string = t('pdf_tailor', 'PDF Tailor');
  public static TRANSLATION_TARGET_FILE_ALREADY_EXISTS: string = t('pdf_tailor', 'Target file already exists:');
  public static TRANSLATION_TAILOR_PROCESSING_FAILED: string = t('pdf_tailor', 'Tailor processing failed:');
  public static TRANSLATION_MIMETYPE_NOT_SUPPORTED: string = t('pdf_tailor', 'MIME type not supported.');
  public static TRANSLATION_UNEXPECTED_ERROR_UPLOAD: string = t('pdf_tailor', 'An unexpected error occured during the upload of the processed file.');
    public static TRANSLATION_UNEXPECTED_ERROR_DELETION: string = t('pdf_tailor', 'An unexpected error occured during the deletion of the original file.');
  public static TRANSLATION_FILE_FILES: (fileCount: number) => string =
    (number) => n('pdf_tailor', '%n file', '%n files', number)
}
