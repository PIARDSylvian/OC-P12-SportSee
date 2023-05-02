export default class AverageSessions {
  constructor({ userId, sessions }) {
    this.userId = userId
    this.sessions = sessions
  }

  #day = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  formatSession = () => {
    return this.sessions.map((element, idx) => {
      return { ...element, day: this.#day[idx] }
    })
  }

  data = () => {
    return {
      userId: this.userId,
      sessions: this.formatSession(),
    }
  }
}
