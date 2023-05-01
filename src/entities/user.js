export default class User {
  constructor({ id, userInfos, todayScore, keyData }) {
    this.id = id
    this.userInfos = userInfos
    this.todayScore = todayScore
    this.calorieCount = keyData.calorieCount
    this.proteinCount = keyData.proteinCount
    this.carbohydrateCount = keyData.carbohydrateCount
    this.lipidCount = keyData.lipidCount
  }

  data = () => {
    return {
      id: this.id,
      userInfos: this.userInfos,
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
