/**
 * This function return a more human readable format of the number passed in
 * @param createdAt Date Object
 * @returns A string representation of the time passed since the createdAt date
 */
export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsPast = (now.getTime() - createdAt.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)} seconds ago`;
  }
  if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast <= 86400) {
    return `${Math.round(secondsPast / 3600)} hours ago`;
  }
  if (secondsPast > 86400) {
    const day = Math.round(secondsPast / 86400);
    if (day < 30) {
      return `${day} days ago`;
    } else {
      const month = Math.round(day / 30);
      if (month < 12) {
        return `${month} months ago`;
      } else {
        const year = Math.round(month / 12);
        return `${year} years ago`;
      }
    }
  }
};

/**
 * Convert a big humber into a human readable format
 * @param num Number to be formatted
 * @returns a human readable format of the big number
 */

export function formatNumber(num: number): string {
  if (Math.abs(num) >= 1.0e12) {
    // Trillions
    return (Math.abs(num) / 1.0e12).toFixed(1) + "T";
  } else if (Math.abs(num) >= 1.0e9) {
    // Billions
    return (Math.abs(num) / 1.0e9).toFixed(1) + "B";
  } else if (Math.abs(num) >= 1.0e6) {
    // Millions
    return (Math.abs(num) / 1.0e6).toFixed(1) + "M";
  } else if (Math.abs(num) >= 1.0e3) {
    // Thousands
    return (Math.abs(num) / 1.0e3).toFixed(1) + "K";
  } else {
    return num.toString();
  }
}
