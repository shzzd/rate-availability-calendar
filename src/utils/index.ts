import dayjs from "dayjs";

type MonthCounts = { [key: string]: number };
/**
 * Count the number of days for each month within a given date range.
 *
 * @param startDate - The start date of the range.
 * @param endDate - The end date of the range.
 * @returns An object containing month counts and an array of dates within the range.
 */
export function countDaysByMonth(startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) {
  // Initialize an object to store counts for each month
  const monthCounts: MonthCounts = {};

  // Initialize an array to store dates within the range
  const dates: Array<dayjs.Dayjs> = [];

  // Start from the provided start date
  let currentDate = startDate;

  // Iterate through the date range
  while (
    currentDate.isBefore(endDate, "day") ||
    currentDate.isSame(endDate, "day")
  ) {
    // Generate a key representing the month and year (MMM YYYY format)
    const yearMonthKey = currentDate.format("MMM YYYY");

    // Increment the count for the corresponding month
    monthCounts[yearMonthKey] = (monthCounts[yearMonthKey] || 0) + 1;

    // Clone the date to avoid modifying the original
    dates.push(currentDate.clone());

    // Move to the next day
    currentDate = currentDate.add(1, "day");
  }

  // Return the result object
  return { months: Object.entries(monthCounts), dates };
}
