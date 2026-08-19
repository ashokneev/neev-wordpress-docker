<?php

function neev_theme_setup() {
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'neev_theme_setup');

function neev_theme_enqueue_scripts() {
    $theme_uri = get_template_directory_uri();

    wp_enqueue_style(
        'neev-react-style',
        $theme_uri . '/dist/assets/main.css',
        array(),
        null
    );

    wp_enqueue_script(
        'neev-react-app',
        $theme_uri . '/dist/assets/app.js',
        array(),
        null,
        true
    );
}

add_action('wp_enqueue_scripts', 'neev_theme_enqueue_scripts');

function neev_theme_module_script($tag, $handle, $src) {
    if ($handle === 'neev-react-app') {
        return '<script type="module" src="' . esc_url($src) . '"></script>';
    }

    return $tag;
}

add_filter('script_loader_tag', 'neev_theme_module_script', 10, 3);