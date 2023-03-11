import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { prisma } from "prisma";

class AuthenticationController {
  async login(request, response){
    const { username , password } = request.body;
    
    if(!username || !password)
      return response.status(400).json({ error: "Invalid data!" });

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if(!user)
      return response.status(400).json({ error: "Invalid credentials!" });

    if(!(await compare(password, user.password)))
      return response.status(400).json({ message: "Invalid credentials!" });
    
    const token = sign({}, process.env.JWT_SECRET, {
      subject: toString(user.id),
      expiresIn: "id",
    });
    
    return response.json(token);
  }
}

export default new AuthenticationController();