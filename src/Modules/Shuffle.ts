import { NoFood, NotSpicy, Spicy } from "./FoodData";

function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function ArrayShuffle(isSpicy: boolean) {
  let baseData: string[] = [];

  if (isSpicy) {
    baseData = [...Spicy, ...NotSpicy, ...NoFood];
  } else {
    baseData = [...NotSpicy, ...NoFood];
  }

  shuffle(baseData);

  return baseData;
}

export function RandoFood(
  isSpicy: boolean,
  setFood: React.Dispatch<React.SetStateAction<string>>
) {
  let FoodData = ArrayShuffle(isSpicy);
  let no = Math.floor(Math.random() * FoodData.length);

  setFood(FoodData[no]);
}
