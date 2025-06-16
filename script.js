const bijoux = [
    { nom: "Collier en or", type: "or", image: "images/collieror.jpg", prix: 120  },
    { nom: "Bracelet en argent", type: "argent", image: "images/braceletargent.jpg" , prix: 80 },
    { nom: "Boucles fantaisie", type: "fantaisie", image: "images/bouclesfleurs.jpg", prix: 35 },
    { nom: "Bague en or", type: "or", image: "images/bagueor.jpg" , prix: 500 },
    { nom: "Collier fantaisie", type: "fantaisie", image: "images/collierfantaisie2.jpg", prix: 40 },
    { nom: "Bague en argent", type: "argent", image: "images/bagueargent.jpg" , prix: 500 },
    { nom: "Bague fantaisie", type: "fantaisie", image: "images/baguefantaisie.jpg" , prix: 500 },
    { nom: "Bracelet fantaisie", type: "fantaisie", image: "images/braceletfantaisie.jpg" , prix: 500 },

    
  ];
  
  
  function afficherBijoux(liste) {
    const conteneur = document.getElementById("produits");
    if (!conteneur) return;
    conteneur.innerHTML = "";
    liste.forEach(bijou => {
      const div = document.createElement("div");
      div.className = "produit";
      div.innerHTML = `
        <img src="${bijou.image}" alt="${bijou.nom}" class="image-produit" />
        <p>${bijou.nom}</p>
        <p><strong>Prix : </strong>${bijou.prix} €</p>
        <button onclick="ajouterAuPanier('${bijou.nom}')">Ajouter au panier</button>
      `;
      conteneur.appendChild(div);
    });
  }
  
  
  function filtrerParType(type) {
    if (type === "tous") {
      afficherBijoux(bijoux);
    } else {
      const filtrés = bijoux.filter(b => b.type === type);
      afficherBijoux(filtrés);
    }
  }
  
  function rechercher() {
    const terme = document.getElementById("recherche").value.toLowerCase();
    const résultats = bijoux.filter(b => b.nom.toLowerCase().includes(terme));
    afficherBijoux(résultats);
  }
  
  window.onload = () => {
    afficherBijoux(bijoux);
  };
  
  let panier = [];

  function ajouterAuPanier(nom) {
    const bijou = bijoux.find(b => b.nom === nom);
    if (bijou) {
      let panier = JSON.parse(localStorage.getItem("panier")) || [];
  
      const index = panier.findIndex(item => item.nom === nom);
      if (index !== -1) {
        // Le bijou existe déjà → on augmente la quantité
        panier[index].quantite += 1;
      } else {
        // Nouveau bijou → on l’ajoute avec une quantité de 1
        panier.push({ ...bijou, quantite: 1 });
      }
  
      localStorage.setItem("panier", JSON.stringify(panier));
      alert(`${nom} ajouté au panier !`);
    }
  }
  #code-promo-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 300px;
  }
  
  #code-promo {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  
  #code-promo-container button {
    background-color: #cf9fff;
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
  }
  
  #code-promo-container button:hover {
    background-color: #bb80ff;
  }
  
  
  



  