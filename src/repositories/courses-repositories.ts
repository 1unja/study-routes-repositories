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

export const coursesRepository = {
    findProduct(name: string | null | undefined) {
        let foundName = db.courses
        if(name) {
            foundName = foundName
              .filter(c => c.name.includes(name))
          }
        return foundName
    },
    createProduct(name: string) {
        if (!name) {
            return 404
          }
        
          const homeCreate = {
            id: +(new Date()),
            name: name
          }

        db.courses.push(homeCreate)
        return 201
    },
    findIdProducts(id: number) {
        const homeNumber = db.courses.find(c => c.id === Number(id))
  
        if (!homeNumber) {
            return 404
        }
        return homeNumber
    },
    deleteProducts(id: number) {
        db.courses = db.courses.filter(c => c.id !== id)
        return 204
    },
    updateProduct(id: number, name: string) {
        const homeNumber = db.courses.find(c => c.id === +id)
  
        if (!homeNumber) {
            return 404
        }
      
        homeNumber.name = name
        return 201
    }
}