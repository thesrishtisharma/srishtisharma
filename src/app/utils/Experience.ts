export interface ExperienceDuration {
  exYear: number;
  exMonths: number;
  exDays: number;
}

export function calculateExperience(startDate: Date): ExperienceDuration {
  const today = new Date();

    let exYear = today.getFullYear() - startDate.getFullYear();
    let exMonths = today.getMonth() - startDate.getMonth();
    let exDays = today.getDate() - startDate.getDate();

    // Adjust if the current day of the month is before the start day of the month
    if (exDays < 0) {
      exMonths--;
      // Get the number of days in the previous month to accurately borrow days
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      exDays += previousMonth.getDate();
    }

    // Adjust if the current month is before the start month
    if (exMonths < 0) {
      exYear--;
      exMonths += 12;
    }

    return { exYear, exMonths, exDays };
}