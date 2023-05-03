export default class Performance {
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

  data = () => {
    return {
      userId: this.userId,
      sessions: this.formatSession(),
    }
  }
}
