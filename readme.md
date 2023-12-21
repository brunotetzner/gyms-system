# Documentação da API Gympass Style

Bem-vindo à documentação da API Gympass Style! Esta API permite aos usuários realizar check-ins em academias, buscar informações sobre academias, cadastrar-se e autenticar-se. Além disso, o usuário só pode fazer check-ins em academias próximas.

## Regras da Aplicação

### Requisitos Funcionais (RF)

#### Cadastro e Autenticação:

- Deve ser possível se cadastrar.
- Deve ser possível se autenticar.

#### Perfil do Usuário:

- Deve ser possível obter o perfil de um usuário logado.

#### Check-ins:

- Deve ser possível obter o número de check-ins realizados pelo usuário logado.
- Deve ser possível o usuário realizar check-in em uma academia.
- Deve ser possível validar o check-in.

#### Busca de Academias:

- Deve ser possível o usuário buscar academias próximas.
- Deve ser possível o usuário buscar academias pelo nome.

#### Cadastro de Academias:

- Deve ser possível cadastrar uma academia.

### Regras de Negócio (RN)

#### Cadastro e Autenticação:

- O usuário não deve poder se cadastrar com um e-mail duplicado.

#### Check-ins:

- O usuário não pode fazer 2 check-ins no mesmo dia.
- O usuário não pode fazer check-in se não estiver a (180k) da academia.
- O check-in pode ser validado até 20 minutos após criado.
- O check-in só pode ser validado por administradores.

#### Cadastro de Academias:

- A academia só pode ser cadastrada por administradores.

### Requisitos Não Funcionais (RNF)

#### Segurança:

- A senha do usuário precisa estar criptografada.
- O usuário deve ser identificado por um JWT.

#### Persistência de Dados:

- Os dados da aplicação precisam estar persistidos em um banco PostgreSQL.

#### Paginação:

- Todas as listas de dados precisam estar paginadas com 20 itens por página.

## Endpoints

### Academias

#### Buscar Academias Próximas:

- **Endpoint:** `GET /gyms/nearby`
- **Restrições:** Requer autenticação JWT.

#### Buscar Academias por Nome:

- **Endpoint:** `GET /gyms/search`
- **Restrições:** Requer autenticação JWT.

#### Cadastrar Academia:

- **Endpoint:** `POST /gyms`
- **Restrições:** Requer autenticação JWT.

```json
{
  "title": "Referencial academia",
  "description": "A melhor academia da cidade",
  "phone": "19991890255",
  "latitude": 12.2222,
  "longitude": "24.111"
}
```

- **Restrições:** Apenas administradores podem realizar essa operação. <br>
  Requer autenticação JWT.

### Check-ins

#### Histórico de Check-ins:

- **Endpoint:** `GET /check-ins/history`
- **Restrições:** Requer autenticação JWT.

#### Métricas de Check-ins:

- **Endpoint:** `GET /check-ins/metrics`
- **Restrições:** Requer autenticação JWT.

#### Realizar Check-in:

- **Endpoint:** `POST /gyms/:gymId/check-ins`
- **Função:** create
- **Restrições:** Requer autenticação JWT.

#### Validar Check-in:

<p> Permite ao usuário admin(geralmente o funcionário da academia), confirmar o checkin do usuário para liberar o seu acesso</p>
- **Endpoint:** `PATCH /check-ins/:checkInId/validate`
- **Restrições:** Apenas administradores podem validar check-ins.

### Usuários e Sessões

#### Cadastrar Usuário:

- **Endpoint:** `POST /users`

```JSON
{
	"name": "Bruno Tetzner",
	"email": "brunoltetzner1@gmail.com",
	"password": "123456"
}
```

#### Autenticar Usuário:

- **Endpoint:** `POST /sessions`

#### Atualizar Token (Refresh):

- **Endpoint:** `PATCH /token/refresh`

#### Obter Perfil do Usuário:

- **Endpoint:** `GET /me`
- **Restrições:** Requer autenticação JWT.
