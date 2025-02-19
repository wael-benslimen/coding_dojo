import { faker } from '@faker-js/faker'
import express from 'express'
const app = express()
const port = 3000
app.listen(port, () => console.log(`http://localhost:${port}`))
app.use(express.json())


const createUser = () => {
    const newFake = {
        username: faker.internet.username(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number({ style: 'human' }),
        pword: faker.internet.password(),
        id: faker.database.mongodbObjectId()
    }
    return newFake
}

const createCompany = () => {
    const company = {
        id: faker.database.mongodbObjectId(),
        companyName: faker.company.name(),
        address: {
            street:  faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country()

            
        }
    }
    return company
}

let users = []
let companys = []
// const user = createUser()
// const company = createCompany()
// console.log('the new user', user);
// console.log('the new company', company);



app.post('/api/users/new', (req, res) => {
    const newUser = createUser()
    users.push(newUser)
    res.send(users)

})

app.post('/api/companies/new', (req, res) => {
    const newcompany = createCompany()
    companys.push(newcompany)
    res.send(companys)
})

app.post('/api/user/company', (req, res) => {
    const newcompany = createCompany()
    const newUser = createUser()
    users.push(newUser)
    companys.push(newcompany)
    res.send( 'all companys' ,companys, 'all users', users)
} )