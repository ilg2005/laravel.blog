<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function create() {
        return view('user.create');
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        Auth::login($user);
        return redirect()->home()->with('success', 'Регистрация пройдена!');
    }

    public function loginForm() {
        return view('user.login');
    }

    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

       if (Auth::attempt([
           'email' => $request->email,
           'password' => $request->password
       ])) {
            session()->flash('success', 'Пользователь успешно авторизован!');
            if (Auth::user()->is_admin) {
                return redirect()->route('admin.index');
            }

           return redirect()->home();
       }
       return redirect()->back()->with('error', 'Неправильный логин или пароль');
    }

    public function logout() {
        Auth::logout();
        return redirect()->route('login.form');
    }
}
