"use strict";
/* Написать на TS  реализацию Map в виде класса. Т.е:
    - Класс Map с методами: set, delete, get, clear
    - Хранить данные в buckets, hash которых рассчитывать какой логике
    - Если hash одинаков, элементы bucket связываются друг с другом
*/
Object.defineProperty(exports, "__esModule", { value: true });
class CMapNode {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}
class CMap {
    constructor() {
        this.buckets = null;
        this.size = 0;
    }
    set(key, value) {
        const hashedKey = this.generateHashByKey(key);
        const node = new CMapNode(hashedKey, value);
        if (!this.isEmpty()) {
            let current = this.buckets;
            while (current === null || current === void 0 ? void 0 : current.next) {
                if (current.key === hashedKey) {
                    current.value = value;
                }
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
        this.buckets = node;
        this.size++;
    }
    delete(key) {
        var _a;
        const hashedKey = this.generateHashByKey(key);
        if (this.isEmpty()) {
            throw new Error('Map is empty');
        }
        if (((_a = this.buckets) === null || _a === void 0 ? void 0 : _a.key) === hashedKey) {
            this.buckets = this.buckets.next === undefined ? null : this.buckets.next;
            this.size--;
        }
        let current = this.buckets;
        let previous = null;
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
    get(key) {
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
    clear() {
        this.buckets = null;
        this.size = 0;
    }
    generateHashByKey(key) {
        let hash = '';
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }
    isEmpty() {
        return this.size === 0;
    }
}
const cmap = new CMap();
cmap.set('kk1', 100);
cmap.set('kk2', 112);
cmap.set('kk3', 180);
cmap.set('kk4', { date: new Date().getDay(), name: 'Shop' });
console.log(cmap.delete('kk4'));
console.log(cmap.get('kk4'));
