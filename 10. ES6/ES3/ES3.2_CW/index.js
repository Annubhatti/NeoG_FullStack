// rest parameters(...rest) it collects rest of the values
const restExample = (a,b, ...rest) => {
    console.log(a)
    console.log(a,b)
    console.log(rest)
}

restExample(1,2,3,4,5,6)

const concateStrings = (...strings) => console.log(strings.join(" "))

concateStrings("Hello", "World")
concateStrings("JavaScript", "is", "fun")

const countarguments = (...args) => console.log(args.length)

    countarguments(1,2,"Hello", "Joy")
    countarguments("Good", "Joy")


