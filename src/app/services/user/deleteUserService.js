import UserRepository from '../../repositories/UserRepository';

import AppError from '../../../errors/AppError';

class DeleteUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(user_id) {
    const user = await this.userRepository.findUserById(user_id);

    if (!user) {
      throw new AppError('User do not exists', 404);
    }

    const deleteUser = await this.userRepository.deleteUser(user_id);

    return deleteUser;

  }
}

export default DeleteUserService;