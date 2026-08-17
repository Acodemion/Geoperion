import { CountryCode } from "src/app/interfaces/iso-3166.interface"
import { CountryTranslation, TranslationCountries } from "./de.countries"

export class TranslationGamePage {
  protected translationCountries = new TranslationCountries()

  guessCountryTitle = "Zu welchem Land gehört diese Flagge?""

  finishModal = {
    title: "Spiel beenden?",
    totalAnswers: "Antworten Gesamt",
    correctAnswers: "Richtige Antworten",
    wrongAnswers: "Falsche Antworten",
    timePassed: "Vergangene Zeit",
    buttons: {
      finish: "Beenden",
    },
  }

  getGuessCapitalTitle({ countryCode }: { countryCode: CountryCode }): string {
    const countryName = this.getCountryNameTranslation(countryCode)

    return `Was ist die Hauptstadt von ${countryName} ?`
  }

  getGuessPopulationTitle({ countryCode }: { countryCode: CountryCode }): string {
    const countryName = this.getCountryNameTranslation(countryCode)

    return `Wie viele Einwohner hat ${countryName}?`
  }

  protected getCountryNameTranslation(countryCode: CountryCode) {
    const { name: countryName } = this.getCountryTranslation(countryCode)

    return countryName
  }

  protected getCountryTranslation(countryCode: CountryCode): CountryTranslation {
    return this.translationCountries[countryCode]
  }
}
