// Импортурем необходимые функции
import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsedData = await json(data);
      const saving = new GameSaving(JSON.parse(parsedData));
      return saving;
    } catch (error) {
      throw new Error('Ошибка сохранения!');
    }
  }
}
