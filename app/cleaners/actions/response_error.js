export default class ResponseError {

    constructor(responseError) {
        this._responseError = responseError;
        this.processError();
    }

    get code() {
        return this._code;
    }

    get message() {
        return this._message;
    }

    processError() {
        if (!this._responseError) {
            this._code = -1;
            this._message = errorMessages.networkUnavailable;
        } else {
            const {data} = this._responseError;
            this._code = data.code || -1
            this._message = data.error
        }

    }
}


const errorMessages = {
    unknown: 'Unknown error',
    networkUnavailable: 'Network Unavailable'
}