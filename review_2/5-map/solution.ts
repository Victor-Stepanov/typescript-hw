/* Написать на TS  реализацию Map в виде класса. Т.е:
    - Класс Map с методами: set, delete, get, clear
    - Хранить данные в buckets, hash которых рассчитывать какой логике
    - Если hash одинаков, элементы bucket связываются друг с другом
*/

import { ICmap } from "./interfaces";

class CMapNode<T> {
  constructor(
    public key: string,
    public value: T,
    public next?: CMapNode<T> | null
  ) {}
}

class CMap<T> implements ICmap<T> {
  private buckets: CMapNode<T> | null = null;
  private size: number = 0;

  set(key: string, value: T): void {
    const hashedKey = this.generateHashByKey(key);
    const node = new CMapNode(hashedKey, value);
    if (!this.isEmpty()) {
      let current = this.buckets;
      while (current?.next) {
        if (current.key === hashedKey) {
          current.value = value;
        }
        current = current.next;
      }
      current!.next = node;
      this.size++;
    }
    this.buckets = node;
    this.size++;
  }

  delete(key: string): void {
    const hashedKey = this.generateHashByKey(key);
    if (this.isEmpty()) {
      throw new Error('Map is empty');
    }
    if (this.buckets?.key === hashedKey) {
      this.buckets = this.buckets.next === undefined ? null : this.buckets.next;
      this.size--;
    }
    let current = this.buckets;
    let previous: CMapNode<T> | null = null;
    while (current) {
      if (current.key === hashedKey) {
        if (previous) {
          previous.next = current.next;
        }
        this.size--;
        return;
      }
      previous = current;
      current = current.next === undefined ? null : current.next;
    }
  }

  get(key: string): T | null {
    const hashedKey = this.generateHashByKey(key);
    if (this.isEmpty()) {
      throw new Error('Map is empty');
    }
    let current = this.buckets;
    while (current) {
      if (current.key === hashedKey) {
        return current.value;
      }
      current = current.next === undefined ? null : current.next;
    }
    return null;
  }

  clear(): void {
    this.buckets = null;
    this.size = 0;
  }

  private generateHashByKey(key: string) {
    let hash = '';
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  private isEmpty(): boolean {
    return this.size === 0;
  }
}

const cmap = new CMap<unknown>();
cmap.set('kk1', 100);
cmap.set('kk2', 112);
cmap.set('kk3', 180);
cmap.set('kk4', { date: new Date().getDay(), name: 'Shop' });

console.log(cmap.delete('kk4'));
console.log(cmap.get('kk4'));
