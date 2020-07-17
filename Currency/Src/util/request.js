var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import RequestException from "Exceptions/requestException";
import { ApiResult } from "Models/apiResult";
import Cookies from "cookies-ts";
export default class ApiRequest {
    constructor() {
        const cookies = new Cookies();
        this.token = cookies.get(globalAccessToken);
    }
    getData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sendGetRequest(url)
                .then((result) => {
                return result;
            });
        });
    }
    postData(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sendPostRequest(url, data)
                .then((result) => {
                return result;
            });
        });
    }
    sendGetRequest(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios.get(url, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Bearer " + this.token
                }
            }).then((result) => {
                return new ApiResult(true, result.data);
            }).catch((error) => {
                return this.getErrorResult(error, url);
            });
        });
    }
    sendPostRequest(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios.post(url, data, {
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json;charset=utf-8",
                    "Authorization": "Bearer " + this.token
                }
            }).then((result) => {
                var res = new ApiResult(true, result.data);
                return res;
            }).catch((error) => {
                return this.getErrorResult(error, url);
            });
        });
    }
    getErrorResult(error, url) {
        const errorResult = new ApiResult(false, "");
        if (error.response.data !== undefined && error.response.data !== "") {
            console.error(new RequestException(url), error.response.data);
            errorResult.value = error.response.data.title;
        }
        else {
            console.error(new RequestException(url), error.message);
            errorResult.value = error.message;
        }
        return errorResult;
    }
}
//# sourceMappingURL=request.js.map