import UserRepository from '../../repositories/UserRepository';

import AppError from '../../../errors/AppError';

class ReadUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async execute(user_id) {
    const userExists = await this.userRepository.findUserById(user_id);

    if (!userExists) {
      throw new AppError('User do not exists', 404)
    }
    return userExists;
  }
}
export default ReadUserService;