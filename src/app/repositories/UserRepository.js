import Users from '../models/User';

class UserRepository {
  // READ
  async findUserById(user_id) {
    const read = await Users.findByPk(user_id);

    return read;
  }
  async findUserByEmail(emailBody) {
    const email = await Users.findOne({ where: { email: emailBody } })

    return email;
  }

  // CREATE
  async createUser(userBody) {
    const create = await Users.create(userBody);

    return create;
  }

  // UPDATE
  async updateUser(userBody, userDB) {
    const update = await userDB.update(userBody);

    return update;
  }

  // DELETE
  async deleteUser(user) {
    const destroy = await Users.destroy(user);

    return destroy;

  }
}
export default UserRepository;