rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /Usuarios/{usuarioId} {
      // Permite leer y crear documentos de usuarios
      allow read, create: if true;
      // Modificación o eliminación opcional
      allow update, delete: if true;
    }
  }
}