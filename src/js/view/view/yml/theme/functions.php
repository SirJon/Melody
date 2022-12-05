<?php

add_action('wp_enqueue_scripts', function () {

  function get_js($dir) {
    if (!is_dir($dir))
      return array();

    $result = "";

    $dir = rtrim($dir, '/\\'); // удалим слэш на конце

    foreach(glob("$dir/{,.}[!.,!..]*", GLOB_BRACE) as $file){
      if (!is_dir($file)) {
        $nameFile = array_pop(explode('/', $file));
        $result = $nameFile;
      };
    };
    return $result;
  };

  $DIR = __DIR__;
  $siteUrl = $_SERVER['DOCUMENT_ROOT'];

  $jsFile = get_js("$DIR/assets/WordPress/");
  wp_enqueue_script('WordPress', get_template_directory_uri()."/assets/WordPress/$jsFile", array(), '1.0', true);
  if (is_page('catalog')) {
    $jsFile = get_js("$DIR/assets/catalog/");
    wp_enqueue_script('catalog', get_template_directory_uri()."/assets/catalog/$jsFile", array(), '1.0', true);
  } else {
    if (is_page('contacts')) {
      $jsFile = get_js("$DIR/assets/contacts/");
      wp_enqueue_script('contacts', get_template_directory_uri()."/assets/contacts/$jsFile", array(), '1.0', true);
    } else {
      if (is_page('delivery')) {
        $jsFile = get_js("$DIR/assets/delivery/");
        wp_enqueue_script('delivery', get_template_directory_uri()."/assets/delivery/$jsFile", array(), '1.0', true);
      } else {
        $jsFile = get_js("$DIR/assets/index/");
        wp_enqueue_script('index', get_template_directory_uri()."/assets/index/$jsFile", array(), '1.0', true);
      };
    };
  };
});

function writeJson($path, $data){
  $json = json_encode($data, JSON_PRETTY_PRINT);
  $fp = fopen($path, 'w+');
  fwrite($fp, $json);
  fclose($fp);
};

$rootDir = "/var/www/u1764616/data/www/npoalex.com/dir.json";
$DataDir = [
  "dir" => get_template_directory_uri(),
];
writeJson($rootDir, $DataDir);

add_theme_support( 'post-thumbnails' );
add_theme_support( 'title-tag' );
?>