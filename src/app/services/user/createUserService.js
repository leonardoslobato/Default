import UserRepository from '../../repositories/UserRepository';

import AppError from '../../../errors/AppError';

class CreateUserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userBody) {
    const { user_id } = userBody;

    // Verifica se esse usuário existe
    const userExists = await this.userRepository.findUserById(user_id);

    if (userExists) {
      throw new AppError('User alteady exists', 404);
    }

    // criação do usuário
    const createUser = await this.userRepository.createUser(user_id);

    return createUser;
  }
}
export default CreateUserServices;
