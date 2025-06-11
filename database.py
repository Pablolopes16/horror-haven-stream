import sqlite3

banco = sqlite3.connect('database_cineflow.db')

nome = "heloisa"
sobrenome = "sobrenome"
senha = 12234
email = "email"


cursor = banco.cursor()

#cursor.execute("CREATE TABLE clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, sobrenome text, email text, senha text, data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP)")
 
cursor.execute("INSERT INTO clientes VALUES(NULL, '" + str(nome) + "', '" + str(sobrenome) + "', '" + str(senha) + "', '" + str(email) + "', NULL)")

#banco.commit()

#banco.commit()
#cursor.execute("CREATE TABLE planos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL UNIQUE, preco_mensal REAL NOT NULL, qualidade_video TEXT NOT NULL, telas_simultaneas INTEGER NOT NULL, downloads_disponiveis BOOLEAN NOT NULL, dispositivos_download INTEGER NOT NULL, acesso_sem_anuncios BOOLEAN NOT NULL, erfis_personalizados BOOLEAN NOT NULL, acesso_antecipado_exclusivo BOOLEAN NOT NULL)")

#banco.commit()

#cursor.execute("CREATE TABLE ASSINATURAS(id INTEGER PRIMARY KEY AUTOINCREMENT, cliente_id INTEGER NOT NULL, plano_id INTEGER NOT NULL, data_inicio DATE NOT NULL, data_fim DATE NOT NULL, status TEXT NOT NULL CHECK(status IN ('ativa', 'cancelada', 'expirada')), FOREIGN KEY (cliente_id) REFERENCES clientes(id), FOREIGN KEY (plano_id) REFERENCES planos(id))")

#banco.commit()

#PLANO ESSENCIAL
#cursor.execute("INSERT INTO planos VALUES(NULL, 'Plano Essencial', 19.90, 'HD (720p)', 1, False, 0, False, False, False)")

#banco.commit()
#banco.execute("SELECT * FROM planos")
#print(cursor.fetchall())

#PLANO PREMIUM
#cursor.execute("INSERT INTO planos VALUES(NULL, 'Plano Premium', 29.90, 'Full HD (1080p)', 2, True, 1, True, True, False)")

#banco.commit()

#PLANO MASTER
#cursor.execute("INSERT INTO planos VALUES(NULL, 'Plano Master', 44.90, 'Ultra HD 4K + Áudio Dolby Atmos', 4, True, 4, True, True, True)")

#banco.commit()