import firebase from "firebase/app";
import "firebase/storage";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFV8jRdARdaGxsU-ET_5gQkm2Gzf75bGE",
  authDomain: "futmais-7da3f.firebaseapp.com",
  projectId: "futmais-7da3f",
  storageBucket: "futmais-7da3f.appspot.com", // Aqui você insere o caminho do seu Storage Bucket
  messagingSenderId: "476442590443",
  appId: "1:476442590443:web:246aa3c2bf0210723f52ae",
};

// Inicialize o Firebase se ainda não estiver inicializado
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

// Função para obter a URL da imagem no Firebase Storage
async function getImageURL(imagePath) {
  try {
    const imageRef = storage.ref().child(imagePath);
    const url = await imageRef.getDownloadURL();
    return url;
  } catch (error) {
    console.error("Erro ao obter URL da imagem:", error);
    return null;
  }
}

// Função para popular a tabela com as imagens do Firebase Storage
async function populateTableWithImages() {
  const table = document.querySelector("table");
  const playerRows = table.querySelectorAll(".player-row");

  playerRows.forEach(async (row) => {
    const imgElement = row.querySelector("img");
    const imagePath = imgElement.src; // Caminho local da imagem no HTML

    const imageURL = await getImageURL(imagePath);
    if (imageURL) {
      imgElement.src = imageURL; // Atualiza o src da imagem com a URL do Firebase Storage
    }
  });
}

// Chama a função para popular a tabela com as imagens do Firebase Storage
populateTableWithImages();
