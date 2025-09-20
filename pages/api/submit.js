export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nom, email, message } = req.body;

    // Ici tu peux :
    // - enregistrer dans une base de données
    // - envoyer un email
    // - afficher dans les logs
    console.log('Réponse reçue :', { nom, email, message });

    res.status(200).json({ message: 'Formulaire reçu avec succès !' });
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
