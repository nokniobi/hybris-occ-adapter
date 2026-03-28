import { getContext } from "../dependency-injection/Context";


export function injectable() {
    return function (constructor: Function) {
        getContext().register(constructor)
    }
}