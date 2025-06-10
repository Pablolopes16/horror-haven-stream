def cadastrar_usuario():
    print("=== Cadastro de Usuário ===")

    nome = input("Digite seu nome: ").strip()
    sobrenome = input("Digite seu sobrenome: ").strip()

    # Confirmação de e-mail
    while True:
        email = input("Digite seu e-mail: ").strip()
        confirmar_email = input("Confirme seu e-mail: ").strip()
        if email == confirmar_email:
            break
        else:
            print("Os e-mails não coincidem. Tente novamente.")

    # Confirmação de senha
    while True:
        senha = input("Digite sua senha: ").strip()
        confirmar_senha = input("Confirme sua senha: ").strip()
        if senha == confirmar_senha:
            break
        else:
            print("As senhas não coincidem. Tente novamente.")

    # Simula salvar os dados
    usuario = {
        "nome": nome,
        "sobrenome": sobrenome,
        "email": email,
        "senha": senha  # Em produção, nunca salve senhas assim. Use hash!
    }

    print("\nUsuário cadastrado com sucesso!")
    print("Dados cadastrados:")
    print(f"Nome completo: {usuario['nome']} {usuario['sobrenome']}")
    print(f"E-mail: {usuario['email']}")

# Executar função
cadastrar_usuario()
