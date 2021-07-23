<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class AuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(Request $request)
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => ['required', 'email'],
            'password' => 'required',
        ];
    }

    /**
     * 
     * @return array
     */
    public function messages()
    {
        return [
            'email.required' => 'メールアドレスが未入力です。',
            'email.email' => 'メールアドレスを正しい形式で入力して下さい。',
            'password.required' => 'パスワードが未入力です。',
        ];
    }
}
