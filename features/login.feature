#language: pt

Funcionalidade: Login de acesso
    Sendo um usuário já cadastrado
    Quero acessar o site
    Para que eu possa realizar minhas compras

    Cenario: Login do usuario

        Dado que acesso a pagina principal, clico em Sign in pra realizar o login
        Quando submeto meu email com "jefferson.lsilva@me.com.br" e senha com "123456"
        Entao devo ver o meu nome "Jefferson Silva" como usuario logado

     Cenario: Tentar logar

        Dado que acesso a pagina principal, clico em Sign in pra realizar o login
        Quando submeto meu email com "<entrada_email>" e senha com "<entrada_senha>"
        Entao vejo a mensagem de erro: "<error>"

        Exemplos:
            | entrada_email                 | entrada_senha  | error                      |
            | jeff.com                      | 123456         | Invalid email address.     |
            | jefferson.lsilva@me.com.br    | senhaerrada    | Authentication failed.     |
            |                               |                | An email address required. |
            |                               | 123456         | An email address required. |
            | jefferson.lsilva@me.com.br    |                | Password is required.      |
            | jeffcadastrar@me.com          | 123456         | Authentication failed.     |


