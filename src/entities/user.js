export default class User {
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
