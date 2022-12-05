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

  wp_enqueue_style('Montserrat', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

  $jsFile = get_js("$DIR/assets/js/WordPress/");
  wp_enqueue_script('WordPress', get_template_directory_uri()."/assets/js/WordPress/$jsFile", array(), '1.0', true);
  if (is_page('galary')):
    $jsFile = get_js("$DIR/assets/js/galary/");
    wp_enqueue_script('galary', get_template_directory_uri()."/assets/js/galary/$jsFile", array(), '1.0', true);
  elseif(is_page('contacts')):
    $jsFile = get_js("$DIR/assets/js/contacts/");
    wp_enqueue_script('contacts', get_template_directory_uri()."/assets/js/contacts/$jsFile", array(), '1.0', true);
  elseif(is_page('delivery')):
    $jsFile = get_js("$DIR/assets/js/delivery/");
    wp_enqueue_script('delivery', get_template_directory_uri()."/assets/js/delivery/$jsFile", array(), '1.0', true);
  else:
    $jsFile = get_js("$DIR/assets/js/index/");
    wp_enqueue_script('index', get_template_directory_uri()."/assets/js/index/$jsFile", array(), '1.0', true);
  endif;
});


add_theme_support( 'post-thumbnails' );
add_theme_support( 'title-tag' );

add_action('after_setup_theme', 'crb_load');
function crb_load() {
  require_once('includes/carbon-fields/vendor/autoload.php');
  \Carbon_Fields\Carbon_Fields:: boot();
}

add_action('carbon_fields_register_fields', 'register_carbon_fields');
function register_carbon_fields() {
  require_once('includes/carbon-fields-options/theme-options.php');
}

add_action( 'admin_enqueue_scripts', 'crb_enqueue_custom_carbon_fields_styles' );
function crb_enqueue_custom_carbon_fields_styles() {
	wp_enqueue_style( 'carbon-fields-custom-theme', get_template_directory_uri() . '/style.css' );
}

add_action('init', 'create_json');
function create_json() {
  $DIR = __DIR__;
  $siteUrl = $_SERVER['DOCUMENT_ROOT'];

  function createFolder($dir){
    if (!is_dir($dir)) {
      mkdir($dir);
    };
  };
  createFolder("$DIR/database");
  createFolder("$DIR/database/popup");
  createFolder("$DIR/database/page");
  createFolder("$DIR/database/page/index");
  createFolder("$DIR/database/page/galary");
  createFolder("$DIR/database/page/delivery");
  createFolder("$DIR/database/page/contacts");

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

  // Write+ dir in the file
  function writeJson($path, $data){
    $json = json_encode($data, JSON_PRETTY_PRINT);
    $fp = fopen($path, 'w+');
    fwrite($fp, $json);
    fclose($fp);
  };

  $rootDir = "$siteUrl/dir.json";

  $mashine = "$DIR/database/page/index/mashine.json";
  $galary = "$DIR/database/page/galary/galary.json";
  $index = "$DIR/database/page/index/index.json";
  $delivery = "$DIR/database/page/delivery/delivery.json";
  $contacts = "$DIR/database/page/contacts/contacts.json";
  $address = "$DIR/database/address.json";
  $certificate = "$DIR/database/certificate.json";
  $popupEquipment = "$DIR/database/popup/popupEquipment.json";
  $popupBuy = "$DIR/database/popup/popupBuy.json";
  $cost = "$DIR/database/page/index/cost.json";
  $privacy = "$DIR/database/popup/privacy-policy.json";
  $user_agreement = "$DIR/database/popup/user-agreement.json";


  $privacyData = [
    "ru" => carbon_get_theme_option('privacy_policy_ru'),
    "en" => carbon_get_theme_option('privacy_policy_en'),
  ];
  $user_agreementData = [
    "ru" => carbon_get_theme_option('user_agreement_ru'),
    "en" => carbon_get_theme_option('user_agreement_en'),
  ];
  $DataDir = [
    "dir" => get_template_directory_uri(),
  ];
  $certificateData = [
    "certificate" => get_img_url(carbon_get_theme_option('index_certificate')),
  ];
  $R1300IndexData = [
    "slideImg" => get_img_url(carbon_get_theme_option('index_r1300_swiper')),
    "video" => [
      "id" => carbon_get_theme_option('index_video_mashine_r1300'),
      "start" => carbon_get_theme_option('index_video_mashine_r1300_time_start'),
      "end" => carbon_get_theme_option('index_video_mashine_r1300_time_end'),
    ],
    "characteristics" => [
      "performance" => carbon_get_theme_option('index_r1300_performance'),
      "power" => carbon_get_theme_option('index_r1300_power'),
      "voltage" => carbon_get_theme_option('index_r1300_voltage'),
      "frequency" => carbon_get_theme_option('index_r1300_frequency'),
      "turbine" => carbon_get_theme_option('index_r1300_turbine'),
      "dimensions_length" => carbon_get_theme_option('index_r1300_dimensions_length'),
      "dimensions_width" => carbon_get_theme_option('index_r1300_dimensions_width'),
      "dimensions_height" => carbon_get_theme_option('index_r1300_dimensions_height'),
      "mass" => carbon_get_theme_option('index_r1300_mass'),
      "diameter" => carbon_get_theme_option('index_r1300_diameter'),
      "length" => carbon_get_theme_option('index_r1300_length'),
      "height" => carbon_get_theme_option('index_r1300_height'),
      "range" => carbon_get_theme_option('index_r1300_range'),
      "control" => carbon_get_theme_option('index_r1300_control'),
      "guarantee" => carbon_get_theme_option('index_r1300_guarantee'),
    ]
  ];
  $R1300GalaryData = [
    'img' => get_img_url(carbon_get_theme_option('galary_r1300_img')),
    "video" => carbon_get_theme_option('galary_r1300'),
  ];
  $R800IndexData = [
    "slideImg" => get_img_url(carbon_get_theme_option('index_r800_swiper')),
    "video" => [
      "id" => carbon_get_theme_option('index_video_mashine_r800'),
      "start" => carbon_get_theme_option('index_video_mashine_r800_time_start'),
      "end" => carbon_get_theme_option('index_video_mashine_r800_time_end'),
    ],
    "characteristics" => [
      "performance" => carbon_get_theme_option('index_r800_performance'),
      "power" => carbon_get_theme_option('index_r800_power'),
      "voltage" => carbon_get_theme_option('index_r800_voltage'),
      "frequency" => carbon_get_theme_option('index_r800_frequency'),
      "turbine" => carbon_get_theme_option('index_r800_turbine'),
      "dimensions_length" => carbon_get_theme_option('index_r800_dimensions_length'),
      "dimensions_width" => carbon_get_theme_option('index_r800_dimensions_width'),
      "dimensions_height" => carbon_get_theme_option('index_r800_dimensions_height'),
      "mass" => carbon_get_theme_option('index_r800_mass'),
      "diameter" => carbon_get_theme_option('index_r800_diameter'),
      "length" => carbon_get_theme_option('index_r800_length'),
      "height" => carbon_get_theme_option('index_r800_height'),
      "range" => carbon_get_theme_option('index_r800_range'),
      "control" => carbon_get_theme_option('index_r800_control'),
      "guarantee" => carbon_get_theme_option('index_r800_guarantee'),
    ]
  ];
  $R800GalaryData = [
    'img' => get_img_url(carbon_get_theme_option('galary_r800_img')),
    "video" => carbon_get_theme_option('galary_r800'),
  ];
  $mashineData = [
    "R1300" => $R1300IndexData,
    "R800" => $R800IndexData,
  ];
  $costData = [
      "R1300" => carbon_get_theme_option('index_r1300_cost'),
      "R800" => carbon_get_theme_option('index_r800_cost'),
      "options" => carbon_get_theme_option('option_cost'),
      "mass" => carbon_get_theme_option('index_r1300_mass'),
  ];
  $deliveryData = [
    "R1300" => [
      "length" => carbon_get_theme_option('index_r1300_dimensions_length'),
      "width" => carbon_get_theme_option('index_r1300_dimensions_width'),
      "height" => carbon_get_theme_option('index_r1300_dimensions_height'),
      "mass" => carbon_get_theme_option('index_r1300_mass'),
      "cost" => carbon_get_theme_option('index_r1300_cost'),
    ],
    "R800" => [
      "length" => carbon_get_theme_option('index_r800_dimensions_length'),
      "width" => carbon_get_theme_option('index_r800_dimensions_width'),
      "height" => carbon_get_theme_option('index_r800_dimensions_height'),
      "mass" => carbon_get_theme_option('index_r800_mass'),
      "cost" => carbon_get_theme_option('index_r800_cost'),
    ],
    "options" => [
      "length" => carbon_get_theme_option('option_length'),
      "width" => carbon_get_theme_option('option_width'),
      "height" => carbon_get_theme_option('option_height'),
      "mass" => carbon_get_theme_option('option_mass'),
      "cost" => carbon_get_theme_option('option_cost'),
    ],
  ];

  $indexData = [
    "cover" => [
      "R1300" => get_img_url(carbon_get_theme_option('index_r1300_radio')),
      "R800" => get_img_url(carbon_get_theme_option('index_r800_radio')),
    ],
    "slider" => get_img_url(carbon_get_theme_option('index_swiper')),
    "video" => [
      "id" => carbon_get_theme_option('index_video_slider'),
      "start" => carbon_get_theme_option('index_video_mashine_r1300_time_start'),
      "end" => carbon_get_theme_option('index_video_mashine_r1300_time_end'),
    ],
  ];

  $popupEquipmentData = [
    "mashine" => [
      "R1300" => get_img_url(carbon_get_theme_option('index_equipment_installation_r1300')),
      "R800" => get_img_url(carbon_get_theme_option('index_equipment_installation_r800')),
    ],
    "control" => get_img_url(carbon_get_theme_option('index_equipment_control')),
    "hose" => get_img_url(carbon_get_theme_option('index_equipment_hose')),
    "pump" => get_img_url(carbon_get_theme_option('index_equipment_pump')),
    "nozzle" => get_img_url(carbon_get_theme_option('index_equipment_nozzle')),
    "scraper" => get_img_url(carbon_get_theme_option('index_equipment_scraper')),
  ];

  $popupBuyData = [
    "R1300" => [
      "base" => get_img_url(carbon_get_theme_option('popup_buy_r1300_base')),
      "options" => get_img_url(carbon_get_theme_option('popup_buy_option')),
      "full" => get_img_url(carbon_get_theme_option('popup_buy_r1300_full')),
    ],
    "R800" => [
      "base" => get_img_url(carbon_get_theme_option('popup_buy_r800_base')),
      "options" => get_img_url(carbon_get_theme_option('popup_buy_option')),
      "full" => get_img_url(carbon_get_theme_option('popup_buy_r800_full')),
    ],
  ];

  $contactsData = [
    "ru" => [
      "tell" => carbon_get_theme_option('tell'),
      "link" => carbon_get_theme_option('address_link'),
      "email" => carbon_get_theme_option('email'),
      "address" => carbon_get_theme_option('address_ru'),
    ],
    "en" => [
      "tell" => carbon_get_theme_option('tell'),
      "link" => carbon_get_theme_option('address_link'),
      "email" => carbon_get_theme_option('email'),
      "address" => carbon_get_theme_option('address_en'),
    ],
    "coordinates" => carbon_get_theme_option('coordinates'),
  ];

  $addressData = [
    "ru" => carbon_get_theme_option('address_ru'),
    "en" => carbon_get_theme_option('address_en'),
  ];

  $galaryData = [
    "R1300" => $R1300GalaryData,
    "R800" => $R800GalaryData,
  ];

  writeJson($rootDir, $DataDir);

  writeJson($mashine, $mashineData);
  writeJson($index, $indexData);
  writeJson($delivery, $deliveryData);
  writeJson($galary, $galaryData);
  writeJson($contacts, $contactsData);
  writeJson($address, $addressData);
  writeJson($certificate, $certificateData);
  writeJson($popupEquipment, $popupEquipmentData);
  writeJson($cost, $costData);
  writeJson($popupBuy, $popupBuyData);
  writeJson($privacy, $privacyData);
  writeJson($user_agreement, $user_agreementData);
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