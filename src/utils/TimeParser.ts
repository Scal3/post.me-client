export default class TimeParser {
  public static toAppropriate(dateString: string): string {
    const date = this.buildDateFromString(dateString);

    return this.combineDateAndTime(date);
  }

  private static buildDateFromString(dateString: string): Date {
    return new Date(dateString);
  }

  private static combineDateAndTime(date: Date): string {
    return this.getTime(date) + " - " + this.getDate(date)
  }

  private static getDate(date: Date): string {
    return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
  }

  private static getTime(date: Date): string {
    return date.toLocaleTimeString().substring(0, 5);
  }
}