<!DOCTYPE html>
<?php
$notes = array('do' => 'C', 'ré' => 'D', 'mi' => 'E', 'fa' => 'F', 'sol' =>'G', 'la' => 'A', 'si' => 'B');
$result = "";
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    if(!empty($_POST["note_classique"]))
    {
        $note = $_POST['note_classique'];
        $result = '<p>La note classique \' '.$note.' \' correspond à la note américaine \' '.$notes[$note].' \'</p>';
    }
    echo $result;
    return;
}
?>

<html lang='fr'>
    <head>
        <meta charset="UTF-8" />
        <title>Correspondance américaine d'une note de musique</title>
        <script type="text/javascript" src="js/script.js"></script>
    </head>
    <body>
        <h1>Correspondance des notes de musique classiques et anglaises</h1>
        <form id="form1" action="index.php" method="post">
            <fieldset>
                <legend>Correspondance classique->anglaise</legend>
                <p>Choisissez une note :</p>
                <select name="note_classique">
                    <option value="">Choix</option>
                    <?php
                    foreach ($notes as $note_classique => $note_americaine)
                    {
                        echo '<option value="'.$note_classique.'">'.$note_classique.'</option>';
                    }
                    ?>
                </select>
                </br><p><input type="submit" name="envoyer" value="Afficher la correspondance" /></p>
                <div id="resultat">
                    <?php echo $result; ?>
                </div>
            </fieldset>
        </form>
        <div id="result1">
        </div>
    </body>
</html>
