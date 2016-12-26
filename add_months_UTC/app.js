const addMonthsUTC = (date, count) => {
  if (date && count) {
    const d = (new Date(+date)).getUTCDate();
    date.setUTCMonth(date.getUTCMonth() + count, 1);
    const m = date.getUTCMonth();
    date.setUTCDate(d);
    if (date.getUTCMonth() !== m) date.setUTCDate(0);
  }
  return date;
};

module.exports = addMonthsUTC;
