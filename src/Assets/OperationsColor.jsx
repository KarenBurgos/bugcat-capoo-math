export default function OperationsColor(operation) {
    if(operation === "Suma")
        return  ["yellow", "yellow-light", "yellow-medium", "yellow-dark"]
    else if(operation === "Resta")
        return ["pink", "pink-light", "pink-medium", "pink-dark"]
    else if(operation === "Multiplicación")
        return ["purple", "purple-light", "purple-medium", "purple-dark"]
    else if(operation === "División")
        return ["blue", "blue-light", "blue-medium", "blue-dark"]
    

    return ["customBlack"]
}