<?php
function custom_post_type_services()
{
    $labels = [
        "name"               => _x("Services", "services"),
        "singular_name"      => _x("Services", "services"),
        "add_new"            => _x("Add New", "Service"),
        "add_new_item"       => __("Add New Service"),
        "edit_item"          => __("Edit Service"),
        "new_item"           => __("New Service"),
        "all_items"          => __("All Services"),
        "view_item"          => __("View Service"),
        "search_items"       => __("Search Services"),
        "not_found"          => __("No Services found"),
        "not_found_in_trash" => __("No Services found in the Trash"),
        "parent_item_colon"  => "",
        "menu_name"          => "Services"
    ];

    $args = [
        "labels"        => $labels,
        "description"   => "Holds our Services and Event specific data",
        "public"        => true,
        "menu_position" => 5,
        "supports"      => ["title", "editor", "thumbnail", "post-formats", "custom-fields"],


        "has_archive"   => false,
    ];
    register_post_type("service", $args);
    $labels = [
        "name"               => _x("Careers", "services"),
        "singular_name"      => _x("Careers", "services"),
        "add_new"            => _x("Add New", "Career"),
        "add_new_item"       => __("Add New Career"),
        "edit_item"          => __("Edit Career"),
        "new_item"           => __("New Career"),
        "all_items"          => __("All Careers"),
        "view_item"          => __("View Career"),
        "search_items"       => __("Search Careers"),
        "not_found"          => __("No Careers found"),
        "not_found_in_trash" => __("No Careers found in the Trash"),
        "parent_item_colon"  => "",
        "menu_name"          => "Careers"
    ];

    $args = [
        "labels"        => $labels,
        "description"   => "Holds our Careers and Event specific data",
        "public"        => true,
        "menu_position" => 5,
        "supports"      => ["title", "editor", "thumbnail", "post-formats", "custom-fields"],


        "has_archive"   => false,
    ];
    register_post_type("career", $args);
}
add_action("init", "custom_post_type_services");
