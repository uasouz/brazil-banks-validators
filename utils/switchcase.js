const executeIfFunction = f =>
	typeof f === "function" ? f() : f

const executeIfFunctionWithParams = (f, params) =>
	typeof f === "function" ? f(params) : f

const switchcase = cases => defaultCase => key =>
	cases.hasOwnProperty(key) ? cases[key] : defaultCase

exports.switchcaseF = cases => defaultCase => key =>
	executeIfFunction(switchcase(cases)(defaultCase)(key))

exports.switchcaseFWithParams = cases => defaultCase => key => params =>
	executeIfFunctionWithParams(switchcase(cases)(defaultCase)(key), params)

exports.switchcase = switchcase