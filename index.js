function happyHolidays() { 
  return ("Happy holidays!")
}
  
 function happyHolidaysTo(name) {
   return `Happy holidays, ${name}!`
   
 }
  
  function happyHolidayTo(holiday, name) {
   return `Happy ${holiday}, ${name}!`
  }
  
  function holidayCountdown(holiday, days) {
    return `Happy ${holiday}, ${name}!`
  }
  
  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
  
  // write your code below!
