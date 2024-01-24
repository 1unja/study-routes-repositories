type CoursesType = {
    id: number,
    name: string
  }
type AdressesType = {
    value: string,
    id: number
  }
  
const db: {courses: CoursesType[],
                  adresses: AdressesType[]} = {
    courses: [
      {id: 1, name: 'Ilia'},
      {id: 2, name: 'Anya'}],
    adresses: [
      {id: 1, value: 'via luka 23'},
      {id: 2, value: 'via mon 42'}
    ]
  }

export const adressesRepositories = {
    findAdress(value: string | null | undefined) {
        let foundAdresses = db.adresses
        if (value) {
            foundAdresses = foundAdresses
              .filter(c => c.value.includes(value))
        }
        return foundAdresses
    },
    sendAdress(value: string) {
        if (!value) {
            return 404
        }
        const newDbValue: {value: string, id: number} = {
            value: value,
            id: +(new Date())
          }
        db.adresses.push(newDbValue)
        return 202
    }
}