/**
 * Performance Class
 * @class
 */
export default class Performance {
  /**
   * @param {{userId: number, kind :object, sessions :object}}
   */
  constructor({ userId, kind, data }) {
    this.userId = userId
    this.kind = kind
    this.value = data
  }

  #kindTrad = {
    intensity: 'Intensité',
    speed: 'Vitesse',
    strength: 'Force',
    endurance: 'Endurance',
    energy: 'Energie',
    cardio: 'Cardio',
  }

  /**
   * Format session
   *
   * @returns {object}
   */
  formatSession = () => {
    return this.value
      .sort((a, b) => {
        return b.kind - a.kind
      })
      .map((element) => {
        return {
          subject: this.#kindTrad[this.kind[element.kind]],
          value: element.value,
        }
      })
  }

  /**
   * Return data
   *
   * @returns {object}
   */
  data = () => {
    return {
      userId: this.userId,
      sessions: this.formatSession(),
    }
  }
}
