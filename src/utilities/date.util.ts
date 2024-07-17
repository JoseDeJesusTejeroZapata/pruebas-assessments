// import moment from "moment";

// export enum FormatDateEnum {
//   ISO8601 = "YYYY-MM-DDTHH:mm:ss.SSS[Z]",
//   ISO8601WithoutZ = "YYYY-MM-DDTHH:mm:ss.SSS",
//   DateTime = "MM/DD/YYYY HH:mm",
//   Date = "DD/MM/YYYY",
//   DateWithoutSlash = "MMDDYYYY",
//   Time = "HH:mm",
//   ISO8601ONLYDATE = "YYYY-MM-DD",
// }

// export enum FnDateEnum {
//   ADD_DAYS = "add_days",
//   ADD_MONTHS = "add_months",
//   SUBTRACT_MONTHS = "subtract_months",
//   SUBTRACT_DAYS = "subtract_days",
// }
// class DateUtil {
//   static minusYears(date: Date, years: number, format: FormatDateEnum) {
//      return moment(date).subtract(years, "years").format(format);
//   }
//   static getDateMoment(date: string | Date, fnDate?: FnDateEnum, num?: number) {
//     switch (fnDate) {
//       case FnDateEnum.ADD_DAYS:
//         return moment(date).add(num, "days");
//       case FnDateEnum.ADD_MONTHS:
//         return moment(date).add(num, "months");
//       case FnDateEnum.SUBTRACT_MONTHS:
//         return moment(date).subtract(num, "months");
//       case FnDateEnum.SUBTRACT_DAYS:
//         return moment(date).subtract(num, "days");
//       default:
//         return moment(date);
//     }
//   }

//   static getDateMomentAggregate(
//     date: string | Date,
//     options?: { fnDate?: FnDateEnum; num?: number; format?: FormatDateEnum }
//   ): moment.Moment | string {
//     let dateMomement;
//     switch (options?.fnDate) {
//       case FnDateEnum.ADD_DAYS:
//         dateMomement = moment(date).add(options.num, "days");
//         break;
//       case FnDateEnum.ADD_MONTHS:
//         dateMomement = moment(date).add(options.num, "months");
//         break;
//       case FnDateEnum.SUBTRACT_MONTHS:
//         dateMomement = moment(date).subtract(options.num, "months");
//         break;
//       case FnDateEnum.SUBTRACT_DAYS:
//         dateMomement = moment(date).subtract(options.num, "days");
//         break;
//       default:
//         dateMomement = moment(date);
//         break;
//     }
//     if (options?.format) {
//       return dateMomement.format(options.format);
//     }
//     return dateMomement;
//   }
//   static formatDate(date: Date, format: FormatDateEnum) {
//     const result = moment(date).format(format);
//     return result;
//   }
//   static formatDateTime(date: Date, format: FormatDateEnum) {
//     return moment(date).format(format);
//   }

//   static addDays(date: Date, days: number, format: FormatDateEnum) {
//     return moment(date).add(days, "days").format(format);
//   }

//   static addMonths(date: Date, months: number, format: FormatDateEnum) {
//     return moment(date).add(months, "months").format(format);
//   }

//   static minusMonths(date: Date, months: number, format: FormatDateEnum) {
//     return moment(date).subtract(months, "months").format(format);
//   }
//   static minusDays(date: Date, days: number, format: FormatDateEnum) {
//     return moment(date).subtract(days, "days").format(format);
//   }
//   //obtener el primer dia del mes actual
//   static getFirstDayOfMonth(date: Date, format: FormatDateEnum) {
//     return moment(date).startOf("month").format(format);
//   }
//   //obtener el primer dia de la semana de la fecha actual
//   static getFirstDayOfWeek(date: Date, format: FormatDateEnum) {
//     return moment(date).startOf("week").format(format);
//   }
//   //obtener el numero de dias del mes actual
//   static getDaysInMonth(date: Date) {
//     return moment(date).daysInMonth();
//   }
//   //obtener el nombre del mes actual
//   static getMonthName(date: Date) {
//     return moment(date).format("MMMM");
//   }
// }
// export default DateUtil;
