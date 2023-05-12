/**
 * AverageSessions Class
 * @class
 */
export default class AverageSessions {
  /**
   * @param {{userId: number, sessions :object}}
   */
  constructor({ userId, sessions }) {
    this.userId = userId
    this.sessions = sessions
  }

  #day = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  /**
   * Format session
   *
   * @returns {object}
   */
  formatSession = () => {
    return this.sessions.map((element, idx) => {
      return { ...element, day: this.#day[idx] }
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
