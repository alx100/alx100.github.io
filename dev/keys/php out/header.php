<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?></title>
    <meta name="description" content="<?php echo $pageDescription; ?>">
    <link media="all" rel="stylesheet" href="assets/css/vendor.min.css">
    <link media="all" rel="stylesheet" href="assets/css/style.min.css">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicons/favicon-16x16.png">
    <link rel="manifest" href="assets/images/favicons/manifest.json">
    <link rel="mask-icon" href="assets/images/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
    <?php $url = $_SERVER['PHP_SELF']?>
    <div id="wrapper">
        <header id="header">
            <div class="container">
                <div class="header-holder">
                    <a href="/" class="logo">
                        <img src="assets/images/logo-clef-voiture-toulouse.png" alt="logo-clef-voiture-toulouse">
                    </a>
                    <span class="nav-opener">
                        <span></span><span></span><span></span>
                    </span>
                    <ul class="nav">
                        <li <?php if($url == "/index.php"){echo "class='active'";}?>><a href="index.php">Accueil</a></li>
                        <li <?php if($url == "/presentation-clef-voiture-toulouse.php"){echo "class='active'";}?>><a href="presentation-clef-voiture-toulouse.php">qui sommes-nous</a></li>
                        <li <?php if($url == "/reproduction-clef-de-voiture-a-toulouse.php"){echo "class='active'";}?>><a href="reproduction-clef-de-voiture-a-toulouse.php">Reproduction clef auto</a></li>
                        <li <?php if($url == "/contacter-entreprise-reproduction-cle-voiture-toulouse.php"){echo "class='active'";}?>><a href="contacter-entreprise-reproduction-cle-voiture-toulouse.php">Demande de  devis</a></li>
                    </ul>
                </div>
            </div>
        </header>