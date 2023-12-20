# APP

Gympass style app.

## RF ( O que a aplicação precisa fazer)

- [x] Deve ser possivel se cadastrar
- [x] Deve ser possível se autenticar
- [x] Deve ser possível obter o perfil de um usuário logado
- [x] Deve ser possível obter o numero de check-ins realizados pelo usuário logado
- [x] Deve ser possível o usuário buscar academias proximas
- [x] Deve ser possível o usuário buscar academias pelo nome
- [x] Deve ser possível o usuário realizar check-in em uma academia
- [x] Deve ser possível validar o check-in
- [x] Deve ser possível cadastrar uma academia

## RN (Como a aplicação precisa fazer)

- [x] O usuário não deve poder ser cadastrar com um e-mail duplicado
- [x] O usuário não pode fazer 2 check-ins no mesmo dia
- [x] O usuário não pode fazer chekin se não estiver (180k) da academia;
- [x] O checkin pode ser validado até 20 minutos após criado
- [x] O checkin só pode ser validado por administradores
- [x] A academia só pode ser cadastrada por adminstradores

## RNF (Requisitos que não dependem da vontade do cliente(tecnologias utilizas por exemplo))

- [x] A senha do usuário precisa estár criptgrafada
- [x] Os dados da aplicação precisam estar persistidos em um banco postreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 items por paginas
- [x] O usuário deve ser identificado por um JWT
