export default class Activity {
  constructor({ userId, sessions }) {
    this.userId = userId
    this.sessions = sessions
  }

  data = () => {
    return {
      userId: this.userId,
      sessions: this.sessions,
    }
  }
}
