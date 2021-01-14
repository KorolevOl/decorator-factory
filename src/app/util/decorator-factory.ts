import { Mixin } from 'ts-mixer'; // Для объединения классов (В ts нельзя делать расширение на несколько классов)
import { Subject } from 'rxjs';
import { first, share } from 'rxjs/operators';


/**
 * Передает вызов метода из Target в Decorator
 * @param funcName - Имя метода на который нуже hook
 * @param Target - Класс к которому нужно подцепиться
 * @param Decorator - Класс с методом хука
 */
export function setRxjsHook(funcName: string, Target: any = {}, Decorator: any = {}): void {
  const original = Target.prototype[funcName];
  const DecoratorFunc = Decorator[funcName];

  // Создает Subject на Decorator если его еще нет
  // Пока используется только хук на первое срабатывание
  if (!Decorator[funcName + '$']) {
    Decorator[funcName + '$'] = new Subject<any>().pipe(share(), first());
  }
  // Вызов функции из декоратора при срабатывании в Target
  Decorator[funcName + '$'].subscribe((content, ...args) => {
    DecoratorFunc.apply(content, ...args);
  });
  // Подмена метода в Target
  Target.prototype[funcName] = function(...args): void {
    this[funcName + '$'].next(this, ...args);
    this[funcName + '$'].complete();
    original?.apply(this, args); // Вызов оригинального метода
  };
}

/**
 * Фабрика декораторов
 * @param useClass - Класс из которого нужно сделать декоратор для класса
 * @param hooks - Имена методов на которые нужно повесить хуки
 */
export function createDecorator(useClass, hooks: string[] = []): any {
  return (): ClassDecorator => {
    // Target - класс к которому применяется декоратор
    return (Target: any): any => {
      class BaseClass extends useClass {} // костыль, т.к. в Mixin нелзя передать useClass, а требуется объявленный класс
      // Возвращает объединенный класс декоратора с целевым классом
      return class extends Mixin(Target, BaseClass) {
        constructor(...args: any[]) {
          super(...args);
          // Вешаем переданные хуки
          hooks.forEach(hook => {
            setRxjsHook(hook, Target, this);
          });
        }
      };
    };
  };
}
