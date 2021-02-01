import CreateUserService from '../services/user/createUserService';
import ReadUserService from '../services/user/readUserService';
import UpdateUserService from '../services/user/updateUserService';
import DeleteUserService from '../services/user/deleteUserService';

const createUserService = new CreateUserService();
const readUserService = new ReadUserService();
const updateUserService = new UpdateUserService();
const deleteUserService = new DeleteUserService();

class UserController {
  // READ USER
  async index(req, res) {
    const { id } = req;

    const user = await readUserService.execute(id);

    return res.status(200).json(user);
  }

  // CREATE USER
  async create(req, res) {
    const user = await createUserService.execute(req.body);

    return res.json(user);
  }

  // UPDATE USER
  async update(req, res) {
    const { id } = req;
    const userBody = req.body;

    const user = await updateUserService.execute(id, userBody);

    return res.status(200).json(user);
  }

  async delete(req, res) {
    const { id } = req;
    const user = await deleteUserService.execute(id);

    return res.status(200).json(user);
  }

}
export default UserController;