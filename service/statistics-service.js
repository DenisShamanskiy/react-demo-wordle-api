const statisticsModel = require("../models/statistics-model");

class StatisticsService {
  async saveStatistics(userId, statistics) {
    const statisticsData = await statisticsModel.findOne({ user: userId });
    if (statisticsData) {
      statisticsData.statistics = statistics;
      return statisticsData.save();
    }
    const stats = await statisticsModel.create({ user: userId, statistics });
    return stats;
  }
}

module.exports = new StatisticsService();
