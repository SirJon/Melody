<?php
  if ( ! defined( 'ABSPATH' ) ) {
      exit;
  };
  
  use Carbon_Fields\Container;
  use Carbon_Fields\Field;

  Container::make( 'theme_options', 'Управление контентом' )
  ->add_tab( 'R1300', 
    [
      Field::make( 'image', 'index_r1300_radio', 'Обложка R1300 при выборе установки' )
        ->set_width(100)
        ->set_required( true ),
      Field::make( 'media_gallery', 'index_r1300_swiper', 'Фотографии слайдера R1300' )
        ->set_help_text( 'Загрузите фотографии R1300' )
        ->set_width(100)
        ->set_required( true )
        ->set_type( array( 'image' ) ),
      Field::make( 'text', 'index_video_mashine_r1300', 'id видео из YouTube R1300 в блоке слайдера' )
        ->set_help_text( '
        <h2>Как получить id:</h2>
        <ol>
          <li>Перейдите на сайт youtube.com на компьютере и <b>откройте ролик</b>, который вы хотите встроить.</li>
          <li>Нажмите <b>Поделиться</b>.</li>
          <li><b>Скопируйте id</b> из ссылки, он идёт после https://youtu.be/ (Например ваша ссылка - https://youtu.be/<b>FjOmp2_9dfU</b>, где <b>FjOmp2_9dfU</b> - это id).</li>
          <li><b>Вставьте id</b> в админ-панели.</li>
        </ol>
        ' )
        ->set_required( true )
        ->set_width(60),
      Field::make( 'text', 'index_video_mashine_r1300_time_start', 'Время(в секундах) с какого момента начнётся видео' )
        ->set_width(20)
        ->set_help_text( 'Опционально' ),
      Field::make( 'text', 'index_video_mashine_r1300_time_end', 'Время(в секундах) с какого момента закончится видео' )
        ->set_width(20)
        ->set_help_text( 'Опционально' ),
      //Цена
      Field::make( 'text', 'index_r1300_cost', 'Цена (₽)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_performance', 'Производительность (кг/ч)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_power', 'Мощность (кВт)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_voltage', 'Напряжение питания (В)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_frequency', 'Частота питающей сети (Гц)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_turbine', 'Турбина Ametek Lamb (кВт)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_dimensions_length', 'Длинна (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_dimensions_width', 'Ширина (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_dimensions_height', 'Высота (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_mass', 'Масса (кг)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_diameter', 'Диаметр шланга (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_length', 'Длина шланга (м)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_height', 'Высота подъема (м)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_range', 'Дальность подачи (м)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_control', 'Дистаниця работы радиопульта (м)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r1300_guarantee', 'Гарантия (месяцев)' )
        ->set_width(20)
        ->set_required( true ),
      
        
      //Галерея
      Field::make( 'separator', 'galary_separator_r1300','Галерея' ),
      Field::make( 'media_gallery', 'galary_r1300_img', 'Фотографии слайдера галереи R1300' )
        ->set_help_text( 'Загрузите фотографии R1300' )
        ->set_required( true )
        ->set_type( ['image'] ),
      Field::make( 'complex', 'galary_r1300', 'Видео слайдера галереи R1300' )
        ->add_fields( 'galary_r1300', [
          Field::make( 'text', 'id', 'id видео из YouTube' )
            ->set_help_text( '
            <h2>Как получить id:</h2>
            <ol>
              <li>Перейдите на сайт youtube.com на компьютере и <b>откройте ролик</b>, который вы хотите встроить.</li>
              <li>Нажмите <b>Поделиться</b>.</li>
              <li><b>Скопируйте id</b> из ссылки, он идёт после https://youtu.be/ (Например ваша ссылка - https://youtu.be/<b>FjOmp2_9dfU</b>, где <b>FjOmp2_9dfU</b> - это id).</li>
              <li><b>Вставьте id</b> в админ-панели.</li>
            </ol>
            ' )
            ->set_required( true )
            ->set_width(60),
            Field::make( 'text', 'start', 'Время(в секундах) с какого момента начнётся видео' )
              ->set_width(20)
              ->set_help_text( 'Опционально' ),
            Field::make( 'text', 'end', 'Время(в секундах) с какого момента закончится видео' )
              ->set_width(20)
              ->set_help_text( 'Опционально' ),
        ] )
          ->set_layout( 'tabbed-horizontal' )
          ->set_header_template('Слайд №<%- $_index + 1 %>'),
    ]
  )

  ->add_tab( 'R800', 
    [
      Field::make( 'image', 'index_r800_radio', 'Обложка R800 при выборе установки' )
        ->set_width(100)
        ->set_required( true ),
      Field::make( 'media_gallery', 'index_r800_swiper', 'Фотографии слайдера R800' )
        ->set_help_text( 'Загрузите фотографии R800' )
        ->set_width(100)
        ->set_required( true )
        ->set_type( array( 'image' ) ),
      Field::make( 'text', 'index_video_mashine_r800', 'id видео из YouTube R800 в блоке слайдера' )
        ->set_help_text( '
        <h2>Как получить id:</h2>
        <ol>
          <li>Перейдите на сайт youtube.com на компьютере и <b>откройте ролик</b>, который вы хотите встроить.</li>
          <li>Нажмите <b>Поделиться</b>.</li>
          <li><b>Скопируйте id</b> из ссылки, он идёт после https://youtu.be/ (Например ваша ссылка - https://youtu.be/<b>FjOmp2_9dfU</b>, где <b>FjOmp2_9dfU</b> - это id).</li>
          <li><b>Вставьте id</b> в админ-панели.</li>
        </ol>
        ' )
        ->set_required( true )
        ->set_width(60),
      Field::make( 'text', 'index_video_mashine_r800_time_start', 'Время(в секундах) с какого момента начнётся видео' )
        ->set_width(20)
        ->set_help_text( 'Опционально' ),
      Field::make( 'text', 'index_video_mashine_r800_time_end', 'Время(в секундах) с какого момента закончится видео' )
        ->set_width(20)
        ->set_help_text( 'Опционально' ),
      //Цена
      Field::make( 'text', 'index_r800_cost', 'Цена (₽)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_performance', 'Производительность (кг/ч)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_power', 'Мощность (кВт)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_voltage', 'Напряжение питания (В)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_frequency', 'Частота питающей сети (Гц)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_turbine', 'Турбина Ametek Lamb (кВт)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_dimensions_length', 'Длинна (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_dimensions_width', 'Ширина (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_dimensions_height', 'Высота (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_mass', 'Масса (кг)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_diameter', 'Диаметр шланга (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_length', 'Длина шланга (м)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_height', 'Высота подъема (м)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_range', 'Дальность подачи (м)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_control', 'Дистаниця работы радиопульта (м)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'index_r800_guarantee', 'Гарантия (месяцев)' )
        ->set_width(20)
        ->set_required( true ),
      
        
      //Галерея
      Field::make( 'separator', 'galary_separator_r800','Галерея' ),
      Field::make( 'media_gallery', 'galary_r800_img', 'Фотографии слайдера галереи R800' )
        ->set_help_text( 'Загрузите фотографии R800' )
        ->set_required( true )
        ->set_type( ['image'] ),
      Field::make( 'complex', 'galary_r800', 'Видео слайдера галереи R800' )
        ->add_fields( 'galary_r800', [
          Field::make( 'text', 'id', 'id видео из YouTube' )
            ->set_help_text( '
            <h2>Как получить id:</h2>
            <ol>
              <li>Перейдите на сайт youtube.com на компьютере и <b>откройте ролик</b>, который вы хотите встроить.</li>
              <li>Нажмите <b>Поделиться</b>.</li>
              <li><b>Скопируйте id</b> из ссылки, он идёт после https://youtu.be/ (Например ваша ссылка - https://youtu.be/<b>FjOmp2_9dfU</b>, где <b>FjOmp2_9dfU</b> - это id).</li>
              <li><b>Вставьте id</b> в админ-панели.</li>
            </ol>
            ' )
            ->set_required( true )
            ->set_width(60),
            Field::make( 'text', 'start', 'Время(в секундах) с какого момента начнётся видео' )
              ->set_width(20)
              ->set_help_text( 'Опционально' ),
            Field::make( 'text', 'end', 'Время(в секундах) с какого момента закончится видео' )
              ->set_width(20)
              ->set_help_text( 'Опционально' ),
        ] )
          ->set_layout( 'tabbed-horizontal' )
          ->set_header_template('Слайд №<%- $_index + 1 %>'),
    ]
  )
  ->add_tab( 'Комплект влажного нанесения', 
    [
      Field::make( 'text', 'option_cost', 'Цена комплекта влажного нанесения (₽)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'option_length', 'Длинна (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'option_width', 'Ширина (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'option_height', 'Высота (мм)' )
        ->set_width(20)
        ->set_required( true ),
      Field::make( 'text', 'option_mass', 'Масса (кг)' )
        ->set_width(20)
        ->set_required( true ),
    ]
  )
  ->add_tab( 'Главная страница', 
      [
        
        Field::make( 'text', 'index_video_slider', 'id видео из YouTube для слайдера на главной странице' )
          ->set_help_text( '
          <h2>Как получить id:</h2>
          <ol>
            <li>Перейдите на сайт youtube.com на компьютере и <b>откройте ролик</b>, который вы хотите встроить.</li>
            <li>Нажмите <b>Поделиться</b>.</li>
            <li><b>Скопируйте id</b> из ссылки, он идёт после https://youtu.be/ (Например ваша ссылка - https://youtu.be/<b>FjOmp2_9dfU</b>, где <b>FjOmp2_9dfU</b> - это id).</li>
            <li><b>Вставьте id</b> в админ-панели.</li>
          </ol>
          ' )
          ->set_required( true )
          ->set_width(60),
        Field::make( 'text', 'index_video_slider_time_start', 'Время(в секундах) с какого момента начнётся видео' )
          ->set_width(20)
          ->set_help_text( 'Опционально' ),
        Field::make( 'text', 'index_video_slider_time_end', 'Время(в секундах) с какого момента закончится видео' )
          ->set_width(20)
          ->set_help_text( 'Опционально' ),
        Field::make( 'complex', 'index_swiper', 'Слайдер процесса производства' )
          ->add_fields( 'index_swiper', [
            Field::make( 'image', 'index_swiper_img', 'Фото слайда' )
            ->set_width(100)
            ->set_required( true ),
          Field::make( 'textarea', 'index_swiper_title_ru', 'Заголовок на русском' )
            ->set_rows( 2 )
            ->set_width(50)
            ->set_required( true ),
          Field::make( 'textarea', 'index_swiper_title_en', 'Заголовок на английском' )
            ->set_rows( 2 )
            ->set_width(50)
            ->set_required( true ),
          Field::make( 'textarea', 'index_swiper_description_ru', 'Описание на русском' )
            ->set_width(50)
            ->set_required( true ),
          Field::make( 'textarea', 'index_swiper_description_en', 'Описание на английском' )
            ->set_width(50)
            ->set_required( true ),
          ] )
            ->set_layout( 'tabbed-horizontal' )
            ->set_header_template('Слайд №<%- $_index + 1 %>'),
          Field::make( 'image', 'index_certificate', 'Фото сертификата' )
            ->set_width(100)
            ->set_required( true ),
          Field::make( 'separator', 'index_equipment','Popup комплектаций' ),
          Field::make( 'image', 'index_equipment_installation_r1300', 'Фото R1300' )
            ->set_width(25)
            ->set_required( true ),
          Field::make( 'image', 'index_equipment_installation_r800', 'Фото R800' )
            ->set_width(25)
            ->set_required( true ),
          Field::make( 'image', 'index_equipment_control', 'Радиопульт' )
            ->set_width(25)
            ->set_required( true ),
          Field::make( 'image', 'index_equipment_hose', 'Выдувной шланг' )
          ->set_width(25)
          ->set_required( true ),
          Field::make( 'image', 'index_equipment_pump', 'Насос для подачи жидкости' )
            ->set_width(25)
            ->set_required( true ),
          Field::make( 'image', 'index_equipment_nozzle', 'Сопло с форсунками' )
          ->set_width(25)
          ->set_required( true ),
          Field::make( 'image', 'index_equipment_scraper', 'Скребок' )
            ->set_width(25)
            ->set_required( true ),
          Field::make( 'separator', 'popup_buy', 'Popup "Заказать"' ),
          Field::make( 'image', 'popup_buy_r1300_base', 'R1300 базовая комплектация' )
            ->set_width(20)
            ->set_required( true ),
          Field::make( 'image', 'popup_buy_r1300_full', 'R1300 + комплект влажного нанесения' )
            ->set_width(20)
            ->set_required( true ),
          Field::make( 'image', 'popup_buy_option', 'Комплект влажного нанесения' )
            ->set_width(20)
            ->set_required( true ),
          Field::make( 'image', 'popup_buy_r800_base', 'R800 базовая комплектация' )
            ->set_width(20)
            ->set_required( true ),
          Field::make( 'image', 'popup_buy_r800_full', 'R800 + комплект влажного нанесения' )
            ->set_width(20)
            ->set_required( true ),
      ]
  )
  ->add_tab( 'Контактная информация', 
    [
      Field::make( 'text', 'tell', 'Мобильный номер' ),
      Field::make( 'text', 'email', 'Электронная почта' ),
      Field::make( 'text', 'address_ru', 'Адрес на русском (город, улица, № дома)' )
        ->set_width(50),
      Field::make( 'text', 'address_en', 'Адрес на английском (house number, street, city)' )
        ->set_width(50),
      Field::make( 'text', 'address_link', 'Ссылка адреса на карте' ),
      Field::make( 'text', 'coordinates', 'Координаты вида(11.212121, 11.212121)' )
        ->set_help_text( '<a href="https://softandroid.net/2021/09/27/%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D1%8B-%D0%B2-%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%BA%D0%B0%D1%80%D1%82/">Как определить координаты точки на карте?</a>' ),
    ]
  )
  
  ->add_tab( 'Политика конфиденциальности', 
    [
      Field::make( 'rich_text', 'privacy_policy_ru', 'Политика конфиденциальности русская версия'  ),
      Field::make( 'rich_text', 'privacy_policy_en', 'Политика конфиденциальности аглийская версия'  ),
    ]
  )
  
  ->add_tab( 'Пользовательское соглашение', 
    [
      Field::make( 'rich_text', 'user_agreement_ru', 'Пользовательское соглашение русская версия'  ),
      Field::make( 'rich_text', 'user_agreement_en', 'Пользовательское соглашение аглийская версия'  ),
    ]
  )
  ;