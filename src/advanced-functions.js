const cache = (func) => {
    let cahedArguments = []
    return (...arg) => {
        let cahedObject = cahedArguments.find(cached => {
            for (let i = 0; i < arg.length; i++) {
                if (cached.arg[i] !== arg[i]) { return false }
            }
            return true
        })
        if (cahedObject) { return cahedObject.result }
        let result = func(...arg)
        cahedArguments.push({ arg: arg, result: result })
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
        return this
    }
};


const applyAll = (func, ...arg) => {
   return func.call(null, ...arg)
}
const sum = (...arg) => {
    return arg.reduce((sum, element) => sum + element, 0)
}

const mul = (...arg) => {
    return arg.reduce((mul, element) => mul * element, 1)
}

module.exports = { cache, forwardBackwardSteps, applyAll, sum, mul }
