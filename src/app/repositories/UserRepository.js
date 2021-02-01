import Users from '../models/Users';

class UserRepository {
  // READ
  async findUserById(user_id) {
    const read = await Users.findByPk(user_id);

    return read;
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