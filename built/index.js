"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rap = (obj) => __awaiter(this, void 0, void 0, function* () {
    const target = {};
    const keys = Object.keys(obj);
    const rawValues = Object.values(obj);
    const retValues = ((values) => values.map(value => {
        if (!value.constructor || value.constructor.name !== 'Object')
            return value;
        return rap(value);
    }))(rawValues);
    const values = yield Promise.all(retValues);
    values.forEach((v, i) => {
        target[keys[i]] = v;
    });
    return target;
});
exports.default = rap;
