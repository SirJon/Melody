<?php
  if ( ! defined( 'ABSPATH' ) ) {
      exit;
  };
  
  use Carbon_Fields\Container;
  use Carbon_Fields\Field;

  function cake_header_template() {
    ob_start();
    ?>

    <%- title_name %>

    <?php
    return ob_get_clean();
}

  Container::make( 'theme_options', 'Управление контентом' )
  ->add_tab( 'Чизкейки',
      [
        Field::make( 'complex', 'cheesecakes', 'Чизкейки' )
          ->add_fields( 'cheesecakes', array(
              Field::make( 'text', 'title_name', 'Название' )
                ->set_help_text( '<b>Название должно быть уникальным</b>' )
                ->set_required( true ),
              Field::make( 'textarea', 'description', 'Описание' ),
              Field::make( 'image', 'image_main', 'Титульная фотография' )
                ->set_width(20),
                Field::make( 'image', 'image_hover', 'Фото при наведении' )
                  ->set_width(20),
              Field::make( 'image', 'image_big', 'Фото товара в коробке 1,5кг' )
                ->set_width(20),
              Field::make( 'image', 'image_mid', 'Фото товара в коробке 1кг' )
                ->set_width(20),
              Field::make( 'image', 'image_min', 'Фото товара в коробке 0,84г' )
                ->set_width(20),
              Field::make( 'media_gallery', 'slider', 'Остальные фотографии товара' )
              ->set_type( array( 'image') ),
          ) )
            ->set_header_template('cake_header_template')
            -> set_layout( 'tabbed-vertical' )
      ]
  )
  ->add_tab( 'Торты',
      [
        Field::make( 'complex', 'cakes', 'Торты' )
          ->add_fields( 'cakes', array(
              Field::make( 'text', 'title_name', 'Название' )
                ->set_help_text( '<b>Название должно быть уникальным</b>' )
                ->set_required( true ),
              Field::make( 'textarea', 'description', 'Описание' ),
              Field::make( 'image', 'image_main', 'Титульная фотография' )
                ->set_width(20),
              Field::make( 'image', 'image_hover', 'Фото при наведении' )
                ->set_width(20),
              Field::make( 'image', 'image_big', 'Фото товара в коробке 1,5кг' )
                ->set_width(20),
              Field::make( 'image', 'image_mid', 'Фото товара в коробке 1кг' )
                ->set_width(20),
              Field::make( 'image', 'image_min', 'Фото товара в коробке 0,84г' )
                ->set_width(20),
              Field::make( 'media_gallery', 'slider', 'Остальные фотографии товара' )
                ->set_type( array( 'image') ),
          ) )
            ->set_header_template('cake_header_template')
            -> set_layout( 'tabbed-vertical' )
      ]
  )
  ->add_tab( 'Контактная информация', 
    [
      Field::make( 'text', 'tell', 'Городской номер' ),
      Field::make( 'text', 'cell', 'Мобильный номер' ),
      Field::make( 'text', 'address-start', 'Дом, улица, город' ),
      Field::make( 'text', 'address-end', 'Регион, страна, индекс' ),
      Field::make( 'text', 'address-link', 'Ссылка адреса на карте' ),
      Field::make( 'text', 'coordinates', 'Координаты вида(11.212121, 11.212121)' )
        ->set_help_text( '<a href="https://softandroid.net/2021/09/27/%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D1%8B-%D0%B2-%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%BA%D0%B0%D1%80%D1%82/">Как определить координаты точки на карте?</a>' ),
      Field::make( 'text', 'tin', 'ИНН/КПП' ),
      Field::make( 'text', 'psrn', 'ОГРН' ),
      Field::make( 'text', 'address-register', 'Юридический адрес' ),
    ]
  )
  ->add_tab( 'Главная страница', 
    [
      Field::make( 'image', 'index_poster_video_catalog', 'Обложка для видео' )
        ->set_width(20)
        ->set_required( true )
        ,
      Field::make( 'text', 'index_link_video_catalog', 'id видео из YouTube' )
        ->set_help_text( '
        <h2>Как получить id:</h2>
        <ol>
          <li>Перейдите на сайт youtube.com на компьютере и <b>откройте ролик</b>, который вы хотите встроить.</li>
          <li>Нажмите <b>Поделиться</b>.</li>
          <li><b>Скопируйте id</b> из ссылки, он идёт после https://youtu.be/ (Например ваша ссылка - https://youtu.be/<b>9akOCrgaMTM</b>, где <b>9akOCrgaMTM</b> - это id).</li>
          <li><b>Вставьте id</b> в админ-панели.</li>
        </ol>
        ' )
        ->set_required( true )
        ->set_width(80),
      Field::make( 'image', 'index_poster_video_cheesecakes', 'Обложка для видео' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_link_video_cheesecakes', 'id видео из YouTube' )
        ->set_help_text( '
        <h2>Как получить id:</h2>
        <ol>
          <li>Перейдите на сайт youtube.com на компьютере и <b>откройте ролик</b>, который вы хотите встроить.</li>
          <li>Нажмите <b>Поделиться</b>.</li>
          <li><b>Скопируйте id</b> из ссылки, он идёт после https://youtu.be/ (Например ваша ссылка - https://youtu.be/<b>9akOCrgaMTM</b>, где <b>9akOCrgaMTM</b> - это id).</li>
          <li><b>Вставьте id</b> в админ-панели.</li>
        </ol>
        ' )
        ->set_required( true )
        ->set_width(80),
        
        Field::make( 'complex', 'index_gallery', 'Слайды галереи' )
          ->add_fields( 'index_gallery', array(
              Field::make( 'image', 'image_first', 'Первая фотография' )
                ->set_width(20),
              Field::make( 'image', 'image_second', 'Вторая фотография' )
                ->set_width(20),
              Field::make( 'image', 'image_third', 'Третья фотография' )
                ->set_width(20),
              Field::make( 'image', 'image_fourth', 'Четвертая фотография' )
                ->set_width(20),
              Field::make( 'image', 'image_fifth', 'Пятая фотография' )
                ->set_width(20),
          ) )
            ->set_header_template('Слайд №<%- $_index + 1 %>')
            -> set_layout( 'tabbed-horizontal' )
    ]
  )
  ->add_tab( 'Страница сертификата', 
    [
      Field::make( 'image', 'quality_poster_video_catalog', 'Обложка для видео' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'quality_link_video_catalog', 'id видео из YouTube' )
        ->set_help_text( '
        <h2>Как получить id:</h2>
        <ol>
          <li>Перейдите на сайт youtube.com на компьютере и <b>откройте ролик</b>, который вы хотите встроить.</li>
          <li>Нажмите <b>Поделиться</b>.</li>
          <li><b>Скопируйте id</b> из ссылки, он идёт после https://youtu.be/ (Например ваша ссылка - https://youtu.be/<b>9akOCrgaMTM</b>, где <b>9akOCrgaMTM</b> - это id).</li>
          <li><b>Вставьте id</b> в админ-панели.</li>
        </ol>
        ' )
        ->set_required( true )
        ->set_width(80),
      Field::make( 'media_gallery', 'quality_statement', 'Декларация о соответствии' )
        ->set_help_text( 'Загрузите фотографии' )
        ->set_type( array( 'image' ) ),
      Field::make( 'media_gallery', 'product_certification', 'Сертификат продукта' )
        ->set_help_text( 'Загрузите фотографии' )
        ->set_type( array( 'image' ) ),
    ]
  );