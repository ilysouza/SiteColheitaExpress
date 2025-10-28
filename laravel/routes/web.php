<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/login', function () {
    return view('loginpage');
});

Route::get('/cart', function () {
    return view('cart');
});

Route::get('/product-detail', function () {
    return view('product-detail');
});
