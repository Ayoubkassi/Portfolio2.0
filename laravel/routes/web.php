<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Http;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/redis', function (){
  //$client = new Predis\Client('tcp://127.0.0.1:6379?database=15');
  Redis::set('Sybil', 'Stallone');
$nom =  Redis::get('Sybil');
return ('Sybil '.$nom);
$response = Http::get('https://ayoubkassi.cf');
//return $response->object();

});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
