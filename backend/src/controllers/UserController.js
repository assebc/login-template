import { prisma } from "../prisma.js";
import "bcryptjs";

class UserController {
  async register(request, response){
    const { username, password } = request.body;

    if (!username || !password )
      return response.status(400).json({ error: "Invalid data!" });

    try {
      const hashedPw = await bcryptjs.hash(password, +process.env.SALT);
      const newUser = await prisma.user.register({
        data: {
          username,
          password: hashedPw,
        },
      });

      return response.status(201).json(newUser);

    } catch(error){
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        return response
          .status(400)
          .json({ error: "Username already registered!" });
      }
    }
  }

  async forgot_password(request, response){
    const { username, new_password, confirm_password } = request.body;

    const user = await prisma.user.findFirst({
      where: {
        username,
        deleted: false,
      },
    });

    if (!user)
      return response.status(400).json({ error: "Email not found!" });

    if(!new_password || !confirm_password)
      return response.status(400).json({ error: "Invalid data!" });
    
    if(!(new_password === confirm_password))
      return response.status(400).son({ error: "Passwords don't match!" });

    const newPasswordHashed = await bcryptjs.hash(
      new_password,
      +process.env.SALT
    );

    const updateUser = await prisma.user.update({
      where: { username },
      data: { password: newPasswordHashed },
    });

    return response.json(updateUser)
  }
}

export default new UserController();