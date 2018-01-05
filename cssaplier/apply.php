<html>
<?php
$url = 'http://twitter.com/statuses/user_timeline.rss?screen_name=google&count=6';
$homepage = curl($url);
echo $homepage; //information recieved
?>
<link rel='stylesheet' href='dailynintendoapp/style.css' type='text/css'/>


</html>

function curl($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}