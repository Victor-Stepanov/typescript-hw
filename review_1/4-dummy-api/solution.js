"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const URL_SITE = 'https://dummyjson.com/users';
var Statuses;
(function (Statuses) {
    Statuses["Pending"] = "pending";
    Statuses["Success"] = "success";
    Statuses["Failed"] = "failed";
})(Statuses || (Statuses = {}));
const fetchData = (url, method = 'GET') => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url, {
        method,
    });
    if (!response.ok) {
        throw new Error(`Can not fetch data from ${url}`);
    }
    return response.json();
});
const useFetch = (url, method) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        data: [],
        loading: Statuses.Pending,
        error: '',
    };
    try {
        const response = yield fetchData(url, method);
        return Object.assign(Object.assign({}, data), { data: response.users, loading: Statuses.Success, error: '' });
    }
    catch (error) {
        if (error instanceof Error) {
            return Object.assign(Object.assign({}, data), { data: null, loading: Statuses.Failed, error: error.message });
        }
        return Object.assign(Object.assign({}, data), { data: null, loading: Statuses.Failed, error: new Error('Unknown error') });
    }
});
useFetch(URL_SITE).then((data) => console.log(data));
