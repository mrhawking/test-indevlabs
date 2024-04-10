## Функция для поиска первого пропущенного числа в массиве последовательных чисел

Фунция написана на TypeScript.
На вход принимает массив чисел, возвращает пропущенное число || undefined, если его нет || null, если массив пуст
Тестируем с помощью Jest.


### Установка
```bash
npm install
```

### Применение

```typescript
import { findMissingNumber } from "./findMissingNumber";

const arr = [5, 0, 1, 3, 2];
const res = findMissingNumber(arr);
console.log('Первое пропущенное число: ' + res);
```

### Обработка всех сценариев
```typescript
import { findMissingNumber } from "./findMissingNumber";

const arr = [
  [5, 0, 1, 3, 2],
  [7, 9, 10, 11, 12],
  [-100, 2, 3, 4],
  [],
  [0, 1, 2, 3]
]

const finalResults: string[] = [];

arr.map((item, index) => {
  const res = findMissingNumber(item);

  if (res === null) {
    finalResults.push(`${index + 1}: this array is empty`);
  } else if (res === undefined) {
    finalResults.push(`${index + 1}: there is no missing number in array ${item}`);
  } else {
    finalResults.push(`${index + 1}: the first missing number in array ${item} is ${res}`);
  }
})

console.log (finalResults);
```

### Тестирование
```bash
npm run test
```

### Тестовые кейсы
* Число пропущено в массиве
* Пустой массив
* Нет пропущенного числа
* Пропущено более 1 числа
* В массиве чисел есть дубликаты

### Что можно улучшить
При необходимости можно дописать функцию на случаи:
* На вход приходят не целые числа 
* Шаг между числами отличен от 1

Для текущего задания дополнительный код может быть избыточен.