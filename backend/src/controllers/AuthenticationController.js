import { prisma } from "../prisma.js";
import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";

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

    if(!(await bcryptjs.compare(password, user.password)))
      return response.status(400).json({ message: "Invalid credentials!" });
    
    const token = jsonwebtoken.sign({}, process.env.JWT_SECRET, {
      subject: toString(user.id),
      expiresIn: "1d",
    });
    
    return response.json(token);
  }
}

export default new AuthenticationController();