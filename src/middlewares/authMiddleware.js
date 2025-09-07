// src/middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

export const authMiddleware = (request, response, next) => {
  // 1. Buscar o token no cabeçalho da requisição
  const authHeader = request.headers.authorization;

  // 2. Verificar se o token foi enviado
  if (!authHeader) {
    return response.status(401).json({ message: 'Token not provided.' });
  }

  // O token vem no formato "Bearer TOKEN_AQUI", então separamos em duas partes
  const [, token] = authHeader.split(' ');

  try {
    // 3. Validar o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Se for válido, adicionamos o ID do usuário na requisição
    request.userId = decoded.id;

    // 5. Chama a próxima função/rota
    return next();
  } catch (err) {
    return response.status(401).json({ message: 'Invalid token.' });
  }
};