export interface IEvents {
    text: string;
    accept: {
      lost: { type?: string; value?: number };
      benefit: { type?: string; value?: number };
    };
    denied: {
      lost: { type?: string; value?: number };
      benefit: { type?: string; value?: number };
    };
  }

export interface IGastos {
  name: string,
  value: number,
  type: "fixed" | "variant",
  purchaseInterval: "monthly" | "daily",
  buff: "vida" | "felicidade",
  charge: number,
  valorEstipulado: number,
  valueSpending: number,
}

export interface IBeneficios {
  type: "vida" | "felicidade" | "coin"
  value: number
}