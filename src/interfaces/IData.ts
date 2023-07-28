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