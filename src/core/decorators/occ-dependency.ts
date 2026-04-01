import { getContext } from "../dependency-injection/Context"


export function occ_dependency() {
    return function (constructor: Function) {
        getContext().register(constructor)
    }
}