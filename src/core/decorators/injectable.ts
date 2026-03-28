import { getContext } from "../dependency-injection/Context";


export function injectable() {
    console.log("Calling injectable()")
    return function (constructor: Function) {

        console.log(`Register ${constructor.name}`)
        getContext().register(constructor)
    }
}