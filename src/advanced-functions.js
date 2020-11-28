const cache = (func) => {
    let cahedArguments = []
    return (...arguments) => {
        let cahedObject = cahedArguments.find(cached => {
            for (i = 0; i < arguments.length; i++) {
                if (cached.arg[i] !== arguments[i]) { return false }
            }
            return true
        })
        if (cahedObject) { return cahedObject.result }
        let result = func(...arguments)
        cahedArguments.push({ arg: arguments, result: result })
        return result
    }
}


const forwardBackwardSteps = {
    step: 0,
    forward() {
        this.step++
        return this
    },
    backward() {
        this.step--
        return this
    },
    revealStep() {
        console.log(this.step)
    }
};


const applyAll = (func, ...arguments) => {
   return func.call(null, ...arguments)
}
const sum = (...arguments) => {
    return arguments.reduce((sum, element) => sum + element, 0)
}

const mul = (...arguments) => {
    return arguments.reduce((mul, element) => mul * element, 1)
}

module.exports = { cache, forwardBackwardSteps, applyAll, sum, mul }
