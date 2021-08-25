<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'API\RegisterController@register');
Route::post('login', 'API\RegisterController@login');
Route::get('test',function(){
    return 'Hello World';
});
// Route::middleware('auth:api')->group( function (){
//     Route::resource('rooms', 'API\RoomController');
//     Route::post('join-room','API\RoomController@joinRoom');
//     Route::get('user-in-room','API\RoomController@userInRoom');
//     Route::get('leave-room','API\RoomController@leaveRoom');
//
//     //for spotify login
//
//     Route::get('get-auth-url','API\SpotifyController@getAuth');
// });
