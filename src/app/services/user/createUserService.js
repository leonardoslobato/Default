import UserRepository from '../../repositories/UserRepository';

import AppError from '../../../errors/AppError';

class CreateUserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userBody) {
    // const userExists = await this.userRepository.findUserByEmail(userBody.email);

    // if (userExists) {
    //   throw new AppError('Email alteady exists', 404);
    // }
    const createUser = await this.userRepository.createUser(userBody);

    return createUser;
  }
}
export default CreateUserServices;
