interface InvestmentData {
    valor: number;
    percent: number;
    days: number;
    type: string;
  }
  
  export function investCalc(data: InvestmentData): number {
    const { valor, percent, days, type } = data;
  
    if (type === "day") {
      const dailyPercent = percent / 100;
      const totalValue = valor * Math.pow(1 + dailyPercent, days);
      return totalValue;
    } else if (type === "month") {
      const monthlyPercent = percent / 100;
      const dailyPercent = Math.pow(1 + monthlyPercent, 1 / 30) - 1;
      const totalValue = valor * Math.pow(1 + dailyPercent, days);
      return totalValue;
    } else {
      throw new Error("Invalid type. Use 'month' or 'day'.");
    }
  }
  