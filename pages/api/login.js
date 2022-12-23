import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { Octokit } from "octokit";
const octokit = new Octokit();

export default withIronSessionApiRoute(async (req, res) => {
  const { username } = await req.body;
  console.log(username);
  console.log("username");

  try {
    const {
      data: { login, avatar_url },
    } = await octokit.rest.users.getByUsername({ username });
    const user = { isLoggedIn: true, login, avatarUrl: avatar_url };
    console.log(user)

    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);

