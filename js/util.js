

// ----- Formatting

const format = (number, precision = 0, length = 4) => {
    if (!Number.isFinite(number)) return number + "";
    if (number < 0) return "-";

    let precision2 = Math.max(precision, 3);

    if (number < 1000) return format.decimal(number, precision);
    if (number < 10 ** length) return format.decimal(number);

    switch (game.option.notation) {
        case "default": {
            let res = format.suffix(number, precision2, (x) => format.suffix.simple(x, [
                " K", " M", " B", " T", " Qa", " Qi", " Sx", " Sp", " Oc", " No", 
                " Dc", " UD", " DD", " TD", " QaD", " QiD", " SxD", " SpD", " OD", " ND",
                " Vg", " UV", " DV", " TV", " QaV", " QiV", " SxV", " SpV", " OV", " NV"
            ]), 1000)
            if (res) return res;
            else break;
        }
        case "si": {
            let res = format.suffix(number, precision2, (x) => format.suffix.repeat(x, [
                "k", "M", "G", "T", "P", "E", "Z", "Y", "R", "Q"
            ], 3), 1000)
            if (res) return res;
            else break;
        }
        case "alphabet": {
            let res = format.suffix(number, precision2, (x) => format.suffix.base(x, [
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
            ], 3), 1000)
            if (res) return res;
            else break;
        }
        case "chinese": {
            let res = format.suffix(number, precision2, (x) => format.suffix.repeat(x, [
                "万", "億", "兆", "京", "垓", "秭", "穣", "溝", "澗", "正", "載", "極"
            ], 2), 10000)
            if (res) return res;
            else break;
        }
        case "korean": {
            let res = format.suffix(number, precision2, (x) => format.suffix.repeat(x, [
                "만", "억", "조", "경", "해", "자", "양", "구", "간", "정", "재", "극"
            ], 2), 10000)
            if (res) return res;
            else break;
        }
        default: break;
    }

    let exp = Math.floor(Math.log10(number));
    if (game.option.notation == "engineering") exp = Math.floor(exp / 3) * 3;
    let man = number / 10 ** exp;
    return format.significant(man, precision2) + "e" + format(exp, 0, Math.max(length - precision2 - 1, 6));
}

format.decimal = (number, precision = 0) => {
    let base = 10 ** precision;
    return (Math.floor(number * base) / base).toLocaleString("en-US", {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    })
}

format.significant = (number, precision = 0) => {
    let base = 10 ** Math.ceil(precision - Math.log10(number) - 1);
    return (Math.floor(number * base) / base).toLocaleString("en-US", {
        minimumSignificantDigits: precision,
        maximumSignificantDigits: precision,
    })
}

format.suffix = (number, precision, list, base) => {
    let digits = Math.log10(base)
    let target = Math.floor(Math.log10(number) / digits);
    digits = Math.ceil(digits);
    let suffix = list(target);
    if (suffix == null) return null;
    return format.significant(number / base ** target, precision, digits) + suffix;
}
format.suffix.simple = (number, list) => {
    return number ? list[number - 1] ?? null : "";
}
format.suffix.repeat = (number, list, max) => {
    if (number > list.length * max ) return null;
    let str = "";
    while (number > 0) {
        let index = Math.min(number, list.length);
        str = list[index - 1] + str;
        number -= index;
    }
    return str;
}
format.suffix.base = (number, list, max) => {
    let str = "", i = 0; 
    number--;
    while (number >= 0) {
        i++;
        if (i > max) return null;
        let index = number % list.length;
        str = list[index] + str;
        number = Math.floor(number / list.length) - 1;
    }
    return str;
}


format.effect = (str, oldValues, newValues = null) => {
    return str.replaceAll(/\{([+\-x×/\^])([0-9])([%])?(?::([^}]+))?\}/g, 
        (_, prefix, index, suffix, formatArg) => {
            {
                if (prefix == "x") prefix = "×";
                let args = formatArg?.split(",").map(x => +x) ?? [];
                let fmt = (x) => (prefix ?? "") + format(x, ...args) + (suffix ?? "");
                let str;
                if (newValues && oldValues[index] != newValues[index])
                    str = fmt(oldValues[index]) + " → " + fmt(newValues[index]);
                else 
                    str = fmt(oldValues[index]);
                return `<span class="number">${str}</span>`
            }
        }
    )
}

// ----- Math

function addWithCap(a, b, cap, strength = 2) {
    if (a + b <= cap) return a + b;
    let baseA = a ** strength / cap ** (strength - 1) + b;
    return (baseA * cap ** (strength - 1)) ** (1 / strength);
}

function sumGeometricSeries(base, rate, n, owned = 0) {
    base *= rate ** owned;
    if (n == 1) return base;
    return base * (1 - rate ** (n + 1)) / (1 - rate);
}

function sumGeometricSeries(base, rate, n, owned = 0) {
    base *= rate ** owned;
    if (n == 1) return base;
    return base * (1 - rate ** (n + 1)) / (1 - rate);
}

function maxGeometricSeries(base, rate, amount, owned = 0) {
    base *= rate ** owned;
    return Math.max(0, Math.floor(Math.log(amount * (rate - 1) / base + 1) / Math.log(rate)));
}


// ----- Array

Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i + 1);
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
}