-- Criar banco de dados
CREATE DATABASE PlataformaTerror;
USE PlataformaTerror;

-- Tabela: usuarios
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela: generos
CREATE TABLE generos (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    nome_genero VARCHAR(50) NOT NULL
);

-- Tabela: filmes
CREATE TABLE filmes (
    id_filme INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    ano YEAR,
    duracao INT, -- em minutos
    link_video VARCHAR(255),
    imagem_capa VARCHAR(255),
    id_genero INT,
    FOREIGN KEY (id_genero) REFERENCES generos(id_genero)
);

-- Tabela: avaliacoes
CREATE TABLE avaliacoes (
    id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_filme INT,
    nota INT CHECK (nota BETWEEN 1 AND 5),
    comentario TEXT,
    data_avaliacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_filme) REFERENCES filmes(id_filme)
);

-- Tabela: planos
CREATE TABLE planos (
    id_plano INT AUTO_INCREMENT PRIMARY KEY,
    nome_plano VARCHAR(50) NOT NULL,
    preco DECIMAL(6,2) NOT NULL,
    descricao TEXT
);

-- Tabela: assinaturas
CREATE TABLE assinaturas (
    id_assinatura INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_plano INT,
    data_inicio DATE,
    data_fim DATE,
    ativo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_plano) REFERENCES planos(id_plano)
);

-- Tabela: favoritos
CREATE TABLE favoritos (
    id_usuario INT,
    id_filme INT,
    data_adicionado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_usuario, id_filme),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_filme) REFERENCES filmes(id_filme)
);

-- Tabela: historico
CREATE TABLE historico (
    id_usuario INT,
    id_filme INT,
    data_assistido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_usuario, id_filme, data_assistido),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_filme) REFERENCES filmes(id_filme)
);
