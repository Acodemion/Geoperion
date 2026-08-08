import { Locale } from "../../language.interface"
import { TranslationCountries } from "./de.countries"
import { TranslationGamePage } from "./de.game-page"
import { TranslationGamesPage } from "./de.games-page"
import { TranslationSettingsPage } from "./de.settings-page"
import { TranslationStatistics } from "./de.statistics"
import { TranslationStatisticsPage } from "./de.statistics-page"
import { TranslationUI } from "./de.ui"

export class Translation {
  readonly localeKey: Locale = "DE"

  readonly ui = new TranslationUI()

  readonly settingsPage = new TranslationSettingsPage()

  readonly gamesPage = new TranslationGamesPage()

  readonly gamePage = new TranslationGamePage()

  readonly statisticsPage = new TranslationStatisticsPage()

  readonly statistics = new TranslationStatistics()

  readonly countries = new TranslationCountries()
}
