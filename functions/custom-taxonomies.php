<?php
// ADD CUSTOM TAXONOMY IF NEEDED

function custom_taxonomy_type()
{
    $labels = [
        "name"              => _x("Career Category", "taxonomy general name"),
        "singular_name"     => _x("Career Category", "taxonomy singular name"),
        "search_items"      => __("Search Career Categories"),
        "all_items"         => __("All Career Categories"),
        "parent_item"       => __("Parent Career Category"),
        "parent_item_colon" => __("Parent Career Category:"),
        "edit_item"         => __("Edit Career Category"),
        "update_item"       => __("Update Career Category"),
        "add_new_item"      => __("Add New Career Category"),
        "new_item_name"     => __("New Career Category"),
        "menu_name"         => __("Career Category"),
    ];

    $args = [
        "hierarchical"      => true,
        "labels"            => $labels,
        "show_ui"           => true,
        "show_admin_column" => true,
        "query_var"         => true,
        "rewrite"           => ["slug" => "career_category"],
    ];

    register_taxonomy("career_category", ["career"], $args);
}
add_action("init", "custom_taxonomy_type", 0);
