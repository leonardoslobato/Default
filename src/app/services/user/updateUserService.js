import UserRepository from '../../repositories/UserRepository';

import AppError from '../../../errors/AppError';

class UpdateUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(user_id, userBody) {
    const user = await this.userRepository.findUserById(user_id);

    if (!user) {
      throw new AppError('User do not exists', 404);
    }

    const update = await this.userRepository.updateUser(
      user,
      userBody
    );

    return update;

  }
}

export default UpdateUserService;