fetch('patisserie.json')
    .then(response => response.json())
    .then(data => {


        //appeler afficherProduits
    
        console.log(data)
        console.log(data.nomCommercial)
        console.log(data.phraseAccroche)

        afficherPatisserie(data.produits)
        afficherServices(data.services)
        afficherTemoignages(data.temoignages)
    })

//role : afficher dans la page web les cartes des produits 
//parametres : des produits -> tableau d'objets 
//retur : rien 


    function afficherPatisserie(tabPatisserie){

        // pour chacune des patisserie du talbeau je les affiche
        tabPatisserie.forEach(patisserie => {
            // j'accede a ma donnée et je verifie que j'arrive bien a recuperer chaque clé
            let nom = patisserie.nom 
            let description = patisserie.description
            let imageUrl = patisserie.imageUrl


            console.log(nom,description,imageUrl)

            // Afficher les petites cartes pour chaque produits dans le html dans la div qui a l'id : cartes
            document.getElementById("cartes").innerHTML += ` 
            <div class="card-2 w-30">
                    <img class="w-48" src="${imageUrl}" alt="">
                    <h3>${nom}</h3>
                    <p>${description}</p>
            </div>` 
        });

    }

//role : afficher dans la page web les cartes des services
//parametres : des services -> tableau d'objets 
//retur : rien 


    function afficherServices(services){

        // pour chacune des patisserie du tableau je les affiche
        
            
            // Afficher les petites cartes pour chaque produits dans le html dans la div qui a l'id : cartes
            document.getElementById("container-des-services").innerHTML += ` 
            <div>
                <img src="" alt="">
                <div>
                    <h3>${services[0].nom}</h3>
                    <p>${services[0].description}</p>
                </div>
            </div>

            <div>
                
                <div>
                    <h3>${services[1].nom}</h3>
                    <p>${services[1].description}</p>
                </div>
                <img src="" alt="">
            </div>

            <div>
                <img src="" alt="">
                <div>
                    <h3>${services[2].nom}</h3>
                    <p>${services[2].description}</p>
                </div>
            </div>`
        

    }

//role : afficher dans la page web les cartes des temoignages 
//parametres : des temoignages -> tableau d'objets 
//retur : rien 


    function afficherTemoignages(tabTemoignages){

        // pour chacune des patisserie du talbeau je les affiche
        tabTemoignages.forEach(temoignage => {

            // Afficher les petites cartes pour chaque produits dans le html dans la div qui a l'id : cartes
            document.getElementById("cartes3").innerHTML += `
            <!-- div 1 -->
            <div class="card margin-top-30 w-25 border-1 padding-30">

                <h3>${temoignage.prenom}</h3>

                <h4>${temoignage.typeExperience}</h4>

                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>


                <img src="" alt="">

                <p>${temoignage.commentaire}</p>

            </div> 

            ` 
        });

    }