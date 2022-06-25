import { Repository} from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities'


interface IUserRepository{
    save: (user: Partial<User>) => Promise<User>
    // getAll: () => Promise<User[]>
    findOne: (payload: object) => Promise<User>
    // update: (id: string, payload: Partial<User>) => Promise<UpdateResult>
    // delete: (id: string) => Promise<DeleteResult>
}

class UserRepository implements IUserRepository {
    private ormRepo: Repository<User>

    constructor(){
        this.ormRepo = AppDataSource.getRepository(User)
    }
    save = async (user: Partial<User>) => await this.ormRepo.save(user)

    // getAll = async() => await this.ormRepo.find()

    findOne = async (payload: object) => await this.ormRepo.findOneBy({...payload})

    // update = async (userId: string, payload: Partial<User>) => {
    //     return await this.ormRepo.update(userId, {...payload})
    // }
    // // delete = async(id:string) => await this.ormRepo.delete(id)
}


export default new UserRepository()


