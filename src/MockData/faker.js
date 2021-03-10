import faker from 'faker'

const bigList = [...Array(5000)].map(() => ({
    name: faker.name.findName(),
    email: faker.address.country(),
    avatar: faker.phone.phoneNumber()
}));

export default bigList

