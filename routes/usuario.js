var express = require('express');

var app = express();

let _ctrl = require('../controllers/usuario-controller');

// ==========================================
// Obter todos os usuarios
// ==========================================
app.get('/',_ctrl.obterUsuarios);

// ==========================================
// Atualizar usuario
// ==========================================
app.put('/:id',_ctrl.atualizaUsuario);

// ==========================================
// Criar um novo usuario
// ==========================================
app.post('/',_ctrl.criarUsuario);

// ============================================
//   Deletar/Excluir um usuario por seu id
// ============================================
app.delete('/:id',_ctrl.deletarUsuario);

module.exports = app;