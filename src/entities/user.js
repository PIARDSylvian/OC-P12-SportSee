/**
 * User Class
 * @class
 */
export default class User {
  /**
   * @param {{id: number, userInfos :object, todayScore :number, score :number, keyData :object}}
   */
  constructor({ id, userInfos, todayScore = 0, score = 0, keyData }) {
    this.id = id
    this.userInfos = userInfos
    this.todayScore = todayScore
    this.score = score
    this.calorieCount = keyData.calorieCount
    this.proteinCount = keyData.proteinCount
    this.carbohydrateCount = keyData.carbohydrateCount
    this.lipidCount = keyData.lipidCount
  }

  /**
   * Return data
   *
   * @returns {object}
   */
  data = () => {
    return {
      id: this.id,
      userInfos: this.userInfos,
      score: this.score,
      todayScore: this.todayScore,
      keyData: {
        calorieCount: this.calorieCount,
        proteinCount: this.proteinCount,
        carbohydrateCount: this.carbohydrateCount,
        lipidCount: this.lipidCount,
      },
    }
  }
}
