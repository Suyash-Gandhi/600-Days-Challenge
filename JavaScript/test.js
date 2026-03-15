const proto = {
    
    login(input) {
        if (this.password !== input) {
            console.log("invalid");

        }
        else {
            console.log(`${this.name} logged in`);
        }


    }
}

const createUser = (name, password) => {
    const user = Object.create(proto)
    user.name = name
    user.password = password
    return user
}

user1 = createUser("suyash", "1234")
user1.login("1234")
user1.login("123")



console.log("hello");

