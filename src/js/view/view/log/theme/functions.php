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
      }
    }
    return $result;
  };

  $DIR = __DIR__;
  $jsFile = get_js("$DIR/assets/js/WordPress/");
  wp_enqueue_script('WordPress', get_template_directory_uri()."/assets/js/WordPress/$jsFile", array(), '1.0', true);
  if (is_page('catalog')) {
    $jsFile = get_js("$DIR/assets/js/catalog/");
    wp_enqueue_script('catalog', get_template_directory_uri()."/assets/js/catalog/$jsFile", array(), '1.0', true);
  } else {
    if (is_page('contacts')) {
      $jsFile = get_js("$DIR/assets/js/contacts/");
      wp_enqueue_script('contacts', get_template_directory_uri()."/assets/js/contacts/$jsFile", array(), '1.0', true);
    } else {
      if (is_page('delivery')) {
        $jsFile = get_js("$DIR/assets/js/delivery/");
        wp_enqueue_script('delivery', get_template_directory_uri()."/assets/js/delivery/$jsFile", array(), '1.0', true);
      } else {
        if (is_page('quality')) {
          $jsFile = get_js("$DIR/assets/js/quality/");
          wp_enqueue_script('quality', get_template_directory_uri()."/assets/js/quality/$jsFile", array(), '1.0', true);
        } else {
          $jsFile = get_js("$DIR/assets/js/index/");
          wp_enqueue_script('index', get_template_directory_uri()."/assets/js/index/$jsFile", array(), '1.0', true);
        }
      }
    }
  }
});

add_theme_support('post-thumbnails');
add_theme_support('title-tag');

add_action('after_setup_theme', 'crb_load');
function crb_load() {
  require_once('includes/carbon-fields/vendor/autoload.php');
  \Carbon_Fields\Carbon_Fields:: boot();
}

add_action('carbon_fields_register_fields', 'register_carbon_fields');
function register_carbon_fields() {
  require_once('includes/carbon-fields-options/theme-options.php');
}

add_action('init', 'create_global_variable');
function create_global_variable() {
  $DIR = __DIR__;
  $siteUrl = $_SERVER['DOCUMENT_ROOT'];

  if (!is_dir("$DIR/database")) {
    mkdir("$DIR/database");
  };
  function get_img_url($value){
    if (is_numeric($value)) {
     $img = array();
     $img['mini'] = wp_get_attachment_image_url($value, 'medium');
     $img['table'] = wp_get_attachment_image_url($value, 'large');
     $img['desktop'] = wp_get_attachment_image_url($value, 'full');
     return $img;
    } elseif (is_array($value)) {
        return array_map("get_img_url", $value);
    } else {
        return $value;
    }
  };

  $contactsDir = "$DIR/database/contacts.json";
  $productDir = "$DIR/database/product.json";
  $indexDir = "$DIR/database/index.json";
  $qualityDir = "$DIR/database/quality.json";
  $rootDir = "$siteUrl/dir.json";

  // Dir data as an array
  $DataDir = [
        "dir" => get_template_directory_uri(),
  ];
  // Contacts data as an array
  $DataContacts = [
        "typeText" => [
          "addressStart" => carbon_get_theme_option('address-start'),
          "addressEnd" => carbon_get_theme_option('address-end'),
          "tin" => carbon_get_theme_option('tin'),
          "psrn" => carbon_get_theme_option('psrn'),
          "addressRegister" => carbon_get_theme_option('address-register'),
        ],
        "typePhone" => [
          "tell" => carbon_get_theme_option('tell'),
          "cell" => carbon_get_theme_option('cell'),
        ],
        "typeCoordinates" => carbon_get_theme_option('coordinates'),
        "typeAddressLink" => carbon_get_theme_option('address-link'),
  ];
  // Index data as an array
  $DataIndex = get_img_url([
        "video" => [
          "posterCatalog" => carbon_get_theme_option('index_poster_video_catalog'),
          "linkCatalog" => carbon_get_theme_option('index_link_video_catalog'),
          "posterCheesecakes" => carbon_get_theme_option('index_poster_video_cheesecakes'),
          "linkCheesecakes" => carbon_get_theme_option('index_link_video_cheesecakes'),
        ],
        "slider" => carbon_get_theme_option('index_gallery'),
  ]);
  // Quality data as an array
  $DataQuality = get_img_url([
        "video" => [
          "posterQuality" => carbon_get_theme_option('quality_poster_video_catalog'),
          "linkQuality" => carbon_get_theme_option('quality_link_video_catalog'),
        ],
        "qualityStatement" => carbon_get_theme_option('quality_statement'),
        "productCertification" => carbon_get_theme_option('product_certification'),
  ]);
  // Product data as an array
  $cheesecakes = get_img_url(carbon_get_theme_option('cheesecakes'));
  $cakes = get_img_url(carbon_get_theme_option('cakes'));
  $DataProduct = [
    "cheesecakes" => $cheesecakes,
    "cakes" => $cakes,
  ];

  // Convert JSON data from an array to a string
  $jsonContacts = json_encode($DataContacts, JSON_PRETTY_PRINT);
  $jsonProduct = json_encode($DataProduct, JSON_PRETTY_PRINT);
  $jsonIndex = json_encode($DataIndex, JSON_PRETTY_PRINT);
  $jsonQuality = json_encode($DataQuality, JSON_PRETTY_PRINT);
  $jsonDir = json_encode($DataDir, JSON_PRETTY_PRINT);
  // Write+ dir in the file
  function writeJson($path, $json){
    $fp = fopen($path, 'w+');
    fwrite($fp, $json);
    fclose($fp);
  };
  writeJson($rootDir, $jsonDir);
  writeJson($productDir, $jsonProduct);
  writeJson($contactsDir, $jsonContacts);
  writeJson($indexDir, $jsonIndex);
  writeJson($qualityDir, $jsonQuality);
  
  $testDir = "$DIR/database/test.json";
  $DataTest = get_img_url(carbon_get_theme_option('cheesecakes'));
  $jsonTest = json_encode($DataTest, JSON_PRETTY_PRINT);
  writeJson($testDir, $jsonTest);
}


//Del emoji js wp
function plug_disable_emoji() {
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
  add_filter( 'tiny_mce_plugins', 'plug_disable_tinymce_emoji' );
}
add_action( 'init', 'plug_disable_emoji', 1 );
 
/**
 * Очистить в tinymce
 */
function plug_disable_tinymce_emoji( $plugins ) {
  return array_diff( $plugins, array( 'wpemoji' ) );
}
?>