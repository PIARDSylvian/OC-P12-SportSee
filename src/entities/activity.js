export default class Activity {
  constructor({ userId, sessions }) {
    this.userId = userId
    this.sessions = sessions
  }

  formatSession = () => {
    return this.sessions.map((element, idx) => {
      return { step: idx + 1, ...element }
    })
  }

  data = () => {
    return {
      userId: this.userId,
      sessions: this.formatSession(),
    }
  }
}
