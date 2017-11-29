<?php
$pageTitle = 'Contacter Clef voiture Toulouse pour obtenir un devis rapide';
$pageDescription = ': Vous avez besoin de faire réparer ou remplacer votre clef de voiture ? Contactez notre société, à Toulouse, par téléphone ou en nous envoyant un message via le formulaire';
include('header.php');
?>
   <div class="banner banner-sm" style="background-image: url(assets/images/banner4.jpg);">
            <div class="banner-inner">
                <div class="container">
                    <h1 class="slogan-holder text-center">
                            <strong class="top">demande de devis <br>simple et rapide</strong>                       
                    </h1>
                </div>
            </div>
        </div>
        <main>
            <div id="contetn">
                <section class="contact">
                    <img src="assets/images/Kia-Keyless-Remote-Fob-Car-Key.png" class="position9" alt="Kia-Keyless-Remote-Fob-Car-Key">
                    <img src="assets/images/illustration1.svg" class="position8" alt="cer illustration">
                    <img src="assets/images/illustration2.svg" class="position7" alt="cer illustration">
                    <div class="container">
                        <form action="#" class="contact-form">
                            <div class="col">
                                <h2 class="h2">devis en ligne POUR LA <br>  REPRODUCTION DE VOTRE CLé <br>   de voiture</h2>
                                <p>
                                    Vous habitez Toulouse, vous avez perdu votre clef de voiture, et vous avez besoin de la faire reproduire au plus vite ?</p>
                                <p>
                                    N’attendez pas plus longtemps, prenez contact avec notre société ! Un devis personnalisé vous sera établi dans les plus brefs délais.</p>
                                <p>N’hésitez pas à nous envoyer un message en remplissant le formulaire ci-dessous pour nous faire part de votre demande !</p>
                                <input type="text" placeholder="Marque :" required>
                                <input type="text" placeholder="Modèle :" required>
                                <input type="text" placeholder="Année du véhicule:">
                            </div>
                            <div class="col">
                                <input type="text" placeholder="Nom & Prénom :" required>
                                <input type="tel" placeholder="Téléphone :" required>
                                <input type="email" placeholder="Email :">
                                <input type="text" placeholder="Adresse :">
                                <textarea cols="30" rows="10" placeholder="Message :"></textarea>
                                <button type="submit">ENVOYER</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
        <?php
include ('footer.php');
?>