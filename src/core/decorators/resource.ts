import { getContext } from "../dependency-injection/Context"


export function resource() {
    return function (constructor: Function) {
        getContext().register(constructor)
    }
}