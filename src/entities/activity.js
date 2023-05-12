/**
 * Activity Class
 * @class
 */
export default class Activity {
  /**
   * @param {{userId: number, sessions :object}}
   */
  constructor({ userId, sessions }) {
    this.userId = userId
    this.sessions = sessions
  }

  /**
   * Format session
   *
   * @returns {object}
   */
  formatSession = () => {
    return this.sessions.map((element, idx) => {
      return { step: idx + 1, ...element }
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
