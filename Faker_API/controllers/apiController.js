const { faker } = require('@faker-js/faker');

exports.createUser = (req, res) => {
    const newUser = {
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        email : faker.internet.email(this.firstName, this.lastName),
        password : faker.internet.password(),
        phoneNumber : faker.phone.phoneNumber(),
        _id : faker.database.mongodbObjectId()
    }
    return res.json(JSON.stringify(newUser));
}

exports.createCompany = (req, res) => {
    const newCompany = {
        _id : faker.database.mongodbObjectId(),
        name : faker.company.companyName(),
        address : {
            street : faker.address.streetAddress(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
    return res.json(JSON.stringify(newCompany));
}

exports.createBoth = (req, res) => {
    const newUser = {
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        email : faker.internet.email(this.firstName, this.lastName),
        password : faker.internet.password(),
        phoneNumber : faker.phone.phoneNumber(),
        _id : faker.database.mongodbObjectId()
    }
    const newCompany = {
        _id : faker.database.mongodbObjectId(),
        name : faker.company.companyName(),
        address : {
            street : faker.address.streetAddress(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
    res.json(JSON.stringify({
        user : newUser,
        company : newCompany
    }));
}