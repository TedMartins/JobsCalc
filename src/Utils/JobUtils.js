module.exports = {
  remainingDays(job) {
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()

    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDate() + Number(remainingDays)
    const dueDateInMs = createdDate.setDate(dueDay)

    const timeDiffImMs = dueDateInMs - Date.now()
    const dayInMS = 1000 * 60 * 60 * 24
    const dayDiff = Math.ceil(timeDiffImMs / dayInMS)

    return dayDiff
  },

  calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}