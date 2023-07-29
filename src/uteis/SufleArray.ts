export default function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = array.slice(); // Criar uma cópia do array para evitar modificar o original
    let currentIndex = shuffledArray.length;
    let randomIndex;
  
    // Enquanto ainda houver elementos para embaralhar
    while (currentIndex !== 0) {
      // Escolher um elemento aleatório não embaralhado
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Trocar o elemento atual com o elemento aleatório
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[currentIndex],
      ];
    }
  
    // Retornar apenas os três primeiros elementos do array embaralhado
    return shuffledArray.slice(0, 3);
  }
  