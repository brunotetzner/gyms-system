import { FastifyRequest, FastifyReply } from "fastify";

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  console.log(request.headers);
  await request.jwtVerify({ onlyCookie: true });
  const token = await reply.jwtSign({}, { sign: { sub: request.user.sub } });

  const refreshToken = await reply.jwtSign(
    { role: request.user.role },
    { sign: { sub: request.user.sub, expiresIn: "7d" } }
  );

  return reply
    .setCookie("refreshToken", refreshToken, {
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: true,
    })
    .status(200)
    .send({ token });
}
