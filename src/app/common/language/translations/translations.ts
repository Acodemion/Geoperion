import { Translation } from "./en/en.translation"
import { TranslationRU } from "./ru/ru.translation"
import { TranslatienDE } from "./de/de.translation"

export function getTranslations(): Translation[] {
  const Default = new Translation()
  const RU = new TranslationRU()
  const DE = new TranslationDE()

  return [Default, RU, DE]
}
