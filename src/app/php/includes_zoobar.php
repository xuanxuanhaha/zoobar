<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');


function from_mail() {
    return 'enquiries@zoobarandgrill.com.au';
}

function from_pass() {
    return 'ZoobarandGrill@123';
}

function to_address() {
    return 'savy.1712@gmail.com';
}

function to_address_name() {
    return 'Sarveshwaran Rajarajan';
}

function get_path() {
    $id = 1;
    if ($id == 0) {
        return '/home/sarveshwaran/ancc/ancc_individual/ancc/functional_flyer.pdf';
    } else if ($id == 1) {
        return '/home/zoobarandgrill/public_html/assets/functional_flyer.pdf';
    }
}

?>