<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\AuthRequest;

class LoginController extends Controller
{
    public function login(AuthRequest $request)
    {
        $credentials = [
            'email' => $request->get('email'),
            'password' => $request->get('password'),
        ];

        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'ログインに成功しました。'], 200);
        }

        throw ValidationException::withMessages([
            'email' => 'ログインに失敗しました。'],
        );
    }

    public function logout()
    {
        Auth::logout();
        
        return response()->json(['message' => 'ログアウトしました。'], 200);
    }
}
