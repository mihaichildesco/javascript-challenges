function panic(str) {
    return str
        .split(' ')
        .join(' 😱 ')
        .toUpperCase() + "!";
}

console.log(panic("i want my cofee"))



