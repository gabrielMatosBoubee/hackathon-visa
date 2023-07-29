export default function percentCalc(salario: number, despesa: number): number {
    if (despesa <= 0) {
      return 0;
    }
  
    const porcentagem = (despesa / salario) * 100;
  
    // Limita a porcentagem entre 0 e 100
    return Math.floor(Math.min(100, Math.max(0, porcentagem)));
  }